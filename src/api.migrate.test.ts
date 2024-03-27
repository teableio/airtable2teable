import { ApiMigrate } from './api.migrate';

describe('api migrate', () => {
  test('create table meta by api migrate', async () => {
    const apiMigrate = new ApiMigrate({
      from: {
        airtableToken: process.env.AIRTABLE_TOKEN as string,
        baseId: process.env.AIRTABLE_BASE_ID as string,
      },
      to: {
        teableToken: process.env.TEABLE_TOKEN as string,
        spaceId: process.env.TEABLE_SPACE_ID as string,
      },
    });
    await apiMigrate.execute();
  }, 600000);

  /**
   * A--------------------+   B--------------------+   A---------+
   * |                    |   |                    |   |         |
   * | rollup ---> link --|---|->rollup ---> link--|---|-> name  |
   * |____________________|   |____________________|   |_________|
   */
  test('airtable lookup move sequence', async () => {
    const tables = [
      {
        id: 'tbllVK9ySXlJ9EHTA',
        name: 'A',
        primaryFieldId: 'fldVSdGvRU7XlBlfx',
        fields: [
          {
            type: 'singleLineText',
            id: 'fldVSdGvRU7XlBlfx',
            name: 'Name',
          },
          {
            type: 'multipleRecordLinks',
            options: {
              linkedTableId: 'tblfD8fxzc8vDj93a',
              isReversed: false,
              prefersSingleRecordLink: true,
              inverseLinkFieldId: 'fldfGhJEU7iKQKSgy',
            },
            id: 'fld01hcgETNEnFgW7',
            name: 'B',
          },
          {
            type: 'multipleLookupValues',
            options: {
              isValid: true,
              recordLinkFieldId: 'fld01hcgETNEnFgW7',
              fieldIdInLinkedTable: 'fldDGid7EmwWujPOX',
              result: {
                type: 'singleLineText',
              },
            },
            id: 'fldRXolN04Sv9WD0S',
            name: 'Name (from A)',
          },
        ],
      },
      {
        id: 'tblfD8fxzc8vDj93a',
        name: 'B',
        primaryFieldId: 'fldB0I0JzCmclfoXl',
        fields: [
          {
            type: 'multipleRecordLinks',
            options: {
              linkedTableId: 'tbllVK9ySXlJ9EHTA',
              isReversed: false,
              prefersSingleRecordLink: false,
              inverseLinkFieldId: 'fld01hcgETNEnFgW7',
            },
            id: 'fldfGhJEU7iKQKSgy',
            name: 'A',
          },
          {
            type: 'multipleLookupValues',
            options: {
              isValid: true,
              recordLinkFieldId: 'fldfGhJEU7iKQKSgy',
              fieldIdInLinkedTable: 'fldVSdGvRU7XlBlfx',
              result: {
                type: 'singleLineText',
              },
            },
            id: 'fldDGid7EmwWujPOX',
            name: 'Name (from A)',
          },
        ],
      },
    ];
    const fieldIds = new Set<string>();
    const fieldId2Field = {};
    for (const table of tables) {
      for (const field of table.fields) {
        fieldId2Field[field.id] = field;
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        if (field.type === 'multipleLookupValues' && field.options.isValid) {
          fieldIds.add(field.id);
        }
      }
    }
    const rollupSequence = [];
    const recursion = (fieldId) => {
      const field = fieldId2Field[fieldId];
      const lookupedField = fieldId2Field[field.options.fieldIdInLinkedTable];
      if (lookupedField.type === 'multipleLookupValues') {
        recursion(lookupedField.id);
      }
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      rollupSequence.push(fieldId);
      fieldIds.delete(fieldId);
    };
    while (fieldIds.size > 0) {
      const fieldId = [...fieldIds][0];
      recursion(fieldId);
    }
    expect(rollupSequence).toEqual(['fldDGid7EmwWujPOX', 'fldRXolN04Sv9WD0S']);
  }, 600000);
});

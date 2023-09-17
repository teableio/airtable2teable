import { getAirtableField } from '../src/models';
import { AirtableField, IAirtableTableModel } from '../src/types';

describe('Airtable field models', () => {
  test('json to airtable field models', () => {
    const tableSchema = {
      id: 'tbl36FJqIsPMibnWw',
      name: 'Field',
      primaryFieldId: 'fldTvjB3QrHDJ1Hcl',
      fields: [
        {
          type: 'singleLineText',
          id: 'fldTvjB3QrHDJ1Hcl',
          name: 'Single line text',
        },
        {
          type: 'multilineText',
          id: 'fldT8CoXaCL7vw89z',
          name: 'Long text',
        },
        {
          type: 'richText',
          id: 'fld9qnBBXYUfDq3N0',
          name: 'Rich Text',
        },
        {
          type: 'multipleAttachments',
          options: {
            isReversed: false,
          },
          id: 'fldKELnlKr5IQkJSJ',
          name: 'Attachment',
        },
        {
          type: 'checkbox',
          options: {
            icon: 'check',
            color: 'greenBright',
          },
          id: 'fldSQ3svnvfBCGzdM',
          name: 'Checkbox',
        },
        {
          type: 'multipleSelects',
          options: {
            choices: [
              {
                id: 'selj22maiftciAbby',
                name: 'A',
                color: 'cyanLight2',
              },
              {
                id: 'selAcRzAAbleBYnhy',
                name: 'B',
                color: 'greenLight2',
              },
              {
                id: 'selktOXSGRJABha7m',
                name: 'C',
                color: 'orangeLight2',
              },
            ],
          },
          id: 'fldw7Uk7d47vIbF74',
          name: 'Multiple select',
        },
        {
          type: 'singleSelect',
          options: {
            choices: [
              {
                id: 'selftVRUh0kKZMTFv',
                name: '1',
                color: 'redLight2',
              },
              {
                id: 'selqMaF5GsHVHAMyE',
                name: '2',
                color: 'yellowLight2',
              },
              {
                id: 'selXpfpsKdRW6GeZY',
                name: '3',
                color: 'greenLight2',
              },
            ],
          },
          id: 'fldUIN8uARE1dvV6Y',
          name: 'Single select',
        },
        {
          type: 'singleCollaborator',
          id: 'fldPL2dN6Uqif20Mq',
          name: 'Collaborator',
        },
        {
          type: 'multipleCollaborators',
          id: 'fldjRn5ADvQx712mm',
          name: 'Collaborators',
        },
        {
          type: 'date',
          options: {
            dateFormat: {
              name: 'local',
              format: 'l',
            },
          },
          id: 'fldHqzb4t7vKBu4z8',
          name: 'Date',
        },
        {
          type: 'dateTime',
          options: {
            dateFormat: {
              name: 'local',
              format: 'l',
            },
            timeFormat: {
              name: '12hour',
              format: 'h:mma',
            },
            timeZone: 'client',
          },
          id: 'fld6bIT9TPrliKKo6',
          name: 'Date Time',
        },
        {
          type: 'phoneNumber',
          id: 'fldAe2behSuvz0Vh1',
          name: 'Phone',
        },
        {
          type: 'email',
          id: 'fldLSjGVfuIVGBKQJ',
          name: 'Email',
        },
        {
          type: 'url',
          id: 'fldE9jx4d3URyTJnV',
          name: 'URL',
        },
        {
          type: 'number',
          options: {
            precision: 1,
          },
          id: 'fld4xUQPCCsJZGiP0',
          name: 'Number',
        },
        {
          type: 'currency',
          options: {
            precision: 2,
            symbol: '$',
          },
          id: 'fldHgDwTM2tslp7Wi',
          name: 'Currency',
        },
        {
          type: 'percent',
          options: {
            precision: 0,
          },
          id: 'fldUNIbPg7gRoRzw4',
          name: 'Percent',
        },
        {
          type: 'duration',
          options: {
            durationFormat: 'h:mm',
          },
          id: 'fldwrdIft6N8QZMlC',
          name: 'Duration',
        },
        {
          type: 'rating',
          options: {
            icon: 'star',
            max: 5,
            color: 'yellowBright',
          },
          id: 'fldE5GZjp9usvsZu8',
          name: 'Rating',
        },
        {
          type: 'formula',
          options: {
            isValid: true,
            formula: '{fldE9jx4d3URyTJnV}',
            referencedFieldIds: ['fldE9jx4d3URyTJnV'],
            result: {
              type: 'singleLineText',
            },
          },
          id: 'fld7OKjia6oBx021k',
          name: 'Formula',
        },
        {
          type: 'createdTime',
          options: {
            result: {
              type: 'dateTime',
              options: {
                dateFormat: {
                  name: 'local',
                  format: 'l',
                },
                timeFormat: {
                  name: '12hour',
                  format: 'h:mma',
                },
                timeZone: 'client',
              },
            },
          },
          id: 'fldYr9jsCxXASChqL',
          name: 'Created',
        },
        {
          type: 'lastModifiedTime',
          options: {
            isValid: true,
            referencedFieldIds: [],
            result: {
              type: 'dateTime',
              options: {
                dateFormat: {
                  name: 'local',
                  format: 'l',
                },
                timeFormat: {
                  name: '12hour',
                  format: 'h:mma',
                },
                timeZone: 'client',
              },
            },
          },
          id: 'fldVkSvZ8pUPMbyHj',
          name: 'Last Modified',
        },
        {
          type: 'lastModifiedBy',
          id: 'fldmSnxzFGMFRk5Lw',
          name: 'Last Modified By',
        },
        {
          type: 'createdBy',
          id: 'fldENu1Gxx3kUY8eE',
          name: 'Created By',
        },
        {
          type: 'autoNumber',
          id: 'flduEMkSRBLAFFU72',
          name: 'Autonumber',
        },
        {
          type: 'barcode',
          id: 'flduWLgVft7P5lTlv',
          name: 'Barcode',
        },
        {
          type: 'button',
          id: 'fldu3Rsst2ElmRBYJ',
          name: 'Button',
        },
      ],
      views: [
        {
          id: 'viwTKUgfjSQojkTIE',
          name: 'Grid view',
          type: 'grid',
        },
      ],
    } as IAirtableTableModel;
    const modelMap: Record<string, AirtableField> = {};
    for (const field of tableSchema.fields) {
      const model = getAirtableField(field);
      modelMap[model.id] = model;
    }
  });

  test('link field', () => {
    const tableSchema = {
      id: 'tblYxloeT1kLlLsMp',
      name: 'Link',
      primaryFieldId: 'fldo0MJ3AQg8FSIS2',
      fields: [
        {
          type: 'singleLineText',
          id: 'fldo0MJ3AQg8FSIS2',
          name: 'Title',
        },
        {
          type: 'multipleRecordLinks',
          options: {
            linkedTableId: 'tbl36FJqIsPMibnWw',
            isReversed: false,
            prefersSingleRecordLink: false,
            inverseLinkFieldId: 'fld85E9Qf2LEHbt2i',
          },
          id: 'fldducD15VGPB8dfn',
          name: 'Links',
        },
        {
          type: 'multipleLookupValues',
          options: {
            isValid: true,
            recordLinkFieldId: 'fldducD15VGPB8dfn',
            fieldIdInLinkedTable: 'fldTvjB3QrHDJ1Hcl',
            result: {
              type: 'singleLineText',
            },
          },
          id: 'fldWmRoLRTrUQtrlA',
          name: 'Lookups',
        },
        {
          type: 'rollup',
          options: {
            isValid: true,
            recordLinkFieldId: 'fldducD15VGPB8dfn',
            fieldIdInLinkedTable: 'fld4xUQPCCsJZGiP0',
            referencedFieldIds: [],
            result: {
              type: 'number',
              options: {
                precision: 1,
              },
            },
          },
          id: 'fldGTGJmSwjepFmif',
          name: 'Rollup',
        },
        {
          type: 'count',
          options: {
            isValid: true,
            recordLinkFieldId: 'fldducD15VGPB8dfn',
          },
          id: 'fldamELUXA1xub5WC',
          name: 'Status',
        },
        {
          type: 'multipleRecordLinks',
          options: {
            linkedTableId: 'tbl36FJqIsPMibnWw',
            isReversed: false,
            prefersSingleRecordLink: true,
            inverseLinkFieldId: 'fldbXlTo6YiXVsy69',
          },
          id: 'fldOisZuYXbJt8arU',
          name: 'Field',
        },
        {
          type: 'multipleLookupValues',
          options: {
            isValid: true,
            recordLinkFieldId: 'fldOisZuYXbJt8arU',
            fieldIdInLinkedTable: 'fldTvjB3QrHDJ1Hcl',
            result: {
              type: 'singleLineText',
            },
          },
          id: 'fldpWTXQlo18F1Zm3',
          name: 'Lookup',
        },
      ],
      views: [
        {
          id: 'viwNdXApnz9bmIAzA',
          name: 'Grid view',
          type: 'grid',
        },
      ],
    } as IAirtableTableModel;
    const modelMap: Record<string, AirtableField> = {};
    for (const field of tableSchema.fields) {
      const model = getAirtableField(field);
      modelMap[model.id] = model;
    }
  });
});

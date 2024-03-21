import { AirtableFieldTypeEnum } from 'types';

import { IAirtableFieldVo } from '../airtable-sdks';
import { AirtableAiTextField } from './airtable.ai.text.field';
import { AirtableAttachmentField } from './airtable.attachment.field';
import { AirtableAutoNumberField } from './airtable.auto.number.field';
import { AirtableBarcodeField } from './airtable.barcode.field';
import { AirtableButtonField } from './airtable.button.field';
import { AirtableCheckboxField } from './airtable.checkbox.field';
import { AirtableCollaboratorField } from './airtable.collaborator.field';
import { AirtableCountField } from './airtable.count.field';
import { AirtableCreatedByField } from './airtable.created.by.field';
import { AirtableCreatedTimeField } from './airtable.created.time.field';
import { AirtableCurrencyField } from './airtable.currency.field';
import { AirtableDateField } from './airtable.date.field';
import { AirtableDateTimeField } from './airtable.date.time.field';
import { AirtableDurationField } from './airtable.duration.field';
import { AirtableEmailField } from './airtable.email.field';
import { AirtableFieldVo } from './airtable.field.vo';
import { AirtableFormulaField } from './airtable.formula.field';
import { AirtableLastModifiedByField } from './airtable.last.modified.by.field';
import { AirtableLastModifiedTimeField } from './airtable.last.modified.time.field';
import { AirtableLinkField } from './airtable.link.field';
import { AirtableLongTextField } from './airtable.long.text.field';
import { AirtableLookupField } from './airtable.lookup.field';
import { AirtableMultipleCollaboratorsField } from './airtable.multiple.collaborators.field';
import { AirtableMultipleSelectsField } from './airtable.multiple.selects.field';
import { AirtableNumberField } from './airtable.number.field';
import { AirtablePercentField } from './airtable.percent.field';
import { AirtablePhoneField } from './airtable.phone.field';
import { AirtableRatingField } from './airtable.rating.field';
import { AirtableRichTextField } from './airtable.rich.text.field';
import { AirtableRollupField } from './airtable.rollup.field';
import { AirtableSingleLineTextField } from './airtable.single.line.text.field';
import { AirtableSingleSelectField } from './airtable.single.select.field';
import { AirtableSyncSourceField } from './airtable.sync.source.field';
import { AirtableUrlField } from './airtable.url.field';

export * from './airtable.ai.text.field';
export * from './airtable.attachment.field';
export * from './airtable.auto.number.field';
export * from './airtable.barcode.field';
export * from './airtable.button.field';
export * from './airtable.checkbox.field';
export * from './airtable.collaborator.field';
export * from './airtable.count.field';
export * from './airtable.created.by.field';
export * from './airtable.created.time.field';
export * from './airtable.currency.field';
export * from './airtable.date.field';
export * from './airtable.date.time.field';
export * from './airtable.duration.field';
export * from './airtable.email.field';
export * from './airtable.field.vo';
export * from './airtable.formula.field';
export * from './airtable.last.modified.by.field';
export * from './airtable.last.modified.time.field';
export * from './airtable.link.field';
export * from './airtable.long.text.field';
export * from './airtable.lookup.field';
export * from './airtable.multiple.collaborators.field';
export * from './airtable.multiple.selects.field';
export * from './airtable.number.field';
export * from './airtable.percent.field';
export * from './airtable.phone.field';
export * from './airtable.rating.field';
export * from './airtable.rich.text.field';
export * from './airtable.rollup.field';
export * from './airtable.single.line.text.field';
export * from './airtable.single.select.field';
export * from './airtable.sync.source.field';
export * from './airtable.url.field';
export * from './teable.checkbox.field';
export * from './teable.date.field';
export * from './teable.multiple.select.field';
export * from './teable.number.field';
export * from './teable.rating.field';
export * from './teable.single.line.text.field';

export const getAirtableField = (field: IAirtableFieldVo): AirtableFieldVo => {
  if (field?.type === AirtableFieldTypeEnum.AiText) {
    return new AirtableAiTextField();
  } else if (field?.type === AirtableFieldTypeEnum.MultipleAttachments) {
    return new AirtableAttachmentField();
  } else if (field?.type === AirtableFieldTypeEnum.AutoNumber) {
    return new AirtableAutoNumberField();
  } else if (field?.type === AirtableFieldTypeEnum.Barcode) {
    return new AirtableBarcodeField();
  } else if (field?.type === AirtableFieldTypeEnum.Button) {
    return new AirtableButtonField();
  } else if (field?.type === AirtableFieldTypeEnum.Checkbox) {
    return new AirtableCheckboxField();
  } else if (field?.type === AirtableFieldTypeEnum.SingleCollaborator) {
    return new AirtableCollaboratorField();
  } else if (field?.type === AirtableFieldTypeEnum.Count) {
    return new AirtableCountField();
  } else if (field?.type === AirtableFieldTypeEnum.CreatedBy) {
    return new AirtableCreatedByField();
  } else if (field?.type === AirtableFieldTypeEnum.CreatedTime) {
    return new AirtableCreatedTimeField();
  } else if (field?.type === AirtableFieldTypeEnum.Currency) {
    return new AirtableCurrencyField();
  } else if (field?.type === AirtableFieldTypeEnum.Date) {
    return new AirtableDateField();
  } else if (field?.type === AirtableFieldTypeEnum.DateTime) {
    return new AirtableDateTimeField();
  } else if (field?.type === AirtableFieldTypeEnum.Duration) {
    return new AirtableDurationField();
  } else if (field?.type === AirtableFieldTypeEnum.Email) {
    return new AirtableEmailField();
  } else if (field?.type === AirtableFieldTypeEnum.Formula) {
    return new AirtableFormulaField();
  } else if (field?.type === AirtableFieldTypeEnum.LastModifiedBy) {
    return new AirtableLastModifiedByField();
  } else if (field?.type === AirtableFieldTypeEnum.LastModifiedTime) {
    return new AirtableLastModifiedTimeField();
  } else if (field?.type === AirtableFieldTypeEnum.MultipleRecordLinks) {
    return new AirtableLinkField();
  } else if (field?.type === AirtableFieldTypeEnum.MultilineText) {
    return new AirtableLongTextField();
  } else if (field?.type === AirtableFieldTypeEnum.MultipleLookupValues) {
    return new AirtableLookupField();
  } else if (field?.type === AirtableFieldTypeEnum.MultipleCollaborators) {
    return new AirtableMultipleCollaboratorsField();
  } else if (field?.type === AirtableFieldTypeEnum.MultipleSelects) {
    return new AirtableMultipleSelectsField();
  } else if (field?.type === AirtableFieldTypeEnum.Number) {
    return new AirtableNumberField();
  } else if (field?.type === AirtableFieldTypeEnum.Percent) {
    return new AirtablePercentField();
  } else if (field?.type === AirtableFieldTypeEnum.PhoneNumber) {
    return new AirtablePhoneField();
  } else if (field?.type === AirtableFieldTypeEnum.Rating) {
    return new AirtableRatingField();
  } else if (field?.type === AirtableFieldTypeEnum.RichText) {
    return new AirtableRichTextField();
  } else if (field?.type === AirtableFieldTypeEnum.Rollup) {
    return new AirtableRollupField();
  } else if (field?.type === AirtableFieldTypeEnum.SingleLineText) {
    return new AirtableSingleLineTextField();
  } else if (field?.type === AirtableFieldTypeEnum.SingleSelect) {
    return new AirtableSingleSelectField();
  } else if (field?.type === AirtableFieldTypeEnum.ExternalSyncSource) {
    return new AirtableSyncSourceField();
  } else if (field?.type === AirtableFieldTypeEnum.Url) {
    return new AirtableUrlField();
  } else {
    throw new Error(`known type. ${field?.type}`);
  }
};

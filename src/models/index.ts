import { AirtableField, AirtableFieldTypeEnum, IAirtableField } from 'types';

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
export const getAirtableField = (option: IAirtableField): AirtableField => {
  if (option?.type === AirtableFieldTypeEnum.AiText) {
    return new AirtableAiTextField(option as any);
  } else if (option?.type === AirtableFieldTypeEnum.MultipleAttachments) {
    return new AirtableAttachmentField(option as any);
  } else if (option?.type === AirtableFieldTypeEnum.AutoNumber) {
    return new AirtableAutoNumberField(option as any);
  } else if (option?.type === AirtableFieldTypeEnum.Barcode) {
    return new AirtableBarcodeField(option as any);
  } else if (option?.type === AirtableFieldTypeEnum.Button) {
    return new AirtableButtonField(option as any);
  } else if (option?.type === AirtableFieldTypeEnum.Checkbox) {
    return new AirtableCheckboxField(option as any);
  } else if (option?.type === AirtableFieldTypeEnum.SingleCollaborator) {
    return new AirtableCollaboratorField(option as any);
  } else if (option?.type === AirtableFieldTypeEnum.Count) {
    return new AirtableCountField(option as any);
  } else if (option?.type === AirtableFieldTypeEnum.CreatedBy) {
    return new AirtableCreatedByField(option as any);
  } else if (option?.type === AirtableFieldTypeEnum.CreatedTime) {
    return new AirtableCreatedTimeField(option as any);
  } else if (option?.type === AirtableFieldTypeEnum.Currency) {
    return new AirtableCurrencyField(option as any);
  } else if (option?.type === AirtableFieldTypeEnum.Date) {
    return new AirtableDateField(option as any);
  } else if (option?.type === AirtableFieldTypeEnum.DateTime) {
    return new AirtableDateTimeField(option as any);
  } else if (option?.type === AirtableFieldTypeEnum.Duration) {
    return new AirtableDurationField(option as any);
  } else if (option?.type === AirtableFieldTypeEnum.Email) {
    return new AirtableEmailField(option as any);
  } else if (option?.type === AirtableFieldTypeEnum.Formula) {
    return new AirtableFormulaField(option as any);
  } else if (option?.type === AirtableFieldTypeEnum.LastModifiedBy) {
    return new AirtableLastModifiedByField(option as any);
  } else if (option?.type === AirtableFieldTypeEnum.LastModifiedTime) {
    return new AirtableLastModifiedTimeField(option as any);
  } else if (option?.type === AirtableFieldTypeEnum.MultipleRecordLinks) {
    return new AirtableLinkField(option as any);
  } else if (option?.type === AirtableFieldTypeEnum.MultilineText) {
    return new AirtableLongTextField(option as any);
  } else if (option?.type === AirtableFieldTypeEnum.Lookup) {
    return new AirtableLookupField(option as any);
  } else if (option?.type === AirtableFieldTypeEnum.MultipleCollaborators) {
    return new AirtableMultipleCollaboratorsField(option as any);
  } else if (option?.type === AirtableFieldTypeEnum.MultipleSelects) {
    return new AirtableMultipleSelectsField(option as any);
  } else if (option?.type === AirtableFieldTypeEnum.Number) {
    return new AirtableNumberField(option as any);
  } else if (option?.type === AirtableFieldTypeEnum.Percent) {
    return new AirtablePercentField(option as any);
  } else if (option?.type === AirtableFieldTypeEnum.PhoneNumber) {
    return new AirtablePhoneField(option as any);
  } else if (option?.type === AirtableFieldTypeEnum.Rating) {
    return new AirtableRatingField(option as any);
  } else if (option?.type === AirtableFieldTypeEnum.RichText) {
    return new AirtableRichTextField(option as any);
  } else if (option?.type === AirtableFieldTypeEnum.Rollup) {
    return new AirtableRollupField(option as any);
  } else if (option?.type === AirtableFieldTypeEnum.SingleLineText) {
    return new AirtableSingleLineTextField(option as any);
  } else if (option?.type === AirtableFieldTypeEnum.SingleSelect) {
    return new AirtableSingleSelectField(option as any);
  } else if (option?.type === AirtableFieldTypeEnum.ExternalSyncSource) {
    return new AirtableSyncSourceField(option as any);
  } else if (option?.type === AirtableFieldTypeEnum.Url) {
    return new AirtableUrlField(option as any);
  } else {
    throw new Error('known type.');
  }
};

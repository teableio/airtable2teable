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
export * from './teable.date.field';
export * from './teable.number.field';
export * from './teable.single.line.text.field';

export const getAirtableField = (field: IAirtableField): AirtableField => {
  if (field?.type === AirtableFieldTypeEnum.AiText) {
    return new AirtableAiTextField(field as any);
  } else if (field?.type === AirtableFieldTypeEnum.MultipleAttachments) {
    return new AirtableAttachmentField(field as any);
  } else if (field?.type === AirtableFieldTypeEnum.AutoNumber) {
    return new AirtableAutoNumberField(field as any);
  } else if (field?.type === AirtableFieldTypeEnum.Barcode) {
    return new AirtableBarcodeField(field as any);
  } else if (field?.type === AirtableFieldTypeEnum.Button) {
    return new AirtableButtonField(field as any);
  } else if (field?.type === AirtableFieldTypeEnum.Checkbox) {
    return new AirtableCheckboxField(field as any);
  } else if (field?.type === AirtableFieldTypeEnum.SingleCollaborator) {
    return new AirtableCollaboratorField(field as any);
  } else if (field?.type === AirtableFieldTypeEnum.Count) {
    return new AirtableCountField(field as any);
  } else if (field?.type === AirtableFieldTypeEnum.CreatedBy) {
    return new AirtableCreatedByField(field as any);
  } else if (field?.type === AirtableFieldTypeEnum.CreatedTime) {
    return new AirtableCreatedTimeField(field as any);
  } else if (field?.type === AirtableFieldTypeEnum.Currency) {
    return new AirtableCurrencyField(field as any);
  } else if (field?.type === AirtableFieldTypeEnum.Date) {
    return new AirtableDateField(field as any);
  } else if (field?.type === AirtableFieldTypeEnum.DateTime) {
    return new AirtableDateTimeField(field as any);
  } else if (field?.type === AirtableFieldTypeEnum.Duration) {
    return new AirtableDurationField(field as any);
  } else if (field?.type === AirtableFieldTypeEnum.Email) {
    return new AirtableEmailField(field as any);
  } else if (field?.type === AirtableFieldTypeEnum.Formula) {
    return new AirtableFormulaField(field as any);
  } else if (field?.type === AirtableFieldTypeEnum.LastModifiedBy) {
    return new AirtableLastModifiedByField(field as any);
  } else if (field?.type === AirtableFieldTypeEnum.LastModifiedTime) {
    return new AirtableLastModifiedTimeField(field as any);
  } else if (field?.type === AirtableFieldTypeEnum.MultipleRecordLinks) {
    return new AirtableLinkField(field as any);
  } else if (field?.type === AirtableFieldTypeEnum.MultilineText) {
    return new AirtableLongTextField(field as any);
  } else if (field?.type === AirtableFieldTypeEnum.MultipleLookupValues) {
    return new AirtableLookupField(field as any);
  } else if (field?.type === AirtableFieldTypeEnum.MultipleCollaborators) {
    return new AirtableMultipleCollaboratorsField(field as any);
  } else if (field?.type === AirtableFieldTypeEnum.MultipleSelects) {
    return new AirtableMultipleSelectsField(field as any);
  } else if (field?.type === AirtableFieldTypeEnum.Number) {
    return new AirtableNumberField(field as any);
  } else if (field?.type === AirtableFieldTypeEnum.Percent) {
    return new AirtablePercentField(field as any);
  } else if (field?.type === AirtableFieldTypeEnum.PhoneNumber) {
    return new AirtablePhoneField(field as any);
  } else if (field?.type === AirtableFieldTypeEnum.Rating) {
    return new AirtableRatingField(field as any);
  } else if (field?.type === AirtableFieldTypeEnum.RichText) {
    return new AirtableRichTextField(field as any);
  } else if (field?.type === AirtableFieldTypeEnum.Rollup) {
    return new AirtableRollupField(field as any);
  } else if (field?.type === AirtableFieldTypeEnum.SingleLineText) {
    return new AirtableSingleLineTextField(field as any);
  } else if (field?.type === AirtableFieldTypeEnum.SingleSelect) {
    return new AirtableSingleSelectField(field as any);
  } else if (field?.type === AirtableFieldTypeEnum.ExternalSyncSource) {
    return new AirtableSyncSourceField(field as any);
  } else if (field?.type === AirtableFieldTypeEnum.Url) {
    return new AirtableUrlField(field as any);
  } else {
    throw new Error(`known type. ${field?.type}`);
  }
};

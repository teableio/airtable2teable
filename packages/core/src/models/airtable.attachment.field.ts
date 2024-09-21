import { TeableFieldType } from '@/types';

import {
  IAttachmentCellValueVo,
  IAttachmentFieldOptionsVo,
} from '../airtable-sdks';
import { IAttachmentCellValue, ICreateFieldRo } from '../teable-sdks';
import { AirtableFieldVo } from './airtable.field.vo';

export class AirtableAttachmentField extends AirtableFieldVo {

  transformTeableCreateRecordRo(
    value: IAttachmentCellValueVo,
  ): IAttachmentCellValue {
    return (
      value?.map((attachmentItem) => {
        return {
          id: attachmentItem.id,
          name: attachmentItem.filename,
          path: attachmentItem.url,
          size: attachmentItem.size,
          mimetype: attachmentItem.type,
          presignedUrl: attachmentItem.url,
          width: attachmentItem.width,
          height: attachmentItem.height,
          token: '',
        };
      }) || []
    );
  }

  transformTeableCreateFieldRo(): ICreateFieldRo {
    return {
      type: TeableFieldType.Attachment,
      name: this.name,
      dbFieldName: this.id,
      isLookup: false,
      description: this.description,
      options: {},
    };
  }
}

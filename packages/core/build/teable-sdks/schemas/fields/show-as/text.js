import { z } from 'zod';
export var SingleLineTextDisplayType;
(function (SingleLineTextDisplayType) {
    SingleLineTextDisplayType["Url"] = "url";
    SingleLineTextDisplayType["Email"] = "email";
    SingleLineTextDisplayType["Phone"] = "phone";
})(SingleLineTextDisplayType || (SingleLineTextDisplayType = {}));
export const singleLineTextShowAsSchema = z.object({
    type: z.nativeEnum(SingleLineTextDisplayType),
});

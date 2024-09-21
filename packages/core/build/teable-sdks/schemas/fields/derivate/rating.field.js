import { Colors } from '@/types';
import { z } from 'zod';
export var RatingIcon;
(function (RatingIcon) {
    RatingIcon["Star"] = "star";
    RatingIcon["Moon"] = "moon";
    RatingIcon["Sun"] = "sun";
    RatingIcon["Zap"] = "zap";
    RatingIcon["Flame"] = "flame";
    RatingIcon["Heart"] = "heart";
    RatingIcon["Apple"] = "apple";
    RatingIcon["ThumbUp"] = "thumb-up";
})(RatingIcon || (RatingIcon = {}));
export const RATING_ICON_COLORS = [
    Colors.YellowBright,
    Colors.RedBright,
    Colors.TealBright,
];
export const ratingColorsSchema = z.enum(RATING_ICON_COLORS);
export const ratingFieldOptionsSchema = z.object({
    icon: z.nativeEnum(RatingIcon),
    color: ratingColorsSchema,
    max: z.number().int().max(10).min(1),
});

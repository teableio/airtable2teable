import { Colors } from '@/types';
import { z } from 'zod';
export declare enum RatingIcon {
    Star = "star",
    Moon = "moon",
    Sun = "sun",
    Zap = "zap",
    Flame = "flame",
    Heart = "heart",
    Apple = "apple",
    ThumbUp = "thumb-up"
}
export declare const RATING_ICON_COLORS: readonly [Colors.YellowBright, Colors.RedBright, Colors.TealBright];
export declare const ratingColorsSchema: z.ZodEnum<[Colors.YellowBright, Colors.RedBright, Colors.TealBright]>;
export declare const ratingFieldOptionsSchema: z.ZodObject<{
    icon: z.ZodNativeEnum<typeof RatingIcon>;
    color: z.ZodEnum<[Colors.YellowBright, Colors.RedBright, Colors.TealBright]>;
    max: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    color: Colors.RedBright | Colors.TealBright | Colors.YellowBright;
    icon: RatingIcon;
    max: number;
}, {
    color: Colors.RedBright | Colors.TealBright | Colors.YellowBright;
    icon: RatingIcon;
    max: number;
}>;
//# sourceMappingURL=rating.field.d.ts.map
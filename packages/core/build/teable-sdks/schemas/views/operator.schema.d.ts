import { z } from 'zod';
export declare const is: z.ZodLiteral<"is">;
export declare const isNot: z.ZodLiteral<"isNot">;
export declare const contains: z.ZodLiteral<"contains">;
export declare const doesNotContain: z.ZodLiteral<"doesNotContain">;
export declare const isEmpty: z.ZodLiteral<"isEmpty">;
export declare const isNotEmpty: z.ZodLiteral<"isNotEmpty">;
export declare const isGreater: z.ZodLiteral<"isGreater">;
export declare const isGreaterEqual: z.ZodLiteral<"isGreaterEqual">;
export declare const isLess: z.ZodLiteral<"isLess">;
export declare const isLessEqual: z.ZodLiteral<"isLessEqual">;
export declare const isAnyOf: z.ZodLiteral<"isAnyOf">;
export declare const isNoneOf: z.ZodLiteral<"isNoneOf">;
export declare const hasAnyOf: z.ZodLiteral<"hasAnyOf">;
export declare const hasAllOf: z.ZodLiteral<"hasAllOf">;
export declare const hasNoneOf: z.ZodLiteral<"hasNoneOf">;
export declare const isExactly: z.ZodLiteral<"isExactly">;
export declare const isWithIn: z.ZodLiteral<"isWithIn">;
export declare const isBefore: z.ZodLiteral<"isBefore">;
export declare const isAfter: z.ZodLiteral<"isAfter">;
export declare const isOnOrBefore: z.ZodLiteral<"isOnOrBefore">;
export declare const isOnOrAfter: z.ZodLiteral<"isOnOrAfter">;
export declare const today: z.ZodLiteral<"today">;
export declare const tomorrow: z.ZodLiteral<"tomorrow">;
export declare const yesterday: z.ZodLiteral<"yesterday">;
export declare const oneWeekAgo: z.ZodLiteral<"oneWeekAgo">;
export declare const oneWeekFromNow: z.ZodLiteral<"oneWeekFromNow">;
export declare const oneMonthAgo: z.ZodLiteral<"oneMonthAgo">;
export declare const oneMonthFromNow: z.ZodLiteral<"oneMonthFromNow">;
export declare const daysAgo: z.ZodLiteral<"daysAgo">;
export declare const daysFromNow: z.ZodLiteral<"daysFromNow">;
export declare const exactDate: z.ZodLiteral<"exactDate">;
export declare const pastWeek: z.ZodLiteral<"pastWeek">;
export declare const pastMonth: z.ZodLiteral<"pastMonth">;
export declare const pastYear: z.ZodLiteral<"pastYear">;
export declare const nextWeek: z.ZodLiteral<"nextWeek">;
export declare const nextMonth: z.ZodLiteral<"nextMonth">;
export declare const nextYear: z.ZodLiteral<"nextYear">;
export declare const pastNumberOfDays: z.ZodLiteral<"pastNumberOfDays">;
export declare const nextNumberOfDays: z.ZodLiteral<"nextNumberOfDays">;
export declare const operators: z.ZodUnion<[z.ZodLiteral<"is">, z.ZodLiteral<"isNot">, z.ZodLiteral<"contains">, z.ZodLiteral<"doesNotContain">, z.ZodLiteral<"isGreater">, z.ZodLiteral<"isGreaterEqual">, z.ZodLiteral<"isLess">, z.ZodLiteral<"isLessEqual">, z.ZodLiteral<"isEmpty">, z.ZodLiteral<"isNotEmpty">, z.ZodLiteral<"isAnyOf">, z.ZodLiteral<"isNoneOf">, z.ZodLiteral<"hasAnyOf">, z.ZodLiteral<"hasAllOf">, z.ZodLiteral<"hasNoneOf">, z.ZodLiteral<"isExactly">, z.ZodLiteral<"isWithIn">, z.ZodLiteral<"isBefore">, z.ZodLiteral<"isAfter">, z.ZodLiteral<"isOnOrBefore">, z.ZodLiteral<"isOnOrAfter">]>;
export declare const subOperators: z.ZodUnion<[z.ZodLiteral<"today">, z.ZodLiteral<"tomorrow">, z.ZodLiteral<"yesterday">, z.ZodLiteral<"oneWeekAgo">, z.ZodLiteral<"oneWeekFromNow">, z.ZodLiteral<"oneMonthAgo">, z.ZodLiteral<"oneMonthFromNow">, z.ZodLiteral<"daysAgo">, z.ZodLiteral<"daysFromNow">, z.ZodLiteral<"exactDate">, z.ZodLiteral<"pastWeek">, z.ZodLiteral<"pastMonth">, z.ZodLiteral<"pastYear">, z.ZodLiteral<"nextWeek">, z.ZodLiteral<"nextMonth">, z.ZodLiteral<"nextYear">, z.ZodLiteral<"pastNumberOfDays">, z.ZodLiteral<"nextNumberOfDays">]>;
export declare const $eq: z.ZodLiteral<"=">;
export declare const $neq: z.ZodLiteral<"!=">;
export declare const $gt: z.ZodLiteral<">">;
export declare const $gte: z.ZodLiteral<">=">;
export declare const $lt: z.ZodLiteral<"<">;
export declare const $lte: z.ZodLiteral<"<=">;
export declare const $like: z.ZodLiteral<"LIKE">;
export declare const $in: z.ZodLiteral<"IN">;
export declare const $has: z.ZodLiteral<"HAS">;
export declare const $between: z.ZodLiteral<"BETWEEN">;
export declare const $notLike: z.ZodLiteral<"NOT LIKE">;
export declare const $notIn: z.ZodLiteral<"NOT IN">;
export declare const $isNull: z.ZodLiteral<"IS NULL">;
export declare const $isNotNull: z.ZodLiteral<"IS NOT NULL">;
export declare const $isWithIn: z.ZodLiteral<"IS WITH IN">;
export declare const symbols: z.ZodUnion<[z.ZodLiteral<"=">, z.ZodLiteral<"!=">, z.ZodLiteral<">">, z.ZodLiteral<">=">, z.ZodLiteral<"<">, z.ZodLiteral<"<=">, z.ZodLiteral<"LIKE">, z.ZodLiteral<"IN">, z.ZodLiteral<"HAS">, z.ZodLiteral<"NOT LIKE">, z.ZodLiteral<"NOT IN">, z.ZodLiteral<"IS NULL">, z.ZodLiteral<"IS NOT NULL">]>;
export declare const and: z.ZodLiteral<"and">;
export declare const or: z.ZodLiteral<"or">;
export declare const conjunctionSchema: z.ZodUnion<[z.ZodLiteral<"and">, z.ZodLiteral<"or">]>;
//# sourceMappingURL=operator.schema.d.ts.map
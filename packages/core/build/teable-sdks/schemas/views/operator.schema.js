import { z } from 'zod';
export const is = z.literal('is');
export const isNot = z.literal('isNot');
export const contains = z.literal('contains');
export const doesNotContain = z.literal('doesNotContain');
export const isEmpty = z.literal('isEmpty');
export const isNotEmpty = z.literal('isNotEmpty');
export const isGreater = z.literal('isGreater');
export const isGreaterEqual = z.literal('isGreaterEqual');
export const isLess = z.literal('isLess');
export const isLessEqual = z.literal('isLessEqual');
export const isAnyOf = z.literal('isAnyOf');
export const isNoneOf = z.literal('isNoneOf');
export const hasAnyOf = z.literal('hasAnyOf');
export const hasAllOf = z.literal('hasAllOf');
export const hasNoneOf = z.literal('hasNoneOf');
export const isExactly = z.literal('isExactly');
export const isWithIn = z.literal('isWithIn');
export const isBefore = z.literal('isBefore');
export const isAfter = z.literal('isAfter');
export const isOnOrBefore = z.literal('isOnOrBefore');
export const isOnOrAfter = z.literal('isOnOrAfter');
export const today = z.literal('today');
export const tomorrow = z.literal('tomorrow');
export const yesterday = z.literal('yesterday');
export const oneWeekAgo = z.literal('oneWeekAgo');
export const oneWeekFromNow = z.literal('oneWeekFromNow');
export const oneMonthAgo = z.literal('oneMonthAgo');
export const oneMonthFromNow = z.literal('oneMonthFromNow');
export const daysAgo = z.literal('daysAgo');
export const daysFromNow = z.literal('daysFromNow');
export const exactDate = z.literal('exactDate');
export const pastWeek = z.literal('pastWeek');
export const pastMonth = z.literal('pastMonth');
export const pastYear = z.literal('pastYear');
export const nextWeek = z.literal('nextWeek');
export const nextMonth = z.literal('nextMonth');
export const nextYear = z.literal('nextYear');
export const pastNumberOfDays = z.literal('pastNumberOfDays');
export const nextNumberOfDays = z.literal('nextNumberOfDays');
export const operators = z.union([
    is,
    isNot,
    contains,
    doesNotContain,
    isGreater,
    isGreaterEqual,
    isLess,
    isLessEqual,
    isEmpty,
    isNotEmpty,
    isAnyOf,
    isNoneOf,
    hasAnyOf,
    hasAllOf,
    hasNoneOf,
    isExactly,
    isWithIn,
    isBefore,
    isAfter,
    isOnOrBefore,
    isOnOrAfter,
]);
export const subOperators = z.union([
    today,
    tomorrow,
    yesterday,
    oneWeekAgo,
    oneWeekFromNow,
    oneMonthAgo,
    oneMonthFromNow,
    daysAgo,
    daysFromNow,
    exactDate,
    pastWeek,
    pastMonth,
    pastYear,
    nextWeek,
    nextMonth,
    nextYear,
    pastNumberOfDays,
    nextNumberOfDays,
]);
export const $eq = z.literal('=');
export const $neq = z.literal('!=');
export const $gt = z.literal('>');
export const $gte = z.literal('>=');
export const $lt = z.literal('<');
export const $lte = z.literal('<=');
export const $like = z.literal('LIKE');
export const $in = z.literal('IN');
export const $has = z.literal('HAS');
export const $between = z.literal('BETWEEN');
export const $notLike = z.literal('NOT LIKE');
export const $notIn = z.literal('NOT IN');
export const $isNull = z.literal('IS NULL');
export const $isNotNull = z.literal('IS NOT NULL');
export const $isWithIn = z.literal('IS WITH IN');
export const symbols = z.union([
    $eq,
    $neq,
    $gt,
    $gte,
    $lt,
    $lte,
    $like,
    $in,
    $has,
    $notLike,
    $notIn,
    $isNull,
    $isNotNull,
]);
export const and = z.literal('and');
export const or = z.literal('or');
export const conjunctionSchema = z.union([and, or]);

import { AbstractClass, BetterMath, Collection, DateUtil, ImprovedArray, IsSomething, Point, PrimeNumbers, Random, Set, Stack, StringUtil } from './Classes';
import { AbstractClassInstanceCallError, AlreadyExistsInCollectionError, IndexOutOfBoundsError } from "./Error";
import { addProperty, asyncHandler, asyncTimeout, attributesToArray, b64ToString, betterRound, bytesToSize, callbackify, callIfFunction, deepClone, getObjectKeys, getProjectRoot, getTypeString, hasProperty, hasValue, measureTime, merge, objectToString, removeFirstDigit, removeLastDigit, removeProperty, removeXDigits, strictJSONParse, stringToB64, syncTimeout, toOrdinal } from "./Functions";
import { MapEntry, MutableObject, PromiseOr, TemperatureUnits } from './Types';
import util from "util";

/** @deprecated */
const _default = util.deprecate((): void => {
    console.log("Use this Package by import the wanted class or function:");
    console.log("import { Collection } from 'sussy-util';");
    console.log("OR:");
    console.log("const { Collection } = require('sussy-util');");
}, "deprecated");

export default _default;

export {
    AbstractClass,
    BetterMath,
    Collection,
    DateUtil,
    ImprovedArray,
    IsSomething,
    Point,
    PrimeNumbers,
    Random,
    Set,
    Stack,
    StringUtil,
    AbstractClassInstanceCallError,
    AlreadyExistsInCollectionError,
    IndexOutOfBoundsError,
    addProperty,
    asyncHandler,
    asyncTimeout,
    attributesToArray,
    b64ToString,
    betterRound,
    bytesToSize,
    callbackify,
    callIfFunction,
    deepClone,
    getObjectKeys,
    getProjectRoot,
    getTypeString,
    hasProperty,
    hasValue,
    measureTime,
    merge,
    objectToString,
    removeFirstDigit,
    removeLastDigit,
    removeProperty,
    removeXDigits,
    strictJSONParse,
    stringToB64,
    syncTimeout,
    toOrdinal,
    MapEntry,
    MutableObject,
    PromiseOr,
    TemperatureUnits,
};
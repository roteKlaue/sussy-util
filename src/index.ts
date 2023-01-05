import { AbstractClass, BetterMath, Collection, DateUtil, ImprovedArray, IsSomething, PrimeNumbers, Random, Set, Stack, StringUtil } from './Classes';
import { AbstractClassInstanceCallError, AlreadyExistsInCollectionError, IndexOutOfBoundsError } from "./Error";
import { addProperty, asyncHandler, attributesToArray, b64ToString, betterRound, bytesToSize, callbackify, callIfFunction, deepClone, getObjectKeys, getProjectRoot, getTypeString, hasProperty, hasValue, measureTime, merge, objectToString, removeFirstDigit, removeLastDigit, removeProperty, removeXDigits, strictJSONParse, stringToB64, syncTimeout, toOrdinal } from "./Functions";
import { MapEntry, MutableObject, Point, PromiseOr } from './Types';
import util from "util";

/** @deprecated */
const _default = util.deprecate(():void => {
    console.log("Use this Package by import the wanted class or function:");
    console.log("import { Collection } from 'sussyutilbyraphaelbader';");
    console.log("OR:");
    console.log("const { Collection } = require('sussyutilbyraphaelbader');");
}, "deprecated");

export default _default;

export {
    AbstractClass,
    BetterMath,
    Collection, 
    DateUtil,
    ImprovedArray,
    IsSomething,
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
    Point,
    PromiseOr,
};
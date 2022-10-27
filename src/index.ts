import Collection from "./Classes/Collection";
import DateUtil from "./Classes/DateUtil";
import ImprovedArray from "./Classes/ImprovedArray";
import Set from "./Classes/Set";
import Stack from "./Classes/Stack";
import StringUtil from "./Classes/StringUtil";
import AlreadyExistsInCollectionError from "./Error/AlreadyExistsInCollectionError";
import indexOutOfBoundsError from "./Error/IndexOutOfBoundsError";
import asyncHandler from "./Functions/asyncHandler";
import isEven from "./Functions/isEven";
import isPrime from "./Functions/isPrime";
import bytesToSize from "./Functions/bytes";
import getRandomNumberInRange from "./Functions/getRandomNumberInRange";
import betterRound from "./Functions/betterRound";
import removeLastDigit from "./Functions/removeLastDigit";
import removeFirstDigit from "./Functions/removeFirstDigit";
import removeXDigits from "./Functions/removeXDigits";
import isOdd from "./Functions/isOdd";
import merge from "./Functions/merge";
import isArray from "./Functions/isArray";
import isNumber from "./Functions/isNumber";
import isRegExp from "./Functions/isRegExp";
import isSymbol from "./Functions/isSymbol";
import isString from "./Functions/isString";
import isNullorUndefined from "./Functions/isNullorUndefined";
import isBoolean from "./Functions/isBoolean";
import callbackify from "./Functions/callbackify";
import isFunction from "./Functions/isFunction";
import hasValue from "./Functions/hasValue";
import measureTime from "./Functions/measureTime";
import getTypeString from "./Functions/getTypeString";
import isClass from "./Functions/isClass";
import isDate from "./Functions/isDate";
import isError from "./Functions/isError";
import hasProperty from "./Functions/hasProperty";
import addProperty from "./Functions/addProperty";
import attributesToArray from "./Functions/attributesToArray";
import callIfFunction from "./Functions/callIfFunction";
import strictJSONParse from "./Functions/strictJSONParse";

export default function ():void {
    console.log("Use this Package by import the wanted class or function:");
    console.log("import { Collection } from 'sussyutilbyraphaelbader';");
    console.log("OR:");
    console.log("const { Collection } = require('sussyutilbyraphaelbader');");
}

export { 
    Collection, 
    DateUtil,
    ImprovedArray,
    Set,
    Stack, 
    StringUtil,
    AlreadyExistsInCollectionError, 
    indexOutOfBoundsError,
    addProperty,
    asyncHandler, 
    attributesToArray,
    betterRound,
    bytesToSize,
    callbackify,
    callIfFunction,
    getRandomNumberInRange,
    getTypeString,
    hasProperty,
    hasValue,
    isArray,
    isBoolean,
    isClass,
    isDate,
    isError,
    isEven,
    isFunction,
    isNullorUndefined,
    isNumber,
    isOdd,
    isPrime,
    isRegExp,
    isString,
    isSymbol,
    measureTime,
    merge,
    removeFirstDigit,
    removeLastDigit,
    removeXDigits,
    strictJSONParse
};
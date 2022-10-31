import Collection from "./Classes/Collection";
import DateUtil from "./Classes/DateUtil";
import ImprovedArray from "./Classes/ImprovedArray";
import Set from "./Classes/Set";
import Stack from "./Classes/Stack";
import StringUtil from "./Classes/StringUtil";
import AlreadyExistsInCollectionError from "./Error/AlreadyExistsInCollectionError";
import IndexOutOfBoundsError from "./Error/IndexOutOfBoundsError";
import addProperty from "./Functions/addProperty";
import asyncHandler from "./Functions/asyncHandler";
import attributesToArray from "./Functions/attributesToArray";
import betterRound from "./Functions/betterRound";
import bytesToSize from "./Functions/bytes";
import callbackify from "./Functions/callbackify";
import callIfFunction from "./Functions/callIfFunction";
import deepClone from "./Functions/deepClone";
import getRandomNumberInRange from "./Functions/getRandomNumberInRange";
import getTypeString from "./Functions/getTypeString";
import hasProperty from "./Functions/hasProperty";
import hasValue from "./Functions/hasValue";
import isArray from "./Functions/isArray";
import isBoolean from "./Functions/isBoolean";
import isClass from "./Functions/isClass";
import isDate from "./Functions/isDate";
import isError from "./Functions/isError";
import isEven from "./Functions/isEven";
import isFunction from "./Functions/isFunction";
import isNullorUndefined from "./Functions/isNullorUndefined";
import isNumber from "./Functions/isNumber";
import isObject from "./Functions/isObject";
import isOdd from "./Functions/isOdd";
import isPrime from "./Functions/isPrime";
import isRegExp from "./Functions/isRegExp";
import isString from "./Functions/isString";
import isSymbol from "./Functions/isSymbol";
import measureTime from "./Functions/measureTime";
import merge from "./Functions/merge";
import objectToString from "./Functions/objectToString";
import removeFirstDigit from "./Functions/removeFirstDigit";
import removeLastDigit from "./Functions/removeLastDigit";
import removeProperty from "./Functions/removeProperty";
import removeXDigits from "./Functions/removeXDigits";
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
    IndexOutOfBoundsError,
    addProperty,
    asyncHandler, 
    attributesToArray,
    betterRound,
    bytesToSize,
    callbackify,
    callIfFunction,
    deepClone,
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
    isObject,
    isOdd,
    isPrime,
    isRegExp,
    isString,
    isSymbol,
    measureTime,
    merge,
    objectToString,
    removeFirstDigit,
    removeLastDigit,
    removeProperty,
    removeXDigits,
    strictJSONParse
};
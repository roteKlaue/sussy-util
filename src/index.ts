import Collection from "./Classes/Collection";
import DateUtil from "./Classes/DateUtil";
import ImprovedArray from "./Classes/ImprovedArray";
import IsSomething from "./Classes/IsSomething";
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
    IsSomething,
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
    measureTime,
    merge,
    objectToString,
    removeFirstDigit,
    removeLastDigit,
    removeProperty,
    removeXDigits,
    strictJSONParse
};
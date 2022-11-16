import { Collection, DateUtil, ImprovedArray, IsSomething, Random, Set, Stack, StringUtil } from './allClasses';
import { AlreadyExistsInCollectionError, IndexOutOfBoundsError } from "./allErrors";
import { addProperty, asyncHandler, attributesToArray, betterRound, bytesToSize, callbackify, callIfFunction, deepClone, getObjectKeys, getProjectRoot, getRandomNumberInRange, getTypeString, hasProperty, hasValue, measureTime, merge, objectToMutableObject, objectToString, removeFirstDigit, removeLastDigit, removeProperty, removeXDigits, strictJSONParse } from "./allFunctions";
import { MapEntry, MutableObject, PromiseOr } from './allInterfaces';

/** @deprecated */
const as = ():void => {
    console.log("Use this Package by import the wanted class or function:");
    console.log("import { Collection } from 'sussyutilbyraphaelbader';");
    console.log("OR:");
    console.log("const { Collection } = require('sussyutilbyraphaelbader');");
}

export default as;

export { 
    Collection, 
    DateUtil,
    ImprovedArray,
    IsSomething,
    Random,
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
    getObjectKeys,
    getProjectRoot,
    getRandomNumberInRange,
    getTypeString,
    hasProperty,
    hasValue,
    measureTime,
    merge,
    objectToMutableObject,
    objectToString,
    removeFirstDigit,
    removeLastDigit,
    removeProperty,
    removeXDigits,
    strictJSONParse,
    MapEntry,
    MutableObject,
    PromiseOr,
};
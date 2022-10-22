import Collection from "./Classes/Collection";
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

export { 
    Collection, 
    ImprovedArray,
    Set,
    Stack, 
    StringUtil,
    AlreadyExistsInCollectionError, 
    indexOutOfBoundsError,
    asyncHandler, 
    betterRound,
    bytesToSize, 
    getRandomNumberInRange,
    isEven, 
    isOdd,
    isPrime,
    merge,
    removeFirstDigit,
    removeLastDigit,
    removeXDigits
};
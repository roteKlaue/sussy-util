/* Exporting all the classes, errorclasses, functions, and types from the files in the same directory. */
export * from './Classes';
export * from './Error';
export * from './Functions';
export * from './Types';
import * as classes from './Classes';
import * as errorclasses from './Error';
import * as functions from './Functions';
import * as types from './Types';

export default { ...classes, ...errorclasses, ...functions, ...types };
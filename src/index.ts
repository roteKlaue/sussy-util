/* Exporting all the classes, errorClasses, functions, and types from the files in the same directory. */
export * from './Classes';
export * from './Error';
export * from './Functions';
export * from './Types';

import * as classes from './Classes';
import * as errorClasses from './Error';
import * as functions from './Functions';
import * as types from './Types';

export { classes, functions, types };

export default { ...classes, ...errorClasses, ...functions, ...types };

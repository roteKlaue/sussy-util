export default class IndexOutOfBoundsError extends Error {
  constructor(cause = '') {
    super(cause);
  }
}

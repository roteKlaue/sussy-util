export default class IndexOutOfBoundsError extends Error {
    public constructor(cause = "") {
        super(cause);
    }
}
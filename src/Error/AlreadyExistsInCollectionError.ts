export default class AlreadyExistsInCollectionError extends Error {
    constructor(cause = "") {
        super(cause);
    }
}
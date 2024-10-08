class Optional<T> {
	private static readonly EMPTY = new Optional<any>(void 0);
	private readonly value: T | undefined;

	public constructor(value: T | undefined) {
		this.value = value;
	}

	/**
     * Retrieves the value if it's present, otherwise returns undefined.
     * @returns The value if present, otherwise undefined.
     */
	public get(): T | undefined {
		return this.value;
	}

	/**
     * Checks if the value is present.
     * @returns True if the value is present, false otherwise.
     */
	public isPresent(): boolean {
		return this.value !== void 0;
	}

	/**
     * Retrieves the value if it's present, otherwise returns a specified default value.
     * @param other The default value to return if the value is absent.
     * @returns The value if present, otherwise the specified default value.
     */
	public orElse(other: T): T {
		return this.value !== void 0 ? this.value : other;
	}

	/**
     * Maps the value to a new value if present, otherwise returns an empty Optional.
     * @param mapper A function to transform the value.
     * @returns An Optional containing the transformed value if present, otherwise an empty Optional.
     */
	public map<U>(mapper: (value: T) => U): Optional<U> {
		if (this.value !== void 0) {
			return new Optional(mapper(this.value));
		}
		return Optional.EMPTY;
	}

	/**
     * Maps the value to a new Optional if present, otherwise returns an empty Optional.
     * Then applies a function to the value and flattens the result.
     * @param mapper A function to transform the value and return an Optional.
     * @returns An Optional containing the transformed value if present, otherwise an empty Optional.
     */
	public flatMap<U>(mapper: (value: T) => Optional<U>): Optional<U> {
		if (this.value !== void 0) {
			return mapper(this.value);
		}
		return Optional.empty<U>();
	}

	/**
     * Applies a function to the value if present, otherwise does nothing.
     * @param consumer A function to apply to the value if present.
     */
	public ifPresent(consumer: (value: T) => void): void {
		if (this.value !== void 0) {
			consumer(this.value);
		}
	}

	/**
     * Filters the value based on a predicate function.
     * @param predicate A function to test the value.
     * @returns An Optional containing the value if it passes the predicate, otherwise an empty Optional.
     */
	public filter(predicate: (value: T) => boolean): Optional<T> {
		if (this.value !== void 0 && predicate(this.value)) {
			return new Optional(this.value);
		}
		return Optional.EMPTY;
	}

	/**
     * Returns an empty Optional.
     * @returns An empty Optional instance.
     */
	public static empty<T>(): Optional<T> {
		return this.EMPTY;
	}

	/**
     * Returns a new Optional with a value if it's present, otherwise an empty Optional.
     * @param value The value to wrap.
     * @returns An Optional containing the value if not undefined, otherwise an empty Optional.
     */
	public static of<T>(value: T | undefined): Optional<T> {
		return new Optional<T>(value);
	}

	public static ofNullable<T>(value: T | undefined | null) {
		if (value === null || value === void 0) {
			return Optional.empty<T>();
		}
		return Optional.of<T>(value);
	}
}

export default Optional;

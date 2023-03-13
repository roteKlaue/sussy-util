import { ImprovedArray } from ".";

export default class StopWatch {
    private starttime: number;
    private readonly rounds: ImprovedArray<number> = new ImprovedArray<number>();
    private pauseStartTime: number | undefined;
    private totalTimePause: number = 0;

    constructor() {
        this.starttime = Date.now();
    }

    /**
     * If the pauseStartTime is set, then set the totalTimePause to the current time minus the
     * pauseStartTime and set the pauseStartTime to the current time.
     */
    private fixPausedTime() {
        if (this.pauseStartTime) {
            const time = Date.now();
            this.totalTimePause += time - this.pauseStartTime;
            this.pauseStartTime = time;
        }
    }

    /**
     * It takes the current time, subtracts the total time paused, and subtracts the sum of all
     * previous rounds.
     */
    public round(): void {
        this.fixPausedTime();
        this.rounds.push(this.starttime - (this.totalTimePause + this.rounds.reduce((e, b) => e + b, 0)));
    }

    /**
     * Reset the timer to its initial state.
     */
    public reset(): void {
        this.starttime = Date.now();
        this.rounds.clear();
        this.totalTimePause = 0;
        this.pauseStartTime = void 0;
    }

    /**
     * If the game is paused, add the time that has passed since the game was paused to the total time
     * that the game has been paused.
     * @returns The time since the timer was started, minus the time the timer was paused.
     */
    public time(): number {
        this.fixPausedTime();
        return Date.now() - this.starttime - this.totalTimePause;
    }

    /**
     * This function returns the rounds array.
     * @returns The rounds array.
     */
    public getRounds() {
        return this.rounds;
    }

    /**
     * If the pauseStartTime is not set, then set it to the current time.
     */
    public pause(): void {
        if (!this.pauseStartTime) this.pauseStartTime = Date.now();
    }

    /**
     * If the pauseStartTime is defined, then fix the paused time and set the pauseStartTime to
     * undefined.
     */
    public resume(): void {
        if (this.pauseStartTime) {
            this.fixPausedTime();
            this.pauseStartTime = void 0;
        }
    }
}

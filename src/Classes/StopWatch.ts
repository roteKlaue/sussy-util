import { ImprovedArray } from ".";

export default class StopWatch {
    private starttime: number;
    private readonly rounds: ImprovedArray<number> = new ImprovedArray<number>();
    private pauseStartTime: number | undefined;
    private totalTimePause: number = 0;

    constructor() {
        this.starttime = Date.now();
    }

    private fixPausedTime() {
        if (this.pauseStartTime) {
            const time = Date.now();
            this.totalTimePause += time - this.pauseStartTime;
            this.pauseStartTime = time;
        }
    }

    round(): void {
        this.fixPausedTime();
        this.rounds.push(this.starttime - (this.totalTimePause + this.rounds.reduce((e, b) => e + b, 0)));
    }

    reset(): void {
        this.starttime = Date.now();
        this.rounds.clear();
        this.totalTimePause = 0;
        this.pauseStartTime = void 0;
    }

    time(): number {
        this.fixPausedTime();
        return Date.now() - this.starttime - this.totalTimePause;
    }

    getRounds() {
        return this.rounds;
    }

    pause(): void {
        if (!this.pauseStartTime) this.pauseStartTime = Date.now();
    }

    resume(): void {
        if (this.pauseStartTime) {
            this.fixPausedTime();
            this.pauseStartTime = void 0;
        }
    }
}

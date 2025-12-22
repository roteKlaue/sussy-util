import { EventEmitter } from 'node:events';
import Optional from './Optional';

export default class StopWatch extends EventEmitter {
  private readonly rounds: number[] = [];
  private totalTimePaused: number = 0;
  private pauseStartTime?: number;
  private threshold?: number;
  private startTime: number;

  constructor() {
    super();
    this.startTime = performance.now();
  }

  /**
   * Fixes the elapsed time when the stopwatch is paused.
   */
  private fixPausedTime() {
    if (this.pauseStartTime) {
      const time = performance.now();
      this.totalTimePaused += time - this.pauseStartTime;
      this.pauseStartTime = time;
    }
  }

  /**
   * Records a round by calculating the lap time and emitting a 'round' event.
   */
  public round(): void {
    this.fixPausedTime();
    const lapTime =
      performance.now() -
      (this.totalTimePaused + this.startTime + this.rounds.reduce((acc, val) => acc + val, 0));
    this.rounds.push(lapTime);
    this.emit('round', lapTime);

    if (lapTime > (this.threshold ? this.threshold : Infinity)) {
      this.emit('lapExceededThreshold', lapTime);
    }
  }

  /**
   * Resets the stopwatch to its initial state and emits a 'reset' event.
   */
  public reset(): void {
    this.emit('reset', this.time(), [...this.rounds]);
    this.startTime = performance.now();
    this.rounds.length = 0;
    this.totalTimePaused = 0;
    this.pauseStartTime = void 0;
  }

  /**
   * Returns the elapsed time in milliseconds.
   * @returns The elapsed time in milliseconds.
   */
  public time(): number {
    this.fixPausedTime();
    return performance.now() - this.startTime - this.totalTimePaused;
  }

  /**
   * Returns the recorded rounds.
   * @returns An array of lap times for each round.
   */
  public getRounds(): number[] {
    return [...this.rounds];
  }

  /**
   * Pauses the stopwatch and emits a 'pause' event.
   */
  public pause(): void {
    if (!this.pauseStartTime) {
      this.pauseStartTime = performance.now();
      this.emit('pause');
    }
  }

  /**
   * Resumes the stopwatch if paused and emits a 'resume' event.
   */
  public resume(): void {
    if (this.pauseStartTime) {
      this.fixPausedTime();
      this.pauseStartTime = void 0;
      this.emit('resume');
    }
  }

  public formatLapTime(lapTime: number): string {
    const minutes = Math.floor(lapTime / 60000);
    const seconds = Math.floor((lapTime % 60000) / 1000);
    const milliseconds = Math.floor(lapTime % 1000);
    return `${minutes}:${seconds.toString().padStart(2, '0')}.${milliseconds.toString().padStart(3, '0')}`;
  }

  public getAverageLapTime(): number {
    const totalLaps = this.rounds.length;
    if (totalLaps === 0) {
      return 0;
    }
    const totalTime = this.rounds.reduce((acc, lapTime) => acc + lapTime, 0);
    return totalTime / totalLaps;
  }

  public getMaximumLapTime(): number {
    return Math.max(...this.rounds);
  }

  public getMinimumLapTime(): number {
    return Math.min(...this.rounds);
  }

  public setLapTimeThreshold(threshold: number): void {
    this.threshold = threshold;
  }

  public getLapTimeAtIndex(index: number): Optional<number> {
    if (index >= 0 && index < this.rounds.length) {
      return Optional.of(this.rounds[index]);
    }
    return Optional.empty();
  }

  /**
   * Adds an event listener for the 'round' event.
   * @param callback - The callback function to be called when a 'round' event is emitted.
   */
  public onRound(callback: (lapTime: number) => void): void {
    this.on('round', callback);
  }
}

export interface IMessageTracker<T> {
  accept(message: T): void;

  getRecordCount(): number;

  /**
   * Must be the last message produced.
   */
  getOutputState(): Record<string, unknown> | null;
}

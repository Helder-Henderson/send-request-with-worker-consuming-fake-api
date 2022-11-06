export class Log {
  log: String;
  createdAt: number;

  constructor(log: String, createdAt: number = Date.now()) {
    this.log = log;
    this.createdAt = createdAt;
  }
}

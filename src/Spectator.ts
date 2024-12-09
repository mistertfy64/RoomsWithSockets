class Spectator {
  data: Record<string, unknown>;
  tickOperations: { (data: unknown): unknown }[];

  constructor() {
    this.data = {};
    this.tickOperations = [];
  }

  doTickOperations() {
    for (let operation in this.tickOperations) {
      this.tickOperations[operation];
    }
  }
}

export { Spectator };

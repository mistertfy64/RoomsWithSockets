import { TickOperation } from "./TickOperation";
/**
 * This class represents an inactive spectator in a room.
 */
class Spectator {
  data: Record<string, unknown>;
  tickOperations: Array<TickOperation>;

  constructor() {
    this.data = {};
    this.tickOperations = [];
  }

  doTickOperations() {
    for (let operation of this.tickOperations) {
      operation.action(operation.variables);
    }
  }
}

export { Spectator };

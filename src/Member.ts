import { TickOperation } from "./TickOperation";

/**
 * This class represents an active player in a room.
 */
class Member {
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

export { Member };

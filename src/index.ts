import { Member } from "./Member";
import { Spectator } from "./Spectator";

class RoomWithSockets {
  members: Array<Member>;
  spectators: Array<Spectator>;
  data: Record<string, unknown>;
  tickOperations: { (data: unknown): unknown }[];
  id: string;

  constructor(id: string) {
    this.members = [];
    this.spectators = [];
    this.data = {};
    this.tickOperations = [];
    this.id = id;
  }

  tick(ticks: number) {
    for (let step = 1; step <= ticks; step++) {
      /** Run room-wide `tickOperations` first. */
      for (let operation in this.tickOperations) {
        this.tickOperations[operation];
      }
      /** Run `tickOperations` for every member next. */
      for (let member of this.members) {
        member.doTickOperations();
      }

      /** Run `tickOperations` for every spectator last. */
      for (let spectator of this.spectators) {
        spectator.doTickOperations();
      }
    }
  }
}

export { RoomWithSockets };
export { Member } from "./Member";
export { Spectator } from "./Spectator";

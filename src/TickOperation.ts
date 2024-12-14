type SafeAnyObject = { [key: string]: unknown };

/**
 * This class represents a operation to be done every tick.
 */
class TickOperation {
  operation: SafeAnyObject & {
    "action": { (parameters: SafeAnyObject): void };
  };
  action: { (parameters: SafeAnyObject): void } | { (): void };
  variables: SafeAnyObject;

  constructor(
    operation: SafeAnyObject & {
      "action": { (parameters: SafeAnyObject): void };
    }
  ) {
    this.operation = operation;
    this.action = operation.action;
    this.variables = operation;
    delete this.variables.action;
  }
}

export { TickOperation };

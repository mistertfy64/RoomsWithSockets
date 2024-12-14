type SafeAnyObject = { [key: string]: unknown };

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

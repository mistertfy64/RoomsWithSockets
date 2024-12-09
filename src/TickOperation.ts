class TickOperation {
  operation: {[key:string]:unknown} & {"action": {(parameters: {[key:string]:unknown}):void}};;
  action: {(parameters: {[key:string]:unknown}):void} | {():void};
  variables: {[key:string]:unknown};

  constructor(operation:{[key:string]:unknown} & {"action": {(parameters: {[key:string]:unknown}):void}}) {
    this.operation=operation;
    this.action = operation.action;
    this.variables = operation;
    delete this.variables.action;
  }


  

}

export { TickOperation };

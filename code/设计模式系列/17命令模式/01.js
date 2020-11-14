
class Cooker{
  cook () {
    console.log('do cooking')
  }
}

class Clearner{
  clean () {
    console.log('do cleaning')
  }
}

class CookerCommand{
  constructor(receiver) {
    this.receiver = receiver
  }
  execute () {
    this.receiver.cook()
  }
}

class ClearnerCommand{
  constructor(receiver) {
    this.receiver = receiver
  }
  execute () {
    this.receiver.clean()
  }
}

class Customer{
  constructor(command) {
    this.command = command
  }
  setCommand (command) {
    this.command = command
  }
  clean () {
    this.command.execute()
  }
  cook () {
    this.command.execute()
  }
}

let cooker = new Cooker()
let clearner = new Clearner()
let cookerCommand = new CookerCommand(cooker)
let clearnerCommand = new ClearnerCommand(clearner)

let customer = new Customer(cookerCommand)
customer.cook()
customer.setCommand(clearnerCommand)
customer.clean()


// 迪米特原则
// 降低耦合性。每一层级，只管理下一层级的，不跨越

class Salesman{
  constructor(public name: string) {
    
  }
  sale() {
    console.log(this.name + ' 销售中...')
  }
}

class SaleManager{
  private salesmen:Array<Salesman> = [new Salesman('张三'),new Salesman('李四')]
  sale() {
    this.salesmen.forEach(salesmen => salesmen.sale())
  }
}

class CEO {
  private saleManager:SaleManager = new SaleManager()
  sale() {
    this.saleManager.sale()
  }
}

let ceo = new CEO()
ceo.sale()
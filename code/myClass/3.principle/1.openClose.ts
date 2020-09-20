/**
 * 开放封闭原则（总原则）
 * 定义：对修改关闭，对扩展开放
 * 
*/
class Customer{
  constructor(public rank: string) {
    
  }
}
class Product{
  constructor(public name:string, public price: number) {
    
  }
  // 不同的顾客有不同的等级，普通会员，vip会员，普通顾客  不同的等级打折不一样
  cost(customer: Customer) {
    switch (customer.rank) {
      case 'member':
        return this.price * 0.8;
      case 'vip':
        return this.price * 0.6;
      // 如果新添加一个等级，需要需改代码，不符合开闭原则(不好)
      case 'superVip':
        return this.price * 0.4;
      default:
        return this.price * 1.0;
    }
  }
}

let product = new Product('笔记本电脑', 1000)

let member = new Customer('member')
let vip = new Customer('vip')
let superVip = new Customer('superVip')
let guest = new Customer('guest')

console.log(product.cost(member))
console.log(product.cost(vip))
console.log(product.cost(guest))
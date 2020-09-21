// 单一职责原则：
// 一个类的功能要尽可能单一，不要太杂
// 如果一个类中代码行数超过100，方法超过10个，就应该拆开

// 如果拆的过细，有可能会降低内聚性
export {}
class Product {
  public name: string
  public price: number
  public category:Category // 调用另一个类里面的
  // public categroyName: string
  // public categroyIcon: string

  // public updateProduct(propName,propPrice){}
  public updateName(){}
  public updatePrice(){}
  public updateCategory(){}
  
}

class Category{
  public name: string
  public icon :string
}
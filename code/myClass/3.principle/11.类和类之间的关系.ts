export {}
/**
 * 类和类之间的关系
 * 关联： 聚合与组合
 * 泛化
 * 依赖
*/

// 什么叫关联
class Category {
  // 也是关联，双向关联，相互关联
  public products : Array < Product >
}

class Product {
  // 产品类有一个实例属性是分类，那么就认为产品关联的分类
  // 有分单项关联和双向关联
  public category : Category
}


// 聚合
class Class{
  public students:Array<Student>
}
class Book{

}
class Pen{

}
class Student{
//如果是另一个类是当前类的方法和属性或者是 局部变量，就是依赖关系
  read(book: Book) {
    let pen = new Pen()
  }
}
class Heart{

}

class Person{
public heart:Heart
}

// 从弱到强   
// TODO  设计原则 01:04:33

/**
 * public
 * 
*/
class Water {
  
}

class Animal{
  public age: number;
  public name: number;
  // 类的依赖关系在代码中的关系是属性关系，否则编译不通过
  public water: Water;

  eat() {
    
  }
  drink() {
    
  }
}

/**
 * 接口是行为的实现
*/
interface Eggs{
  giveEggs():number
}

class Bird extends Animal implements Eggs{
  public swing: number
  public fly() {
    
  }
  giveEggs() {
    return 2
  }
}

class TangFather{}
class TangFriends{}
class TangWife{}
class TangChild{}
class TangHouse{}
class TangDuck extends Bird{
public father:TangFather
public friends:Array<TangFriends>
public wife:TangWife
public children:Array<TangChild>
public house:Array<TangHouse>
}

class BigBirdKideny{}
class BigBird extends Bird{
  public kidney:Array<BigBirdKideny>
}
class BigBirdGroup{
  public birds:Array<BigBird>
}
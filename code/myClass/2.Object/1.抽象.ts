/**
 * 面向对象的四个特性
 * 1.抽象
*/

interface IStorage {
  save(key: string, value: any): void
  read(key: string): any
}

class UserInfo {
  public name: string
  constructor(name: string, public storage: IStorage) { // 抽象的接口，可以放在不同的实例中
    this.name = name
  }

  save() {
    this.storage.save('userInfo', JSON.stringify(this))
  }
  read() {
    return this.storage.read('userInfo')
  }
}

class LocalStorage implements IStorage {
  save(key : string, value : any): void {
    localStorage.setItem(key, value)
  }
  read(key : string) {
    return localStorage.getItem(key)
  }
}

let local = new LocalStorage()
let userInfo = new UserInfo('zhuwenlong', local)
console.log(userInfo.name)


// 复用性模式
// class MySqlStorage implements IStorage {
//   save(key : string, value : any): void {
//     localStorage.setItem(key, value)
//   }
//   read(key : string) {
//     return localStorage.getItem(key)
//   }
// }

// let mySqlStorage = new MySqlStorage()
// let userInfo = new UserInfo('zhuwenlong', mySqlStorage)
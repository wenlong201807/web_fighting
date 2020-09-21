// 接口隔离原则

interface Runing { // 三个小接口，独立性强，可以多处使用
  run(): void
}

interface Flying { // 三个小接口，独立性强，可以多处使用
  fly(): void
}

interface Swinging { // 三个小接口，独立性强，可以多处使用
  swim(): void
}

interface AutomobileInterfacc { // 错误
  run(): void
  fly(): void
  swim(): void
}

class Automobile implements AutomobileInterfacc {//错误
// class Automobile implements Runing,Flying,Swinging { // 正确
  run() {}
  fly() {}
  swim() {}
}

class Car implements Runing{ // Runing  这个小接口在多处复用
  run() {}
}

var name = '极客时间'
var type = 'global'


function foo(){
    var name = 'foo'
    console.log(name)
    console.log(type)
}


function bar(){
    var name = 'bar'
    var type = 'function'
    foo()
}
bar()
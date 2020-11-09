
var x = 4
var test
function test_scope() {
    var name = 'foo'
    console.log(name)
    console.log(type)
    console.log(test)
    var type = 'function'
    test = 1
    console.log(x)
}
test_scope()  
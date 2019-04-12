var val1 = 20
var val2 = {
    name : "papico",
    age: 20
}

function val1Func(param) {
    param = param + 10
}

function val2Func(param) {
    param.age = 30
}

val1Func(val1)
val2Func(val2)

console.log(val1)
console.log(val2)

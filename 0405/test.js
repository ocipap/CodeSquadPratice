'use strict';

var bar = function() {
    var bar = "bar func"
    console.log(bar)
}

var foo = function(name) {
    var greeting = `hello, ${name}`
    bar()
    return greeting
}

console.log(foo('PAPICO'))
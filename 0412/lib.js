

// curry
const curry = f =>
    (a, ..._) => _.length ? f(a, ..._) : (..._) => f(a, ..._)

// map
const map = curry((f, iter) => {
    let res = []
    for (const a of iter) {
        res.push(f(a))
    }
    return res
})

// filter
const filter = curry((f, iter) => {
    let res = []
    for (const a of iter) {
        if (f(a)) res.push(a)
    }
    return res
})

// reduce
const reduce = (iter, f, acc) => {
    if (!acc) {
        iter = iter[Symbol.iterator]()
        acc = iter.next().value
    }
    for (const a of iter) {
        acc = f(acc, a)
    }
    return acc
}

const go = (...args) => reduce(args, (a, f) => f(a))

const flatten = (iter) => iter.flat()


module.exports = {
    map,
    filter,
    reduce,
    go,
    flatten,
}
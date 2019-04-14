const Memory = require("./memory").memory

const option1 = code => {
    return [
        code.slice(0, 4),
        code.slice(4, 7),
        code.slice(7, 10),
        code.slice(11, 16)
    ]
}

const option2 = code => {
    return [
        code.slice(0, 4),
        code.slice(4, 7),
        code.slice(7, 10),
        code.slice(13, 16)
    ]
}

const option3 = code => {
    return [
        code.slice(0, 4),
        code.slice(4, 7),
        code.slice(7)
    ]
}

const decode = (code) => {
    code = code.toString(2).padStart(16, '0')
    
    if(code.slice(0, 4) === "1011") {
        return option3(code)
    } else if (code.slice(0, 4) === "0010" || code.slice(0, 4) === "0100" || code.slice(0, 4) === "1000" || code.slice(0, 4) === "1010"){
        return option1(code)
    } else {
        return option2(code)
    }
}

class Cpu {
    constructor() {
        this.memory = new Memory();
        this.register = {
            R1: 0,
            R2: 0,
            R3: 0,
            R4: 0,
            R5: 0,
            R6: 0,
            R7: 0,
            PC: 0
        }
    }

    reset() {
        for (const key in this.register) {
            this.register[key] = 0
        }
    }

    fetch(pc) {
        let command = this.memory.fetch(this.register.PC)
        this.register.PC++
    }

    execute() {

    }

    dump() {

    }
}

const test = () => {
    console.log(decode(4778)) // load
    console.log(decode(12287)) // load
    console.log(decode(16383)) // store
    console.log(decode(20479)) // store
    console.log(decode(24575)) // and
    console.log(decode(28671)) // or
    console.log(decode(32767)) // add
    console.log(decode(40959)) // add
    console.log(decode(40959)) // sub
    console.log(decode(45055)) // sub
    console.log(decode(49151)) // mov
}

test()
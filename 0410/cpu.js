const Memory = require("./memory").memory

const REGISTER = {
    "001": "R1",
    "010": "R2",
    "011": "R3",
    "100": "R4",
    "101": "R5",
    "110": "R6",
    "111": "R7",
}

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

    if (code.slice(0, 4) === "1011") {
        return option3(code)
    } else if (code.slice(0, 4) === "0010" || code.slice(0, 4) === "0100" || code.slice(0, 4) === "1000" || code.slice(0, 4) === "1010") {
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
        return command
    }

    execute(instruction) {
        let inst = decode(instruction)
        let address = 0
        let value = 0
        switch (inst[0]) {
            case "0001":
                address = this.register[REGISTER[inst[2]]] + this.register[REGISTER[inst[3]]]
                this.register[REGISTER[inst[1]]] = this.memory.load(address)
                break
            case "0010":
                address = this.register[REGISTER[inst[2]]] + parseInt(inst[3], 2)
                this.register[REGISTER[inst[1]]] = this.memory.load(address)
                break
            case "0011":
                value = this.register[REGISTER[inst[1]]]
                address = this.register[REGISTER[inst[2]]] + this.register[REGISTER[inst[3]]]
                this.memory.store(address, value)
                break
            case "0100":
                value = this.register[REGISTER[inst[1]]]
                address = this.register[REGISTER[inst[2]]] + parseInt(inst[3], 2)
                this.memory.store(address, value)
                break
            case "0101":
                value = this.register[REGISTER[inst[2]]] && this.register[REGISTER[inst[3]]]
                this.register[REGISTER[inst[1]]] = value
                break
            case "0110":
                value = this.register[REGISTER[inst[2]]] || this.register[REGISTER[inst[3]]]
                this.register[REGISTER[inst[1]]] = value
                break
            case "0111":
                value = this.register[REGISTER[inst[2]]] + this.register[REGISTER[inst[3]]]
                this.register[REGISTER[inst[1]]] = value
                break
            case "1000":
                value = this.register[REGISTER[inst[2]]] + parseInt(inst[3], 2)
                this.register[REGISTER[inst[1]]]= value
                break
            case "1001":
                value = this.register[REGISTER[inst[2]]] - this.register[REGISTER[inst[3]]]
                this.register[REGISTER[inst[1]]]= value
                break
            case "1010":
                value = this.register[REGISTER[inst[2]]] - parseInt(inst[3], 2)
                this.register[REGISTER[inst[1]]]= value
                break
            case "1011":
                this.register[REGISTER[inst[1]]] = parseInt(inst[2], 2)
                break
            default:
                break
        }
    }

    dump() {
        let new_arr = []
        for (const a in this.register) {
            new_arr.push(this.register[a])
        }
        return new_arr
    }
}

module.exports = {
    cpu : Cpu
}
const Memory = require("./memory").memory

const INSTRUCTION = {
    '0001' : 'LOAD',
    '0010' : 'LOAD',
    '0011' : 'STORE',
    '0100' : 'STORE',
    '0101' : 'AND',
    '0110' : 'OR',
    '0111' : 'ADD',
    '1000' : 'ADD',
    '1001' : 'SUB',
    '1010' : 'SUB',
    '1011' : 'MOV'
}

const irDecode = (code) => {
    code = code.toString(2).padStart(16, '0')
    let instruction = INSTRUCTION[code.slice(0, 4)]
    
    console.log(instruction)
}

class Cpu {
    constructor(){
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
        for(const key in this.register) {
            this.register[key] = 0
        }
    }

    fetch() {
        let command = this.memory.fetch(this.register.PC)
        this.register.PC++
        this.execute(command)
    }

    execute(command) {
        
    }

    dump() {

    }
}

irDecode(4739)
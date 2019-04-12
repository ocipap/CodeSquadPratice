const underAddress = (address, l) => (address < l) ? true : false

class Memory {
    constructor() {
        this.memory =  new Uint16Array(131072)
        this.programCounter = 0
    }

    peek(address) {
        if(!underAddress(address, 131072)) throw Error("Out of range exception")
        return this.memory[address]
    }

    locate(program) {
        let programLength = program.length
        if(this.programCounter + programLength > 65535) throw Error("Exceeded memory!")
        for(let i = 0; i < programLength; i++) {
            this.memory[this.programCounter] = program[i]
            this.programCounter++
        }
    }

    fetch(pc) {
        if(pc > 65536) throw Error("Out of range exception")
        return this.memory[pc]
    }

    load(address) {
        if(!underAddress(address, 65536)) throw Error("Out of range exception")
        return this.memory[address + 65536]
    }

    store(address, data) {
        if(!underAddress(address, 65536)) throw Error("Out of range exception")        
        this.memory[address + 65536] = data
    }
}

module.exports = {
    memory: Memory
}



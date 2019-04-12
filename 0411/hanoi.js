let status = [
    [1, 2, 3, 4],
    [],
    []
]
const tops = {
    1: document.getElementById("plate_field1"),
    2: document.getElementById("plate_field2"),
    3: document.getElementById("plate_field3")
}

const sortStatus = () => {
    status.forEach((el, i) => {
        status[i] = el.sort()
    })
}

const popElement = (arr, num) => {
    let idx = arr.indexOf(num)
    arr.splice(idx, 1)
}

const pushElement = (arr, num) => {
    arr.push(num)
}

const drawStatus = _ => {
    let html = ""
    sortStatus()
    status.forEach((el, i) => {
        html = ""
        el.forEach((el2, i2) => {
            html += `<div class="plate" id="plate${el2}">${el2}</div>`
        })
        tops[i + 1].innerHTML = html
    })
}

const hanoi = (num, from, to) => {
    setTimeout(() => {
        let rest = 3 - from - to
        if (num == 1) {
            popElement(status[from], num)
            pushElement(status[to], num)
            drawStatus()
            return;
        }
        hanoi(num - 1, from, rest)
        popElement(status[from], num)
        pushElement(status[to], num)
        hanoi(num - 1, rest, to)
        drawStatus()
    }, 1000)
}
const main = () => {
    drawStatus()
    hanoi(4, 0, 2)
}

main()
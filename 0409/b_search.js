let num = 5
let arr = [1, 2, 3, 4, 5]

const bSearch = (start, end) => {
    let mid = parseInt((start + end) / 2)
    if(arr[mid] === num) {
        return mid
    }
    return (num < arr[mid]) ? bSearch(start, mid - 1) : bSearch(mid + 1, end)
}
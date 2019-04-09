(function callModuleChecker(){
    let result = new Date();
    console.log("WELCOME UTIL MODULE : " + result);
})();

const isNumber = a => typeof a === "number"

module.exports.sum = (arr) => {
    return arr.filter(isNumber).reduce((a, b) => a + b, 0)
}
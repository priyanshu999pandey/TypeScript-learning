// function return type 
function add1(num1, num2) {
    return num1 + num2;
}
var output1 = add1(10, 20);
console.log(output1);
var combinedFunction;
combinedFunction = add1;
console.log(combinedFunction(2, 9));
// function type and callbacks 
function addHandle(n1, n2, cb) {
    var result = n1 + n2;
    cb(result);
}
addHandle(100, 200, function (result) {
    console.log(result);
});

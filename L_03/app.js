// Type alias 
var user = {
    name: "ajay",
    age: 22
};
function greet(user) {
    return "hello ".concat(user.name);
}
var result = greet(user);
console.log(result);

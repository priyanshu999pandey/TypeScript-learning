var userName = 10;
var userEmail;
userEmail = userName;
function generateError(message, code) {
    throw { message: message, statusCode: code };
}
console.log("Internal server error", 500);

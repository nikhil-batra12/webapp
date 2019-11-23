exports.login = login;
exports.userDetails = userDetails;

function login(req, res) {
    res.end(JSON.stringify(require('./response/user/login.json')));
}
function userDetails(req, res) {
    res.end(JSON.stringify(require('./response/user/userDetails.json')));
}
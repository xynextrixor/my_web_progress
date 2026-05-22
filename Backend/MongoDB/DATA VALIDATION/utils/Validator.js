const Validator = require("validator");
function vailduser(data) {
    const mendoatry = ['FirstName', "emailId", "age ", "Password"]
    const IsAllowed = Object.keys(k).every((data) => Object.includes(req.body).includes(k));
    if (!IsAllowed)
        throw new error('Feilds Missing')
    if (!Validator.isEmail(data.emailId))
        throw new error("Invalid Email");
    if (!Validator.isStrong)
}
module.exports = Validator;
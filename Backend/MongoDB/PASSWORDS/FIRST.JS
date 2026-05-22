const bcrypt = require("bcrypt")
const password = "Anmol@123";
async function Hashing() {
    console.time("Hashing Time");
    const salt = await bcrypt.genSalt(10);
    const hashpass = await bcrypt.hash(password, salt);
    console.timeEnd("Hashing Time");
    const ans = await bcrypt.compare("Rohit", hashpass);
    console.log(ans)
}
Hashing();
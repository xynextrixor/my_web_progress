const mongoose = require('mongoose');
async function main() {
    await mongoose.connect('mongodb+srv://AnmolServer:ANMOLSINGH1992@cluster0.5sintih.mongodb.net/Instagram');
}
module.exports = main;
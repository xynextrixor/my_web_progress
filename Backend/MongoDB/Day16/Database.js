const mongoose = require('mongoose');
async function main() {
    // Your code here
    await mongoose.connect('mongodb+srv://AnmolServer:ANMOLSINGH1992@cluster0.5sintih.mongodb.net/bookstore');
    const userSchema = new Schema({
        name: String,
        age: Number,
        city: String,
        gender: String
    });
    // model KO Certe kar uske thrugh data insert karana ke lia
    const User = mongoose.model('User', userSchema);

    const newUser1 = new User({ name: 'Soveer', age: 40, city: 'Delhi', gender: 'Male' });
    await newUser2.save();
}
main()
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Error connecting to MongoDB:', err));  

const express = require('express');
const app = express();
const main = require('./database');
const User = require('./User');

app.use(express.json());
app.post("/register", async (req, res) => {
    try {
        await User.create(req.body);
        res.send("user created successfully");
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
})
app.get("/users", async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
})
app.get("/users/:id", async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        res.json(user);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
})
app.delete("/users/:id", async (req, res) => {
    try {
        const user = await User.findByIdAndDelete(req.params.id);
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        res.json({ message: "User deleted successfully" });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
})
app.patch("/users/:id", async (req, res) => {
    try {
        const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        res.json(user);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
})

main().then(() => {
    console.log('Database Connected');
}).catch((err) => {
    console.log(err);
})

app.listen(3000, () => {
    console.log('Server running on port 3000')
}) 
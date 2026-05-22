const express = require('express');
const app = express();
const main = require('./database');
const User = require('./User');
const VaildUser = require("./utils/Validator")

app.use(express.json());
app.post("/register", async (req, res) => {
    try {
        VaildUser(req.body);
        req.body.password = bcrypt.hash(req.body.password, 10)


        await User.create(req.body);
        res.send("user created successfully");
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
})

////////Login The Pasword using Thow 
app.post("/login", async (req, res) => {
    try {
        ////////validateThe errror 
        const people = await User.findById(req.body._id);
        if (!(req.body.emailId === people.emailId))
            throw new error("invaild email id");
        const IsAllow = await bcrypt.compare(req.body.password, people.password);
        if (!IsAllow)
            res.send("Login ScuessFully");

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
        const { _id, ...update } = req.body;
        const user = await User.findByIdAndUpdate(_id, update);
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
const express = require('express');
const path = require('path');


const LogInCollection = require("./mongodb")

const app = express();
app.use(express.static('public'));

const templatePath = path.join(__dirname, '../templates');

app.use(express.json());

app.set('views', templatePath);
app.use(express.urlencoded({ extended: false }))




app.get('/signup', (req, res) => {
    res.render('signup');
});
app.post('/signup', async (req, res) => {
    const data = {
        name: req.body.name,
        password: req.body.password,
        email: req.body.email,
        contact: req.body.contact
    };

    try {

        const existingUser = await LogInCollection.findOne({ name: req.body.name });
        if (existingUser) {
            return res.send("User details already exist");
        }


        await LogInCollection.insertMany([data]);


        res.status(201).render("home", { naming: req.body.name });
    } catch (error) {
        res.send("Wrong inputs");
    }
});

app.get('/', (req, res) => {
    res.render('login');
});

app.post('/login', async (req, res) => {
    try {
        const check = await LogInCollection.findOne({ name: req.body.name });
        if (!check) {
            return res.send("User not found");
        }

        if (check.password === req.body.password) {
            return res.status(201).render("home", { naming: `${req.body.name}` });
        } else {
            return res.send("Incorrect password");
        }
    } catch (e) {
        return res.send("Wrong details");
    }
});



app.listen(3000, () => {
    console.log('Server is running on port 3000');
});

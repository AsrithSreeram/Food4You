require('dotenv').config();
const express = require('express');
const app = express();
const session = require('express-session');
const passport = require('passport');
const passportLocalMongoose = require('passport-local-mongoose');
const mongoose = require('mongoose')

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: false
}));
app.use(passport.initialize())
app.use(passport.session())


mongoose.connect('mongodb://localhost:27017/foodDB')

const userSchema = new mongoose.Schema({
    email: String,
    passport: String,
    searchHistory: [],
    foodHistory: []
})

userSchema.plugin(passportLocalMongoose)

const User = new mongoose.model('User', userSchema)

passport.use(User.createStrategy());

passport.serializeUser(User.serializeUser())
passport.deserializeUser(User.deserializeUser())

// authentication
app.post('/signin', (req, res) => {
    const user = new User({
        username: req.body.username, 
        password: req.body.password
    });

    req.login(user, (err) => {
        if (err) {
            console.log(err)
            res.redirect('/')
        } else {
            passport.authenticate('local')
        }
    });
})

app.post('/register', (req, res) => {
    User.register({username: req.body.username, active: false}, req.body.password, (err, user) => {
        if (err) {
            console.log(err)
            res.redirect('/')
        } else {
            passport.authenticate('local')
        }
    })
})

function ensure(req, res, next) {
    if (req.isAuthenticated()) {
        return next()
    } else {
        res.redirect('/')
    }
}

app.get('/is-authenticated', ensure, (req, res) => {
    res.json({authenticated: true})
})

app.post('/update', (req, res) => {
    let type = req.type;
    let data = req.data;

    
})

// @import url('http://fonts.cdnfonts.com/css/sofia-pro');

app.listen(5000)
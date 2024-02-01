const express = require('express')
const {routes} = require('./routes')
const app = express()
const PORT = 3001
const session = require('express-session');

const connect_front_end = require('body-parser')

app.use(connect_front_end.urlencoded({ extended: true }));
app.use(connect_front_end.json());
app.use(session({
    secret: 'your-secefwewfret-key', // Change this to a secure, random string
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false } // Set to true if using HTTPS
}));
app.set('views', './src/views/');
app.set('view engine', 'ejs');

app.use('/', routes);

app.listen(PORT, ()=>{
    console.log('escutando a porta 3001')
})


const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt-nodejs');
const cors = require('cors');
const knex = require('knex');
const register = require('./controllers/register');
const signin = require('./controllers/signin');
const profile = require('./controllers/profile');
const image = require('./controllers/image');

const db = knex ({
  client: 'pg',
  connection: {
    host : '127.0.0.1',
    user : 'postgres',
    password : 'superman',
    database : 'smart_brain'
  }
});

const app = express();

app.use(bodyParser.json());
app.use(cors());

app.get('/', (req, res)=> {
	res.send(database.users)
});

// ROUTE 1
// Dependency injection
app.post('/signin', (req, res) => {signin.handleSignin(req, res, db, bcrypt) })

// ROUTE 2
app.post('/register', (req, res) => {register.handleRegister(req, res, db, bcrypt) })

// ROUTE 3
app.get('/profile/:id', (req, res) => {profile.handlePrfile(req, res, db) });

// ROUTE 4
app.put('/image', (req, res) => {image.handleImage(req, res, db) });
app.post('/imageUrl', (req, res) => {image.handleApiCall(req, res) });
	

app.listen(3000, ()=> {
	console.log('app is running on port 3000');
})



// // Load hash from your password DB.
// bcrypt.compare("bacon", hash, function(err, res) {
//     // res == true
// });
// bcrypt.compare("veggies", hash, function(err, res) {
//     // res = false
// });





















/*
/ --> res = this is working
/signin  --> POST = success/fail
/register --> POST = user
/profile/:userId --> GET = user
/image --> PUT --> user
*/

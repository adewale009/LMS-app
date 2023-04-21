const express = require('express');
const morgan = require('morgan');
const dotenv = require('dotenv');
const bodyparser = require('body-parser');
const favicon = require('express-favicon');
const handlebars = require('handlebars');
const exphb = require('express-handlebars');
const path = require('path');
// connect mongo
const mongo = require('mongodb');
const mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost/elearn');
// const db = mongoose.connection;

const flash = require('connect-flash');
const session = require('express-session');
// const expressValidator = require('express-validator');

// passport and passport-local-mongoose: for implementing authentication
const passport = require('passport');
// Setting up user schema with MongoDB
// const passportLocalMongoose = require('passport-local-mongoose');
const LocalStrategy = require('passport-local').Strategy;

const partial = require('express-partial');
const expressLayouts = require('express-ejs-layouts');

// connect-ensure-login: this protects the pages that require authentication
const connectEnsureLogin = require('connect-ensure-login');

// Cross-Site Request Forgery
// const csrf = require('csrf');

const index = require('./server/routes/index');
const user = require('./server/routes/user');

const app = express();
// app.use (csrf());

// app.use(favicon(__dirname + '/public/favicon.png'));
app.use(morgan('tiny'));
app.use(expressLayouts);
app.use(partial());

// session
app.use(bodyparser.urlencoded({extended: false}));
app.use(session({
    secret: 'secret',
    saveUninitialized: true,
    resave: false,
}));
// utilization of the MongoStore for storing the session in the MongoDB database
// store: new MongoStore({ mongoUrl: db.client.s.url })

// local passport strategy
// const strategy = new LocalStrategy(passport.authenticate())
// passport.use(strategy);
app.use(passport.initialize());
app.use(passport.session());
// passport.serializeUser(users.serializeUser());
// passport.deserializeUser(users.deserializeUser());


// passort
app.use(passport.authenticate('session'));
// app.use(passport.initialize());
// app.use(passport.session());

// passport.use(new LocalStrategy(
//     function(username, password, done) {
//       User.findOne({ username: username }, function (err, user) {
//         if (err) { return done(err); }
//         if (!user) { return done(null, false); }
//         if (!user.verifyPassword(password)) { return done(null, false); }
//         return done(null, user);
//       });
//     }
//   ));

// load assets, css, img,js
// app.use('/css,express.static(path.resolve(__dirname,"assets/css');
// app.use('/img,express.static(path.resolve(__dirname,"assets/img');
// app.use('/js,express.static(path.resolve(__dirname,"assets/js');

// Connect-Flash
app.use(flash());

// handlebars layout
// app.engine('handlebars', function exphbs() {defaultLayout: 'layout'});

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set("view engine", "ejs");
// app.set('views', path.resolve__dirname, "include/index.ejs")
app.use(express.static(path.join(__dirname + '/views')));

app.get('/', (req, res) => {
    res.render('index', {title: 'ELEARN'});
    });

    // adding new page using index.ejs and <%- body %>
    // uncomment
    app.get('/login', (req, res) => {
        res.render('login');
        });
   
// app.use (expressValidator({
//     errorFormatter: function(param, msg, value) {
//       const nameSpace = param.split('.'),
//       root = nameSpace.shift(),
//       formParam = root;
  
//       while(nameSpace.lenght) {
//         formParam += '[' + nameSpace.shift() + ']';
//       }
//       return {
//         param : formParam,
//         msg : msg,
//         value : value
//       };
//     }
//   }));
  

dotenv.config({path: 'config.env'});
const PORT = process.env.PORT || 8080

app.listen(PORT, (err)=> {
    if (err) console.log(err);
    console.log(`Server is running on http://localhost:${PORT}`)});

module.exports = app;
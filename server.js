const express = require('express');

const routes = require('./controllers');
const sequelize = require('./config/connection');

// handle bars helpers
const helpers = require('./utils/helpers');


// makes stylesheet avaialable to server
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3001;

// express-session and sequelize store begin
const session = require('express-session');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const sess = {
  secret: 'Super secret secret',
  // logs user out after 60 seconds of inactivity 
  cookie: { expires: 60 * 1000 },
  resave: true,
  rolling: true,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};

app.use(session(sess));
// express-session and sequelize store end

// handlebars start
const exphbs = require('express-handlebars');
const hbs = exphbs.create({helpers});

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');
// handlebars end

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// middleware function to take contents of 'public' folder and serve them as static assests
app.use(express.static(path.join(__dirname, 'public')));


// turn on routes
app.use(routes);

// turn on connection to db and server
sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log('Now listening'));
})
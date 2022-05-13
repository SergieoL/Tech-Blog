const express = require('express');
const routes = require('./controllers');
const sequelize = require('./config/connection');
// makes stylesheet avaialable to server
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3001;

// handlebars start
const exphbs = require('express-handlebars');
const hbs = exphbs.create({});

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
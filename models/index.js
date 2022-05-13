// imports Models and exports as objects with it as a property
const User = require('./User');
const Post = require('./Post');

// create associations

// a user can have many posts
User.hasMany(Post, {
    foreignKey: 'user_id'
  });

// a post can only have one user
Post.belongsTo(User, {
  foreignKey: 'user_id',
});

module.exports = { User, Post };
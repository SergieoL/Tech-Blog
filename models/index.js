// imports Models and exports as objects with it as a property
const User = require('./User');
const Post = require('./Post');
const Comment = require('./Comment');

// create associations

// a user can have many posts
User.hasMany(Post, {
    foreignKey: 'user_id'
  });

// a post can only have one user
Post.belongsTo(User, {
  foreignKey: 'user_id',
});

// a comment can only have one user
Comment.belongsTo(User, {
    foreignKey: 'user_id'
})

// a comment can have only one post_id
Comment.belongsTo(Post, {
    foreignKey: 'post_id'
})

// a user can have many comments
User.hasMany(Comment, {
    foreignKey: 'user_id'
})

// a post can have many comments
Post.hasMany(Comment, {
    foreignKey: 'post_id'
})

module.exports = { User, Post, Comment };
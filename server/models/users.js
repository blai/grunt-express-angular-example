'use strict';

var _ = require('lodash');

var users = [
  {
    id: 1,
    username: 'admin',
    password: 'pass',
    role: 'ADMIN'
  },
  {
    id: 2,
    username: 'user',
    password: 'pass',
    role: 'USER'
  }
];

module.exports = {
  findById: function(id) {
    return _.clone(_.find(users, function(user) { return user.id === id }));
  },

  findByUsername: function(username) {
    return _.clone(_.find(users, function(user) { return user.username === username; }));
  }
};
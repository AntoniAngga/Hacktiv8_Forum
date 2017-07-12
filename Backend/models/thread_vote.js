'use strict';
module.exports = function(sequelize, DataTypes) {
  var Thread_vote = sequelize.define('Thread_vote', {
    id_thread: DataTypes.INTEGER,
    id_vote: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Thread_vote;
};
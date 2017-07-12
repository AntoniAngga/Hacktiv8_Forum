'use strict';
module.exports = function(sequelize, DataTypes) {
  var Thread = sequelize.define('Thread', {
    subject: DataTypes.STRING,
    desc: DataTypes.STRING,
    tags: DataTypes.STRING,
    id_user: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Thread;
};
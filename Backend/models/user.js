'use strict';
module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define('User', {
    facebook_id: DataTypes.STRING,
    address: DataTypes.STRING,
    gender: DataTypes.STRING,
    email: DataTypes.STRING,
    dob: DataTypes.DATE
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return User;
};
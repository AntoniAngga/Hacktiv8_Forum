'use strict';
module.exports = function(sequelize, DataTypes) {
  var Reply = sequelize.define('Reply', {
    desc: DataTypes.STRING,
    tags: DataTypes.STRING,
    id_thread: DataTypes.INTEGER,
    id_user: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Reply;
};
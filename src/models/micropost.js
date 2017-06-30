'use strict';
module.exports = function(sequelize, DataTypes) {
  var MicroPost = sequelize.define('MicroPost', {
    title: DataTypes.STRING,
    votes: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return MicroPost;
};
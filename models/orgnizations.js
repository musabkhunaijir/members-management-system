'use strict';
module.exports = (sequelize, DataTypes) => {
  var orgnizations = sequelize.define('orgnizations', {
    orgnization_id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    name: DataTypes.STRING
  }, {});
  orgnizations.associate = function(models) {
    // associations can be defined here
  };
  return orgnizations;
};
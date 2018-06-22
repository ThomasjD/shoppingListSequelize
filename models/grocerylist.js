/*
'use strict';
module.exports = (sequelize, DataTypes) => {
  var Student = sequelize.define('Student', {
    firstname: DataTypes.STRING,
    lastname: DataTypes.STRING,
    isgraduated: DataTypes.BOOLEAN
  }, {});

  //for joining tables
  Student.associate = function(models) {
    // associations can be defined here
  };
  return Student;
};
*/

'use strict';
module.exports = (sequelize, DataTypes) => {
  var Grocerylist = sequelize.define('Grocerylist', {
    listnameid = Datatypes.INTEGER,
    listname = Datatypes.STRING

  }, {});

  //for joining tables
  Grocerylist.associate = function(models) {
  };
  return Grocerylist;
};

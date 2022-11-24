// src/models/user.model.js

const UserModel = (sequelize, DataTypes) => {
  const User = sequelize.define('Users', {
    fullName: DataTypes.STRING,
    email: DataTypes.STRING,
    phoneNum: DataTypes.STRING,
  });

  return User;
};

module.exports = UserModel;
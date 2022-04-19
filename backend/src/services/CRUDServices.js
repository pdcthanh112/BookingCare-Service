const db = require('../models/index')
const bcrypt = require("bcryptjs");

let createNewUser = async (data) => {
    return new Promise( async (resolve, reject) => {
        try {
            let hashPasswordFromBcrypt = await hashUserPassword(data.password);
            db.User.create({
                email: data.email,
                password: hashPasswordFromBcrypt,
                firstName: data.firstName,
                lastName: data.lastName,
                address: data.address,
                phoneNumber: data.phoneNumber,
                gender: data.gender === '1' ? true : false,
                roleId: data.roleId,
            })
            resolve('Create new user successfully');
        } catch (error) {
            reject(error);
        }
    })

};

let hashUserPassword = (password) => {
  return new Promise(async (resolve, reject) => {
    try {
      let salt = bcrypt.genSaltSync(10);
      let hashPassword = await bcrypt.hashSync(password, salt);
      resolve(hashPassword);
    } catch (error) {
      reject(error);
    }
  });
};

module.exports = {
  createNewUser: createNewUser,
};

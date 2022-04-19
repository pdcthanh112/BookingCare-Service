const db = require("../models/index");
const CRUDServices = require('../services/CRUDServices')

let getHomePage = async (req, res) => {
  try {
    let data = await db.User.findAll();
    return res.render("homepage.ejs", {
        data: JSON.stringify(data)
    });
  } catch (error) {
    console.log("Error: " + error);
  }
};

let getCRUD = (req, res) => {
  return res.render('crud.ejs');
}

let postCRUD = async (req, res) => {
  let message = await CRUDServices.createNewUser(req.body);
  console.log(message);
  return res.send('post from crud')
}

module.exports = {
  getHomePage: getHomePage,
  getCRUD: getCRUD,
  postCRUD: postCRUD
};

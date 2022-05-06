const db = require("../models/index");
const CRUDServices = require("../services/CRUDServices");

let getHomePage = async (req, res) => {
  try {
    let data = await db.User.findAll();
    return res.render("homepage.ejs", {
      data: JSON.stringify(data),
    });
  } catch (error) {
    console.log("Error: " + error);
  }
};

let demoCRUD = (req, res) => {
  return res.render("crud.ejs");
};

let postCRUD = async (req, res) => {
  let message = await CRUDServices.createNewUser(req.body);
  console.log(message);
  return res.send("post from crud");
};

let getCRUD = async (req, res) => {
  let data = await CRUDServices.getAllUser();

  return res.render("displayCRUD.ejs", {
    dataTable: data,
  });
};

let getEditCRUD = async (req, res) => {
  const userId = req.query.id;
  if (userId) {
    const userData = await CRUDServices.getUserInforById(userId);
    return res.render('editCRUD.ejs', {
      data : userData
    })
  } else {
    return res.send("tttt");
  }
};

let putCRUD = async (req, res) => {
  let data = req.body;
   await CRUDServices.updateUserData(data);
  return res.redirect("/get-crud");
}

let deleteCRUD = async (req, res) => {
  let id = req.query.id;

  if(id) {
    await CRUDServices.deleteUserById(id);
    return res.send("deleted")
  } else {
    return res.send("not dound")
  }
}

module.exports = {
  getHomePage: getHomePage,
  demoCRUD: demoCRUD,
  getCRUD: getCRUD,
  postCRUD: postCRUD,
  getEditCRUD: getEditCRUD,
  putCRUD: putCRUD,
  deleteCRUD: deleteCRUD
};

import axios from "../axios";

const handleLoginApi = (emailLogin, passwordLogin) => {
  return axios.post("/api/login", {
    email: emailLogin,
    password: passwordLogin,
  });
};

const getAllUsers = (id) => {
  return axios.get(`/api/get-all-users?id=${id}`);
};

const createNewUserService = (data) => {
  return axios.post("/api/create-new-user", data);
};

const deleteUserService = (id) => {
  return axios.delete("/api/delete-user", {
    data: {
      id: id,
    },
  });
};

const editUserService = (data) => {
  return axios.put("/api/edit-user", data);
};

const getAllCodeService = (inputType) => {
  return axios.get(`/api/allcode?type=${inputType}`)
}

export { handleLoginApi, getAllUsers, createNewUserService, editUserService, deleteUserService,getAllCodeService };

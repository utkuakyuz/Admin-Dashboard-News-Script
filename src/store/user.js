import { services } from '@/service/restServices';
import { reactive } from 'vue';
import router from "@/router";

const validat = reactive({ loader: true, data: {} });
const token = localStorage.getItem('user_token')
let users = [];
let admins = [];
const categoryList = reactive({ loader: true, list: [] });
const getCategoryByIDList = reactive({ loader: true, list: [], ID: 0 });

const Login = (crediential) => {
  validat.loader = true;
  const { email, password } = crediential._value;
  console.log("email: ", email, "password: ", password);

  services
    .adminLoginValue({ email, password })
    .then((res) => {
      console.log("res in login: ", res);
      console.log("user token: ", res.data.token);
      setTimeout(() => (validat.loader = false), 300);
      localStorage.setItem('user_token', res.data.token)
      setTimeout(() => router.go('/'), 3000);
    })
    .catch((err) => {
      console.log("err in login: ", err);
    });
};

const Register = (crediential) => {
  const { firstName, lastName, email, password, permissions} = crediential;
  console.log(
    "firstName: ",
    firstName,
    "lastName: ",
    lastName,
    "email: ",
    email,
    "password: ",
    password,
    "permissions: ",
    permissions
  );
  services
    .adminRegisterValue({ firstName, lastName, email, password, permissions})
    .then((res) => {
      console.log("res in register: ", res);
      // return res.data;
    })
    .catch((err) => {
      console.log("err in register: ", err);
    });
};
const Registeradmin = (crediential) => {
  const { firstName, lastName, email, password, permissions} = crediential;
  console.log(
    "firstName: ",
    firstName,
    "lastName: ",
    lastName,
    "email: ",
    email,
    "password: ",
    password,
    "permissions: ",
    permissions
  );
  services
    .adminadminRegisterValue({ firstName, lastName, email, password, permissions })
    .then((res) => {
      console.log("res in register: ", res);
      // return res.data;
    })
    .catch((err) => {
      console.log("err in register: ", err);
    });
};
const GetAllUsers = (crediential) => {
  services.adminGetAllUsers().then((res) => {
    users = res.data.response;
    console.log(res.data.response);
  });
};
  //18.02.2022 son
  const getCategory = () => {
    categoryList.loader = true;
    categoryList.list.splice(0, categoryList.list.length);
    services
      .admincategoriesValue()
      .then((res) => {
        categoryList.list.push(...res.data.response);
        categoryList.loader = false;
      })
      .catch((err) => {
        console.log("error in getcategory: ", err);
      });
  }; 
  const getCategoryByIadmin = (ID) => {
    services
      .getCategoryByIDValue({categoryID: ID })
      .then((res) => {
        console.log("res from getCategoryByIDadmin: ", res.data.response);
        getCategoryByIDList.list = res.data.response;
        getCategoryByIDList.ID = ID
        console.log("getCategoryByIDuser, ID :", ID)
      })
      .catch((err) => {
        console.log("error in getCategoryByIDadmin: ", err);
      });
  }; 
  const addComment = (content) => {
    const { ID, detail } = content._value;
    services
      .commentsAddValue({newsID: ID,  "detail":detail })
      .then((res) => {
        console.log("res in addComment: ", res);
      })
      .catch((err) => {
        console.log("err in addComment: ", err);
      });
  };
export { addComment, getCategoryByIDList, getCategoryByIadmin, categoryList, getCategory, Login, validat, Register, Registeradmin, GetAllUsers, users,admins, token };
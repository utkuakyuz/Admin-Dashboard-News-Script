import { services } from "@/service/restServices";
import { reactive, ref } from "vue";
import axios from "axios";
import local from "@/lib/local";
import router from "@/router";

let commentId = ref(0);
let newId = ref(1);
let adminChoice = ref(-1);
let permissions = ref(0);
let firstName = ref(0);
// let lastName = ref({});
// let email = ref({});

const newsList = reactive({ loader: true, list: [], });
const permissionsList = reactive({ loader: true, list: {}, });
const pendingNewsList = reactive({ list: [] });
const singleNews = reactive({ loader: true, detail: [], comment: [] });
const singleUser = reactive({ loader: true, list: [], });
const singleUserd = reactive({
  firstName: "", lastName: "", ID: 0, email: "",
  permissions: 0, username: "", isActive: 0, tags: ""
})

const adminProfilea = reactive({ loader: true, list: [], });
const adminProfile = reactive({
  ID: 0, firstName: "", lastName: "",username:"", email: "",password: "",joinedAt: "", expiresAt:"",
  permissions: 0, isActive: 0
})

const commentsList = reactive({ list: [], });
const userList = reactive({ list: [], });
const userlistD = reactive({ firstName: "aa", lastName: "", ID: 0, email: "", permissions: 0, username: "", isActive: 0, tags: "" })
const adminList = reactive({ list: [], });
const pendingCommentsList = reactive({ list: [] });
const liveNewsList = reactive({ list: [] });
const liveCommentsList = reactive({ list: [] });
const deletedCommentsList = reactive({ list: [] });
const deletedNewsList = reactive({ list: [] });

const singleComment = reactive({ ID: 0, createdAt: "", detail: "", editedAt: "", firstName: "", isAccepted: 1, isActive: 1, lastName: "", newsID: 1, username: "" })
// get all comments
const getComments = () => {
  commentsList.list.splice(0, commentsList.list.length);
  services
    .commentsGETValue()
    .then((res) => {
      console.log("res from getcomments: ", res.data.response);
      commentsList.list = res.data.response;
    })
    .catch((err) => {
      console.log("error in getcomments: ", err);
    });
};
const getPendingComments = () => {
  services
    .pendingCommentValue()
    .then((res) => {
      pendingCommentsList.list = res.data.response;
      console.log("res from pendingComments: ", res.data.response)
    })
    .catch((err) => {
      console.log("error in pending comments: ", err);
    })
}
const deleteComment = (ID) => {
  services
    .deleteCommentValue({ commentsID: ID })
    .then((res) => {
      console.log("res from deleteComments: ", res);
    })
    .catch((err) => {
      console.log("error in deleteComments: ", err);
    });
};
const confirmComment = (ID, adminChoices) => {
  console.log("adminchoice: ", adminChoices)
  console.log("ID in content:", ID)
  services
    // , {adminChoice: adminChoice}
    .confirmCommentValue({ commentsID: ID }, { "adminChoice": adminChoices })
    .then((res) => {
      console.log("res from ConfirmComments: ", res);
    })
    .catch((err) => {
      console.log("error in ConfirmComments: ", err);
    });
}
const liveComments = () => {
  services
    .liveCommentsValue()
    .then((res) => {
      liveCommentsList.list = res.data.response;
      console.log("res from live Comments: ", res.data.response)
    })
    .catch((err) => {
      console.log("error in live Comments: ", err);
    })
};
const updateComments = (ID, detail, active) => {
  services
    .updateCommentValue({ commentsID: ID, "detail": detail, "isActive": active })
    .then((res) => {
      console.log("res from updateComments: ", res);
    })
    .catch((err) => {
      console.log("error in updateComments: ", err);
    })
}
const getSingleComment = (ID) => {
  services
    .adminGetSingleCommentValue({ commentsID: ID })
    .then((res) => {
      singleComment.firstName = res.data.response[0].firstName;
      singleComment.lastName = res.data.response[0].lastName;
      singleComment.ID = res.data.response[0].ID;
      singleComment.editedAt = res.data.response[0].editedAt;
      singleComment.isAccepted = res.data.response[0].isAccepted;
      singleComment.createdAt = res.data.response[0].createdAt;
      singleComment.username = res.data.response[0].username;
      singleComment.isActive = res.data.response[0].isActive;
      singleComment.detail = res.data.response[0].detail;
      singleComment.newsID = res.data.response[0].newsID;
      console.log("res from SingleComment: ", res.data.response[0]);
    })
    .catch((err) => {
      console.log("error in SinleComment: ", err);
    })

}

const addNews = (formData) => {
  axios
    .post("http://localhost:3000/admin/comment/" + id, {
      headers: {
        authorization: localStorage.getItem("user_token"),
      },
      params: {
        body: formData[0],
        params: formData[1],
      },
    })
    .then((res) => {
      console.log("res from addNews: ", res);
    })
    .catch((err) => {
      console.log("error in addNews: ", err);
    });
};


// get all users
const getUsers = () => {
  console.log("getUsers içinde");
  userList.list.splice(0, userList.list.lenght);
  services
    .admingetusersValue()
    .then((res) => {
      console.log("res from getusers:", res.data.response);
      userList.list = res.data.response;

      userlistD.firstName = res.data.response.firstName;
      userlistD.lastName = res.data.response.lastName;
      userlistD.ID = res.data.response.ID;
      userlistD.permissions = res.data.response.permissions;
      userlistD.username = res.data.response.username;
      userlistD.isActive = res.data.response.isActive;
      userlistD.tags = res.data.response.tags;
      userlistD.email = res.data.response.email;
    })
    .catch((err) => {
      console.log("error in getusers:", err);
    });
};
// get single user
const getSingleUser = (ID) => {
  singleUser.loader = true;
  services
    .adminGetSingleUserValue({ userID: ID })
    .then((res) => {
      singleUser.list = res.data.response;
      singleUserd.firstName = res.data.response.firstName;
      singleUserd.lastName = res.data.response.lastName;
      singleUserd.ID = res.data.response.ID;
      singleUserd.permissions = res.data.response.permissions;
      singleUserd.username = res.data.response.username;
      singleUserd.isActive = res.data.response.isActive;
      singleUserd.tags = res.data.response.tags;
      singleUserd.email = res.data.response.email;
      console.log("data içinden response liste:", singleUserd)
      singleUser.loader = false;
    })
    .catch((err) => {
      console.log("err in single users: ", err);
    })
}

// get all admins
const getAdmins = () => {
  console.log("getAdmins içinde");
  adminList.list.splice(0, adminList.list.lenght);
  services
    .adminGetAllAdmins()
    .then((res) => {
      console.log("res from getAdmins:", res.data.response);
      adminList.list = res.data.response;
    })
    .catch((err) => {
      console.log("error in getAdmins:", err);
    });
};
const deleteUser = (ID) => {
  services
    .adminDeleteUserValue({ userID: ID })
    .then((res) => {
      console.log("res from deleteUser: ", res);
    })
    .catch((err) => {
      console.log("error in deleteUser: ", err);
    })
}
const updateUser = (ID, permissions, fname, lastName, tagg, email) => {
  services
    .adminUpdateUserValue({ userID: ID, "permissions": permissions, "tags": tagg, "firstName": fname, "lastName": lastName, "email": email })
    .then((res) => {
      console.log("res from updateUser: ", res);
    })
    .catch((err) => {
      console.log("error in updateUser: ", err);
    })
}
// get all news
const getNews = () => {
  newsList.loader = true;
  newsList.list.splice(0, newsList.list.length);
  services
    .adminnewsGETValue()
    .then((res) => {
      console.log("res from getnews: ", res.data.response);
      newsList.list = res.data.response;
      newsList.loader = false;
    })
    .catch((err) => {
      console.log("error in getnews: ", err);
    });
};

// get all permissions
const getPermissions = () => {
  permissionsList.loader = true;
  services
    .adminPermissionsValue()
    .then((res) => {
      console.log("res from getperms: ", res);
      // permissionsList.list = res.data.permobject;
      permissionsList.list = res.data;
      permissionsList.loader = false;
    })
    .catch((err) => {
      console.log("error in getperms: ", err);
    });
};
// get AdminProfile
const getAdminProfile = () => {
  services
    .adminProfileValue()
    .then((res) => {
      adminProfile.firstName = res.data.response.firstName;
      adminProfile.lastName = res.data.response.lastName;
      adminProfile.ID = res.data.response.ID;
      adminProfile.permissions = res.data.response.permissions;
      adminProfile.username = res.data.response.username;
      adminProfile.isActive = res.data.response.isActive;
      adminProfile.tags = res.data.response.tags;
      adminProfile.email = res.data.response.email;
      console.log("data içinden response liste:", res)
    })
    .catch((err) => {
      console.log("err in adminProfile: ", err);
    })
}
const singleNewsd = reactive({
  title: "", summary: "", ID: 0, category: "", createdAt: ""
  , updatedAt: "", firstName: "", lastName: "", username: "", isActive: 0, image: "",
  video: "", videoDetail: "", newsDetail: ""
}, {
  ID: 15, newsID: 10, detail: "", createdAt: "",
  editedAt: "", username: "", firstName: "", lastName: "", isActive: 1, isAccepted: 1
});
// get single new
const getSingleNews = (ID) => {
  console.log("getsinglenewns içinde id", newId);
  singleNews.loader = true;
  services
    .adminnewsGETSingleNewValue({ newsID: ID })
    .then((res) => {
      console.log("res in get single news: ", res.data.response);
      console.log("content içinden id:", ID)
      singleNews.detail = res.data.response.news;
      singleNews.comment = res.data.response.comment;
      console.log("singleNews kendisi", singleNews)
      singleNews.loader = false;

    })
    .catch((err) => {
      console.log("err in single news: ", err.response.status);
      localStorage.removeItem("user_token");
      // setTimeout(() => router.go("/"), 2000);
    });
};
const adminAddNews = (crediential) => {
  console.log(crediential);
  const newsObject = crediential[0];
  const newsDetail = crediential[1];
  const newSend = [].concat(newsObject, newsDetail);
  console.log("newSend", newSend);
  services
    .adminAddNewsValue(newSend)
    .then((res) => {
      console.log("res in addNews: ", res);
      // return res.data;
    })
    .catch((err) => {
      console.log("err in addNews: ", err);
    });
};
// get pending news
const getPendingNews = () => {
  services
    .pendingNewsValue()
    .then((res) => {
      pendingNewsList.list = res.data.response;
      console.log("res from pending News: ", res.data.response)
    })
    .catch((err) => {
      console.log("error in pending News: ", err);
    })
};
const confirmNew = (ID, adminChoices) => {
  services
    .confirmNewValue({ newsID: ID }, { "adminChoice": adminChoices })
    .then((res) => {
      console.log("res from ConfirmComments: ", res);
    })
    .catch((err) => {
      console.log("error in ConfirmComments: ", err);
    });
};
const deleteNew = (ID) => {
  services
    .deleteNewValue({ newsID: ID })
    .then((res) => {
      console.log("res from deleteNews: ", res);
    })
    .catch((err) => {
      console.log("error in deleteNews: ", err);
    });
};
const updateNew = (ID, title, summary, detail) => {
  services
    .updateNewValue({ newsID: ID, "title": title, "detail": detail, "summary": summary })
    .then((res) => {
      console.log("res from updateNews: ", res);
    })
    .catch((err) => {
      console.log("error in updateNews: ", err);
    });
};


const updatepassword = (email) => {
  services
    .forgetPasswordValue({ "email": email })
    .then((res) => {
      console.log("res from updatepassword: ", res);
    })
    .catch((err) => {
      console.log("error in updatepassword: ", err);
    });
};


const liveNews = () => {
  services
    .liveNewsValue()
    .then((res) => {
      liveNewsList.list = res.data.response;
      console.log("res from live News: ", res.data.response)
    })
    .catch((err) => {
      console.log("error in live News: ", err);
    })
};
const deletedNews = () => {
  services
    .deletedNewsValue()
    .then((res) => {
      deletedNewsList.list = res.data.response;
      console.log("res from live News: ", res.data.response)
    })
    .catch((err) => {
      console.log("error in live News: ", err);
    })
}
const deletedComments = () => {
  services
    .deletedCommentsValue()
    .then((res) => {
      deletedCommentsList.list = res.data.response;
      console.log("res from live News: ", res.data.response)
    })
    .catch((err) => {
      console.log("error in live News: ", err);
    })
}
//getSingleCommentbyuserValue,{ newsID: 0, userID: 0 }
export {
  updateNew,
  newsList,
  getNews,
  getSingleNews,
  singleNews,
  getPendingNews,
  pendingNewsList,
  commentsList,
  deleteComment,
  getComments,
  userList,
  userlistD,
  getUsers,
  adminAddNews,
  commentId,
  confirmComment,
  getSingleComment,
  updateComments,
  singleComment,
  newId,
  adminList,
  getAdmins,
  getSingleUser,
  singleUser,
  singleUserd,
  getPendingComments,
  pendingCommentsList,
  adminChoice,
  deleteUser,
  confirmNew,
  deleteNew,
  liveComments,
  liveNews,
  liveNewsList,
  liveCommentsList,
  deletedComments,
  deletedCommentsList,
  deletedNewsList,
  deletedNews,
  updateUser,
  permissions,
  getPermissions,
  permissionsList,
  adminProfilea,
  adminProfile,
  getAdminProfile,
  updatepassword,
};
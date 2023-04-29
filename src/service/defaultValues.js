export default Object.freeze({
  //News
  adminnewsGETValue: {
    url: "adminnewsGETURL",
    method: "GET",
    params: {},
    header: {
      addToken: 1,
      multipart: 1,
      addurl: 0,
    },
  },
  adminnewsGETSingleNewValue: {
    url: "adminGetSingleNew",
    method: "GET",
    params: { newsID: 0 },
    header: {
      addToken: 1,
      multipart: 1,
      addurl: 1,
    },
  },
  adminAddNewsValue: {
    url: "adminAddNewsURL",
    method: "POST",
    data: {},
    params: {},
    header: {
      addToken: 1,
      multipart: 2,
      addurl: 0,
    },
    payload: {
      //parse: true,
      allow: "multipart/form-data",
      multipart: 2,
    },
  },
  pendingNewsValue: {
    url: "newsPendingURL",
    method: "GET",
    header: {
      addToken: 1,
      multipart: 1,
      addurl: 0,
    },
  },
  confirmNewValue: {
    url: "confirmNewURL",
    method: "PUT",
    params: {
      newsID: 0,
      "adminChoice": 1
    },
    header: {
      addToken: 1,
      multipart: 1,
      addurl: 1,
    },
  },
  deleteNewValue: {
    url: "newsDeleteURL",
    method: "DELETE",
    params: {
      newsID: 0,
    },
    header: {
      addToken: 1,
      multipart: 1,
      addurl: 1,
    },
  },
  updateNewValue: {
    url: "newsUpdateURL",
    method: "PUT",
    params: {
      newsID: 0,
      "title": "",
      "detail": "",
      "summary": "",
      "categoryID": "3",
      "typeID": "1",
      "authorID": 2
    },
    header: {
      addToken: 1,
      multipart: 1,
      addurl: 1,
    },
  },
  liveNewsValue: {
    url: "confirmedNewsURL",
    method: "GET",
    header: {
      addToken: 1,
      multipart: 1,
      addurl: 0,
    },
  },
  deletedNewsValue: {
    url: "newsDeletedURL",
    method: "GET",
    header: {
      addToken: 1,
      multipart: 1,
      addurl: 0,
    },
  },

  //Users
  adminadminRegisterValue: {
    url: 'adminaddadminURL',
    method: 'POST',
    data: {},
    params: {},
    header: {
      addToken: 1,
      multipart: 1,
      addurl: 0,
    },
  },
  admingetusersValue: {
    url: "adminusertableGETURL",
    method: "GET",
    params: {},
    header: {
      addToken: 1,
      multipart: 1,
      addurl: 0,
    },
  },
  adminRegisterValue: {
    url: "adminadduserURL",
    method: "POST",
    data: {},
    params: {},
    header: {
      addToken: 1,
      multipart: 1,
      addurl: 0,
    },
  },
  adminLoginValue: {
    url: "adminLoginURL",
    method: "POST",
    params: {},
    header: {
      addToken: 1,
      multipart: 1,
      addurl: 0,
    },
  },
  adminGetAllUsers: {
    url: "adminGetAllUsers",
    method: "GET",
    header: {
      addToken: 1,
      multipart: 1,
      addurl: 0,
    },
  },
  adminGetAllAdmins: {
    url: "adminGetAllAdminURL",
    method: "GET",
    header: {
      addToken: 1,
      multipart: 1,
      addurl: 0,
    },
  },
  adminGetSingleUserValue: {
    url: "adminGetSingleUserURL",
    method: "GET",
    params: { userID: 0 },
    header: {
      addToken: 1,
      multipart: 1,
      addurl: 1,
    },
  },
  adminDeleteUserValue: {
    url: "adminDeleteUserURL",
    method: "DELETE",
    params: {
      userID: 0
    },
    header: {
      addToken: 1,
      multipart: 1,
      addurl: 1,
    },
  },
  adminUpdateUserValue: {
    url: "adminUpdateUserURL",
    method: "PUT",
    params: {
      userID: 0,
      "permissions": 0,
      "tags": "",
      // "firstName": "",
      // "lastName": "",
      // "email":{},

    },
    header: {
      addToken: 1,
      multipart: 1,
      addurl: 1,
    },
  },
  //Permissions
  adminPermissionsValue: {
    url: "adminPermissionsURL",
    method: "GET",
    header: {
      addToken: 1,
      multipart: 1,
      addurl: 0,
    },
  },

    //forget password
    forgetPasswordValue: {
      url: "forgetPasswordURL",
      method: "POST",
      header: {
        addToken: 1,
        multipart: 1,
        addurl: 0,
      },
    },

  
  //Admin profile
  adminProfileValue: {
    url: "adminProfileURL",
    method: "GET",
    header: {
      addToken: 1,
      multipart: 1,
      addurl: 0,
    },
  },

  //Comments
  commentsGETValue: {
    url: "commentsGETURL",
    method: "GET",
    header: {
      addToken: 1,
      multipart: 1,
      addurl: 0,
    },
  },
  adminGetSingleCommentValue: {
    url: "adminGetSingleCommentURL",
    method: "GET",
    params: { commentsID: 0 },
    header: {
      addToken: 1,
      multipart: 1,
      addurl: 1,
    },
  },
  deleteCommentValue: {
    url: "commentsDELETEURL",
    method: "DELETE",
    params: {
      commentsID: 0
    },
    header: {
      addToken: 1,
      multipart: 1,
      addurl: 1,
    },
  },
  confirmCommentValue: {
    url: "commentsCONFIRMURL",
    method: "PUT",
    params: {
      commentsID: 0,
      "adminChoice": 1
    },
    header: {
      addToken: 1,
      multipart: 1,
      addurl: 1,
    },
  },
  pendingCommentValue: {
    url: "commentsPendingURL",
    method: "GET",
    header: {
      addToken: 1,
      multipart: 1,
      addurl: 0,
    },
  },
  liveCommentsValue: {
    url: "commentsConfirmedURL",
    method: "GET",
    header: {
      addToken: 1,
      multipart: 1,
      addurl: 0,
    },
  },
  deletedCommentsValue: {
    url: "commentsDeletedURL",
    method: "GET",
    header: {
      addToken: 1,
      multipart: 1,
      addurl: 0,
    },
  },
  updateCommentValue: {
    url: "commentsUpdateURL",
    method: "PUT",
    params: {
      commentsID: 0,
      "detail": "",
      "isActive": 0,
    },
    header: {
      addToken: 1,
      multipart: 1,
      addurl: 1,
    },
  },




  //18.02.2022 son
  admincategoriesValue: {
    url: "admincategoriesURL",
    method: "GET",
    header: {
      addToken: 1,
      multipart: 1,
      addurl: 0,
    },
  },
  getCategoryByIDValue: {
    url: "getCategoryByIDURL",
    method: "GET",
    params: { categoryID: 0 },
    header: {
      addToken: 1,
      multipart: 1,
      addurl: 1,
    },
  },
  getSingleCommentbyuserValue: {
    url: "getSingleCommentbyuserURL",
    method: "GET",
    params: { newsID: 0, userID: 0 },
    header: {
      addToken: 1,
      multipart: 1,
      addurl: 1,
    },
  },
  commentsAddValue: {
    url: "commentsAddURL",
    method: "POST",
    params: { newsID: 0},
    header: {
      addToken: 1,
      multipart: 1,
      addurl: 1,
    },
  },
  //TEST
  test2: {
    url: "test",
    method: "POST",
    params: {
      a: "2",
    },
    header: {
      addToken: 1,
      multipart: 1,
      addurl: 0,
    },
  },
});

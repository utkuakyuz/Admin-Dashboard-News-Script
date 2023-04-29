export default Object.freeze({
  // Login
  adminLoginURL: "/admin/login",
  // users
  adminusertableGETURL: "/admin/users",
  adminadduserURL: "/admin/user/adduser",
  adminGetAllUsers: "/admin/users",
  adminaddadminURL: "/admin/addAdmin",
  adminGetAllAdminURL: '/admin/admins',
  adminGetSingleUserURL: '/admin/user/{{userID}}',
  adminDeleteUserURL: '/admin/user/{{userID}}',
  adminUpdateUserURL: '/admin/user/{{userID}}',
  adminPermissionsURL: '/admin/permission',
  adminProfileURL: '/admin/profile',
  forgetPasswordURL: "/forget-password",

  // news
  adminnewsGETURL: "/admin/news",
  adminGetSingleNew: "/admin/news/{{newsID}}",
  singleNewsGETURL: `/guest/news/{{newsID}}`,
  adminAddNewsURL: "/admin/news/addnews",
  newsPendingURL: "/admin/news/pending",
  confirmNewURL: "/admin/news/confirm/{{newsID}}",
  updateNewURL: "/admin/news/{{newsID}}",
  newsDeleteURL: "/admin/news/{{newsID}}",
  confirmedNewsURL: "/admin/livenews",
  newsDeletedURL: "/admin/deletednews",
  // comments
  commentsGETURL: "/admin/comments",
  adminGetSingleCommentURL: "/admin/comment/{{commentsID}}",
  commentsDELETEURL: "/admin/comment/{{commentsID}}",
  commentsCONFIRMURL: "/admin/comment/confirm/{{commentsID}}",
  commentsPendingURL: "/admin/comment/pending",
  commentsConfirmedURL: "/admin/livecomments",
  commentsDeletedURL: "/admin/deletedcomments",
  commentsUpdateURL: "/admin/comment/{{commentsID}}",
  //TEST
  test: "/test/ccc?s={{a}}",


  //son
  commentsAddURL: " admin/comment/{{newsID}}",
  getSingleCommentbyuserURL:'admin/comment/{{newsID}}/{{userID}}',// ADMIN GETS ALL COMMENTS IN first NEWS and WRITTEN BY USERID=1
  admincategoriesURL:'admin/category',
  getCategoryByIDURL:'admin/category/{{categoryID}}',
 
});
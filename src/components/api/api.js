const baseInfo = {
  baseUrl:  'https://api.react-learning.ru/v2' ,
  baseUrl2: 'https://api.react-learning.ru/users',
    baseUrl3: 'https://api.react-learning.ru',
           
  // headers: {
  //   'Content-Type': 'application/json',
  //   authorization:
  //   'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDc4OWM5M2UwYmYyYzUxOWJkMGRiNWIiLCJncm91cCI6Imdyb3VwLTEyIiwiaWF0IjoxNjg1NjI2MDI5LCJleHAiOjE3MTcxNjIwMjl9.aU-ZrGi_AVHxmaudN7p0VX1L_mZElsrbOokEudQf-3o',
  //      },
  group: "group-12" 
 
};
const newHeaders = () => {
  return {
    headers: {
      "Content-Type": "application/json",
      authorization: JSON.parse(localStorage.getItem("tokenPostik"))?.token
    }
  }
};
const updatedGroup = () => {
  return JSON.parse(localStorage.getItem("tokenPostik"))?.group;
}

const onResponse = (res) => {
  return res.ok ? res.json() : res.json().then(() => Promise.reject("Error"));
};

  
  class Api {
    constructor(data, newHeaders) {
      this.baseUrl = data.baseUrl;
      this.baseUrl2 = data.baseUrl2
      this.baseUrl3 = data.baseUrl3;
      this.headers = data.headers;
      this.newHeaders = newHeaders;
    }

    getAllPosts() {
      return fetch(`${this.baseUrl}/${updatedGroup()}/posts`, {
        method: "GET",
        ...this.newHeaders(),
      }).then(onResponse);
    }


    getPostById(postId) {
      return fetch(`${this.baseUrl}/${updatedGroup()}/posts/${postId}`, {
        ...this.newHeaders(),
      }).then(onResponse)
    }

    searchPosts(title) {
      return fetch(`${this.baseUrl}/${updatedGroup()}/posts/search?query=${title}`, {
        ...this.newHeaders(),
        }
      ).then(onResponse);
    }

    getUserInfo() {
      return fetch(`${this.baseUrl2}/me`, {
        method: "GET",
        ...this.newHeaders(),
      }).then(onResponse);
    }

    getUsers() {
      return fetch(`${this.baseUrl}/users`, {
        method: "GET",
        ...this.newHeaders(),
      }).then(onResponse);
    }

    getUserInfoById(userId) {
      return fetch(`${this.baseUrl2}/${userId}`, {
        method: "GET",
        ...this.newHeaders(),
      }).then(onResponse);
    }
    // // установка лайка по id
    addLikeOnPosts(postId) {
      return fetch(`${this.baseUrl}/${updatedGroup()}/posts/likes/${postId}`, {
        ...this.newHeaders(),
        method: "PUT",
      }).then(onResponse);
    }
    // // удаление лайка по id
    deleteLikeOfPosts(postId) {
      return fetch(`${this.baseUrl}/${updatedGroup()}/posts/likes/${postId}`, {
        ...this.newHeaders(),
        method: "DELETE",
      }).then(onResponse);
    }
    // // 2 метода сразу
    changeLikePostStatus(postId, isLiked) {
      return fetch(`${this.baseUrl}/${updatedGroup()}/posts/likes/${postId}`, {
        ...this.newHeaders(),
        method: isLiked ? "DELETE" : "PUT",
      }).then(onResponse);
    }

    /*Методы регистрации/авторизации/сброса пароля*/
    registratedUser(data) {
      return fetch(`${this.baseUrl3}/signup`, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ ...data, group: 'group-12' })
      }).then(onResponse);
    }

    authorizedUser(data) {
      return fetch(`${this.baseUrl3}/signin`, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      }).then(onResponse);
    }

    resetPassword(dataUser) {
      return fetch(`${this.baseUrl3}/forgot-password `, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(dataUser),
      }).then(onResponse);
    }
    changePassword(data) {
      return fetch(`${this.baseUrl3}/password-reset/${data.token}`, {
        method: "PATCH",
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ password: data.password }),
      }).then(onResponse);
    }

    /*Получение постов*/

    // //Добавление поста
    getAddPost(post) {
      return fetch(`${this.baseUrl}/${updatedGroup()}/posts`, {
        method: "POST",
        ...this.newHeaders(),
        body: JSON.stringify(post),
      }).then(onResponse);
    }
    //изменение поста
    editPost(id, data) {
      return fetch(`${this.baseUrl}/${updatedGroup()}/posts/${id}`, {
        method: "PATCH",
        ...this.newHeaders(),
        body: JSON.stringify(data),
      }).then(onResponse);
    }
    // Удаление поста

    deletePostById(postId) {
      return fetch(`${this.baseUrl}/${updatedGroup()}/posts/${postId}`, {
        method: "DELETE",
        ...this.newHeaders(),
      }).then(onResponse);
    }

    //   //добавление комментария по id;

    getAllComments() {
      return fetch(`${this.basePostsUrl}/comments`, {
        ...this.newHeaders(),
      }).then(onResponse);
    }

    getAddCommentsPosts(postId, data) {
      return fetch(`${this.baseUrl}/${updatedGroup()}/posts/comments/${postId}`, {
        method: "POST",
        ...this.newHeaders(),
        body: JSON.stringify(data),
      }).then(onResponse);
    }

    getPostCommentsAll(id) {
      return fetch(`${this.baseUrl}/${updatedGroup()}/posts/comments/${id}`, {
          method: 'GET',
          ...this.newHeaders(),
      }).then(onResponse);
  }

    //   // получение комментариев конкрентного поста.

    getCommentOfPost(postId) {
      return fetch(`${this.baseUrl}/${updatedGroup()}/posts/comments/${postId}`, {
        method: "GET",
        ...this.newHeaders(),
      }).then(onResponse);
    }
    //удаление комментариев
    deleteComment(postId, commentId) {
      return fetch(`${this.baseUrl}/${updatedGroup()}/posts/comments/${postId}/${commentId}`, {
        method: "DELETE",
        ...this.newHeaders(),
      }).then(onResponse);
    }

    // Изменение данных пользователя

    editProfileInfo(data) {
      return fetch(`${this.baseUrl2}/me`, {
        method: "PATCH",
        ...this.newHeaders(),
        body: JSON.stringify(data),
      }).then(onResponse);
    }

    editAvatar(avatar) {
      return fetch(`${this.baseUrl2}/me/avatar`, {
        method: "PATCH",
        ...this.newHeaders(),
        body: JSON.stringify(avatar),
      }).then(onResponse);
    }
  }

  
  



  export const api = new Api(baseInfo, newHeaders);
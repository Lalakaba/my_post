const baseInfo = {
  baseUrl:  'https://api.react-learning.ru/v2/group-12' ,
           
  headers: {
    'Content-Type': 'application/json',
    authorization:
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDc4OWM5M2UwYmYyYzUxOWJkMGRiNWIiLCJncm91cCI6Imdyb3VwLTEyIiwiaWF0IjoxNjg1NjI2MDI5LCJleHAiOjE3MTcxNjIwMjl9.aU-ZrGi_AVHxmaudN7p0VX1L_mZElsrbOokEudQf-3o',
      
    
  },
  group: "group-12" 
 
};
const newHeaders = () => {
  return {
    headers: {
      "Content-Type": "application/json",
      authorization: localStorage.getItem("tokenPostik")
    }
  }
};


const onResponse = (res) => {
  return res.ok ? res.json() : res.json().then(() => Promise.reject('Error'));
};

  
  class Api {
    constructor(data, newHeaders) {
      this.baseUrl = data.baseUrl;
      this.headers = data.headers;
      this.newHeaders = newHeaders;
    }

    getAllPosts() {
      return fetch(`${this.baseUrl}/posts`, {
        method: "GET",
        ...this.newHeaders(),
      }).then(onResponse);
    }


    getPostById(postId) {
      return fetch(`${this.baseUrl}/posts/${postId}`, {
        ...this.newHeaders(),
      }).then(onResponse)
    }

    searchPosts(path) {
      return fetch(`${this.baseUrl}/posts/search?query=${path}`, {
        ...this.newHeaders(),
        }
      ).then(onResponse);
    }

    getUserInfo() {
      return fetch(`${this.baseUrl}/users/me`, {
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
      return fetch(`${this.baseUrl}/users/${userId}`, {
        method: "GET",
        ...this.newHeaders(),
      }).then(onResponse);
    }
    // // установка лайка по id
    addLikeOnPosts(postId) {
      return fetch(`${this.baseUrl}/posts/likes/${postId}`, {
        ...this.newHeaders(),
        method: "PUT",
      }).then(onResponse);
    }
    // // удаление лайка по id
    deleteLikeOfPosts(postId) {
      return fetch(`${this.baseUrl}/posts/likes/${postId}`, {
        ...this.newHeaders(),
        method: "DELETE",
      }).then(onResponse);
    }
    // // 2 метода сразу
    changeLikePostStatus(postId, isLiked) {
      return fetch(`${this.baseUrl}/posts/likes/${postId}`, {
        ...this.newHeaders(),
        method: isLiked ? "DELETE" : "PUT",
      }).then(onResponse);
    }

    /*Методы регистрации/авторизации/сброса пароля*/
    registratedUser(data) {
      return fetch(`${this.baseUrl}/signup`, {
        method: "POST",
        ...this.newHeaders(),
        body: JSON.stringify(data),
      }).then(onResponse);
    }

    authorizedUser(data) {
      return fetch(`${this.baseUrl}/signin`, {
        method: "POST",
        ...this.newHeaders(),
        body: JSON.stringify(data),
      }).then(onResponse);
    }

    resetPassword(dataUser) {
      return fetch(`${this.baseUrl}/forgot-password `, {
        method: "POST",
        ...this.newHeaders(),
        body: JSON.stringify(dataUser),
      }).then(onResponse);
    }
    changePassword(data) {
      return fetch(`${this.baseUrl}/password-reset/${data.token}`, {
        method: "PATCH",
        ...this.newHeaders(),
        body: JSON.stringify({ password: data.password }),
      }).then(onResponse);
    }

    /*Получение постов*/

    // //Добавление поста
    getAddPost(post) {
      return fetch(`${this.baseUrl}/posts`, {
        method: "POST",
        ...this.newHeaders(),
        body: JSON.stringify(post),
      }).then(onResponse);
    }
    //изменение поста
    editPost(id, data) {
      return fetch(`${this.baseUrl}/posts/${id}`, {
        method: "PATCH",
        ...this.newHeaders(),
        body: JSON.stringify(data),
      }).then(onResponse);
    }
    // Удаление поста

    deletePostById(postId) {
      return fetch(`${this.baseUrl}/posts/${postId}`, {
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
      return fetch(`${this.baseUrl}/posts/comments/${postId}`, {
        method: "POST",
        ...this.newHeaders(),
        body: JSON.stringify(data),
      }).then(onResponse);
    }

    getPostCommentsAll(id) {
      return fetch(`${this.baseUrl}/posts/comments/${id}`, {
          method: 'GET',
          ...this.newHeaders(),
      }).then(onResponse);
  }

    //   // получение комментариев конкрентного поста.

    getCommentOfPost(postId) {
      return fetch(`${this.baseUrl}/posts/comments/${postId}`, {
        method: "GET",
        ...this.newHeaders(),
      }).then(onResponse);
    }
    //удаление комментариев
    deleteComment(postId, commentId) {
      return fetch(`${this.baseUrl}/posts/comments/${postId}/${commentId}`, {
        method: "DELETE",
        ...this.newHeaders(),
      }).then(onResponse);
    }

    // Изменение данных пользователя

    editProfileInfo(data) {
      return fetch(`${this.baseUrl}/users/me`, {
        method: "PATCH",
        ...this.newHeaders(),
        body: JSON.stringify(data),
      }).then(onResponse);
    }

    editAvatar(avatar) {
      return fetch(`${this.baseUrl}/users/me/avatar`, {
        method: "PATCH",
        ...this.newHeaders(),
        body: JSON.stringify(avatar),
      }).then(onResponse);
    }
  }

  
  



  export const api = new Api(baseInfo, newHeaders);
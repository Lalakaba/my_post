const baseInfo = {
  baseUrl:  'https://api.react-learning.ru/v2/group-12' ,
           
  headers: {
    'Content-Type': 'application/json',
    authorization:
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDc4OWM5M2UwYmYyYzUxOWJkMGRiNWIiLCJncm91cCI6Imdyb3VwLTEyIiwiaWF0IjoxNjg1NjI2MDI5LCJleHAiOjE3MTcxNjIwMjl9.aU-ZrGi_AVHxmaudN7p0VX1L_mZElsrbOokEudQf-3o',
      
    
  },
  group: "group-12" 
 
};

const onResponse = (res) => {
  return res.ok ? res.json() : res.json().then(() => Promise.reject('Error'));
};

  
  class Api {
    constructor(data) {
      this.baseUrl = data.baseUrl;
      this.headers = data.headers;
    }

    getAllPosts() {
      return fetch(`${this.baseUrl}/posts`, {
        method: "GET",
        headers: this.headers,
      }).then(onResponse);
    }
    getPostId(id) {
      return fetch(`${this.baseUrl}v2/${this.group}/posts/${id}`, {
        method: "GET",
        headers: this.headers,
      }).then(onResponse);
    }

    searchPosts(path) {
      return fetch(
        `${this.baseUrl}/v2/${this.group}/posts/search?query=${path}`,
        {
          headers: this.headers,
        }
      ).then(onResponse);
    }

    getUserInfo() {
      return fetch(`${this.baseUrl}/users/me`, {
        method: "GET",
        headers: this.headers,
      }).then(onResponse);
    }

    getUsers() {
      return fetch(`${this.baseUrl}/users`, {
        method: "GET",
        headers: this.headers,
      }).then(onResponse);
    }

    getUserInfoById(userId) {
      return fetch(`${this.baseUrl}/users/${userId}`, {
        method: "GET",
        headers: this.headers,
      }).then(onResponse);
    }
    // // установка лайка по id
    addLikeOnPosts(postId) {
      return fetch(`${this.baseUrl}/posts/likes/${postId}`, {
        headers: this.headers,
        method: "PUT",
      }).then(onResponse);
    }
    // // удаление лайка по id
    deleteLikeOfPosts(postId) {
      return fetch(`${this.baseUrl}/posts/likes/${postId}`, {
        headers: this.headers,
        method: "DELETE",
      }).then(onResponse);
    }
    // // 2 метода сразу
    changeLikePostStatus(postId, isLiked) {
      return fetch(`${this.baseUrl}/posts/likes/${postId}`, {
        headers: this.headers,
        method: isLiked ? "DELETE" : "PUT",
      }).then(onResponse);
    }

    /*Методы регистрации/авторизации/сброса пароля*/
    registratedUser(data) {
      return fetch(`${this.baseUrl}/signup`, {
        method: "POST",
        headers: this.headers,
        body: JSON.stringify(data),
      }).then(onResponse);
    }

    authorizedUser(data) {
      return fetch(`${this.baseUrl}/signin`, {
        method: "POST",
        headers: this.headers,
        body: JSON.stringify(data),
      }).then(onResponse);
    }

    resetPassword(dataUser) {
      return fetch(`${this.baseUrl}/password-reset`, {
        method: "POST",
        headers: this.headers,
        body: JSON.stringify(dataUser),
      }).then(onResponse);
    }
    changePassword(data) {
      return fetch(`${this.baseUrl}/password-reset/${data.token}`, {
        method: "PATCH",
        headers: this.headers,
        body: JSON.stringify({ password: data.password }),
      }).then(onResponse);
    }

    /*Получение постов*/

    // //Добавление поста
    getAddPost(post) {
      return fetch(`${this.baseUrl}/posts`, {
        method: "POST",
        headers: this.headers,
        body: JSON.stringify(post),
      }).then(onResponse);
    }
    //изменение поста
    getchangePost(post, postId) {
      return fetch(`${this.baseUrl}/posts/${postId}`, {
        method: "PATCH",
        headers: this.headers,
        body: JSON.stringify(post),
      }).then(onResponse);
    }
    // Удаление поста

    deletePostById(postId) {
      return fetch(`${this.baseUrl}/posts/${postId}`, {
        method: "DELETE",
        headers: this.headers,
      }).then(onResponse);
    }

    //   //добавление комментария по id;

    getAllComments() {
      return fetch(`${this.basePostsUrl}/comments`, {
        headers: this.headers,
      }).then(onResponse);
    }

    getAddCommentsPosts(postId, data) {
      return fetch(`${this.baseUrl}/posts/comments/${postId}`, {
        method: "POST",
        headers: this.headers,
        body: JSON.stringify(data),
      }).then(onResponse);
    }

    //   // получение комментариев конкрентного поста.

    getCommentOfPost(postId) {
      return fetch(`${this.baseUrl}/posts/comments/${postId}`, {
        method: "GET",
        headers: this.headers,
      }).then(onResponse);
    }
    //удаление комментариев
    deleteComment(postId, commentId) {
      return fetch(`${this.baseUrl}/posts/comments/${postId}/${commentId}`, {
        method: "DELETE",
        headers: this.headers,
      }).then(onResponse);
    }

    // Изменение данных пользователя

    editProfileInfo(data) {
      return fetch(`${this.baseUrl}/users/me`, {
        method: "PATCH",
        headers: this.headers,
        body: JSON.stringify(data),
      }).then(onResponse);
    }

    editAvatar(avatar) {
      return fetch(`${this.baseUrl}/users/me/avatar`, {
        method: "PATCH",
        headers: this.headers,
        body: JSON.stringify(avatar),
      }).then(onResponse);
    }
  }

  
  



  export const api = new Api(baseInfo);
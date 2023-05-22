const baseInfo = {
  baseUrl: 'https://api.react-learning.ru',
  headers: {
    authorization:
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDVhNTJmMWUwYmYyYzUxOWI5ZDNkMGQiLCJncm91cCI6IjEyIiwiaWF0IjoxNjg0NDQ0ODc5LCJleHAiOjE3MTU5ODA4Nzl9.oxV0pbHwI1DnQ0WA-arR2YoydzqtHVbKv3dD1OJCjRA',
    'Content-Type': 'application/json',
  },
};

const onResponse = (res) => {
  return res.ok ? res.json() : res.json().then((err) => Promise.reject(err));
};

    
  
  const resp = (res) => {
    return res.json();
  };
  
  class Api {
    constructor(data) {
      this.baseUrl = data.baseUrl;
      this.headers = data.headers;
      this.group = 12;
    }

    getAllPosts() {
      return fetch(`${this.baseUrl}/v2/${this.group}/posts`, {
        method: 'GET',
        headers: this.headers,
      })
        .then(onResponse)
        
    }

    SearchPosts(title) {
      return fetch(`${this.baseUrl}/v2/${this.group}/posts/search?query=${title}`, {
        headers: this.headers,
      })
      .then(onResponse)
    };


    getUserInfo() {
      return fetch(`${this.baseUrl}/users/me`, {
          headers: this.headers
        })
        .then(onResponse)
    }

    getUsers() {
      return fetch(`${this.baseUrl}/v2/${this.group}/users`, {
          headers: this.headers
      })
      .then(onResponse)
  };

  AddLikeOnPosts(postId ) {
    return fetch(`${this.baseUrl}/v2/${this.group}/posts/likes/${postId}`, {
      headers: this.headers,
      method: 'PUT',
    })
    .then(onResponse)
  }
// // установка лайка по id
  DeleteLikeOfPosts(postId) {
    return fetch(`${this.baseUrl}/v2/${this.group}/posts/likes/${postId}`, {
      headers: this.headers,
      method: 'DELETE',
    })
    .then(onResponse)
  }
// //смена лайка и снятия лайка
  ChangeLikePostStatus(postId, isLiked) {
    return fetch(`${this.baseUrl}/posts/likes/${postId}`, {
      headers: this.headers,
      method: isLiked ? 'DELETE' : 'PUT',
    })
    .then(onResponse)
  }


    /*Методы регистрации/авторизации/сброса пароля*/
    // getRegisteredUser(data) {
    //   return fetch(`${this.baseUrl}/signup`, {
    //     method: 'POST',
    //     headers: 
    // { 'Content-Type': 'application/json' },
    //     body: JSON.stringify(data),
    //   })
    //     .then(resp)
    //     .catch((e) => console.log(e));
    // }
  
    // AuthorizedUser(data) {
    //   return fetch(`${this.baseUrl}/signin`, {
    //     method: 'POST',
    //     headers: this.headers
                 
    //     body: JSON.stringify(data),
    //   })
    //     .then(resp)
    //     .catch((e) => console.log(e));
    // }
  
    /*Получение постов*/
   
  
  // //Добавление поста
  //   getAddPost(data,id) {
  //     return fetch(`${this.baseUrl}v2/${this.group}/posts`, {
  //       method: 'POST',
  //       headers: this.headers,
  //       body: JSON.stringify(data),
  //     })
  //       .then((res) => {
  //         console.log(res);
  //         return res.json();
  //       })
  //       .catch((e) => console.log(e));
  //   }
  
  //   getPostsInfo(postId) {
  //     return fetch(`${this.baseUrl}v2/${this.group}/posts/${postId}`, {
  //       headers: this.headers,
  //     })
  //       .then(resp)
  //       .catch((e) => console.log(e));
  //   }
  
  //   //добавление комментария по id;

  //     getAddCommentsPosts(postId) {
  //     return fetch(`${this.baseUrl}/v2/${this.group}/posts/comments/${postId}`, {
  //       method: 'POST',
  //       headers: this.headers,
  //       body: JSON.stringify(data),
  //     })
  //       .then(resp)
  //       .catch((e) => console.log(e));
  //   }
 
  //   // получение комментариев конкрентного поста.

  //     getAllCommentsOfPosts(postId, groupId) {
  //     return fetch(`${this.baseUrl}/v2/${this.group}/posts/comments/${postId}`, {
  //       headers: this.headers,
  //     })
  //       .then(resp)
  //       .catch((e) => console.log(e));
  //   }
  // получение всех комментариев
    getAllCommentsPost(groupId, postId) {
      return fetch(`${this.baseUrl}/v2/${this.group}/posts/comments/ `, {
        headers: this.headers,
      })
        .then(resp)
        .catch((e) => console.log(e));
    
      }
  
  
                                                                     // // установка лайка по id
  }
  



  export const api = new Api(baseInfo);
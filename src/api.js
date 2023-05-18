const baseData= {
    baseUrl: 'https://api.react-learning.ru',
    headers: {
          
          authorization:'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDVhNTJmMWUwYmYyYzUxOWI5ZDNkMGQiLCJncm91cCI6IjEyIiwiaWF0IjoxNjg0NDQ0ODc5LCJleHAiOjE3MTU5ODA4Nzl9.oxV0pbHwI1DnQ0WA-arR2YoydzqtHVbKv3dD1OJCjRA',

          
    }       
  }
    
  
  const resp = (res) => {
    return res.json();
  };
  
  class Api {
    constructor(data) {
      this.baseUrl = data.baseUrl;
      this.headers = data.headers;
    }

    getAllPosts() {
      return fetch(`${this.baseUrl}/v2/:group-12/posts`, {
        method: 'GET',
        headers: this.headers,
      })
        .then(resp)
        .catch((e) => console.log(e));
    }



    /*Методы регистрации/авторизации/сброса пароля*/
    // getRegisteredUser(data) {
    //   return fetch(`${this.baseUrl}/signup`, {
    //     method: 'POST',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify(data),
    //   })
    //     .then(resp)
    //     .catch((e) => console.log(e));
    // }
  
    // AuthorizedUser(data) {
    //   return fetch(`${this.baseUrl}/signin`, {
    //     method: 'POST',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify(data),
    //   })
    //     .then(resp)
    //     .catch((e) => console.log(e));
    // }
  
    /*Получение постов*/
   
  }
  // //Добавление поста
  //   getAddPost(data,id) {
  //     return fetch(`${this.baseUrl}v2/:group${id}/posts`, {
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
  
  //   getProductInfo(groupId,postId) {
  //     return fetch(`${this.baseUrl}v2/${groupId}/posts/${postId}`, {
  //       headers: this.headers,
  //     })
  //       .then(resp)
  //       .catch((e) => console.log(e));
  //   }
  
  //   //добавление комментария по id;

  //     getAddCommentsOfProduct(groupId,postId, data) {
  //     return fetch(`${this.baseUrl}/v2/${groupId}/posts/comments/${postId}`, {
  //       method: 'POST',
  //       headers: this.headers,
  //       body: JSON.stringify(data),
  //     })
  //       .then(resp)
  //       .catch((e) => console.log(e));
  //   }
 
  //   // получение комментариев конкрентного поста.

  //     getAllCommentsOfProduct(postId, groupId) {
  //     return fetch(`${this.baseUrl}/v2/${groupId}/posts/comments/:postId${postId}`, {
  //       headers: this.headers,
  //     })
  //       .then(resp)
  //       .catch((e) => console.log(e));
  //   }
  // // получение всех комментариев
  //   getAllCommentsProducts(groupId, postId) {
  //     return fetch(`${this.baseUrl}/v2/${groupId}/posts/comments/ `, {
  //       headers: this.headers,
  //     })
  //       .then(resp)
  //       .catch((e) => console.log(e));
  //   }
  //   getSearchPosts(title,groupId) {
  //     return fetch(`${this.baseUrl}/v2/${groupId}/posts/search?query=${title}`, {
  //       headers: this.headers,
  //     })
  //       .then(resp)
  //       .catch((e) => console.log(e));
  //   }
  // // установка лайка по id
  //   getAddLikeOfPosts(postId,groupId ) {
  //     return fetch(`${this.baseUrl}/v2/${groupId}/posts/likes/${postId}`, {
  //       headers: this.headers,
  //       method: 'PUT',
  //     })
  //       .then(resp)
  //       .catch((e) => console.log(e));
  //   }
  // // установка лайка по id
  //   getDeleteLikeOfPosts(postId,groupId) {
  //     return fetch(`${this.baseUrl}/v2/${groupId}/posts/likes/${postId}`, {
  //       headers: this.headers,
  //       method: 'DELETE',
  //     })
  //       .then(resp)
  //       .catch((e) => console.log(e));
  //   }
  // //смена лайка и снятия лайка
  //   getChangeLikePostStatus(postId,groupId, isLiked) {
  //     return fetch(`${this.baseUrl}/v2/${groupId}/posts/likes/${postId}`, {
  //       headers: this.headers,
  //       method: isLiked ? 'DELETE' : 'PUT',
  //     })
  //       .then(resp)
  //       .catch((e) => console.log(e));
  //   }
  // }
  
  export const api = new Api(baseData);
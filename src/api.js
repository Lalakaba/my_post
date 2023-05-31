const baseInfo = {
  baseUrl: "https://api.react-learning.ru/v2/12" ||
           'https://api.react-learning.ru/v2/group-12',
  headers: {
    authorization:
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDVhNTJmMWUwYmYyYzUxOWI5ZDNkMGQiLCJncm91cCI6IjEyIiwiaWF0IjoxNjg0NDQ0ODc5LCJleHAiOjE3MTU5ODA4Nzl9.oxV0pbHwI1DnQ0WA-arR2YoydzqtHVbKv3dD1OJCjRA',
    'Content-Type': 'application/json',
  },
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
        method: 'GET',
        headers: this.headers,
      })
        .then(onResponse)
        
    }
    getPostId(id) {
      return fetch(`${this.baseUrl}v2/${this.group}/posts/${id}`, {
        method: "GET",
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
      return fetch(`${this.baseUrl}/users`, {
        
          headers: this.headers
      })
      .then(onResponse)
  };
// // установка лайка по id
  AddLikeOnPosts(postId ) {
    return fetch(`${this.baseUrl}/posts/likes/${postId}`, {
      headers: this.headers,
      method: 'PUT',
    })
    .then(onResponse)
  }
// // удаление лайка по id
  DeleteLikeOfPosts(postId) {
    return fetch(`${this.baseUrl}/posts/likes/${postId}`, {
      headers: this.headers,
      method: 'DELETE',
    })
    .then(onResponse)
  }
// // 2 метода сразу
  ChangeLikePostStatus(postId, isLiked) {
    return fetch(`${this.baseUrl}/posts/likes/${postId}`, {
      headers: this.headers,
      method: isLiked ? 'DELETE' : 'PUT',
    })
    .then(onResponse)
  }


      /*Методы регистрации/авторизации/сброса пароля*/
      RegistratedUser(data) {
        return fetch(`${this.baseUrl}/signup`, {
          method: "POST",
          headers: this.headers,
          body: JSON.stringify(data),
        }).then(onResponse);
      }
    
    AuthorizedUser(data) {
      return fetch(`${this.baseUrl}/signin`, {
        method: "POST",
      headers: this.headers,
      body: JSON.stringify(data),
    }).then(onResponse);
  }

  ResetPassword(dataUser) {
    return fetch(`${this.baseUrl}/password-reset`,{
      method: "POST",
      headers: this.headers,
      body: JSON.stringify(dataUser)
        }).then(onResponse)
    }
    ChangePassword(dataUser, token) {
      return fetch(`${this._baseUrl}/password-reset/${token}`, {
          headers: this._headers,
          method: 'PATCH',
          body: JSON.stringify(dataUser),
      }).then(onResponse);
  }




    /*Получение постов*/
   
  
  // //Добавление поста
     getAddPost(post) {
     return fetch(`${this.baseUrl}/posts`, {
       method: 'POST',
        headers: this.headers,
      body: JSON.stringify(post),
      }).then(onResponse)
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

    deletePostById(PostId) {
      return fetch(`${this.baseUrl}/posts/${PostId}`, {
        method: "DELETE",
        headers: this.headers,
        // authorization: `Bearer ${localStorage.getItem("Api")}`,
      }).then(onResponse);
    }


  
   
  




  //   //добавление комментария по id;

      getAddCommentsPosts(comments, postId) {
     return fetch(`${this.baseUrl}/posts/comments/${postId}`, {
         method: 'POST',
         headers: this.headers,
         body: JSON.stringify(comments),
       })
       .then(onResponse)
      }
 
  //   // получение комментариев конкрентного поста.

     getCommentOfPost(postId) {
      return fetch(`${this.baseUrl}/posts/comments/${postId}`, {
        method: "GET",
       headers: this.headers,
       })
       .then(onResponse)
      }
//удаление комментариев
      deleteComment(postId, commentId) {
        return fetch(`${this.baseUrl}/posts/comments/${postId}/${commentId}`, {
          method: "DELETE",
          headers: this.headers,
          // authorization: `Bearer ${localStorage.getItem("Api")}`,
        }).then(onResponse);
      }
  
  
    }

  
  



  export const api = new Api(baseInfo);

export const findLiked = (posts, id) => {
    return posts.likes.some(e => e === id)
  }



  export const filteredPosts = (posts) => {
    return posts.filter(e => e.author._id === '645a52f1e0bf2c519b9d3d0d')
  }



  export const hashtag = (tags) => {
    return tags.trim().split(',');
  };

export const findLiked = (cards, id) => {
    return cards.likes.some(e => e === id)
  }



  export const filteredCards = (cards) => {
    return cards.filter(e => e.author._id === '645a52f1e0bf2c519b9d3d0d')
  }

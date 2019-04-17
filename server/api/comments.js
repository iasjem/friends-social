const axios = require('axios');

const findAllCommentsByPost = async (postID) => {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/1/comments?postId=${postID}`);
    return response.data[0];
};

module.exports = {
    findAllCommentsByPost
}   
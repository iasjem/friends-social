const axios = require('axios');

const findAllCommentsByPost = async (postID) => {
    const response = await axios.get(`${process.env.API_BASE_URL}posts/1/comments?postId=${postID}`);
    return response.data[0];
};

module.exports = {
    findAllCommentsByPost
}   
const axios = require('axios');

const findAllCommentsByPost = async (postId) => {
    const response = await axios.get(`${process.env.API_BASE_URL}posts/1/comments?postId=${postId}`);
    return response.data;
};

module.exports = {
    findAllCommentsByPost
}   
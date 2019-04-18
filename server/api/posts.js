const axios = require('axios');

const findAllPosts = async () => {
    const response = await axios.get(`${process.env.API_BASE_URL}posts`);
    return response.data;
};

const findPostByID = async (postID) => {
    const response = await axios.get(`${process.env.API_BASE_URL}posts?id=${postID}`);
    return response.data[0];
};

const findPostsByUser = async (userID) => {
    const response = await axios.get(`${process.env.API_BASE_URL}posts?userId=${userID}`);
    return response.data;
};

module.exports = {
    findAllPosts,
    findPostByID,
    findPostsByUser
}   
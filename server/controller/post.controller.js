const api = require('../api/posts');
const view = require('../view/post');
const { errorView } = require('../view/error');
const { Err } = require('../model/Error');
let { Post } = require('../model/Post');

const load = posts => {
    return posts.map(post => {
        let { userId, id, title, body } = post;
        Post = { userId, id, title, body };
        return Post;
    });
};

const feed = async () => {
    const posts = await api.findAllPosts();
    if (!posts) return errorView(Err.feedLoadFailure);
    let Posts = load(posts);
    return view.postListView(Posts);
};

const userFeed = async (userId) => {
    const posts = await api.findPostsByUser(userId);
    if (!posts) return errorView(Err.postsNotFound);
    let Posts = load(posts);
    return view.postListView(Posts);
};

const postPreview = async (postID) => {
    const post = await api.findPostByID(postID);
    if (!post) return errorView(Err.pageNotFound);
    let { userId, title, body } = post;
    Post = { userId, title, body };
    return view.postView(Post);
};

module.exports = {
    feed,
    userFeed,
    postPreview
}
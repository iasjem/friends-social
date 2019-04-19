const api = require('../api/posts');
const user = require('../api/users');
const view = require('../view/post');
const { errorView } = require('../view/error');
const { Err } = require('../model/Error');
let { Post } = require('../model/Post');

const getDataFrom = (post) => {
    let { userId, id, title, body } = post;
    Post = { userId, id, title, body };
    return Post;
};

const load = posts => {
    return posts.map((post) => {    
        let Post = getDataFrom(post);
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

const postPreview = async (postId) => {
    const post = await api.findPostByID(postId);
    if (!post) return errorView(Err.pageNotFound);
    let Post = getDataFrom(post);
    let author = await user.findUserById(Post.userId);
    if (!author) Post.author = "Unknown";
    else Post.author = author.username;
    return view.postView(Post);
};

module.exports = {
    feed,
    userFeed,
    postPreview
}
const api = require('../api/comments');
const view = require('../view/comment');
const { errorView } = require('../view/error');
const { Err } = require('../model/Error');
let { Comment } = require('../model/Comment');

const load = comments => {
    return comments.map(comment => {
        let { postId, id, name, email, body } = comment;
        Comment = { postId, id, name, email, body };
        return Comment;
    });
};

const postAllComments = async (postId) => {
    const comments = await api.findAllCommentsByPost(postId);
    if (!comments) return errorView(Err.commentsNotFound);
    let Comments = load(comments);
    return view.commentListView(Comments);
};

module.exports = {
    postAllComments
}
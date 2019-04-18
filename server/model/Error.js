const Err = {
    userNotFound: {
        title: "Login Error",
        message: "User does not exist. Please try again."
    },
    postsNotFound: {
        title: "Empty User Feed",
        message: "No posts yet for this user."
    },
    commentsNotFound: {
        title: "Empty Comment Section",
        message: "No comments yet for this post."
    },
    feedLoadFailure: {
        title: "Loading Error",
        message: "Server cannot load feed. Please check your internet connection."
    },
    pageNotFound: {
        title: "404",
        message: "Page not found. Please comeback later."
    }
};

module.exports = {
    Err
}
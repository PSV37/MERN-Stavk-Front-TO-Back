import axios from "axios";
import {
  ADD_POST,
  GET_POSTS,
  GET_POST,
  GET_ERRORS,
  POST_LOADING,
  DELETE_POST
} from "./types";

export const addPost = postData => dispatch => {
  axios
    .post("/api/posts", postData)
    .then(res =>
      dispatch({
        type: ADD_POST,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

//Get All Posts
export const getPosts = () => dispatch => {
  dispatch(postLoding());
  axios
    .get("api/posts/all")
    .then(res =>
      dispatch({
        type: GET_POSTS,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_POSTS,
        payload: null
      })
    );
};

//Get Post By Id
export const getPost = id => dispatch => {
  axios
    .get("/api/posts/" + id)
    .then(res =>
      dispatch({
        type: GET_POST,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_POST,
        payload: null
      })
    );
};

//Delete Post By Id
export const deletePost = id => dispatch => {
  axios
    .delete("/api/posts/" + id)
    .then(res =>
      dispatch({
        type: DELETE_POST,
        payload: res.data.post
      })
    )
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

//Add Comments Like
export const addLike = id => dispatch => {
  axios
    .post("/api/posts/like/" + id)
    .then(res => dispatch(getPosts()))
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

// Add Comments Unlike
export const removeLike = id => dispatch => {
  axios
    .post("/api/posts/unlike/" + id)
    .then(res => dispatch(getPosts()))
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

export const addComment = (postId, commentData) => dispatch => {
  axios
    .post("/api/posts/comments/" + postId, commentData)
    .then(res =>
      dispatch({
        type: GET_POST,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

//Delete Comment From Comment
export const deleteComment = (postId, commentId) => dispatch => {
  axios
    .delete("/api/posts/comments/" + postId + "/" + commentId)
    .then(res =>
      dispatch({
        type: GET_POST,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

export const postLoding = () => {
  return {
    type: POST_LOADING
  };
};

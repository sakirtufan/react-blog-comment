import axios from "axios";
import { api } from "../../api";

export const getPostList = () => dispatch => {
  api()
    .get("/posts")
    .then((response) => {
      dispatch({ type: "GET_POST_LIST", payload: response.data })
    })
    .catch((error) => {
      dispatch({ type: "GET_POST_LIST_ERROR", payload: error })
    })
}

export const getPost = (id) => dispatch => {
  axios
    .all([api().get(`/posts/${id}`), api().get(`/posts/${id}/comments`)])
    .then((responses) => {
      const payload = {
        ...responses[0].data,
        comments: responses[1].data
      }
      dispatch({ type: 'GET_POST', payload: payload })
    })
    .catch((err) => {
      dispatch({ type: 'GET_POST_ERROR', payload: err })
    });
}

export const addComment = (id, comment) => dispatch => {
  api()
    .post(`/posts/${id}/comments`, comment)
    .then((response) => {
      dispatch({ type: 'ADD_COMMENT', payload: response.data })
    })
    .catch((error) => {
      dispatch({ type: 'ADD_COMMENT_ERROR', payload: error })
    });
}

export const deletePost = (id, close, push) => dispatch => {
  api().delete('/posts/' + id)
    .then((response) => {
      dispatch({ type: 'DELETE_POST', payload: id })
      // modal close
      close();
      // push to home
      push('/')
    })
    .catch((error) => {
      dispatch({ type: 'DELETE_POST_ERROR', payload: error })
    })
}

export const editPost = (id, post, push) => dispatch => {
  
  api().put(`/posts/${id}`, post)
    .then((response) => {
      dispatch({ type:'EDIT_POST',payload: response.data})
      push(`/posts/${id}`)
    })
    .catch(() => {
      dispatch({ type:'EDIT_POST_ERROR', payload:"Post title and post content are required."});
    });
}
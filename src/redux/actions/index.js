import { api } from "../../api";

const getPostList = () => dispatch => {
  api()
  .get("/posts")
  .then((response) => {
    dispatch({type: "GET_POST_LIST", payload: response.data})
  })
  .catch((error) => {
    dispatch({type: "GET_POST_LIST_ERROR", payload: error})
  })
}

export default getPostList;
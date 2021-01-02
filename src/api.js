import axios from "axios";

export const api= () => {
  return axios.create({
    baseURL: "https://react-yazi-yorum.herokuapp.com",
  });
}

//api().get('/posts) == axios.get("https://react-yazi-yorum.herokuapp.com/posts")
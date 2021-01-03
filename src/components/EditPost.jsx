import React, { useEffect,useState } from 'react'
import { api } from '../api';
import PostForm from './PostForm'

const EditPost = (props) => {
  const [post, setPost] = useState({})
  const { id } = props.match.params;

  useEffect(() => {
    api().get(`/posts/${id}`).then((response) => {
      setPost({title: response.data.title, content: response.data.content});
    })
  },[])
  return (
    <div>
       <h1>Post Editing Form</h1>
      <PostForm post={post}/>
    </div>
  )
}


export default  EditPost;
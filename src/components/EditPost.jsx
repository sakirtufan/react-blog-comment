import React from 'react'
import { useSelector } from 'react-redux';
// import { useParams } from 'react-router-dom';
import PostForm from './PostForm'

const EditPost = (props) => {
  // const [post, setPost] = useState({})
  // const { id } = props.match.params;
  // const { id } = useParams();

  const post = useSelector(state => state.post)


  // useEffect(() => {
  //   api().get(`/posts/${id}`).then((response) => {
  //     setPost({title: response.data.title, content: response.data.content});
  //   })
  // },[])

  return (
    <div>
       <h1>Post Editing Form</h1>
      <PostForm post={post}/>
    </div>
  )
}


export default  EditPost;
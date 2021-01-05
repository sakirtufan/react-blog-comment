const INITIAL_STATE = {
  postList: [],
  postListErorMessage:'',
  post:{
    title:'', id:'',created_at:'',content:'',comments:[]
  },
  postError:'',
  addCommentError:'',
  deletePostError:'',
  editPostError:''
}

export const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'GET_POST_LIST':
      return {...state, postList: action.payload, postListErorMessage:''};
    case 'GET_POST_LIST_ERROR':
      return {...state, postListErorMessage: action.payload}; 
    case 'GET_POST':
      return {...state, post : action.payload, postError:''};
    case 'GET_POST_ERROR':
      return {...state, postError: action.payload};   
    case 'ADD_COMMENT':
      return {...state, post:{...state.post, comments: [...state.post.comments, action.payload]}, addCommentError:''};
    case 'ADD_COMMENT_ERROR':
      return {...state, addCommentError: action.payload};
    case 'DELETE_POST' :
      return {...state, postList: state.postList.filter((post) => {
        return (post.id !== action.payload)
      }), deletePostError:'' }
    case 'DELETE_POST_ERROR':
      return {...state, deletePostError:action.payload}
    case 'EDIT_POST':
      return {...state, post: {...state.post, ...action.payload}, editPostError:''}
    case 'EDIT_POST_ERROR':
      return {...state, editPostError:action.payload}
  
    default:
      return state;
  }
}
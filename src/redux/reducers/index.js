const INITIAL_STATE = {
  postList: [],
  postListErorMessage:''
}


export const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'GET_POST_LIST':
      return {...state, postList: action.payload};
    case 'GET_POST_LIST_ERROR':
      return {...state, postListErorMessage: action.payload};      
  
    default:
      return state;
  }
}
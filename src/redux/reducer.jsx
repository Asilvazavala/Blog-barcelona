import {
  GET_PUBLICATIONS,
  SEARCH_PUBLICATION_BY_CATEGORY,
  SEARCH_PUBLICATION_BY_ID,
  GET_COMMENTS,
  CREATE_COMMENT,
  DELETE_COMMENT,
  UPDATE_COMMENT,
  LOAD_PUBLICATION,
} from './actions'

const initialState = {
  publications: [],
  detailPublication: [],
  category: [],
  comments: []
}

const rootReducer = (state = initialState, action) => {
  switch(action.type) {
    case GET_PUBLICATIONS: 
      return { ...state,
        publications: action.payload,
        category: action.payload };

    case SEARCH_PUBLICATION_BY_CATEGORY:
      return { ...state, 
        publications: action.payload };

    case SEARCH_PUBLICATION_BY_ID:
      return { ...state, 
        detailPublication: action.payload };

    case GET_COMMENTS: 
      return { ...state,
        comments: action.payload };

    case CREATE_COMMENT:
      return { ...state, 
        comments: action.payload };

    case DELETE_COMMENT:
      return { ...state, 
        comments: action.payload };

    case UPDATE_COMMENT:    
      return { ...state, 
        comments: action.payload };

    case LOAD_PUBLICATION:    
      return { ...state, 
        publications: [], 
        detailPublication: [] };

    default:
      return { ...state };
  }
}

export default rootReducer
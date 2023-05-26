import {
  GET_PUBLICATIONS,
  SEARCH_PUBLICATION_BY_CATEGORY,
  SEARCH_PUBLICATION_BY_ID,
  CREATE_COMMENT,
  DELETE_COMMENT,
  UPDATE_COMMENT
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
      return {...state,
        publications: action.payload,
        category: action.payload};

    case SEARCH_PUBLICATION_BY_CATEGORY:
      return {...state, 
        publications: action.payload};

    case SEARCH_PUBLICATION_BY_ID:
      return {...state, 
        detailPublication: action.payload};

    case CREATE_COMMENT:
      return {...state,}

    case DELETE_COMMENT:
      return {...state,}

    case UPDATE_COMMENT:
      return {...state,}

    default:
      return { ...state}
  }
}

export default rootReducer
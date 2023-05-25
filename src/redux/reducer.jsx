import {
  GET_PUBLICATIONS,
  SEARCH_PUBLICATION_BY_NAME,
  SEARCH_PUBLICATION_BY_CATEGORY
} from './actions'

const initialState = {
  publications: []
}

const rootReducer = (state = initialState, action) => {
  switch(action.type) {
    case GET_PUBLICATIONS: 
      return {...state,
        publications: action.payload};
        
    case SEARCH_PUBLICATION_BY_NAME:
      return {...state, 
        publications: action.payload};

    case SEARCH_PUBLICATION_BY_CATEGORY:
      return {...state, 
        publications: action.payload};

    default:
      return { ...state}
  }
}

export default rootReducer
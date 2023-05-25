import axios from 'axios'
export const GET_PUBLICATIONS = 'GET_PUBLICATIONS'
export const SEARCH_PUBLICATION_BY_NAME = 'SEARCH_PUBLICATION_BY_NAME'
export const SEARCH_PUBLICATION_BY_CATEGORY = 'SEARCH_PUBLICATION_BY_CATEGORY'

export const getPublications = () => {
  return async function (dispatch) {
    try {
      const allPublications = await axios.get('/publications')
      dispatch({ type: GET_PUBLICATIONS, payload: allPublications.data })
    } catch (error) {
        window.alert('No se pudieron cargar las publicaciones')
      }
  }
}

export const searchPublicationByName = (search) => {
  return async function (dispatch) {
    try {
      let json = await axios.get(`/publications?title=${search}`);
      dispatch({ type: SEARCH_PUBLICATION_BY_NAME, payload: json.data });
    } catch (error) {
        alert(`La publicación "${search}" no existe, intenta con otro`);
      }
  }
}

export const searchPublicationByCategory = (search) => {
  return async function (dispatch) {
    try {
      let json = await axios.get(`/publications/${search}`);
      dispatch({ type: SEARCH_PUBLICATION_BY_CATEGORY, payload: json.data });
    } catch (error) {
        alert(`La publicación "${search}" no existe, intenta con otro`);
      }
  }
}
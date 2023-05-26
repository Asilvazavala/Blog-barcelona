import axios from 'axios'
export const GET_PUBLICATIONS = 'GET_PUBLICATIONS'
export const SEARCH_PUBLICATION_BY_CATEGORY = 'SEARCH_PUBLICATION_BY_CATEGORY'
export const SEARCH_PUBLICATION_BY_ID = 'SEARCH_PUBLICATION_BY_ID'
export const CREATE_COMMENT = 'CREATE_COMMENT'
export const DELETE_COMMENT = 'DELETE_COMMENT'
export const UPDATE_COMMENT = 'UPDATE_COMMENT'

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

export const searchPublicationByCategory = (search) => {
  return async function (dispatch) {
    try {
      const json = await axios.get(`/publications?category=${search}`);
      dispatch({ type: SEARCH_PUBLICATION_BY_CATEGORY, payload: json.data });
    } catch (error) {
        alert(`No hay publicaciones de la categoría "${search}", intenta con otro`);
      }
  }
}

export const searchPublicationById = (search) => {
  return async function (dispatch) {
    try {
      const json = await axios.get(`/publications/${search}`);
      dispatch({ type: SEARCH_PUBLICATION_BY_ID, payload: json.data });
    } catch (error) {
        alert(`La publicación con ID "${search}" no existe, intenta con otro`);
      }
  }
}

export const createComment = (comment) => {
  return async function () {
    try {
      const newComment = await axios.post('/comments', comment)
      return newComment
    } catch(error) {
        alert('No se pudo crear el comentario')
      }
  }
}

export const deleteComment = (id) => {
  return async function () {
    try {
      const deleteComment = await axios.delete(`/comments${id}`)
      return deleteComment
    } catch (error) {
        alert(`No se puedo eliminar el comentario, no existe el comentario con ID ${id}`)
      }
  }
}

export const updateComment = (id) => {
  return async function () {
    try {
      const updateComment = await axios.put(`/comments${id}`)
      return updateComment
    } catch (error) {
        alert(`No se pudo actualizar el comentario, no existe el comentario con ID ${id}`)
      }
  }
}
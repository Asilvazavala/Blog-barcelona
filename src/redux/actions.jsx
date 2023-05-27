import axios from 'axios'
export const GET_PUBLICATIONS = 'GET_PUBLICATIONS'
export const SEARCH_PUBLICATION_BY_CATEGORY = 'SEARCH_PUBLICATION_BY_CATEGORY'
export const SEARCH_PUBLICATION_BY_ID = 'SEARCH_PUBLICATION_BY_ID'
export const GET_COMMENTS = 'GET_COMMENTS'
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

export const getComments = () => {
  return async function (dispatch) {
    try {
      const comments = await axios.get('/comments')
      dispatch({ type: GET_COMMENTS, payload: comments.data })
    }
    catch (error) {
      window.alert('No se pudieron cargar los comentarios')
    }
  }
}

export const createComment = (comment) => {
  return async function (dispatch) {
    try {
      await axios.post('/comments', comment)
      const comments = await axios.get('/comments')
      // alert('Comentario agregado con éxito!!')
      dispatch({ type: CREATE_COMMENT, payload: comments.data });
    } catch(error) {            
        alert('No se pudo crear el comentario')        
      }
  }
}

export const deleteComment = (id) => {
  return async function (dispatch) {
    try {
      await axios.delete(`/comments/${id}`)
      const comments = await axios.get('/comments')
      // alert('Comentario eliminado con éxito!!')
      dispatch({ type: DELETE_COMMENT, payload: comments.data });
    } catch (error) {
        alert(`No se puedo eliminar el comentario, no existe el comentario con ID ${id}`)
      }
  }
}

export const updateComment = (id) => {
  return async function (dispatch) {
    try {
      await axios.put(`/comments/${id}`)
      const comments = await axios.get('/comments')
      // alert('Comentario actualizado con éxito!!')
      dispatch({ type: UPDATE_COMMENT, payload: comments.data });
    } catch (error) {
        alert(`No se pudo actualizar el comentario, no existe el comentario con ID ${id}`)
      }
  }
}
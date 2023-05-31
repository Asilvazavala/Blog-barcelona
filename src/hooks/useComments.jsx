import { useSelector } from 'react-redux'
import { getComments, createComment, deleteComment, updateComment } from '../redux/actions'
import { useCallback, useEffect, useState, useRef } from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import { useFunction } from '../hooks/useFunction'

export function useComments () {
  const comments = useSelector(state => state.comments)
  const { isAuthenticated, user } = useAuth0()
  const { dispatch, id, notificationSuccess, notificationWarning, notificationError } = useFunction()
  const textareaRef  = useRef()

  const [isEditing, setIsEditing] = useState(false)
  const [editingItem, setEditingItem] = useState(null)
  const [comment, setComment] = useState({
    text: '',
    publicationId: id,
    userID: user?.email,
    image: user?.picture,
    username: user?.given_name,
  })    
  
  useEffect(() => {
    dispatch(getComments())
  }, [dispatch])
  

  const handleChange = (e) => {
    setComment({ 
      text: e.target.value, 
      publicationId: id,
      userID: user.email,
      image: user.picture,
      username: user.given_name,
     })
  }
  

  const handleSubmit = useCallback((e) => {
    e.preventDefault()

    if(!isAuthenticated) return notificationError('Inicia sesión primero para poder crear comentarios')
    if (isEditing) return notificationWarning('No se pueden crear comentarios mientras se está editando un comentario')
    
    if (comment.text.length < 10) {
      notificationWarning('Los comentarios deben tener al menos 10 carácteres')
    } else if(comment.text.length > 255) {
        notificationWarning('Los comentarios deben tener menos de 255 carácteres')
     } else {
        dispatch(createComment(comment))
        setComment({ 
          text: '', 
          publicationId: id,
          userID: user.email,
          image: user.picture,
          username: user.given_name,
         })
         notificationSuccess('¡Comentario creado exitosamente!')
      }
  }, [comment, dispatch, id, user, notificationSuccess, notificationWarning, notificationError,  isEditing, isAuthenticated])


  const handleDelete = useCallback((idDelete) => {    
    dispatch(deleteComment(idDelete))
    notificationSuccess('¡Comentario eliminado exitosamente!')  
  }, [dispatch, notificationSuccess])


  const handleUpdate = (idUpdate, text) => {
    const updateText = { text: text }
    dispatch(updateComment(idUpdate, updateText))
    setIsEditing(false)
    setEditingItem(null)
    setComment({ 
      text: '', 
      publicationId: id,
      userID: user.email,
      image: user.picture,
      username: user.given_name,
     })
    notificationSuccess('¡Comentario actualizado exitosamente!')
  }

  const handleLike = (pubID, userID) => {
    if(!isAuthenticated) return notificationError('Inicia sesión primero para dar like')
    const commentToLike = comments.find((c) => c.id === pubID);
    if (commentToLike.dislikedBy.includes(userID)) return

    if (!commentToLike.likedBy.includes(userID)) {
      const updateLikes = {
        like: commentToLike.like + 1,
        likedBy: [...commentToLike.likedBy, userID]
      };
      dispatch(updateComment(pubID, updateLikes));
    } else {
        const indexToRemove = comments.findIndex((c) => c.id === pubID); 
        const removeComment = comments.splice(indexToRemove, 1)
        const updateLikes = {
          like: commentToLike.like - 1,
          likedBy: [removeComment]
        };
        dispatch(updateComment(pubID, updateLikes));
      }
  }


  const handleDislike = (pubID, userID) => {
    if(!isAuthenticated) return notificationError('Inicia sesión primero para dar dislike')
    const commentToDislike = comments.find((c) => c.id === pubID);
    if (commentToDislike.likedBy.includes(userID)) return

    if (!commentToDislike.dislikedBy.includes(userID)) {
      const updateDislikes = {
        dislike: commentToDislike.dislike + 1,
        dislikedBy: [...commentToDislike.dislikedBy, userID]
      };
      dispatch(updateComment(pubID, updateDislikes));
    } else {
        const indexToRemove = comments.findIndex((c) => c.id === pubID); 
        const removeComment = comments.splice(indexToRemove, 1)
        const updateDislikes = {
          dislike: commentToDislike.dislike - 1,
          dislikedBy: [removeComment]
        };
        dispatch(updateComment(pubID, updateDislikes));
      }
  }

  const handleEdit = (id, text) => {
    setComment({ text: text })
    setIsEditing(!isEditing)
    setEditingItem(id)
    textareaRef .current.focus()
  }

  return { 
    comment, 
    comments, 
    handleChange, 
    handleSubmit, 
    handleDelete, 
    handleUpdate, 
    handleLike,
    handleDislike,
    handleEdit,
    id, 
    user, 
    isAuthenticated,
    isEditing,
    editingItem,
    textareaRef 
   }
}

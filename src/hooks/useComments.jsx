import { useSelector } from 'react-redux'
import { getComments, createComment, deleteComment, updateComment } from '../redux/actions'
import { useCallback, useEffect, useState, useRef } from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import { useFunction } from '../hooks/useFunction'

export function useComments () {
  const comments = useSelector(state => state.comments)
  const { isAuthenticated, user } = useAuth0()
  const { dispatch, id, notificationSuccess, notificationWarning } = useFunction()
  const textAreaRef = useRef(null)

  const [like, setLike] = useState(0)
  const [isEditing, setIsEditing] = useState(false)
  const [editingItem, setEditingItem] = useState(null)
  const [unlike, setUnlike] = useState(0)

  const [isLikeActive, setIsLikeActive] = useState(false)
  const [isUnlikeActive, setIsUnlikeActive] = useState(false)
  const [comment, setComment] = useState({
    text: '',
    publicationId: id,
    userID: user?.email,
    image: user?.picture,
    username: user?.given_name,
    like: like,
    unlike: unlike
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
          like: 0,
          unlike: 0
         })
         notificationSuccess('¡Comentario creado exitosamente!')
      }
  }, [comment, dispatch, id, user, notificationSuccess, notificationWarning])


  const handleDelete = useCallback((idDelete) => {    
    dispatch(deleteComment(idDelete))
    notificationSuccess('¡Comentario eliminado exitosamente!')  
  }, [dispatch, notificationSuccess])


  const handleUpdate = (idUpdate, text) => {
    const updateText = { text: text }
    dispatch(updateComment(idUpdate, updateText))
    setIsEditing(false)
    setEditingItem(null)
    notificationSuccess('¡Comentario actualizado exitosamente!')
  }


  const handleLike = (idUpdate, prevLike) => {
    if (isUnlikeActive) return

    if (!isLikeActive) {  
      setLike(prevLike + 1)
    } else {
        setLike(prevLike - 1)
      }
      
      setIsLikeActive(!isLikeActive)
      const updateLikes = {
        like: prevLike + (isLikeActive ? -1 : 1)
      }
      dispatch(updateComment(idUpdate, updateLikes))
  }


  const handleUnlike = (idUpdate, prevUnlike) => {
    if (isLikeActive) return 

    if (!isUnlikeActive) { 
      setUnlike(prevUnlike - 1)
    } else {
        setUnlike(prevUnlike + 1)
      }
      
      setIsUnlikeActive(!isUnlikeActive)
      const updateUnlikes = {
        unlike: prevUnlike + (isUnlikeActive ? -1 : 1)
      }
      dispatch(updateComment(idUpdate, updateUnlikes))
  }

  const handleEdit = (id, text) => {
    setComment({ text: text })
    setIsEditing(!isEditing)
    setEditingItem(id)
    textAreaRef.current.focus()
  }

  return { 
    comment, 
    comments, 
    handleChange, 
    handleSubmit, 
    handleDelete, 
    handleUpdate, 
    handleLike,
    handleUnlike,
    handleEdit,
    id, 
    user, 
    isAuthenticated,
    isEditing,
    editingItem,
    textAreaRef
   }
}

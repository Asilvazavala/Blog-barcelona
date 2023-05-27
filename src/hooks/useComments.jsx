import { useDispatch, useSelector } from 'react-redux'
import { getComments, createComment, deleteComment, updateComment } from '../redux/actions'
import { useCallback, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react'

export function useComments () {
  const dispatch = useDispatch()
  const { isAuthenticated, user } = useAuth0()
  const comments = useSelector(state => state.comments)
  const { id } = useParams()
  const [comment, setComment] = useState({
    text: '',
    publicationId: id
  })  
    
  console.log(comments);
  
  // console.log(user)
  // console.log(id);
  
// console.log(comments.userId);
// console.log(comments.publicationId);

  useEffect(() => {
    dispatch(getComments())
  }, [dispatch])
  
  const handleChange = (e) => {
    setComment({ text: e.target.value, publicationId: id })
  }
  
  const handleSubmit = useCallback((e) => {
    e.preventDefault()

    if (comment.text.length < 10) {
      alert('Los comentarios deben tener al menos 10 carácteres')
    } else if(comment.text.length > 255) {
        alert('Los comentarios deben tener menos de 255 carácteres')
     } else {
        dispatch(createComment(comment))
        setComment({ text: '', publicationId: id })
      }
  }, [comment, dispatch, id])

  const handleDelete = useCallback((idDelete) => {    
    dispatch(deleteComment(idDelete))
  }, [dispatch])

  const handleUpdate = useCallback((idUpdate) => {
    dispatch(updateComment(idUpdate))
  }, [dispatch])

  return { comment, comments, handleChange, handleSubmit, handleDelete, handleUpdate, id, user, isAuthenticated }
}

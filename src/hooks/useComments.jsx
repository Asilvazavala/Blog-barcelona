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

  const [like, setLike] = useState(0)
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
      alert('Los comentarios deben tener al menos 10 carácteres')
    } else if(comment.text.length > 255) {
        alert('Los comentarios deben tener menos de 255 carácteres')
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
      }
  }, [comment, dispatch, id, user])

  const handleDelete = useCallback((idDelete) => {    
    dispatch(deleteComment(idDelete))
  }, [dispatch])

  const handleUpdate = useCallback((idUpdate) => {
    dispatch(updateComment(idUpdate))
  }, [dispatch])

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

  return { 
    comment, 
    comments, 
    handleChange, 
    handleSubmit, 
    handleDelete, 
    handleUpdate, 
    id, 
    user, 
    isAuthenticated,
    handleLike,
    handleUnlike
   }
}

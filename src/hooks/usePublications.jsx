import { useDispatch, useSelector } from 'react-redux'
import { getPublications } from '../redux/actions'
import { useEffect } from 'react'

export function usePublications() {
  const dispatch = useDispatch()
  const publications = useSelector(state => state.publications)
  const category = useSelector(state => state.category)
  const detailPublication = useSelector((state) => state.detailPublication)

  useEffect(() => {
    dispatch(getPublications())
  }, [dispatch])

  return { publications, category, detailPublication }
}

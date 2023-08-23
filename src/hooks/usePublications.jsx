import { useDispatch, useSelector } from 'react-redux';
import { getPublications, searchPublicationByCategory } from '../redux/actions';
import { useEffect } from 'react';
import { useFunction } from './useFunction';
import { useNavigate } from 'react-router-dom';

export function usePublications() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const publications = useSelector(state => state.publications);
  const category = useSelector(state => state.category);
  const detailPublication = useSelector((state) => state.detailPublication);

  const { goTop } = useFunction();

  const handleCategory = (category) => {
    navigate(`/blog?category=${category}`);
    goTop();
    dispatch(searchPublicationByCategory(category));
  }

  useEffect(() => {
    if(window.location.href === import.meta.env.VITE_BASE_URL) {
      dispatch(getPublications())
    }
  }, [])

  return { publications, category, detailPublication, handleCategory }
}

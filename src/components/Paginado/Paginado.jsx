import { useState } from 'react'
import {useSelector } from 'react-redux'

export const Paginado = () => {
  const publications = useSelector(state => state.publications)
  const itemsPerPage = 3
  const totalItems = Math.ceil(publications.length / itemsPerPage)

  const [currentPage, setCurrentPage] = useState(1)
  
  const handlePrev = () => {
    if (currentPage === 1) return
    setCurrentPage(prevPage => prevPage - 1)
  }

  const handleNext = () => {
    if (currentPage >= totalItems) return
    setCurrentPage(prevPage => prevPage + 1)
  }

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const items = publications.slice(startIndex, endIndex);

  return { items, totalItems, currentPage, handlePrev, handleNext, publications }
}

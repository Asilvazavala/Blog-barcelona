import { useState } from 'react'
import {useSelector } from 'react-redux'

export const Paginado = () => {
  const publications = useSelector(state => state.publications)
  const itemsPerPage = 3
  const totalItems = Math.floor(publications.length / itemsPerPage)

  const [items, setItems] = useState([...publications].slice(0, itemsPerPage))
  const [currentPage, setCurrentPage] = useState(1)
  
  const handlePrev = () => {
    if (currentPage === 1) return
    
    const prevPage = currentPage - 1
    const firstIndex = (prevPage - 1) * itemsPerPage
    const secondIndex = prevPage * itemsPerPage

    setItems([...publications].slice(firstIndex, secondIndex))
    setCurrentPage(prevPage)
  }

  const handleNext = () => {
    const totalItems = publications.length;
    const nextPage = currentPage + 1
    const firstIndex = currentPage * itemsPerPage
    const secondIndex = firstIndex * 2

    if (firstIndex >= totalItems) return
    setItems([...publications].slice(firstIndex, secondIndex))
    setCurrentPage(nextPage)
  }

  return { items, setItems, totalItems, currentPage, handlePrev, handleNext, publications }
}

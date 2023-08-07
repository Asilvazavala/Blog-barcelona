import { useState, useEffect } from 'react';
import styles from '../components/Navbar/Navbar.module.css';

export const useNavBar = () => {
  const [isActiveNavMobile, setIsActiveNavMobile] = useState(false)

  // Estado para mostar NavBar responsive de acuerdo al max-width de la pantalla
  const [isSmallScreen, setIsSmallScreen] = useState(false)
  useEffect(() => {
    function handleResize () {
      setIsSmallScreen(window.innerWidth < 1050)
    }

    function handleScroll () {
      const scroll = window.scrollY;
      const nav = document.getElementById('nav');

      if (nav) {
        if (scroll < 50) {
          nav.classList.remove(styles.scrolled); 
        } else {
          nav.classList.add(styles.scrolled); 
        }
      }
    }

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize)
    handleResize()

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize)
    };
  }, [])

  const closeNavbar = () => {
    if (isSmallScreen) showNavMobile()
  }

  const showNavMobile = () => {
    setIsActiveNavMobile(prevState => !prevState)
  }

  return { closeNavbar, isSmallScreen, showNavMobile, isActiveNavMobile }
}

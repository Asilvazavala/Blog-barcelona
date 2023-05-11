import styles from './Error404.module.css'
import { NavLink } from 'react-router-dom'

export const Error404 = () => {
  return (
    <div className={styles.containerError}>
      <div className={styles.error}>
        <h1>Error 404</h1>
        <p>Esta página no está activa.</p>
        <p>Disculpe las molestias.</p>
        <NavLink to='/'>
          <button>Inicio</button>
        </NavLink>
      </div>
    </div>
  )
}

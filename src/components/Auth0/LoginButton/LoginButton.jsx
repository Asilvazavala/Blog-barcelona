import { useAuth0 } from '@auth0/auth0-react'
import styles from './LoginButton.module.css'

export const LoginButton = () => {
  const { loginWithRedirect } = useAuth0()
  
  return (
    <section className={styles.navbar}>
      <div className={styles.login}>
        <button onClick={() => loginWithRedirect()} className={styles.register}>Iniciar sesión</button>
      </div>
    </section>
  )
}

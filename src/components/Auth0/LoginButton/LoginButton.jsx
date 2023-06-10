import { useAuth0 } from '@auth0/auth0-react'
import styles from './LoginButton.module.css'

export const LoginButton = () => {
  const { loginWithRedirect } = useAuth0()
  
  return (
    <section className={styles.navbar}>
      <div className={styles.login}>
        <a onClick={() => loginWithRedirect()} className={styles.sigIn}>Iniciar sesión</a>
        <button onClick={() => loginWithRedirect()} className={styles.register}>Registro</button>
      </div>
    </section>
  )
}

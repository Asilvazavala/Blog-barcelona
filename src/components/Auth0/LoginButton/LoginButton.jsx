import { useAuth0 } from '@auth0/auth0-react'
import styles from './LoginButton.module.css'

export const LoginButton = () => {
  const { loginWithRedirect } = useAuth0()
  
  return (
    <section className={styles.navbar}>
      <div className={styles.login}>
          <span onClick={() => loginWithRedirect()} className={styles.sigIn}>Iniciar sesión</span>

        <div className={styles.containerRegister}>
            <button onClick={() => loginWithRedirect()} className={styles.register}>Registro</button>
        </div>
      </div>
    </section>
  )
}

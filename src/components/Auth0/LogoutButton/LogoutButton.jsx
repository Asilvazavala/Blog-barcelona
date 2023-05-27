import { Profile } from '../Profile/Profile'
import styles from './LogoutButton.module.css'
import { useAuth0 } from '@auth0/auth0-react'

export const LogoutButton = () => {
  const { logout } = useAuth0()

  return (
    <section className={styles.navbar}>
      <Profile />
      <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })} className={styles.buttonLogout}>Cerrar sesión</button>
    </section>
  )
}

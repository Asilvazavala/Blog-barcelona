import styles from './Profile.module.css'
import { useAuth0 } from '@auth0/auth0-react'

export const Profile = () => {
  const { user } = useAuth0()

  return (
    <section>
      <div className={styles.containerProfile}>
        <img src={user.picture} alt={user.name} title={user.name} />
      </div>
    </section>
  )
}

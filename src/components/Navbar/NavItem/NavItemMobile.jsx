import { useFunction } from '../../../hooks/useFunction';
import { useNavBar } from '../../../hooks/useNavBar';
import styles from '../Navbar.module.css';

export const NavItemMobile = ({ link= '', clickSpan= '', classSpan= '', text= '', icon='' }) => {
  const { NavLink } = useFunction();
  const { closeNavbar } = useNavBar();

  return (
    <main>
      <NavLink to={link}>
        <li className={styles.navItemsMobile} onClick={closeNavbar}>
          <span onClick={clickSpan} className={classSpan} 
            >{text}
          </span>
          <i className={icon}></i>
        </li>
      </NavLink>
    </main>
  )
}

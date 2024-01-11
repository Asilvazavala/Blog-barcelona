import { useFunction } from '../../../hooks/useFunction';
import { useNavBar } from '../../../hooks/useNavBar';

export const NavItem = ({ link, clickSpan, classSpan, text }) => {
  const { NavLink } = useFunction();
  const { closeNavbar } = useNavBar();

  return (
    <main>
      <NavLink to={link}>
        <li onClick={closeNavbar}>
          <span onClick={clickSpan} className={classSpan} 
            >{text}
          </span>
        </li>
      </NavLink>
    </main>
  )
}

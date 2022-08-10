import { Link } from 'react-router-dom';
import { logoutUser } from '../../hooks/useAuth';
import { Form1 } from '../Forms/style';
import { LogoutButton, Nav, NavItem } from './style';

interface IMenuBurgerProps {
  page?: 'project' | 'resources' | 'home';
  status?: boolean;

}

const NavBar: React.FC<IMenuBurgerProps> = ({ page,  status}) => {

  return (
    <div>
    <Nav>
      <ul>
        <NavItem active={page === 'resources'}>
          <Link to="/mapas">Pesquisa</Link>
          <ul className="DropDraw">
            <NavItem>
                <a href='/categorias/3'> Agropecuária</a>
            </NavItem>              
            <NavItem>
                <a href='/categorias/1'> Ambiental</a>
              </NavItem>
            <NavItem>
                <a href='/categorias/2'> Municipal </a>
            </NavItem>
          </ul>
        </NavItem>
        <NavItem active={page === 'home'}>
          <Link to="/">Portal Geoeste</Link>
        </NavItem>
        <NavItem active={page === 'project'}>
          <Link to="/Saiba_mais">Projeto</Link>
        </NavItem>

      </ul>
    </Nav>
    {status ?(
          <p></p>
        )
        :(
          <LogoutButton>
            <button type="button" onClick={logoutUser}>
              <li> Online </li>
            </button>
          </LogoutButton>
        )
        }
    </div>
  );
};

export default NavBar;



import { Link } from 'react-router-dom';
import { Nav, NavItem } from './style';

interface IMenuBurgerProps {
  page?: 'project' | 'resources' | 'home';

}

const NavBar: React.FC<IMenuBurgerProps> = ({ page }) => {

  return (
    <div>
    <Nav>
      <ul>
        <NavItem active={page === 'resources'}>
          <Link to="/mapas">Pesquisa</Link>
          <ul className="DropDraw">
            <NavItem>
                <a href='/categorias/1'> Ambiental</a>
            </NavItem>              
            <NavItem>
                <a href='/categorias/3'> Agropecuária</a>
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
    </div>
  );
};

export default NavBar;



import {NavLink} from 'react-router-dom';
import ToggleTheme from './ToggleTheme';

export default function Header(){
  return (
    <header>
        <img src="rick_logo.png" alt="logo Rick & Morty" />
        <nav>
          <NavLink className="link-header" to='/'>Accueil</NavLink>
          <NavLink className="link-header" to='/Login'>Connexion</NavLink>
          <ToggleTheme/>
        </nav>
    </header>
  )
}
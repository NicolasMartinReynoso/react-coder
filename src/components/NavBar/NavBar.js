import './navBar.css'
import Icono from '../Icono/Icono'
import NavList from '../NavList/NavList'
import CartWidget from '../CartWidget/CartWidget'


const NavBar = () => {
    return <header><nav><Icono /><NavList /><CartWidget /></nav></header>
}

export default NavBar;


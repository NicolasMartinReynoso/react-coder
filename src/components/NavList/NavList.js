import './navList.css'
import { NavLink } from 'react-router-dom'

const NavList = () => {
  return <div className="navList">
    <ul >
      <li><NavLink to="/">Inicio</NavLink> </li>
      <li><NavLink to="/Catalogo/Mandalas">  Mandalas </NavLink></li>
      <li><NavLink to="/Catalogo/Funkos"> Funkos </NavLink></li>
      <li><NavLink to="/Catalogo/Macetas"> Macetas </NavLink></li>
      <li><NavLink to="/Catalogo/Lapiceros"> Lapiceros </NavLink></li>
    </ul>
  </div>
}

export default NavList;
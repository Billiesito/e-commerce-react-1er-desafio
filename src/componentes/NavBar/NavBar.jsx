import CardWidget from "./CardWidget"
import "./NavBar.css"

const NavBar = () => {
  return (
    <div id="navbar">
        <h1>Super Compu</h1>
        <ul>
            <li><a href="">PC</a></li>
            <li><a href="">Monitores</a></li>
            <li><a href="">Auriculares</a></li>
            <li><a href="">Teclados</a></li>
            <li><a href="">Ratones</a></li>
        </ul>
        <CardWidget />
    </div>
  )
}

export default NavBar
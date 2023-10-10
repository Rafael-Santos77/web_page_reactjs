import { Link } from 'react-router-dom'
import './App.css'


const Navbar = () => {
  return (
    <>
        <nav className="navbar">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="wiki/">Wiki</Link></li>
            <li>Contact</li>
            <li>About</li>
          </ul>
        </nav>
    </>
    )
}

export default Navbar
import './App.css'
import wiki from './banner/WIKI_wiki.jpg'
import { Link } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'

  const Home = () =>{

  return (
    <>
     <Navbar/>
      <div className="grid-container">
        <div className="grid-item_1">
          <h1>Clash Time</h1>
             <p>um lugar para melhorar sua expeiencia com o Clash of clans</p>
        </div>       
          <div className="grid-item_2">
            <img src={wiki} alt='Wiki' />
              <p>Wiki</p>
          </div>
          <div className="grid-item_3">
            <img src={wiki} alt='Wiki' />
              <p>Wiki</p></div>  
          <div className="grid-item_4">
            <img src={wiki} alt='Wiki' />
              <p>Wiki</p></div> 
      </div>


      
    </>
  )
}

export default Home;

import './wiki.css'
import img_Rainha from './Heroes/Avatar_Hero_Archer_Queen.jpg'
import Navbar from './components/Navbar'
import Get_token from './Api.jsx'

function Wiki() {
  

  return (
    <>
       <Navbar/>       
       <div className="grid-container">
   
          <div className="item1"><Get_token/></div>
          <div className="item2">5</div>
          <div className="item3">6</div>
          <div className="item4">7</div>
        </div> 
      </>
)}

export default Wiki;
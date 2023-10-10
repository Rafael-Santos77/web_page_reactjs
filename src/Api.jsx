import { useState, useEffect } from "react";
import axios from "axios";

axios.defaults.baseURL = 'https://api-teste-8vdx.onrender.com';
       
    
 

    const Post = () => { 
      const [access, setAccess]= useState([])  
     axios.post('/token/', ({ username: 'rafael', password: '>>thmC3fm8c6' }))
        .then(response => {
        const Token_access= response.data.access;
      setAccess(Token_access)
      })
      console.log(access)
};


  

export default Post; 
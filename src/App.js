import React from 'react';
import CoursList from './component/CoursList';

import CardDetails from './Pages/CardDetails';
import {
  BrowserRouter,
  Route,
  Routes
} from 'react-router-dom'
import { useState, useEffect } from 'react';






function App() {

  const [item, setItem] = useState({})

  const handelItem = (item)=> {
      setItem(item)
  }
       const handleLogin = ()=>{
        fetch(`https://test.plan-b-eg.com/api/Account/authenticate`, {
      method: 'POST', 
      headers: {
        'Content-Type': 'application/json',
        "Authorization": "Bearer"   
      },
      body: JSON.stringify({          
          "username": "basem.ashraf@smartapp-eg.com",
          "password": "123@@@"
      })
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Success:', data);
        window.sessionStorage.setItem('token', data.token.token)
      })
      .catch((error) => {
        console.error('Error:', error);
      });
       }
       
       useEffect(() => {
        handleLogin()
       }, [])
       
       

  return (         
      <div>

       <BrowserRouter> 
       <Routes>

            <Route path='/' element={<CoursList handelItem={handelItem} />}/>           
            <Route path='/details/:id' element={<CardDetails item={item}/>}/>           
       </Routes>         
       </BrowserRouter>

       </div>
  );
}

export default App;

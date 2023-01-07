import React from 'react';
import { useState, useEffect } from 'react';
import { fetchData } from '../utili/fetch';
import Card from './Card'



const CoursList = ({handelItem}) => {
  const [data, setdata] = useState([]);
  
  const getData= async ()=>{
    const result=await fetchData('https://test.plan-b-eg.com/api/Courses/GetAllCourses');
    setdata(result);
    console.log(result);    
  }
  
useEffect(() => {
  getData()
}, [])

  return (
  <div> 
    {data.map(item => 
            <Card  handelItem ={handelItem} key={item.id} props={item}/>                     
            )}           
  </div>
  )
}

export default CoursList;



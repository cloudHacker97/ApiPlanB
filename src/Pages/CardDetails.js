import React from 'react'
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'


function secondsToHms(d) {
  d = Number(d);
  var h = Math.floor(d / 3600);
  var m = Math.floor(d % 3600 / 60);
  var s = Math.floor(d % 3600 % 60);

  var hDisplay = h > 0 ? h + (h == 1 ? " hour, " : " : ") : "";
  var mDisplay = m > 0 ? m + (m == 1 ? " minute, " : " : ") : "";
  var sDisplay = s > 0 ? s + (s == 1 ? " second" : " ") : "";
  return hDisplay + mDisplay + sDisplay; 
}

const CardDetails = ({item}) => {

  // const [cardDetail, setCardDetail] = useState({})
  const  Id  = useParams();

useEffect(() => {
  fetch(`https://test.plan-b-eg.com/api/Courses/GetCourseDetails?courseId=${Id.id}`, {
  method: 'GET', 
  headers: {
    'Content-Type': 'application/json',
    "Authorization": window.sessionStorage.getItem('token'),
  },
})
  .then((response) => response.json())
  .then((data) => {
    console.log('Success:', data);
  })
  .catch((error) => {
    console.error('Error:', error);
  });
}, [])

  return (
    <>
    <p>{item.name}</p>
    <p>{item.instractorName }</p>
    <p className="info">{item.fullDesc}</p>
    <p>price:{item.price}</p>
    <p>Course duration: {secondsToHms(item.totalHouers)}</p>
    </>
  )
}

export default CardDetails
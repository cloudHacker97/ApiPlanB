import {React} from 'react'
import {
  BrowserRouter as Router,
  Link, 
} from 'react-router-dom'






function Card({props, handelItem}) {

 const handleClick = ()=> {
  handelItem(props)
 }  
  return (  
    <>
    <Link to={`/details/${props.id}`}>
    <div className="card" onClick={handleClick} obj={props}>

      <div className="top">
        <h2 className="name">{props.name}</h2>
        <img className="circle-img" src={props.photo} alt="avatar_img" />
      </div>
      <div className="bottom">        
      <p className="info">{props.instractorName[0]}</p>
      <p className="info">{props.price}</p>
      </div>
  </div>
    </Link>
    </>
  );
}

export default Card;
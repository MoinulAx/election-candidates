import React from 'react'
import './styles/styles.css'
import List from './List'

const Card = ({candidate}) => {
  
  return (
   <div className='card'>
    <img className ="profileImage"src="src/assets/person.jpg" alt="" />
    <p>{candidate}</p>
   </div>
         
  )
}

export default Card
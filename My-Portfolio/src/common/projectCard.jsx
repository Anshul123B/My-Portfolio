import React from 'react'

const projectCard = ({src, link, h3, p}) => {
  return (
    <a href={link}>
       <img className="hover" src={src} alt={`${h3} logo`} />        
       <h3>{h3}</h3>
       <p>{p}</p>
    </a> 
  )
}

export default projectCard

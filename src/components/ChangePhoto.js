import React from 'react'









const ChangePhoto = props => {
    
    return (
      <div className = "PhotoStyle">
      
      <h2>{props.data.title}</h2>
      <p>{props.data.date}</p>
      <img src={props.data.hdurl} className="nasa-photo"/>
      <p>{props.data.explanation}</p>
      </div>
    )
    }


    export default ChangePhoto
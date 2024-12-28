import React from 'react'
import img from "../assets/572-768x591.png"
function Logo({width='100px'}){
  return (
    <div>
      <img className="h-10 w-25 rounded-full" src={img}/>
    </div>
  )
}

export default Logo
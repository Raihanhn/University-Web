import React from 'react'
import { AiOutlineDown } from 'react-icons/ai';


const Banner = () => {
  return (
    <div className="banner">
       <div className="rab">
        <p>OSMOSIS: INTERDISCIPLINARY</p>
       </div>
       <div className="kab">
        <p> APPROACHES IN HUMAN SCIENCES </p>
       </div>
        <button className="bt">CLICK FOR DETAILS→</button>
        <div className="down"><AiOutlineDown className='tink' /></div>
       </div>
  )
}

export default Banner
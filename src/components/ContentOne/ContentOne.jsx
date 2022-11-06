import React from 'react'
import img from '../../assets/img/edu hack.jpg'

const ContentOne = () => {
  return (
    <div className="cone">
        <div className="kill"></div>
        <h1>OUR SINCERE PLEDGE TO ALL STUDENTS</h1>
        <p>The University is committed to bringing the best possible education opportunities in <br/> Chittagong: To these end, the university has adopted the following mission statement: </p>
        <p className="killo">
        “East Delta University is committed to excellence in all aspects of life both inside and <br/> outside the classroom, to integrity, innovation that improves quality of life, respect for <br/> diversity and enhancement of global learning through extensive collaborative efforts <br/> with universities and businesses all around the world.”  
        </p>
        <p className='killos'>We are absolutely committed to our mission.</p>
        <img src={img} alt="" />
    </div>
  )
}

export default ContentOne
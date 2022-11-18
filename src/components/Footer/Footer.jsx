import React from 'react'
import {AiFillLinkedin} from 'react-icons/ai';
import {AiFillYoutube} from 'react-icons/ai';
import {AiFillFacebook} from 'react-icons/ai';
import {AiFillInstagram} from 'react-icons/ai';

const Footer = () => {
  return (
    <div className="footer">
            <h2 className='tio'>EAST DELTA UNIVERSITY</h2>
            <p className='tis'>Abdullah Al Noman Road, Noman Society, East Nasirabad, Khulshi, Chattogram: 4209 <br/>  Phone : + 88 0963 81444 13 <br/>  Phone : + 88 01714 102062 <br/> Email: enquiry@eastdelta.edu.bd </p>
            <p className="tik">© 2008-2022 EDU : East Delta University. All Rights Reserved.</p>

            <div className="social-links">
                <a href=""> <AiFillLinkedin/> </a>
                <a href=""> <AiFillYoutube/> </a>
                <a href=""> <AiFillFacebook/> </a>
                <a href=""> <AiFillInstagram/> </a>
            </div>
    </div>
  )
}

export default Footer
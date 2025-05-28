import React from 'react'
import { IoIosMenu } from "react-icons/io";
import header_style from './Header/Header.module.css'

function LowerHeader() {
return (
      // <div className={ classes.lower_container}>
  <div className={header_style.lower_container}>
        <ul>
            <li> 
            <IoIosMenu />
            <p>All</p></li>
            <li>Today's Deal</li>
<li> Costumer Service</li>
<li> Regestry</li>
<li>Gift Card</li>
<li> Sell</li>
 </ul>
    </div>
  )
}

export default LowerHeader
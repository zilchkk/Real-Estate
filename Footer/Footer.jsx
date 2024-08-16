import React from 'react'
import "./Footer.css"

export const Footer = () => {
  return (
    <div className='f-wrapper'>
      <div className='f-center'>
        <div className='f-left'>
          <span className='primaryText'>HouseTour</span>
          <span className='secondaryText'>Our Vision To make all people <br /></span>
          <span className='secondaryText'>the best place to live wit them</span>
        </div>
        <div className="f-right">
          <span className='primaryText'>Information</span>
          <span className='secondarytext'>143 New York, FL5467, USA</span>
          <div className="f-menu">
            <a href="">Residence</a>
            <a href="">Our values</a>
            <a href="">Contact us</a>
            <a href="">Get started</a>
          </div>
        </div>
      </div>
    </div>
  )
}

import React from 'react'
import tick from '../assets/Frame 1321316499.svg'
import './final.css'

export const Final = () => {
  return (
    <>
      <div class="content">Final
          <img class="tick" src={tick} alt="" />
          <h1>Onboarding complete!</h1>
          <div style={{textAlign: 'center'}}>
            <p>Congrats! the onboarding is complete.</p>
            <p>continue to go to the homepage</p>
          </div>

          <a class="continue-btn" href="">Continue</a>
      </div>
    
    </>
    // <div>

    // </div>
  )
}

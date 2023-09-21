import React from 'react'
import { MyDisplayStyles } from './MyDisplay.style'
import iphone from '../../assets/images/iphone.png'
import alert from '../../assets/images/alert.png'

const Display1 = () => {
    return (
        <MyDisplayStyles>
        <div class="grid-container">
        <div class="grid-child1" >
          <div className='content'>
            <h1>The best platform for your convenient airtime exchange </h1>
          </div>
         <div className='paragraph'>
           <p>Now there's no need to worry about having so much airtime
            than you need at the moment.We are here to make life so easy
            for you.So Hurry!
            </p>
         </div>
         <div className='btn-container'>
         <button className='btn'>
          <a href="/">Get Started</a>
         </button>
         </div>
        </div>
        <div class="grid-child " >
          <div className='container'>
            <img className='img1' src={iphone} alt="iphone" />
            <div className="img2">
                <img src={alert} alt="alert" />
            </div>
            
          </div>
        </div>

      </div>
        </MyDisplayStyles>
    )
}

export default Display1
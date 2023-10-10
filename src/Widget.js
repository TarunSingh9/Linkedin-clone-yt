import React from 'react'
import "./css/widget.css";
import InfoIcon from '@mui/icons-material/Info';



function Widget(){
  return (
        <div className='widget'>
          <div className='widget__top'>
            <div className='widget__header'>
                <h4>Linkedin News</h4>
                <InfoIcon/>
            </div>
            <div className='widget__body'>
               <ul className='widget__options'>
                  <li>
                    <h4>Slaying Job search Fees</h4>
                    <p>2d ago * 4,555 readers</p>
                  </li>

                  <li>
                    <h4>A Two Pizza rule for eating</h4>
                    <p>3d ago * 6,312 readers</p>
                  </li>

                  <li>
                    <h4>How to handle a workplace</h4>
                    <p>5d ago * 5,345 readers</p>
                  </li>

                  <li>
                    <h4>Flexi leave is the flexi</h4>
                    <p>2d ago * 632 readers</p>
                  </li>

                  <li>
                    <h4>A Two Pizza rule for eating</h4>
                    <p>1 week  ago* 8,712 readers</p>
                  </li>
               </ul>
            </div> 
           </div>

           <div className='widget_bottom'>
            <div className='widget__header'>
                 <h4>Today's top courses</h4>
                 <InfoIcon/>
            </div>
            <div className='widget_body'>
                <ul className='widget__options'>
                    <li>
                      <h4>Leading with a Heavy Heat</h4>
                      <p>Kay Coly</p> 
                    </li>

                    <li>
                      <h4>Building Resillience</h4>
                      <p>Tatianan kolovau</p> 
                    </li>
      
                    <li>
                      <h4>Critical Thinking for better judgement</h4>
                      <p>Keoli Disuja</p> 
                    </li>

                    <li>
                      <h4>Shorter  hour boost productivity</h4>
                      <p>Camlin Denobi</p> 
                    </li>

                    <li>
                      <h4>Leading with a Heavy Heat</h4>
                      <p>1d ago * 4,55 readers</p> 
                    </li>
                </ul>
            </div>
           </div>
        </div> 
    )
}

export default Widget
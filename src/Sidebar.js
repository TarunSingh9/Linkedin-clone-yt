import React from 'react'
import "./css/sidebar.css"
import { Avatar } from '@mui/material'

function Sidebar() {
    return (
        <div className='sidebar'>
          <div className='sidebar__profile'>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2WlH8uQ80AfTIdfoUpt62JoM1ikzkaT0lMg&usqp=CAU" alt=""/>

              <div className='profile__details'>
                 <Avatar/>
                <h4>Tarun Singh</h4>
                <p>Web developer</p>
              </div>

              <div className='profile__stats'>
                <span>Who viewed  your  profile</span>
                <span className='stat__number'>20</span>
              </div>
              <div className='profile__stats'>
                <span>Connection<br/><b>Grow Your Network</b></span>
                <span className='stat__number'>210</span>
              </div>
          </div>

          <div className='sidebar__recent'>
            <p>Recent</p>
            <p className='hash'><span>#</span>web development</p>
            <p className='hash'><span>#</span>Problem-solving</p>
            <p className='hash'><span>#</span>Data structure</p>
            <p className='hash'><span>#</span>reduxtoolkit</p>
            <p className='hash'><span>#</span>programming-Java,c,python</p>
            <p className='hash'><span>#</span>reactjs</p>
          </div>
        </div>
    )
}

export default Sidebar
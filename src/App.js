import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import Feed from './Feed';
import Widget from './Widget';
import Login from './Login';


//if user is not register then login page
//const user = null;
//else 
const user = "absd";

// import Jobs from './Jobs';
// import LinkedInNotifications from './LinkedInNotifications';

function App() {
  return (
  
    !user ? (<Login/>): (
    <div className='app_wrapper'>
        <Header/>
        <div className='app_body'>
          <Sidebar/>
          <Feed/>
          <Widget/>
        </div>
    </div>
    )
    //  <diiv>
    //      {/* <Jobs/> */}
    //      <LinkedInNotifications/>
    //  </diiv>
    
  );
}

export default App;

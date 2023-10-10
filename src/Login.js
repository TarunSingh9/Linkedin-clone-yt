import React from 'react';
import './css/Login.css';
import {useState} from 'react'

function Login(){
    const [signup, setSignUp] = useState(false);
    return (
        <>
       <div className='loginscreen'>
        <img src='https://seeklogo.com/images/L/linkedin-logo-F84AF05CFC-seeklogo.com.png'/>
            {
                 signup===true ?  
             (
             <form >
                <input type="text" placeholder='Full Name (Required if Registering'/>
                <input type="text" placeholder='Profile Picture URL'/>
                <input type="email" placeholder='Email'/>
                <input type="password" placeholder='Password'/>
    
                <input type="submit" placeholder='Sign Up'/>
                <h4>Already a member ? <span onClick={e=>setSignUp(false)}>Login Here</span></h4>
             </form>) 
             :
             (
             <form >
            <input type="email" placeholder='Email'/>
            <input type="password" placeholder='Password'/>

            <input type="submit" placeholder='Sign Up'/>
            <h4>Not a member ? <span  onClick={e=>setSignUp(true)}>Register Here</span></h4>
         </form>)
         }
        
        </div> 
    </>
   )
}


export default Login;

// onSubmit={register}
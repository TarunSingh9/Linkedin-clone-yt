import React from "react";
import {useState} from 'react'
import { Avatar } from "@mui/material";
import Post from "./Post"
import PhotoIcon from '@mui/icons-material/Photo';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TodayIcon from '@mui/icons-material/Today';
import AssignmentIcon from '@mui/icons-material/Assignment';
import "./css/feed.css"
//import { db } from './firebase';

function Feed() {
    const [input, setInput] = useState();
    const submitPost=(e)=>{
          e.preventDefault();
          
    }
    

    return (
        <div className="feed"> 
           <div className="feed__input">
           <div className="feed__form">
            <Avatar />
            <form onSubmit={submitPost}>
                <input type="text" placeholder="Start a post"  onChange={e=>setInput(e.target.value)}/>
                <input type="submit"/>           
            </form>
            </div>
           <div className="feed__options">
            <div className="option">
                <PhotoIcon style={{color:'#70b5f9'}}/>
                <span>Photo</span>
            </div>
            <div className="option">
                <YouTubeIcon style={{color:'#7fc15e'}}/>
                <span>Video</span>
            </div>
            <div className="option">
                <TodayIcon style={{color:'#e7a33e'}}/>
                <span>Event</span>
            </div>
            <div className="option">
                <AssignmentIcon style={{color:'#fc9295'}}/>
                <span>Write Article</span>
            </div>
           </div>
           </div>
           <Post name="Ravi Basu" description="Head and Managing Directer of DFU" message="Some hiring managers look at an applicant's social media to learn more about them. Always be mindful of the type of content you share on social media. Keep it courteous and professional. If you don't want an employer to see your postings, make sure to set your profiles to private." photoURL="https://media.istockphoto.com/id/1433285570/photo/smiling-businessman-showing-thumbs-up-in-his-office.jpg?s=612x612&w=0&k=20&c=IG7E_cku1gG68ifG7ux7-KtxA0AEvflb_uZLzeiwkac="/>
           <Post name="Sonny Sangha" description="This is test" message="Tips for beginner React.js projects,begin with a simple project idea and focus on building small, reusable components." photoURL="https://compassionate-leakey-e9b16b.netlify.app/images/IG_Sonny.jpeg"/>
           <Post name="Daniel Marksmith" description="Programming Tips " message=" Don’t Be Afraid to Ask for Help or to Help People Back." photoURL="https://plus.unsplash.com/premium_photo-1663100558298-5ff3587d847f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZ3JhbW1lcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"/>
           <Post name="Richard Poul" description="Tips for IT sector Jobs" message="A professional network could help IT professionals advance their careers. Consider attending local conferences, traveling to industry events or joining an online group of IT professionals. Network connections might share information about new positions or offer career advice" photoURL="https://media.istockphoto.com/id/1395838160/photo/asian-middle-eastern-businessman-sitting-in-office-with-eyeglasses-and-computer-terminal.webp?b=1&s=170667a&w=0&k=20&c=If54ryn5M95zVrIe5--3xqoVG1JsguH7YbaFlXRjvX8="/>
           <Post name="Tengin Bigua" description="Business Marketer" message="Focus on targeted marketing strategies, leveraging social media, content marketing, and data analytics to understand and engage your audience effectively." photoURL="https://media.istockphoto.com/id/924508390/photo/software-developer.jpg?s=612x612&w=0&k=20&c=daTO11QqiJErkXJfQECxF1aCukiwcaHJP8sv9T4UUjU="/>
           <Post name="Daniel Marksmith" description="Programming Tips " message=" Don’t Be Afraid to Ask for Help or to Help People Back." photoURL="https://plus.unsplash.com/premium_photo-1663100558298-5ff3587d847f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZ3JhbW1lcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"/>
        </div>
    )
}

export default Feed
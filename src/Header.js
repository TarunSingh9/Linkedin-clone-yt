import img1 from "./images/linkedin-image.jpg";
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import PeopleIcon from '@mui/icons-material/People';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import MessageIcon from '@mui/icons-material/Message';
import NotificationsIcon from '@mui/icons-material/Notifications';
import "./css/Header.css"
import Headeroptions from "./Headeroptions";
import { Avatar } from "@mui/material";

function Header() {
    return (
        <div className="header">
            <div className="header__left">
                <div className="header__logo">
                    <img src={img1} alt=""/>
                </div>
    
                <div className="header__search">
                    <SearchIcon/>
                    <input type="text" placeholder="Search"/>
               </div>
            </div>

            <div className="header__right">
                <Headeroptions Icon={HomeIcon} title="Home" />
                <Headeroptions Icon={PeopleIcon} title="My Network"/>
                <Headeroptions Icon={BusinessCenterIcon} title="Jobs"/>
                <Headeroptions Icon={MessageIcon} title="Messaging"/>
                <Headeroptions Icon={NotificationsIcon} title="Notifications"/>
                <Headeroptions avatar={Avatar} title="Tarun Singh"/>
            </div>
        </div>
   )
} 

export default Header;
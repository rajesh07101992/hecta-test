import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import { ReactComponent as UserIcon } from '../../Icons/DashboardIcons/User.svg'
import { ReactComponent as Notification } from '../../Icons/DashboardIcons/Notification.svg'
import { ReactComponent as Application } from '../../Icons/DashboardIcons/Application.svg'
import { ReactComponent as Auctions } from '../../Icons/DashboardIcons/Auctions.svg'
import { ReactComponent as Results } from '../../Icons/DashboardIcons/Results.svg'
import { ReactComponent as Notes } from '../../Icons/DashboardIcons/Notes.svg'
import { ReactComponent as Sheild } from '../../Icons/DashboardIcons/Sheild.svg'
import { ReactComponent as ForwardArrow } from '../../Icons/DashboardIcons/ForwardArrow.svg'
import './style.css'

const SideBar = ({ onClick }) => {
  const [activeLink, setActiveLink] = useState(null);
  const handleClick = (link) => {
    onClick(link);
    setActiveLink(link);
  };
  const screenWidth = window.innerWidth;
  const arrow = screenWidth < 768 ? (
    <ForwardArrow width={7} style={{float:'right'}}/>
  ) : null;
  return (
   <>
   <p className='menuText'>Menu</p>
   <div className='dashboardNavLinks'>
    <Link className={`dahboardNavLink ${activeLink === "profile" ? "activeLink" : ""}`} onClick={() => handleClick("profile")}>
    <UserIcon className='dashboardIcon'/>
         My Profile {arrow}
    </Link>

    <Link className={`dahboardNavLink ${activeLink === "notification" ? "activeLink" : ""}`} onClick={() => handleClick("notification")}>
    <Notification className='dashboardIcon'/>
    Notifications {arrow}
    </Link>
    <div className='p20'></div>
    <p className='menuText'>AUCTIONS</p>
    <Link className={`dahboardNavLink ${activeLink === "myapplications" ? "activeLink" : ""}`} onClick={() => handleClick("myapplications")}>
    <Application className='dashboardIcon'/>
    My Applications {arrow}
    </Link>
    <Link className={`dahboardNavLink ${activeLink === "myauctions" ? "activeLink" : ""}`} onClick={() => handleClick("myauctions")}>
    <Auctions className='dashboardIcon'/>
    Upcoming Auctions {arrow}
    </Link>
    <Link className={`dahboardNavLink ${activeLink === "auctionresults" ? "activeLink" : ""}`} onClick={() => handleClick("auctionresults")}>
    <Results className='dashboardIcon'/>
    Auction Results {arrow}
    </Link>
    <div className='p20'></div>
    <p className='menuText'>LEGAL</p>
    <Link className='dahboardNavLink'>
    <Notes className='dashboardIcon'/>
    Terms & Conditions {arrow}
    </Link>
    <Link className='dahboardNavLink'>
    <Sheild className='dashboardIcon'/>
    Privacy Policy {arrow}
    </Link>
    <div className='p20'></div>
   </div>
   </>
  )
}

export default SideBar
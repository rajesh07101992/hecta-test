import React, { useState, useEffect } from 'react'
import './style.css'
import './responsive.css'
import { BreadCrumb } from '../../components/BreadCrumb/BreadCrumb'
import { Link, useParams } from 'react-router-dom'
import AvtarSection from '../../components/Dashboard/AvtarSection'
import SideBar from '../../components/Dashboard/SideBar'
import MyProfile from '../../components/Dashboard/MyProfile'
import Notifications from '../../components/Dashboard/Notifications'
import MyApplications from '../../components/Dashboard/MyApplications'
import UpcomingAuctions from '../../components/Dashboard/UpcomingAuctions'
import AuctionResults from '../../components/Dashboard/Auctionresults'


const Dashboard = () => {

     // PageName for breadcrumb
     const [pageName, setPageName] = useState('Dashboard');

    //  Visibility of sidebar
    const[sidebar, setSidebar] = useState(true)

    //  User Data States
    const[userProfile, setUserProfile] = useState(true);
    const[userNotifications, setUserNotifications] = useState(false);
    const[userApplications, setUserApplications] = useState(false)
    const[userAuctions, setUserAuctions] = useState(false)
    const[userAuctionResults, setUserAuctionresults] = useState(false)
    //   Arrow Icon in Breadcrumb
    const arrow = () => {
        return (
            <span className="iconArrow">
                <svg width="6" height="8" viewBox="0 0 6 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.726562 0.94L3.7799 4L0.726562 7.06L1.66656 8L5.66656 4L1.66656 -4.10887e-08L0.726562 0.94Z" fill="#707070" />
                </svg>
            </span>
        )
    }

//    To handle sidebar clicks
const handleSidebarClick = (component) => {
    const screenWidth = window.innerWidth;
    const stateMap = {
      profile: [true, false, false, false, false],
      notification: [false, true, false, false, false],
      myapplications: [false, false, true, false, false],
      myauctions: [false, false, false, true, false],
      auctionresults: [false, false, false, false, true],
    };
    const pageMap = {
      profile: 'My Profile',
      notification: 'Notifications',
      myapplications: 'My Applications',
      myauctions: 'My Auctions',
      auctionresults: 'Auction Results',
    };
    const [userProfile, userNotifications, userApplications, userAuctions, userAuctionresults] = stateMap[component] || stateMap.default;
    setUserProfile(userProfile);
    setUserNotifications(userNotifications);
    setUserApplications(userApplications);
    setUserAuctions(userAuctions);
    setUserAuctionresults(userAuctionresults);
    setPageName(pageMap[component] || '');

    if (screenWidth < 768) {
        setSidebar(false);
      }
  };
  
    //   End

     // Check if user is on mobile device
     const isMobile = () => {
        return window.innerWidth < 768;
    }
    useEffect(() => {
        if (isMobile()) {
            setUserProfile(false);
        }
    }, []);

    const reloadPage = () =>{
            window.location.reload();
    }

    return (
        <>
            <div className='dashBoardContent'>
                <BreadCrumb path={<>
                    Home{arrow()}<Link className='breadCrumbLink' to="/my-account" onClick={reloadPage}>My Account</Link>
                </>} pageName={pageName} />
                <AvtarSection/>
                <div className='dashboardMainContent'>
                    {sidebar && 
                    <div className='dashboardSidebar'>
                        <SideBar onClick={handleSidebarClick}   />
                    </div>
                    }
                    {userProfile && 
                    <div className='dashboardUserContent'>
                        <MyProfile />
                    </div>
                    }
                   
                    {userNotifications &&  
                      <div className='dashboardUserContent'>
                    <Notifications/>
                    </div>
                    }

                   {userApplications && 
                     <div className='dashboardUserContent'>
                         <MyApplications/>
                         </div>
                         }
                   {userAuctions && 
                     <div className='dashboardUserContent'>
                   <UpcomingAuctions/>
                   </div>
                   }
                    {userAuctionResults &&
                      <div className='dashboardUserContent'>
                    <AuctionResults/>
                    </div>
                    }
                 
                    </div>
                </div>
            
        </>
    )
}

export default Dashboard
import React from 'react'
import { ReactComponent as ApplicationIcon } from '../../Icons/DashboardIcons/Application.svg'
import {ReactComponent as TickIcon} from '../../Icons/Tick.svg'
import {ReactComponent as PendingIcon} from '../../Icons/YellowMark.svg'
import {ReactComponent as DeniedIcon} from '../../Icons/Cross.svg'

const MyApplications = () => {
  return (
   <>
   <p className='sectionTitle'>
        <ApplicationIcon className='activeIcon' />
        My Applications
    </p>
    <div className='p20'></div>
    <div className='userDetailsBlock'>
      <div className='scrollTable'>
    <table className='stripTable'>
      <thead>
        <tr>
          <td>
            <p>Property ID</p>
          </td>
          <td>
            <p>Application Status</p>
          </td>
          <td>
            <p>Application End Date</p>
          </td>
          <td>
            <p>Auction End Date</p>
          </td>
          <td>
            
          </td>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <a href='#' className='appLink'>123456</a>
          </td>
          <td>
            <p>
            <TickIcon className='statusIcon'/>Approved
            </p>
          </td>
          <td>
            <p>17 April 2023</p>
          </td>
          <td><p>20 April 2023</p></td>
          <td align='right'>
            <button className='whiteShadeBtn w-auto'>View Application</button>
          </td>
        </tr>
        <tr>
          <td>
            <a href='#' className='appLink'>123456</a>
          </td>
          <td>
            <p>
           <PendingIcon className='statusIcon'/> Pending
            </p>
          </td>
          <td>
            <p>17 April 2023</p>
          </td>
          <td><p>20 April 2023</p></td>
          <td align='right'>
            <button className='whiteShadeBtn w-auto'>View Application</button>
          </td>
        </tr>
        <tr>
          <td>
            <a href='#' className='appLink'>123456</a>
          </td>
          <td>
            <p>
          <DeniedIcon  className='statusIcon'/>  Denied
            </p>
          </td>
          <td>
            <p>17 April 2023</p>
          </td>
          <td><p>20 April 2023</p></td>
          <td align='right'>
            <button className='whiteShadeBtn w-auto'>View Application</button>
          </td>
        </tr>
      </tbody>
    </table>
      </div>
    </div>
   </>
  )
}

export default MyApplications
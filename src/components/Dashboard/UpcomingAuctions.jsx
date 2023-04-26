import React from 'react'
import { ReactComponent as ApplicationIcon } from '../../Icons/DashboardIcons/Application.svg'
import {ReactComponent as TickIcon} from '../../Icons/Tick.svg'
import {ReactComponent as PendingIcon} from '../../Icons/YellowMark.svg'
import {ReactComponent as DeniedIcon} from '../../Icons/Cross.svg'
import { ReactComponent as Auctions } from '../../Icons/DashboardIcons/Auctions.svg'

const UpcomingAuctions = () => {
  return (
   <>
   <p className='sectionTitle'>
        <Auctions className='activeIcon' />
        Upcoming Auctions
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
            <p>Seller</p>
          </td>
<td></td>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <a href='#' className='appLink'>123456</a>
          </td>
          <td>
            <p>Cholamandalam Investment and Finance Company</p>
            </td>
          <td align='right'>
            <button className='whiteShadeBtn w-auto'>View Application</button>
          </td>
        </tr>
        <tr>
          <td>
            <a href='#' className='appLink'>123456</a>
          </td>
          <td>
            <p>Cholamandalam Investment and Finance Company</p>
            </td>
          <td align='right'>
            <button className='whiteShadeBtn w-auto'>View Application</button>
          </td>
        </tr>
        <tr>
          <td>
            <a href='#' className='appLink'>123456</a>
          </td>
          <td>
            <p>Cholamandalam Investment and Finance Company</p>
            </td>
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

export default UpcomingAuctions
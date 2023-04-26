import React from 'react'
import './style.css'
import './responsive.css'
import { ReactComponent as ToolTip } from '../../Icons/Tooltip.svg'

const AuctionTimeDetails = (props) => {
  return (
    <>
      <div className='whiteBox'>
        <div className='timeDetailsTwoCol'>
          <div className='timeDetailsFlexItem'>
            <p className='titleGray'>
              Auction Start Time
            </p>
            <p className='timeValue'>
             {props.auctionStartTime}
            </p>
          </div>
          <div className='timeDetailsFlexItem'>
            <p className='titleGray'>
              Scheduled End Time
            </p>
            <p className='timeValue'>
              {props.auctionEndTime}
            </p>
          </div>
          <div className='lineGray hideMob timeDetailsFlexItem'></div>
          <div className='timeDetailsFlexItem'>
            <p className='titleGray'>
              No. Of Extensions <span>
                <ToolTip />
              </span>
            </p>
            <p className='timeValue'>
              {props.extensions}
            </p>
          </div>
          <div className='timeDetailsFlexItem'>
            <p className='titleGray'>
              Final End Time
            </p>
            <p className='timeValue'>
              {props.finalEndTime}
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default AuctionTimeDetails
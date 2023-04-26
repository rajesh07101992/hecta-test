import React from 'react'
import './style.css'
import './responsive.css'
import { Link } from 'react-router-dom'
// import { useState } from 'react'

const AuctionCountDown = (props) => {
  const auctionStatus = props.auctionStatusData;
  // console.log("test"+ auctionStatus);

  return (
    <>
      <div className='whiteBox'>
        {auctionStatus === 'live' ? (
          <p className='auctionPropertyId' id='live'>
            Auction of Property ID: {props.id} will end in
          </p>
        ) : (null)}
        {auctionStatus === 'upcoming' ? (
          <p className='auctionPropertyId' id='upcoming'>
            Auction of Property ID: {props.id} will begin in
          </p>

        ) : (null)}

        {auctionStatus === 'closed' ? (
          <p className='auctionPropertyId' id='closed'>
            Auction of Property ID: {props.id} is closed
          </p>
        ) : (null)}

        {auctionStatus === 'live' || auctionStatus === 'upcoming' ? (
          <div className="counterContainer">
            <div className='counterCircle'>
              <p className='counterDigit'>
               {props.hours}
              </p>
              <p className='counterText'>
                HOURS
              </p>
            </div>
            <div className='counterCircle'>
              <p className='counterDigit'>
                {props.min}
              </p>
              <p className='counterText'>
                MINUTES
              </p>
            </div>
            <div className='counterCircle'>
              <p className='counterDigit'>
                {props.seconds}
              </p>
              <p className='counterText'>
                SECONDS
              </p>
            </div>

          </div>

        ) : (null)}

        {auctionStatus === 'closed' ? (
          <p className='auctionEndText'>
            The auction for the property id 1234 has ended.<br></br>
            Please contact us at <Link to='mailto:care@hecta.co'>care@hecta.co</Link> for further queries.
          </p>

        ) : (null)}


      </div>
    </>
  )
}

export default AuctionCountDown
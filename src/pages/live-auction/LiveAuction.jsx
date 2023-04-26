import React, { useState, useEffect } from 'react';
import './style.css';
import './responsive.css';
import AuctionCountDown from '../../components/Auction/AuctionCountDown';
import AuctionTimeDetails from '../../components/Auction/AuctionTimeDetails';
import RankDetails from '../../components/Auction/RankDetails';
import BidForm from '../../components/Auction/BidForm';
import BidLog from '../../components/Auction/BidLog';

import { connect } from 'react-redux';

const LiveAuction = () => {
  const auctionDetails = [
    {
      id: 12,
      auctionDate: '2023-09-12',
      auctionStatusData: 'live',
      auctionStartTime: '30 September 2023 11:00 am',
      auctionEndTime: '30 September 2023 12:00 pm',
      numberOfExtenstion: '1',
      finalEndTime: '30 September 2023 12:10 pm',
      rank: 'H1',
      increment: '₹ 1,00,000',
      currentBid: '₹ 59,24,00,000',
      nextMinumumBid: ' ₹ 59,25,00,000',

    }
  ];
  const { id, rank, increment, currentBid, nextMinumumBid, auctionDate, auctionStatusData, auctionStartTime, auctionEndTime, numberOfExtenstion, finalEndTime } = auctionDetails[0];

  const [currentBidAmt, setCurrentBidAmt] = useState(parseFloat(auctionDetails[0].currentBid.replace(/\D/g, '')));
  const incrementAmt = parseFloat(auctionDetails[0].increment.replace(/\D/g, ''));
 


  const targetDate = new Date(auctionDate);

  const currentTime = new Date();

  const [remainingTime, setRemainingTime] = useState({
    totalDays: 0,
    totalHours: 0,
    totalMinutes: 0,
    totalSeconds: 0,
    remainingSeconds: 0,
    remainingMinutes: 0,
    remainingHours: 0
  });

  // Update Counter


  useEffect(() => {

    const timer = setInterval(() => {

      const newTimeRemaining = targetDate - currentTime;
      if (newTimeRemaining > 0) {
        const newTotalDays = Math.floor(newTimeRemaining / (1000 * 60 * 60 * 24));
        const newTotalHours = Math.floor(newTimeRemaining / (1000 * 60 * 60));
        const newTotalMinutes = Math.floor(newTimeRemaining / (1000 * 60));
        const newTotalSeconds = Math.floor(newTimeRemaining / (1000));

        const newRemainingSeconds = newTotalSeconds % 60;
        const newRemainingMinutes = newTotalMinutes % 60;
        const newRemainingHours = (newTotalHours % 24) + (newTotalDays * 24);

        setRemainingTime({
          totalDays: newTotalDays,
          totalHours: newTotalHours,
          totalMinutes: newTotalMinutes,
          totalSeconds: newTotalSeconds,
          remainingSeconds: newRemainingSeconds,
          remainingMinutes: newRemainingMinutes,
          remainingHours: newRemainingHours
        });
      } else {
        clearInterval(timer);
      }
    }, 1000);
    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <>
      <div className='auctionContent'>
      <div className='padding-8'></div>
        {/* First Section */}
        <div className='auctionFirstSection'>

          {/* Counter Section */}
          <div className='AuctionLeftSection'>
            <AuctionCountDown
              id={id}
              hours={remainingTime.remainingHours}
              min={remainingTime.remainingMinutes}
              seconds={remainingTime.remainingSeconds}
              auctionStatusData={auctionStatusData}
            />
          </div>
          {/* End */}

          {/* Time and Rank details */}
          <div className='AuctionRightSection'>
            {/* Auction Time Details */}
            <AuctionTimeDetails
              auctionStartTime={auctionStartTime}
              auctionEndTime={auctionEndTime}
              extensions={numberOfExtenstion}
              finalEndTime={finalEndTime}
            />
            {/* End */}
            {/* Rank Details */}
            <RankDetails
              rank={rank}
              increment={increment}
              currentBid={currentBid}
              nextMinBid={nextMinumumBid}
            />
            {/* End */}
          </div>
          {/* End */}

        </div>
        {/* End First Section */}

        <div className='padding-8'></div>

        {/* second Section Bidding Form*/}
        <BidForm 
        currentBidAmout={currentBidAmt}
        incrementAmt={incrementAmt}
        auctionStatusData={auctionStatusData}
        />
        {/* End second Section */}

        <div className='padding8'></div>
        {/* Third Section Bidding Log*/}
        <BidLog />
        {/* End Third Section*/}
        <div className='padding8'></div>
      </div>
    </>
  )
}

const mapStateToprops=(state)=>{
  console.log(state);
  return{
    isLoggedIn:state
  }
}

export default connect(mapStateToprops) (LiveAuction);

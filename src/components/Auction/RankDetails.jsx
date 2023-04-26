import React from 'react'
import './style.css'
import './responsive.css'

const RankDetails = (props) => {
  return (
    <>
      <div className='whiteBox'>
        <div className='rankDetailsTwoCol'>
          <div className='rankFlex'>
            <p className='rankTitleBlue'>
              Your Rank
            </p>
            <p className='rankValue'>
             {props.rank}
            </p>
          </div>
          <div className='rankFlex'>
            <p className='rankTitleGray'>
              Increment
            </p>
            <p className='rankValue'>
              {props.increment}
            </p>
          </div>
          <div className='lineGray hideMob rankFlex'></div>
          <div className='rankFlex'>
            <p className='rankTitleGray'>
              Current Bid
            </p>
            <p className='rankValue'>
              {props.currentBid}
            </p>
          </div>
          <div className='rankFlex'>
            <p className='rankTitleGray'>
              Next Minimum Bid
            </p>
            <p className='rankValue'>
             {props.nextMinBid}
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default RankDetails
import React, {useState} from 'react'
import './style.css'
import './responsive.css'
import { ReactComponent as Decrement } from '../../Icons/Minus.svg'
import { ReactComponent as Increment } from '../../Icons/Plus.svg'

const BidForm = (props) => {
const [bidAmount, setBidAmout] = useState(props.currentBidAmout);
const increment = props.incrementAmt;
const status = props.auctionStatusData;

  const handleDecrement=()=>{
    setBidAmout(prevBid=>prevBid - increment);
  }
  const handleIncrement=()=>{
   setBidAmout(prevBid=>prevBid + increment);
  }

  let formattedBidAmount = bidAmount.toLocaleString('en-IN');


  const amountInWord ="rest";
console.log(status);
  return (
    <>
      <div className='whiteBox'>
        <form id='bidForm'>
          <div className='formColGroup'>
            <div className='formFlex'>
              <p className='bidFormTitleBlue'>
                Enter Bid Amount
              </p>
              <div className='bidCounter'>
                <input type='text' value={status ==='live' ? `₹ ${formattedBidAmount}` : 'NA'} placeholder='' id='bidCounter'   disabled={status !== 'live'}/>
                <div className='decr' onClick={handleDecrement}>
                  <Decrement   />
                </div>
                <div className='incr' onClick={handleIncrement}>
                  <Increment />
                </div>
              </div>

            </div>
            <div className='formFlex'>
              <p className='bidFormTitleGray'>
                Bid Amount in Words
              </p>
              <input type='text' id='bidInword' value={amountInWord} disabled/>
            </div>
            <div className='formFlex'>
              <button 
               className={`${status ==='live'? 'btnDark' : 'btnDisabled'}`}
               disabled={!status}
              >Submit Bid</button>
            </div>
          </div>
        </form>
      </div>
    </>
  )
}

export default BidForm
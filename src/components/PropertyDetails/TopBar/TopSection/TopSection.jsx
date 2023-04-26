import React from 'react'
import './style.css'
import './responsive.css'
import { ReactComponent as TooltipIcon } from '../../../../Icons/Tooltip.svg'
import ShareProperty from '../ShareProperty/ShareProperty'
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Modal from 'react-bootstrap/Modal';
import { ReactComponent as TrendingIcon } from '../../../../Icons/Trending.svg'

export const TopSection = (props) => {

  // Call hook to redirection function
  const navigate = useNavigate();
  // user Id

    // Property Id from URL
    const params = useParams();
    const propertyId = params.propertyId;
    // End
  // Check whether user id logged in or not
  const loggedIn = useSelector(state => state.users.isLoggedIn);
  // Bydefault modal is set to closed
  const [modalShow, setModalShow] = React.useState(false);

  // Data from Parent Component
  const {
    propId,
    slug,
    reserve_price,
    title,
    discount,
    app_deadline,
    address,
    trending_property,
    estimated_price
  } = props;
  // End data

  console.log(trending_property);
  // Apply for auction navigation
  const handleApplyForm = () => {
    navigate(`/bidder-detaills/${propertyId}/`);
  }
  // End

  // Redirect to login if unauthorized user trying to apply for auction
  const redirectToLogin = () => {
    navigate(`/login`);
  }

  // Modal to show message and redirect 
  const MyVerticallyCenteredModal = (props) => {
    return (
      <Modal
        {...props}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Body className='text-center'>

          <p className='modalText'>
            Please login to apply for auction
          </p>
          <button className='btnDark' onClick={redirectToLogin}>Okay</button>
        </Modal.Body>

      </Modal>
    );
  }
  // End Modal
  // End redirect

  let isTrending;

  if (typeof trending_property === 'boolean') {
    isTrending = trending_property;
  } else if (typeof trending_property === 'string') {
    isTrending = trending_property.toLowerCase() === 'true';
  }
  

  return (
    <>
      <div className='TopSection'>
        <div className='LeftSection'>
          <ShareProperty
            propertyId={propId}
            slug={slug}
            reservePrice={reserve_price}
            title={title}
            discount={discount}
            app_deadline={app_deadline}
            address={address}
          />
          <h1 className='propertyTitle'>
            {title}

            {/* {trending_property === 'True' || trending_property === 'true' || trending_property === true || trending_property !== ''? <span>
              <TrendingIcon />
            </span> : null
            } */}
                {/* {trending_property?.toLowerCase() === 'true' && <TrendingIcon />} */}

                {isTrending ? <TrendingIcon /> : null}


          </h1>
          <p className='propertyAddress'>
            {address}
          </p>
        </div>
        <div className='RightSection'>
          <p className='reservePrice'>
            Reserve Price
            <span>
              <TooltipIcon />
            </span>
          </p>
          <p className='priceNumber'>
            {reserve_price}
          </p>
          <p className='marketPrice'>
            Estimated Market Price {estimated_price}
            <span>
              <TooltipIcon />
            </span>
          </p>
        </div>
      </div>
      <div className='padding-20'></div>
      {loggedIn ? (
        <button className='btnDark' onClick={handleApplyForm}>Apply</button>
      ) : (
        <button className='btnDark' onClick={() => setModalShow(true)}>Apply</button>

      )}
      <div className='padding-20'></div>

      <p className='propertyDetailsTitle'>
        Property Details
      </p>
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  )
}

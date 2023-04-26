import React, { useState, useEffect } from 'react'
import TopHighlight from '../../components/BiddingForm/TopHighlight'
import BidderDetails from '../../components/BiddingForm/BidderDetails'
import KYCDocuments from '../../components/BiddingForm/KYCDocuments'
import EMDSubmission from '../../components/BiddingForm/EMDSubmission'
import TermsAndConditions from '../../components/BiddingForm/TermsAndConditions'
import './style.css'
import { useSelector } from 'react-redux'
import { useLocation, Navigate, useParams, useNavigate  } from 'react-router-dom';
import axios from 'axios'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import Modal from 'react-bootstrap/Modal';


const BiddingForm = (props) => {

  const navigate = useNavigate();
  // Check loggedIn status
  const loggedIn = useSelector(state => state.users.isLoggedIn);


// Top highlight navigation initial state
  const [existingData, setExistingData] = useState([]);
  const [biddersData, setBiddersdata] = useState(false)
  const [kycData, setKycData] = useState(false);
  const [emdData, setEmdData] = useState(false)
  const [termsData, setTermsData] = useState(false);
  // End

  // Extract prefetched data data
  const {
    aadhar_number,
    address,
    address_proof,
    address_proof_back,
    address_proof_front,
    amount,
    auction_id,
    bank_address,
    bank_name,
    bidder_name,
    branch_address,
    contact_number,
    created_at,
    email,
    emd_amount,
    employee_contact_number,
    employee_email,
    employee_id,
    employee_name,
    father_name,
    form_60,
    gender,
    gpa,
    id,
    instrument_date,
    instrument_number,
    instrument_proof,
    instrument_type,
    pan_card,
    pan_number,
    property_id,
    status,
    step_status,
    tender_document,
    user_id
  } = existingData;


  // Property Id from URL
  const params = useParams();
  const propertyId = params.propertyId;
  // End


  // API Congigurations
  const basePath = process.env.REACT_APP_API_PATH;
  const urlGetData = `${basePath}/api/get-bidding-details?property_id=${propertyId}`;
  const token = useSelector(state => state.users.token);
  const config = {
    headers: {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json',
      'property_id': propertyId
    }
  };
  // End

  // Prefetch Data Api
  useEffect(() => {
    axios.get(urlGetData, config)
      .then((response) => {
        const data = response.data.data;
        setExistingData(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  // End

  // Section Navigation
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, []);
  // End
  
  // Set form highlight navigation status biddersData
  useEffect(() => {
    console.log(step_status);
    // Set biddersData status
    if(step_status >= 1){
      setBiddersdata(true)
    }
    if(step_status >= 2 ){
      setKycData(true);
    }
    if(step_status >= 3 ){
      setEmdData(true);
    }
    if(step_status >= 4 ){
      setTermsData(true);
    }

  }, [step_status]);
  // end
  


  

  const [modalShow, setModalShow] = React.useState(false);

  useEffect(()=>{
    if(step_status === 4){
      setModalShow(true);
    }
  },[step_status])

  

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
                    You have already submitted the auction application for this property
                </p>
                <button className='btnDark' onClick={props.onHide}>Okay</button>
            </Modal.Body>

        </Modal>
    );
}
  console.log("Existing Data",existingData);
const redirectToPropertyList = ()=>{
  navigate(-1);
}
  return (
    <>
      {
        loggedIn === true ? (
            <>
          <div className='bgGray '>
            <div className='paddingtop bg-white'></div>
            <ToastContainer
                newestOnTop={false}
                rtl={false}
                pauseOnFocusLoss
                theme="colored"
              />
            <TopHighlight
              bidderDetailsId='bidderDetails'
              kycDetailsId='kycDetails'
              emdDetailsId='emdDetails'
              termsDetailsId='termsDetails'
              emdDataFilled={emdData}
              kycDataFilled={kycData}
              termsFilled={termsData}
              biddersFilled={biddersData}
            />
            <div className='padding-8' id='bidderDetails'></div>
            <BidderDetails
            filledStatus={setBiddersdata}
              bidderName={bidder_name}
              bidderFatherName={father_name}
              gender={gender}
              bidderAddress={address}
              bidderContactNumber={contact_number}
              bidderEmail={email}
              bidderAadharNumber={aadhar_number}
              bidderPanNumber={pan_number}
            />
            <div className='padding-8' id='kycDetails'></div>
            <KYCDocuments 
            filledStatus={setKycData}
            addressProofType={address_proof}
            addressProofImageFront={address_proof_back}
            addressProofImageBack={address_proof_front}
            panCardImage={pan_card}
            form60Image={form_60}
            generalPowerOfAttorneyImage={gpa}
            tenderDocumentImage={tender_document}
            stepStatus ={step_status}
            />
            <div className='padding-8' id='emdDetails'></div>
            <EMDSubmission
            filledStatus={setEmdData}
            EMDAmount={emd_amount}
            Amount={amount}
            bankName={bank_name}
            bankAddress={bank_address}
            instrumentType={instrument_type}
            instrumentNumber={instrument_number}
            instrumentDate={instrument_date}
            employeeName={employee_name}
            employeeId={employee_id}
            contactNumber={employee_contact_number}
            emailAddress={employee_email}
            branchAddress={branch_address}
            instrumentProofImage={instrument_proof}
            />
            <div className='padding-8' id='termsDetails'></div>
            <TermsAndConditions 
            filledStatus={setTermsData}
            checkStatus={step_status}
            />
            <div className='padding-8'></div>
          </div>
          <MyVerticallyCenteredModal
                            show={modalShow}
                            onHide={() => setModalShow(false)}
                            onClick={redirectToPropertyList}
                        />
                       
            </>
        ) : (
          <Navigate to='/login' />
        )
      }
    </>
  )
}

export default BiddingForm









import React, {  useEffect, useState } from 'react'
import { ReactComponent as FilledArrow } from '../../Icons/FilledArrow.svg'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { useSelector } from 'react-redux'
import { toast } from 'react-toastify';



const BidderDetails = (props, filledStatus) => {


  // Property Id from URL
  const params = useParams();
  const propertyId = params.propertyId;
  // End

   // API Congigurations
   const basePath = process.env.REACT_APP_API_PATH;
   const urlPostData = `${basePath}/api/submit-bidding-details`;//Url for submit form
   const token = useSelector(state => state.users.token);
  //  const token = 'tetst';
   const config = {
     headers: {
       'Authorization': `Bearer ${token}`,
       'Content-Type': 'application/json',
       'property_id':propertyId
     }
   };
   // End

const [formValues, setFormValues] = useState({
  bidderName:'',
  bidderFatherName:'',
  bidderAddress:'',
  gender:'',
  bidderContactNumber:'',
  bidderEmail:'',
  bidderAadharNumber:'',
  bidderPanNumber:'',
})
  // End

   // Prefetched Data if available
  useEffect(()=>{
   const {
    bidderName = '', 
    bidderFatherName = '',
    bidderAddress = '',
    gender = '',
    bidderContactNumber = '',
    bidderEmail = '',
    bidderPanNumber = '',
    bidderAadharNumber = '',
    saveBtnStatus
  } = props;
  // console.log(props);

  setFormValues({
    bidderName,
    bidderFatherName,
    bidderAddress,
    gender,
    bidderContactNumber,
    bidderEmail,
    bidderPanNumber,
    bidderAadharNumber,
  });

}, [props]);
// End 
  

  // Form field value onchange functions
  const handleChange = (event) => {
    const { name, value } = event.target
    setFormValues(prevState => ({
      ...prevState,
      [name]: value
    }));
  }
// End

// Toggle form section visibility
  const [isFormVisible, setIsFormVisible] = useState(true);
  const toggleForm = () => {
    setIsFormVisible(prevState => !prevState);
  }
  // End

  // Toggle Arrow direction
  const arrowClass = isFormVisible ? 'DownArrow' : 'UpArrow';
  // End

  // Default error visibilty
  const [error, setError] = useState({
    error1: false,
    error2: false,
    error3: false,
    error4: false,
    error5: false,
    error6: false,
    error7: false,
    error8: false,
  })
  // End

  // Allow user to enter only number fields
  const handleKeyPress = (event) => {
    const keyCode = event.keyCode || event.which;
    const keyValue = String.fromCharCode(keyCode);
    if (!/^\d+$/.test(keyValue) && !/^[\b]+$/.test(keyValue)) {
      event.preventDefault();
    }
  };
// End


// Updated form data
  const formData = {
    property_id: propertyId,
    bidder_name: formValues.bidderName,
    father_name: formValues.bidderFatherName,
    gender: formValues.gender,
    address: formValues.bidderAddress,
    contact_number: formValues.bidderContactNumber,
    email: formValues.bidderEmail,
    aadhar_number: formValues.bidderAadharNumber,
    pan_number: formValues.bidderPanNumber
  }
  // End

 

  // Send POST request with Axios
  const handleSubmitData = (event) => {
    event.preventDefault();

    // Validate form data
    if (!formValues.bidderName) {
      setError((prevState) => ({ ...prevState, error1: true }));
      document.getElementById('bidderName').classList.add('borderRed');
    } else {
      setError((prevState) => ({ ...prevState, error1: false }));
      document.getElementById('bidderName').classList.remove('borderRed');
    }

    if (!formValues.bidderFatherName) {
      setError((prevState) => ({ ...prevState, error2: true }));
      document.getElementById('bidderFatherName').classList.add('borderRed');
    } else {
      setError((prevState) => ({ ...prevState, error2: false }));
      document.getElementById('bidderFatherName').classList.remove('borderRed');
    }

    if (!formValues.gender) {
      setError((prevState) => ({ ...prevState, error3: true }));
      document.getElementById('gender').classList.add('borderRed');
    } else {
      setError((prevState) => ({ ...prevState, error3: false }));
      document.getElementById('gender').classList.remove('borderRed');
    }

    if (!formValues.bidderAddress) {
      setError((prevState) => ({ ...prevState, error4: true }));
      document.getElementById('bidderAddress').classList.add('borderRed');
    } else {
      setError((prevState) => ({ ...prevState, error4: false }));
      document.getElementById('bidderAddress').classList.remove('borderRed');
    }

    if (!formValues.bidderContactNumber) {
      setError((prevState) => ({ ...prevState, error5: true }));
      document.getElementById('bidderContactNumber').classList.add('borderRed');
    } else {
      setError((prevState) => ({ ...prevState, error5: false }));
      document.getElementById('bidderContactNumber').classList.remove('borderRed');
    }

    if (!formValues.bidderEmail) {
      setError((prevState) => ({ ...prevState, error6: true }));
      document.getElementById('bidderEmail').classList.add('borderRed');
    } else {
      setError((prevState) => ({ ...prevState, error6: false }));
      document.getElementById('bidderEmail').classList.remove('borderRed');
    }

    if (!formValues.bidderAadharNumber) {
      setError((prevState) => ({ ...prevState, error7: true }));
      document.getElementById('bidderAadharNumber').classList.add('borderRed');

    } else {
      setError((prevState) => ({ ...prevState, error7: false }));
      document.getElementById('bidderAadharNumber').classList.remove('borderRed');

    }

    if (!formValues.bidderPanNumber) {
      setError((prevState) => ({ ...prevState, error8: true }));
      document.getElementById('bidderPanNumber').classList.add('borderRed');

    } else {
      setError((prevState) => ({ ...prevState, error8: false }));
      document.getElementById('bidderPanNumber').classList.remove('borderRed');

    }
    // Handle formdata with api call
    if (
      formValues.bidderName &&
      formValues.bidderFatherName &&
      formValues.gender &&
      formValues.bidderAddress &&
      formValues.bidderContactNumber &&
      formValues.bidderEmail &&
      formValues.bidderAadharNumber &&
      formValues.bidderPanNumber
    ) {
      axios
        .post(urlPostData, formData, config)
        .then((response) => {
          // console.log(response.data);
          toast.success('Bidder details saved successfully', {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          });
          filledStatus(true);
        })
        .catch((error) => {
          console.error(error);
          // console.log(error.response.data.message);
          if(error.response.data.message == 'You have already submited bidding form for this property!'){
            toast.error('Bidder details aready submitted', {
              position: "top-center",
              autoClose: 2000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "colored",
            });
          }else if(error.response.data.message == 'Unauthorized User'){
            toast.error('Unauthorized User', {
              position: "top-center",
              autoClose: 2000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "colored",
            });
          }
        });
    }

  }
  //  End submit

  return (
    <>
      <div className='detailsContent'>
        <div className='DetailsBox'>
          <div className='boxNav'>
            <p>
              Bidder Details
            </p>
            <div>
              <FilledArrow className={arrowClass} onClick={toggleForm} />
            </div>
          </div>
          {isFormVisible && (
            <>
           
              <form>
                <div className='formDetails'>
                  {/* Left Section */}
                  <div className='leftSection'>
                    <p className='formDesc'>
                      Please provide the details of the bidder participating in the auction.
                      All fields are mandatory.
                    </p>
                  </div>
                  {/* End */}

                  {/* Right Section */}
                  <div className='rightSection'>

                    <div className='formGroupTwoCol'>
                      <div className='formField'>
                        <p className='formLable'>
                          Bidder’s Name
                        </p>

                        <input type="text" placeholder='Bidder’s Name' id='bidderName' name="bidderName" value={formValues.bidderName} onChange={handleChange} />
                        {error.error1 &&
                          <error>
                            This field is required
                          </error>
                        }
                      </div>
                      <div className='formField'>
                        <p className='formLable'>
                          Father’s Name
                        </p>
                        <input placeholder='Father’s Name' id='bidderFatherName' name='bidderFatherName' value={formValues.bidderFatherName} onChange={handleChange} type='text' />
                        {error.error2 &&
                          <error>
                            This field is required
                          </error>
                        }
                      </div>
                      <div className='formField'>
                        <p className='formLable'>
                          Gender
                        </p>
                        <select id="gender" name='gender' value={formValues.gender} onChange={handleChange}>
                          <option disabled defaultValue value="">Choose an option</option>
                          <option>Male</option>
                          <option>Female</option>
                        </select>
                        {error.error3 &&
                          <error>
                            This field is required
                          </error>
                        }
                      </div>
                      <div className='formField'>
                        <p className='formLable'>
                          Bidder’s Address
                        </p>
                        <input placeholder='Bidder’s Address' id='bidderAddress' name='bidderAddress' value={formValues.bidderAddress} onChange={handleChange} type='text' />
                        {error.error4 &&
                          <error>
                            This field is required
                          </error>
                        }
                      </div>
                      <div className='formField'>
                        <p className='formLable'>
                          Contact Number
                        </p>
                        <input placeholder='Contact Number' id='bidderContactNumber' maxLength={10} name='bidderContactNumber' onKeyDown={handleKeyPress} value={formValues.bidderContactNumber} onChange={handleChange} type='text' />
                        {error.error5 &&
                          <error>
                            This field is required
                          </error>
                        }
                      </div>
                      <div className='formField'>
                        <p className='formLable'>
                          Email Address
                        </p>
                        <input placeholder='Email Address' id='bidderEmail' name='bidderEmail' value={formValues.bidderEmail} onChange={handleChange} type='email' />
                        {error.error6 &&
                          <error>
                            This field is required
                          </error>
                        }
                      </div>
                      <div className='formField'>
                        <p className='formLable'>
                          Aadhar Number
                        </p>
                        <input placeholder='Aadhar Number' id='bidderAadharNumber' onKeyDown={handleKeyPress} maxLength={12} name='bidderAadharNumber' value={formValues.bidderAadharNumber} onChange={handleChange} type='text' />
                        {error.error7 &&
                          <error>
                            This field is required
                          </error>
                        }
                      </div>
                      <div className='formField'>
                        <p className='formLable'>
                          PAN Number
                        </p>
                        <input placeholder='PAN Number' className='pancard' id='bidderPanNumber' name='bidderPanNumber' value={formValues.bidderPanNumber} onChange={handleChange} type='text' />
                        {error.error8 &&
                          <error>
                            This field is required
                          </error>
                        }
                      </div>
                    </div>

                  </div>
                  {/* End */}
                </div>
                <div className='horizontalLine'></div>
                <div className='floatRight'>
                  <button type='submit' className='blueShadeBtn saveBtn' onClick={handleSubmitData}>Save</button>
                </div>

              </form>
            </>
          )}
        </div>
      </div>
    </>
  )
}

export default BidderDetails

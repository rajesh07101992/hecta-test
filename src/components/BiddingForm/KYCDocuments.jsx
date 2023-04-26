
import React, { useEffect, useState } from 'react'
import { ReactComponent as FilledArrow } from '../../Icons/FilledArrow.svg'
import ImageUploader from './ImageUploader'
import axios from 'axios'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { toast } from 'react-toastify';
import { ReactComponent as Tick } from '../../Icons/Tick.svg'


const KYCDocuments = (props, filledStatus) => {


  // Form Data
  const [formValues, setFormValues] = useState({
    addressProofType: '',
    addressProofImageFront: '',
    addressProofImageBack: '',
    form60Image: '',
    generalPowerOfAttorneyImage: '',
    panCardImage: '',
    tenderDocumentImage: '',
  });
  // End
  // console.log(formValues);

  const [dataAvailable, setDataAvailable] = useState(false);
console.log(dataAvailable);
  // Existing Data
useEffect(()=>{
  const {
    addressProofType,
    addressProofImageFront,
    addressProofImageBack,
    form60Image,
    generalPowerOfAttorneyImage,
    panCardImage,
    tenderDocumentImage,
    stepStatus
  }=props;

  if(stepStatus === 2){
    setDataAvailable(true)
  }
  // console.log(stepStatus);
  setFormValues({
    addressProofType,
    addressProofImageFront,
    addressProofImageBack,
    form60Image,
    generalPowerOfAttorneyImage,
    panCardImage,
    tenderDocumentImage
  })
},[props])
// End
  // Input Values Change
  const handleChange = (event) => {
    const { name, value } = event.target
    setFormValues(prevState => ({
      ...prevState,
      [name]: value
    }));
  }
  //  End

 
  // Image Upload data to the form data
  const handleImageUpload = (index, image) => {
 
    // console.log('Index:', index);
    // console.log('Image:', image);

      if (index === 0) {
      setFormValues(prevState => ({
        ...prevState,
        addressProofImageFront: image
      }));
    } else if (index === 1) {
      setFormValues(prevState => ({
        ...prevState,
        addressProofImageBack: image
      }));
    } else if (index === 2) {
      setFormValues(prevState => ({
        ...prevState,
        form60Image: image
      }));
    } else if (index === 3) {
      setFormValues(prevState => ({
        ...prevState,
        generalPowerOfAttorneyImage: image
      }));
    } else if (index === 4) {
      setFormValues(prevState => ({
        ...prevState,
        panCardImage: image
      }));
    } else if (index === 5) {
      setFormValues(prevState => ({
        ...prevState,
        tenderDocumentImage: image
      }));
    }
  };
  // End

  // Image Removal
  const handleImageRemoval = (index) => {
    if (index === 0) {
      setFormValues((prevState) => ({
        ...prevState,
        addressProofImageFront: undefined,
      }));
    } else if (index === 1) {
      setFormValues((prevState) => ({
        ...prevState,
        addressProofImageBack: undefined,
      }));
    } else if (index === 2) {
      setFormValues((prevState) => ({
        ...prevState,
        form60Image: undefined,
      }));
    } else if (index === 3) {
      setFormValues((prevState) => ({
        ...prevState,
        generalPowerOfAttorneyImage: undefined,
      }));
    } else if (index === 4) {
      setFormValues((prevState) => ({
        ...prevState,
        panCardImage: undefined,
      }));
    } else if (index === 5) {
      setFormValues((prevState) => ({
        ...prevState,
        tenderDocumentImage: undefined,
      }));
    }
  };

  // Collpse Form Div
  const [isFormVisible, setIsFormVisible] = useState(true);
  const toggleForm = () => {
    setIsFormVisible(prevState => !prevState);
  }
  const arrowClass = isFormVisible ? 'DownArrow' : 'UpArrow';
  // End

  // API Congigurations
  const params = useParams();
  const propertyId = params.propertyId;
  const basePath = process.env.REACT_APP_API_PATH;
  const urlPostData = `${basePath}/api/submit-kyc`;//Url for submit form
  const token = useSelector(state => state.users.token);
  //  const token = 'tetst';
  const config = {
    headers: {
      'Authorization': `Bearer ${token}`,
      // 'Content-Type': 'application/json',
      'property_id': propertyId
    }
  };
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
  
 // Create form data object
 const formData = new FormData();
 formData.append('property_id', propertyId);
 formData.append('address_proof', formValues.addressProofType);
 formData.append('address_proof_back', formValues.addressProofImageFront?.[0]);
 formData.append('address_proof_front', formValues.addressProofImageBack?.[0]);
 formData.append('pan_card', formValues.panCardImage?.[0]);
 formData.append('form_60', formValues.form60Image?.[0]);
 formData.append('gpa', formValues.generalPowerOfAttorneyImage?.[0]);
 formData.append('tender_document', formValues.tenderDocumentImage?.[0]);
 

const handleSubmitKeyDetails = (event) => {
  event.preventDefault();
  // console.log(formData);
  
  if (!formValues.addressProofType) {
    setError(prevState => ({
      ...prevState,
      error1: true,
    }));
  } else {
    setError(prevState => ({
      ...prevState,
      error1: false,
    }));
  }
  
  if (!formValues.addressProofImageFront?.[0]) {
    setError(prevState => ({
      ...prevState,
      error2: true,
    }));
  } else {
    setError(prevState => ({
      ...prevState,
      error2: false,
    }));
  }
  
  if (!formValues.addressProofImageBack?.[0]) {
    setError(prevState => ({
      ...prevState,
      error3: true,
    }));
  } else {
    setError(prevState => ({
      ...prevState,
      error3: false,
    }));
  }
  
  if (!formValues.panCardImage?.[0]) {
    setError(prevState => ({
      ...prevState,
      error4: true,
    }));
  } else {
    setError(prevState => ({
      ...prevState,
      error4: false,
    }));
  }
  
  if (!formValues.form60Image?.[0]) {
    setError(prevState => ({
      ...prevState,
      error5: true,
    }));
  } else {
    setError(prevState => ({
      ...prevState,
      error5: false,
    }));
  }
  
  if (!formValues.generalPowerOfAttorneyImage?.[0]) {
    setError(prevState => ({
      ...prevState,
      error6: true,
    }));
  } else {
    setError(prevState => ({
      ...prevState,
      error6: false,
    }));
  }
  
  if (!formValues.tenderDocumentImage?.[0]) {
    setError(prevState => ({
      ...prevState,
      error7: true,
    }));
  } else {
    setError(prevState => ({
      ...prevState,
      error7: false,
    }));
  }

// Post Data
axios.post(urlPostData, formData, config)
  .then(response => {
    console.log(response.data);
    toast.success('KYC Documents saved successfully', {
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
  .catch(error => {
    console.error(error);
    if(error.response.data.message == 'Invalid access of form step' || error.response.data.message == 'All steps for this auction form is already submited'){
      toast.error('KYC Documents aready submitted', {
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
    else if(error.response.data.message == 'We can not find any bidding details for this property!'){
      toast.error('Please submit bidding details first', {
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
};




  return (
    <>
      <div className='detailsContent'>
        <div className='DetailsBox'>
          <div className='boxNav'>
            <p>
              KYC Documents
            </p>
            <div>
              <FilledArrow className={arrowClass} onClick={toggleForm} />
            </div>
          </div>
          {isFormVisible && (
            <form>
              <div className='formDetails'>
                {/* Left Section */}
                <div className='leftSection'>
                  <p className='formDesc'>
                    Please provide KYC documents of the bidder participating in the auction.
                    All fields are mandatory.
                  </p>
                </div>
                {/* End */}

                {/* Right Section */}
                <div className='rightSection'>

                  <div className='formGroupTwoCol'>

                    <div className='formField'>
                      <p className='formLable'>
                        Address Proof
                      </p>
                      <select id="addressProof" name='addressProofType' value={formValues.addressProofType} onChange={handleChange}>
                        <option disabled defaultValue value="">Choose Address Proof Type</option>
                        <option>PAN</option>
                        <option>AADHAAR Card</option>
                      </select>
                      {error.error1 &&
                          <error>
                            This field is required
                          </error>
                        }
                    </div>

                    <div className='formField'>
                      <p className='formLable'>
                        Address Proof (Front)
                      </p>
                   
                      {dataAvailable ? (
<p className='photoSubmited'><span>Image Updated <Tick width={18}/></span></p>
                      ):(
                        <>

                        <ImageUploader index={0} handleImageUpload={handleImageUpload} handleImageRemoval={handleImageRemoval} />
                        {error.error2 &&
                            <error>
                              This field is required
                            </error>
                          }
                        </>

                      )}
                    </div>

                    <div className='formField'>
                      <p className='formLable'>
                        Address Proof (Back)
                      </p>
                      {dataAvailable ? (
<p className='photoSubmited'><span>Image Updated <Tick width={18}/></span></p>

                      ):(
<>

<ImageUploader index={1} handleImageUpload={handleImageUpload} handleImageRemoval={handleImageRemoval} />
  {error.error3 &&
      <error>
        This field is required
      </error>
    }
</>
                      )}
                    </div>
                    <div className='formField'>
                      <p className='formLable'>
                        Form 60
                      </p>
                      {dataAvailable ? (
<p className='photoSubmited'><span>Image Updated <Tick width={18}/></span></p>

                      ):(
<>
<ImageUploader index={2} handleImageUpload={handleImageUpload} handleImageRemoval={handleImageRemoval} />
  {error.error4 &&
      <error>
        This field is required
      </error>
    }

</>
                      )}
                    </div>
                    <div className='formField'>
                      <p className='formLable'>
                        General Power of Attorney
                      </p>
                      {dataAvailable ? (
<p className='photoSubmited'><span>Image Updated <Tick width={18}/></span></p>

                      ):(
<>
<ImageUploader index={3} handleImageUpload={handleImageUpload} handleImageRemoval={handleImageRemoval} />
  {error.error5 &&
      <error>
        This field is required
      </error>
    }

</>
                      )}
                    </div>
                    <div className='formField'>
                      <p className='formLable'>
                        PAN Card
                      </p>
                      {dataAvailable ? (
<p className='photoSubmited'><span>Image Updated <Tick width={18}/></span></p>

                      ):(
                        <>
                        
                        <ImageUploader index={4} handleImageUpload={handleImageUpload} handleImageRemoval={handleImageRemoval} />
                          {error.error6 &&
                              <error>
                                This field is required
                              </error>
                            }
                        </>
                      )}
                    </div>
                    <div className='formField'>
                      <p className='formLable'>
                        Tender Document
                      </p>
                      {dataAvailable ? (
<p className='photoSubmited'><span>Image Updated <Tick width={18}/></span></p>

                      ):(
                        <>
                        <ImageUploader index={5} handleImageUpload={handleImageUpload} handleImageRemoval={handleImageRemoval} />
                          {error.error7 &&
                              <error>
                                This field is required
                              </error>
                            }
                        
                        </>
                      )}
                   </div>

                  </div>

                </div>
                {/* End */}
              </div>
              <div className='horizontalLine'></div>
              <div className='floatRight'>
                <button type='submit' className='blueShadeBtn saveBtn' onClick={handleSubmitKeyDetails}>Save</button>
              </div>
            </form>
          )}
        </div>
      </div>
    </>
  )
}

export default KYCDocuments

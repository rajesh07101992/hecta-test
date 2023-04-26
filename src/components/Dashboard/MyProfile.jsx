import React from 'react'
import { ReactComponent as UserIcon } from '../../Icons/DashboardIcons/User.svg'

const MyProfile = () => {
  return (
    <>
    <p className='sectionTitle'>
        <UserIcon className='activeIcon'/>
        My Profile
    </p>
    <div className='p20'></div>
    <div className='UserContentBlock'>
      <form id="profileForm">
    <div className='formFieldsGroup'>
      <div className='formFieldCol'>
        <p className='blueFormLabel'>Name</p>
        <input type='text' placeholder='Name'/>
      </div>
      <div className='formFieldCol'>
        <p className='blueFormLabel'>Father’s Name</p>
        <input type='text' placeholder='Father’s Name'/>
      </div>
      <div className='formFieldCol'>
        <p className='blueFormLabel'>Email Address <span className='sendOtp'>Send OTP</span></p>
        <input type='email' placeholder='Email Address'/>
      </div>
      <div className='formFieldCol'>
        <p className='blueFormLabel'>Phone Number <span className='sendOtp'>Send OTP</span></p>
        <input type='text' placeholder='Phone Number'/>
      </div>
      <div className='formFieldCol' id='address'>
        <p className='blueFormLabel'>Address</p>
        <input type='text' placeholder='Address'/>
      </div>
      <div className='formFieldCol'>
        <p className='blueFormLabel'>Aadhar Number</p>
        <input type='text' placeholder='Aadhar Number'/>
      </div>
      <div className='formFieldCol'>
        <p className='blueFormLabel'>PAN Number</p>
        <input type='text' placeholder='PAN Number'/>
      </div>
      <div className='formFieldCol groupBox mt-8'>
        <button className='btnDark w-auto'>Save</button>
        <button className='whiteShadeBtn w-auto'>Update Password</button>
      </div>
    </div>
      </form>
    </div>
    </>
  )
}

export default MyProfile
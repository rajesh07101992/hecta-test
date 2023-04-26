import React from 'react'
import './style.css'
import './responsive.css'
import { ReactComponent as HectaPlus } from '../../../Icons/HectaPlus.svg'


export const AdditionalInformation = (props) => {

  const additionalInfoList = Object.entries(props.additional_info).map(([key, value]) => (
    <div className='infoPoint' key={key}>
    <HectaPlus className='hectaPlus'/>
    <p>
    {value}
    </p>
  </div>
  ));

  return (
   <>
       <p className='addistionalInfoTitle'>
       Additional Information
        </p>
        {
          additionalInfoList
        }
   </>
  )
}


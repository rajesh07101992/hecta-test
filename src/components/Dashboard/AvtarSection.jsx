import React from 'react'
import './style.css'
import './responsive.css'

const AvtarSection = () => {
    // const image = './images/avtar.webp';
    const image = '';
    const userName = 'John Doe';
    const [firstName, lastName] = userName.split(' ');
    const initials = `${firstName.charAt(0)}${lastName.charAt(0)}`;

  return (
    <>
    <div className='avtarInfo'>
        <div className='avtarImage'>
           {image ? (
            <img src={image} alt="" width='100%'/>
           ):(
                <p className='avtarText'>
                    {initials}
                </p>
           )}
        </div>
        <div>
            <p className='userName'>
           {userName}
            </p>
            <p className='userEmail'>
            john.doe@email.com
            </p>
        </div>
    </div>
    </>
  )
}

export default AvtarSection
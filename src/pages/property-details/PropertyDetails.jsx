import React, { useState, useEffect } from 'react'
import { BreadCrumb } from '../../components/BreadCrumb/BreadCrumb'
import { Link, useParams } from 'react-router-dom'
import './style.css'
import './responsive.css'
import { TopSection } from '../../components/PropertyDetails/TopBar/TopSection/TopSection'
import VisualTabs from '../../components/PropertyDetails/FirstSection/Tabs/VisualTabs'
import PropertyData from '../../components/PropertyDetails/FirstSection/PropertyData/PropertyData'
import ApplicationDetails from '../../components/PropertyDetails/ApplicationDetails/ApplicationDetails'
import { AdditionalInformation } from '../../components/PropertyDetails/AdditionalInformation/AdditionalInformation'
import Disclaimer from '../../components/PropertyDetails/Disclaimer/Disclaimer'

import axios from 'axios'

export const PropertyDetails = () => {
    const param = useParams();
    const ID = param.propertyId;
    const basePath = process.env.REACT_APP_API_PATH;
    const url = `${basePath}/api/property?id=`;

    const [propertyDetailsData, setPropertyDetailsData] = useState('');
    const [category, setCategory] = useState('');

    // console.log(param.propertyId);

    useEffect(() => {
        axios
            .get(`${url}${ID}`)
            .then((response) => {
                setPropertyDetailsData(response.data);
                console.log(response.data);
                setCategory(response.data.categories[0].name)
            })
            .catch((error) => console.log(error));
    }, []);

    console.log(category);

    const images = [
        {
            original: 'https://picsum.photos/id/1018/1000/600/',
            thumbnail: 'https://picsum.photos/id/1018/250/150/',
            originalWidth: '100%',
            showThumbnails: false
        },
        {
            original: 'https://picsum.photos/id/1015/1000/600/',
            thumbnail: 'https://picsum.photos/id/1015/250/150/',
            originalWidth: '100%',
            showThumbnails: false
        },
        {
            original: 'https://picsum.photos/id/1019/1000/600/',
            thumbnail: 'https://picsum.photos/id/1019/250/150/',
            originalWidth: '100%',
            showThumbnails: false
        },
    ];


    // Data from API
    const {
        name,
        id,
        reserve_price,
        discount_percentage,
        address,
        estimated_value,
        built_up_area,
        total_area,
        possession_status,
        bank_name,
        emd,
        application_end_date,
        auction_start_date_time,
        auction_type,
        sro_office,
        auction_time_extension,
        short_description,
        slug,
        latitude,
        longitude,
        street
    } = propertyDetailsData;
    // End


 
    // const reservePrice = Number(reserve_price);
    // const estimatedPrice = Number(estimated_value);
    // const emdPrice = Number(emd);

    // const formattedPrice = reservePrice.toLocaleString('en-IN', {
    //   style: 'currency',
    //   currency: 'INR',
    //   maximumFractionDigits: 0
    // });
    // const formattedPriceEsitmated = estimatedPrice.toLocaleString('en-IN', {
    //   style: 'currency',
    //   currency: 'INR',
    //   maximumFractionDigits: 0
    // });
    // const formattedPriceEmd = emdPrice.toLocaleString('en-IN', {
    //   style: 'currency',
    //   currency: 'INR',
    //   maximumFractionDigits: 0
    // });


    //Format Currency Function 
    function formatCurrency(value) {
        if (isNaN(value)) {
            return '';
        }
        const formattedValue = Number(value).toLocaleString('en-IN', {
            style: 'currency',
            currency: 'INR',
            maximumFractionDigits: 0
        });
        return formattedValue;
    }
    // End

    // Currency data
    const reservePrice = formatCurrency(reserve_price);
    const estimatedPrice = formatCurrency(estimated_value);
    const emdPrice = formatCurrency(emd);
    // End

    // Application End date formatted
    const applicationEndDate = application_end_date;
    let formattedDate1 = 'NA';

    if (applicationEndDate) {
        const year = applicationEndDate.substr(0, 4);
        const month = applicationEndDate.substr(4, 2) - 1; // Month is zero-indexed
        const day = applicationEndDate.substr(6, 2);

        const dateObj = new Date(year, month, day);
        formattedDate1 = dateObj.toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' });
    }
    //   End
    // Auction Start date and time
    const auctionStartDate = auction_start_date_time;
    let formattedDate2 = 'NA';

    if (auctionStartDate) {
        const year = auctionStartDate.substr(0, 4);
        const month = auctionStartDate.substr(5, 2) - 1; // Month is zero-indexed
        const day = auctionStartDate.substr(8, 2);
        const hour = parseInt(auctionStartDate.substr(11, 2));
        const minute = auctionStartDate.substr(14, 2);
        const meridiem = hour < 12 ? 'AM' : 'PM';
        const formattedHour = hour % 12 === 0 ? 12 : hour % 12;

        const dateObj = new Date(year, month, day, hour, minute);
        formattedDate2 = `${day} ${dateObj.toLocaleString('default', { month: 'short' })} ${year} ${formattedHour}:${minute}${meridiem}`;
    }
    // End
    //    Dummy Property Data
    const propertyData =
    {

        additional_info: "Out of ~20 Acres, 12.18 Acres is Industrial Land & 7.72 Acres is SEZ Land. Six wings A to F each of G + 3 Floors. Opportunity to have Single or Multi-tenant use, provide flexibility for easy expansion in full horizontal floor plate or single vertical wing expansion or both. High efficiency floor plates ranging from smaller footprint of 6000 SF to the larger footprint of 11,000 SF. Adequate Live Load, Floor height of 4.5 meters, Multiple shafts and Grid positioning makes the building suitable for various types of R&D activities, Vivarium, Intensive Chemistry operations, GMP Pilot Plant, Medical Devices and other technological spaces including data centers that qualify as per TIA-942 to suit Tier 3/ 4 Data center.",
        eoi_status: true,
        trending_property: true
    }
    // End

    // Destructured Property Data
    const {
        trending_property
    } = propertyData;
    // End

    // Additional Information
    const additionalInfoArray = propertyData.additional_info.split('. ');
    const additionalInfoObject = {};
    additionalInfoArray.forEach((sentence) => {
        const [key, value] = sentence.split(': ');
        additionalInfoObject[key] = value;
    });
    console.log(additionalInfoArray);
    // ENd

    // End
    //   Arrow Icon in Breadcrumb
    const arrow = () => {
        return (
            <span className="iconArrow">
                <svg width="6" height="8" viewBox="0 0 6 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.726562 0.94L3.7799 4L0.726562 7.06L1.66656 8L5.66656 4L1.66656 -4.10887e-08L0.726562 0.94Z" fill="#707070" />
                </svg>
            </span>
        )
    }
    // End

    // Exrtact src from iframs
   function extractSrcFromIframe(iframe) {
  if (!iframe) {
    return null;
  }
  const parser = new DOMParser();
  const doc = parser.parseFromString(iframe, 'text/html');
  const iframeElement = doc.getElementsByTagName('iframe')[0];
  if (!iframeElement) {
    return null;
  }
  const src = iframeElement.getAttribute('src');
  return src;
}
    //   End

    // Src for virtual tour
      const virtualTourSrc = extractSrcFromIframe(street);

    //   Google map 
    const googleMapSrc = `https://www.google.com/maps/embed/v1/view?key=AIzaSyD_ZT6JaHQxwsEFc2Gx9XS2saxzpxeHw8U&center=${latitude},${longitude}&zoom=18`;
    const map = <iframe width="100%" height="264" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src={googleMapSrc}></iframe>
    // End
    
    // Arial View
    const arialviewSrc = `https://cdn.pannellum.org/2.5/pannellum.htm#panorama=&autoLoad=true&autoRotate=-2`
const arialView =<iframe class=""
 width="100%" 
 height="300" 
 allowfullscreen
src="https://cdn.pannellum.org/2.5/pannellum.htm#panorama=https://hecta.co/wp-content/uploads/2022/02/Jayanagar-scaled.jpg&autoLoad=true&autoRotate=-2"></iframe>
    // End

    // Tabs Data
    const tabs = [
        {
            title: 'Aerial View',
            content: arialView
        },
        {
            title: 'Map View',
            content: map
           
        },
        {
            title: 'Virtual Tour',
            content: <iframe src={virtualTourSrc} width="100%" height="264" allowFullScreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>,
        },
        {
            title: 'Photos',
            // content: <ImageGallery items={images} width='100px' />,
            content: 'test',
        },
    ];
    // End

    // Filter tabs if content is empty
    const filteredTabs = tabs.filter((tab) => tab.content);
    //   End 

    return (

        <>

            <div className='allContent60'>
                <div className='paddingtop'></div>
                {/* BreadCrumb */}
                <BreadCrumb path={<>
                    Home{arrow()}<Link className='breadCrumbLink' to="/upcoming-auctions">Upcoming Auctions</Link>
                </>} pageName={name} />
                {/* End */}

                <div className='padding-20'></div>

                {/* TobBar */}
                <TopSection
                    title={name}
                    address={address}
                    reserve_price={reservePrice}
                    estimated_price={estimatedPrice}
                   
                    trending_property={trending_property}
                    propId={id}
                    slug={slug}
                    discount={discount_percentage}
                    app_deadline={formattedDate1 ? (formattedDate1):('N/A')}
                />
                {/* End */}

                {/* First Section */}
                <div className='detailsFirstSection'>
                    <div className='tabSection'>
                        <VisualTabs tabs={filteredTabs} />
                    </div>
                    <div className='detailsSection'>
                        <PropertyData
                            discount={discount_percentage}
                            built_up_area={built_up_area}
                            total_area={total_area}
                            property_type={category}
                            possession_status={possession_status}
                            seller={bank_name ? (bank_name):('N/A')}
                        />
                    </div>
                </div>
                {/* End First Section */}
                <div className='padding-20'></div>
                {/* Second Section Application Details*/}
                <ApplicationDetails
                    emd={emdPrice}
                    app_deadline={formattedDate1 ? (formattedDate1):('N/A')}
                    auction_date={formattedDate2 ? (formattedDate2):('N/A')}
                    private_treaty={auction_type === ''? ('No'):('Yes')}
                    autorized_Officer={sro_office ? (sro_office):('N/A')}
                    extension={auction_time_extension}
                />
                {/* End Second Section */}

                <div className='padding-20'></div>

                {/* Third Section Additional Information*/}
                <AdditionalInformation
                    additional_info={additionalInfoArray}
                />
                {/* End Third Section */}

                <div className='padding-20'></div>

                {/* Fourth Section Disclaimer */}
                <Disclaimer />
                {/* END Fourth Section Disclaimer */}



            </div>
        </>
    )
}



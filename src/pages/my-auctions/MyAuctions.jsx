import React, { useEffect } from 'react'
import { PropertyCard } from '../../components/PropertyCard/PropertyCard'
import '../upcoming-auctions/style.css'
import '../upcoming-auctions/responsive.css'
import { BreadCrumb } from '../../components/BreadCrumb/BreadCrumb'
import { SortBy } from '../../components/topbarFiltes/SortByFilter/SortBy'
import { SearchByState } from '../../components/sidebarFilters/ByState/SearchByState'
import { SearchByCity } from '../../components/sidebarFilters/ByCity/SearchByCity'
import { SearchByLocality } from '../../components/sidebarFilters/ByLocality/SearchByLocality'
import { SearchByPropertyType } from '../../components/sidebarFilters/PropertyType/SearchByPropertyType'
import { SearchByBanks } from '../../components/sidebarFilters/BanksAndInsititutions/SearchByBanks'
import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
import { ReactComponent as PrevArrow } from '../../Icons/Arrow.svg'
import { ReactComponent as NextArrow } from '../../Icons/Arrow.svg'
import { ReactComponent as FilterToggle } from '../../Icons/FilterIcon.svg'


// Api packages
import axios from 'axios';

const MyAuctions = () => {

    const [propertyList, setPropertyList] = useState([]);
    const [page, setPage] = useState(1);
    
    
    // Api Details
    const basePath = process.env.REACT_APP_API_PATH;
    const url = `${basePath}/api/property-list`;
    // const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InZpa2FzQGdtYWkuY29tIiwiaWF0IjoxNjgxMjkxNjY4LCJleHAiOjE2ODEzNzgwNjh9.jMIeNLlsHOaG-L7dfws2WIfSyEl3qLL6WCSSc7T_RBs';
       
    useEffect(() => {
            axios
              .get(url)
              .then((response) => {
                setPropertyList(response.data);
                console.log(response.data);
              })
              .catch((error) => console.log(error));
          }, []);

    // Pagination
    const propertiesPerPage = 9;
    const totalPages = Math.ceil(propertyList?.data?.length / propertiesPerPage);
    const startIndex = (page - 1) * propertiesPerPage;
    const endIndex = startIndex + propertiesPerPage;
    const currentPageProperties = propertyList?.data?.slice(startIndex, endIndex);
    

    const handlePageChange = (newPage) => {
        setPage(newPage);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };
    // End

    // Dummy User Id
    const userId = 12;

    const totalProperties = propertyList?.data?.length;

    return (


        <>
        <div>

        </div>
            <div className='allContent'>
                <div className='sectionTop'>
                    <BreadCrumb path="Home" pageName='My Auctions' />
                    <SortBy />
                </div>
                <div className='propCount'>
                    <p className='propCountText'>
                        Total <span>- {totalProperties} items</span>
                    </p>
                </div>
                <div className='mobileFilterBar'>
                    <FilterToggle width={18} height={18} id='filterToggle'/>
                </div>
            </div>
            <div className="mainContent">
                <div className='LeftDetails' id="filtersPannel">
                    <SearchByState />
                    <div className='lineBreak20'></div>
                    <SearchByCity />
                    <div className='lineBreak20'></div>
                    <SearchByLocality />
                    <div className='lineBreak20'></div>
                    <SearchByPropertyType />
                    <div className='lineBreak20'></div>
                    <SearchByBanks />
                </div>
                <div className='rightDetails'>
                    {propertyList && propertyList.data && propertyList.data.length > 0 ? (
                        <div className='cardRow'>
                            {currentPageProperties.map((property) => (
                                <div className='flexItem' key={property.id}>
                                    <PropertyCard
                                        propertyTitle={property.name}
                                        propImage={property.images.length > 0 ? property.images[0].src : '/images/propimg.webp'}
                                        alt={property.images.length > 0 ? property.images[0].alt : 'Hecta'}
                                        discount={property.discount_percentage}
                                        applyBy={property.application_end_date}
                                        price={property.reserve_price}
                                        auctionDate={property.auctionDate}
                                        seller={property.seller}
                                        propertyTitleSlug={property.slug}
                                        propertyId={property.id}
                                        userId={userId}
                                        bankName={property.bank_name}
                                    />
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div>
                            <p>Loading...</p>
                        </div>
                    )}

                    {totalPages > 1 && (
                        <div className='pagination'>
                            {page > 1 && (
                                <button className='pageButton' onClick={() => handlePageChange(page - 1)}>
                                    <PrevArrow className='prevArrow' />
                                    Previous
                                </button>
                            )}
                            {[...Array(totalPages)].map((_, i) => {
                                if (
                                    i === 0 ||
                                    i === totalPages - 1 ||
                                    (i >= page - 2 && i <= page + 1) ||
                                    (i >= totalPages - 4 && i <= page + 2)
                                ) {
                                    return (
                                        <button
                                            key={i}
                                            className={`pageButton ${page === i + 1 ? 'active' : ''}`}
                                            onClick={() => handlePageChange(i + 1)}
                                        >
                                            {i + 1}
                                        </button>
                                    );
                                } else if (i === 1 || i === totalPages - 2) {
                                    return <span key={i}>. . .</span>;
                                } else {
                                    return null;
                                }
                            })}
                            {page < totalPages && (
                                <button className='pageButton' onClick={() => handlePageChange(page + 1)}>
                                    Next
                                    <NextArrow className='nextArrow' />
                                </button>
                            )}
                        </div>
                    )}
                </div>

            </div>
        </>
    )
}

export default MyAuctions
import React from 'react'
import { useState } from "react";
import {ReactComponent as ExpandIcon } from '../../../Icons/Arrow.svg'
import {ReactComponent as CollapseIcon } from '../../../Icons/Arrow.svg'


export const SearchByCity = () => {

    const [showAllChips, setShowAllChips] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedCity, setSelectedCity] = useState([]);

    const cityList = [
        "Mumbai",
        "Delhi",
        "Bengaluru",
        "Hyderabad",
        "Ahmedabad",
        "Chennai",
        "Kolkata",
        "Pune",
        "Jaipur",
        "Surat",
        "Lucknow",
        "Kanpur",
        "Nagpur",
        "Visakhapatnam",
        "Bhopal",
        "Patna",
        "Ludhiana",
        "Agra",
        "Nashik",
        "Vadodara",
        "Faridabad",
        "Meerut",
        "Rajkot",
        "Amritsar",
        "Varanasi",
        "Srinagar",
        "Aurangabad",
        "Dhanbad",
        "Jodhpur",
        "Madurai",
        "Raipur",
        "Coimbatore",
        "Kochi",
        "Jamshedpur",
        "Allahabad",
        "Hubli-Dharwad",
        "Bhilai",
        "Mangalore",
        "Amravati",
        "Kurnool",
        "Ujjain",
        "Rajahmundry",
        "Bellary",
        "Nellore",
        "Ajmer",
        "Tumkur",
        "Udaipur",
        "Gulbarga",
        "Bokaro Steel City",
        "Patiala",
        "Agartala",
        "Darbhanga",
        "Bihar Sharif",
        "Hisar",
        "Panipat",
        "Karnal",
        "Ichalkaranji",
        "Tirupati",
        "Karnal",
        "Bathinda",
        "Shivamogga",
        "Ranipet",
        "Hosapete",
        "Anantapur",
        "Adilabad",
        "Aligarh",
        "Bijapur",
        "Sangli-Miraj & Kupwad",
        "Chandrapur",
        "Chittoor",
        "Dibrugarh",
        "Nandyal",
        "Ratlam",
        "Tiruvannamalai",
        "Roorkee",
        "Rewa",
        "Vizianagaram",
        "Tezpur",
        "Chhapra",
        "Chhindwara",
        "Hindupur",
        "Balangir",
        "Itarsi",
        "Kolar",
        "Rajnandgaon",
        "Mahbubnagar",
        "Karimnagar",
        "Machilipatnam",
        "Adoni",
        "Jalna",
        "Vrindavan",
        "Hassan",
        "Tenali",
        "Siddipet",
        "Srikakulam",
        "Bhuj",
        "Nabadwip",
        "Jalpaiguri",
        "Port Blair",
        "Daltonganj",
        "Guntakal",
        "Baramati",
        "Jalgaon",
        "Bhadreswar",
        "Chilakaluripet",
        "Kamareddy",
        "Osmanabad",
        "Yadgir",
        "Suryapet",
        "Jhumri Tilaiya",
        "Sasaram",
        "Vijayapura",
        "Nawada",
        "Achalpur",
        "Kalol"
    ]

    const filteredCityList = cityList.filter(city => {
        return city.toLowerCase().includes(searchQuery.toLowerCase());
    });

    filteredCityList.sort();

    const chipsToDisplay = showAllChips ? filteredCityList : filteredCityList.slice(0, 11);

    const isCitySelected = (city) => {
        return selectedCity.includes(city);
    }

    const toggleCitySelection = (city) => {
        if (selectedCity.includes(city)) {
            setSelectedCity(selectedCity.filter(selectedCity => selectedCity !== city));
        } else {
            setSelectedCity([...selectedCity, city]);
        }
    }


    const toggleCityChips = () => {
        setShowAllChips(!showAllChips);
    }

    const clearAllCity = () => {
        setSelectedCity([]);
    }

    const handleSearchInputChange = (event) => {
        setSearchQuery(event.target.value);
      }
    return (
        <>
            <p className='filterTitle'>
                Search by City {selectedCity.length > 0 ? `(${selectedCity.length})` : ''}
            </p>
            <input type="search" placeholder="Search" className="searchBar" onChange={handleSearchInputChange}/>
            <div id="city-chips">
                {chipsToDisplay.map((city, index) => (
                    <span className={`chip ${isCitySelected(city) ? "selected" : ""}`} key={index} onClick={() => toggleCitySelection(city)}>
                        {city}
                    </span>
                ))}
            </div>
            <div className='btnGroup'>
                <button id="view-more-btn" onClick={toggleCityChips}>
                    {showAllChips ? (
                        <>
                            View Less
                            <CollapseIcon className='CollapseIcon' />
                        </>
                    ) : (
                        <>
                            View More
                            <ExpandIcon className='ExpandIcon' />
                        </>
                    )}
                </button>
                <button className='clearFilterBtn' id="clear-btn" onClick={clearAllCity}>
                    Clear Filter
                </button>
            </div>
        </>
    )
}

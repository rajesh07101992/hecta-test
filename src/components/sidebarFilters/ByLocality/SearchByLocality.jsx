import React from 'react'
import { useState } from "react";
import {ReactComponent as ExpandIcon } from '../../../Icons/Arrow.svg'
import {ReactComponent as CollapseIcon } from '../../../Icons/Arrow.svg'


export const SearchByLocality = () => {

    const [showAllChips, setShowAllChips] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedLocality, setSelectedLocality] = useState([]);

    const localityList = [
        "Select All",
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
        "Bokaro Steel Locality",
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
    ]

    const filteredLocalityList = localityList.filter(locality => {
        return locality.toLowerCase().includes(searchQuery.toLowerCase());
    });

    // filteredLocalityList.sort();

    const chipsToDisplay = showAllChips ? filteredLocalityList : filteredLocalityList.slice(0, 11);

    const isLocalitySelected = (locality) => {
        return selectedLocality.includes(locality);
    }

    const toggleLocalitySelection = (locality) => {
        if (selectedLocality.includes(locality)) {
            setSelectedLocality(selectedLocality.filter(selectedLocality => selectedLocality !== locality));
        } else {
            setSelectedLocality([...selectedLocality, locality]);
        }
    }


    const toggleLocalityChips = () => {
        setShowAllChips(!showAllChips);
    }

    const clearAllLocality = () => {
        setSelectedLocality([]);
    }

    const handleSearchInputChange = (event) => {
        setSearchQuery(event.target.value);
    }

    const isSelectAllSelected = selectedLocality.includes("Select All");
    return (
        <>
            {/* <p className='filterTitle'>
                Search by Locality {selectedLocality.length > 0 ? `(${selectedLocality.length})` : ''}
            </p> */}
            <p className="filterTitle">
                Search by Locality{" "}
                {isSelectAllSelected && selectedLocality.length == 1
                    ? "(All)"
                    : selectedLocality.length > 0
                        ? `(${selectedLocality.length})`
                        : ""}
            </p>
            <input type="search" placeholder="Search" className="searchBar" onChange={handleSearchInputChange} />
            <div id="locality-chips">
                {chipsToDisplay.map((locality, index) => (
                    <span className={`chip ${isLocalitySelected(locality) ? "selectedBlack" : ""}`} key={index} onClick={() => toggleLocalitySelection(locality)}>
                        {locality}
                    </span>
                ))}
            </div>
            <div className='btnGroup'>
                <button id="view-more-btn" onClick={toggleLocalityChips}>
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
                <button className='clearFilterBtn' id="clear-btn" onClick={clearAllLocality}>
                    Clear Filter
                </button>
            </div>
        </>
    )
}

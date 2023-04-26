import React from 'react'
import { useState } from "react";
import {ReactComponent as ExpandIcon } from '../../../Icons/Arrow.svg'
import {ReactComponent as CollapseIcon } from '../../../Icons/Arrow.svg'


export const SearchByBanks = () => {

    const [showAllChips, setShowAllChips] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedLocality, setSelectedLocality] = useState([]);

    const localityList = [
        "Select All",
        "Aavas Financer Limited",
        "Aditya Birla Housing Finance Ltd.",
        "Andhra Pradesh State Financial Corporation",
        "ASREC (India) Limited",
        "Asset Reconstruction Company (India) Limited",
        "Axis Bank",
        "Bank of Baroda",
        "Bank of India",
        "Bank of Maharashtra",
        "BMW India Financial Services",
        "Can Fin Homes Limited",
        "Canara Bank",
        "Central Bank of India",
        "Cholamandalam Investment and Finance Company",
        "DCB Bank",
        "Deutsche Bank AG",
        "Dhanlaxmi Bank",
        "Edelweiss Asset Reconstruction Company Limited",
        "Edelweiss Housing Finance"
    ]

    const filteredLocalityList = localityList.filter(locality => {
        return locality.toLowerCase().includes(searchQuery.toLowerCase());
    });

    // filteredLocalityList.sort();

    const chipsToDisplay = showAllChips ? filteredLocalityList : filteredLocalityList.slice(0, 4);

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
            Bank/Institutions {" "}
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

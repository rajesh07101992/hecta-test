import React from 'react'
import { useState } from "react";
import {ReactComponent as ExpandIcon } from '../../../Icons/Arrow.svg'
import {ReactComponent as CollapseIcon } from '../../../Icons/Arrow.svg'

export const SearchByPropertyType = () => {

    const [showAllChips, setShowAllChips] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedPropertyType, setSelectedPropertyType] = useState([]);

    const propertyTypeList = [
      "Independant House",
      "Residential Flat",
      "Residential Plot",
      "Commercial Space",
      "Land & Building",
      "Shops",
      "Agricultural Land",
      "Commercial Property",
      "Industrial Property",
         "Office"
    ]

    const filteredPropertyTypeList = propertyTypeList.filter(property => {
        return property.toLowerCase().includes(searchQuery.toLowerCase());
    });

    filteredPropertyTypeList.sort();

    const chipsToDisplay = showAllChips ? filteredPropertyTypeList : filteredPropertyTypeList.slice(0, 6);

    const isPropertyTypeSelected = (property) => {
        return selectedPropertyType.includes(property);
    }

    const togglePropertyTypeSelection = (property) => {
        if (selectedPropertyType.includes(property)) {
            setSelectedPropertyType(selectedPropertyType.filter(selectedPropertyType => selectedPropertyType !== property));
        } else {
            setSelectedPropertyType([...selectedPropertyType, property]);
        }
    }


    const togglePropertyTypeChips = () => {
        setShowAllChips(!showAllChips);
    }

    const clearAllPropertyType = () => {
        setSelectedPropertyType([]);
    }

    const handleSearchInputChange = (event) => {
        setSearchQuery(event.target.value);
      }
    return (
        <>
            <p className='filterTitle'>
              Property Type {selectedPropertyType.length > 0 ? `(${selectedPropertyType.length})` : ''}
            </p>
            <input type="search" placeholder="Search" className="searchBar" onChange={handleSearchInputChange}/>
            <div id="property-chips">
                {chipsToDisplay.map((property, index) => (
                    <span className={`chip ${isPropertyTypeSelected(property) ? "selected" : ""}`} key={index} onClick={() => togglePropertyTypeSelection(property)}>
                        {property}
                    </span>
                ))}
            </div>
            <div className='btnGroup'>
                <button id="view-more-btn" onClick={togglePropertyTypeChips}>
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
                <button className='clearFilterBtn' id="clear-btn" onClick={clearAllPropertyType}>
                    Clear Filter
                </button>
            </div>
        </>
    )
}

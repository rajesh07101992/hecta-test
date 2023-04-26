import React from 'react'
import { useState } from "react";
import '../style.css'
import {ReactComponent as ExpandIcon } from '../../../Icons/Arrow.svg'
import {ReactComponent as CollapseIcon } from '../../../Icons/Arrow.svg'


export const SearchByState = () => {

  const [showAllChips, setShowAllChips] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedStates, setSelectedStates] = useState([]);

  const toggleStateChips = () => {
    setShowAllChips(!showAllChips);
  };

  const stateList = [
    "Andhra Pradesh",
    "Arunachal Pradesh",
    "Assam",
    "Bihar",
    "Chhattisgarh",
    "Goa",
    "Gujarat",
    "Haryana",
    "Himachal Pradesh",
    "Jharkhand",
    "Karnataka",
    "Kerala",
    "Madhya Pradesh",
    "Maharashtra",
    "Manipur",
    "Meghalaya",
    "Mizoram",
    "Nagaland",
    "Odisha",
    "Punjab",
    "Rajasthan",
    "Sikkim",
    "Tamil Nadu",
    "Telangana",
    "Tripura",
    "Uttar Pradesh",
    "Uttarakhand",
    "West Bengal"
  ];


  const filteredStateList = stateList.filter(state => {
    return state.toLowerCase().includes(searchQuery.toLowerCase());
  });

  const chipsToDisplay = showAllChips ? filteredStateList : filteredStateList.slice(0, 9);

  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
  }

  const toggleStateSelection = (state) => {
    if (selectedStates.includes(state)) {
      setSelectedStates(selectedStates.filter(selectedState => selectedState !== state));
    } else {
      setSelectedStates([...selectedStates, state]);
    }
  }

  const isStateSelected = (state) => {
    return selectedStates.includes(state);
  }

  const clearAllStates = () => {
    setSelectedStates([]);
  }

  return (
   <>
   <p className='filterTitle'>
   Search by State {selectedStates.length > 0 ? `(${selectedStates.length})` : ''}
   </p>
   <input type="search" placeholder="Search" onChange={handleSearchInputChange} className="searchBar"/>

    <div id="state-chips">
      {chipsToDisplay.map((state, index) => (
        <span className={`chip ${isStateSelected(state) ? "selected" : ""}`} key={index} onClick={() => toggleStateSelection(state)}>
          {state}
        </span>
      ))}

      <div className='btnGroup'>
      <button id="view-more-btn" onClick={toggleStateChips}>
        {showAllChips ? (
          <>
          View Less
          <CollapseIcon className='CollapseIcon'/>
          </>
        ) : (
          <>
          View More 
          <ExpandIcon className='ExpandIcon'/>
          </>
        )}
      </button>
        <button className='clearFilterBtn' id="clear-btn" onClick={clearAllStates}>
          Clear Filter
        </button>
      </div>
    </div>
   </>
  )
}

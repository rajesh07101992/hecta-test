import React from "react";
import "../SortByFilter/style.css";
export const SortBy = () => {
  return (
    <div className="sortBy">
    <p className="label">
      Sort By
    </p>
      <form id="sortBY">       
        <select name="sortBy" id="sortBy">
          <option value="date" selected="selected">
            Sort by latest
          </option>
          <option value="reserve_price">
            Sort By Reserve Price: Low - High
          </option>
          <option value="reserve_price_desc">
            Sort By Reserve Price: High - Low
          </option>
          <option value="application_date">
            Sort By Application Date (Desc)
          </option>
          <option value="auction_date">Sort By Auction Date (Desc)</option>
          <option value="city">Sort By City (Asc)</option>
          <option value="state">Sort By State (Asc)</option>
        </select>
      </form>
    </div>
  );
};

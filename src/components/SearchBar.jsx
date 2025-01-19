import { useState } from "react";

function SearchBox({ doSearch }) {
  const [searchStr, setSearchStr] = useState("");
  return (
    <div className="search-box">
      <div className="search-form">
        <label htmlFor="search-input">Search Recipes</label>
        <input
          className="search-input w-full"
          name="search-input"
          type="text"
          onKeyUp={doSearch}
        />
      </div>
    </div>
  );
}
export default SearchBox;

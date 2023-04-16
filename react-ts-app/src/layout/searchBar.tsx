import React, { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { setSearchRequest } from '../store/searchSlice';

function SearchBar() {
  const searchRequest = useAppSelector((state) => state.searchReducer.searchRequest);
  const dispatch = useAppDispatch();
  const [searchValue, setSearchValue] = useState(searchRequest);

  const handleChangeInput = (event: React.FormEvent<HTMLInputElement>) => {
    setSearchValue(event.currentTarget.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(setSearchRequest(searchValue));
    console.log(searchValue);
  };

  return (
    <form className="search-form" onSubmit={handleSubmit}>
      <input
        type="search"
        className="search_input"
        placeholder="Search..."
        value={searchValue}
        onChange={handleChangeInput}
      />
      <button type="submit" className="search_button" />
    </form>
  );
}

export default SearchBar;

import React, { useEffect, useRef, useState } from 'react';

function SearchBar() {
  const searchStorage = localStorage.getItem('searchInput');
  const [searchValue, setSearchValue] = useState(searchStorage ?? '');
  const search = useRef('');

  useEffect(() => {
    search.current = searchValue;
  }, [searchValue]);

  useEffect(() => {
    return () => {
      localStorage.setItem('searchInput', search.current);
    };
  }, []);

  const handleChangeInput = (event: React.FormEvent<HTMLInputElement>) => {
    setSearchValue(event.currentTarget.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
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

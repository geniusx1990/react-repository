import React from 'react';

import { ISearchState } from '../types/interfaces';

class SearchBar extends React.Component<Record<string, never>, ISearchState> {
  constructor(props: Record<string, never>) {
    super(props);

    this.state = {
      searchValue: localStorage.getItem('searchValue') ?? '',
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChangeInput = this.handleChangeInput.bind(this);
  }

  componentWillUnmount() {
    localStorage.setItem('searchValue', this.state.searchValue);
  }

  handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
  }

  handleChangeInput(event: React.FormEvent<HTMLInputElement>) {
    this.setState({ searchValue: event.currentTarget.value });
  }

  render() {
    return (
      <form className="search-form" onSubmit={this.handleSubmit}>
        <input
          type="search"
          className="search_input"
          placeholder="Search..."
          value={this.state.searchValue}
          onChange={this.handleChangeInput}
        />
        <button type="submit" className="search_button" />
      </form>
    );
  }
}

export default SearchBar;

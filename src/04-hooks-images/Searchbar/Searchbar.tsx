import { useState } from 'react';
import '../ImageFinderHooks.css';
import { IPropsSearch } from '../types';

function Searchbar({ onSubmit }: IPropsSearch) {
  const [searchQuery, setSearchQuery] = useState('');

  const handleInputChange = (event: React.FormEvent<HTMLInputElement>) => {
    const search = event.currentTarget.value;
    setSearchQuery(search);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    onSubmit(searchQuery);

    setSearchQuery('');
  };

  return (
    <header className="Searchbar">
      <form className="SearchForm" onSubmit={handleSubmit}>
        <button type="submit" className="SearchForm-button">
          <span className="SearchForm-button-label">Search</span>
        </button>

        <input
          className="SearchForm-input"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={searchQuery}
          onChange={handleInputChange}
        />
      </form>
    </header>
  );
}

export default Searchbar;

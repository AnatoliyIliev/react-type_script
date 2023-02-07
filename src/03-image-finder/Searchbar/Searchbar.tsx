import { Component } from 'react';
import '../ImageFinder.css';
import { IPropsSearch } from '../types';

class Searchbar extends Component<IPropsSearch> {
  state = {
    searchQuery: '',
  };

  handleInputChange = (event: React.FormEvent<HTMLInputElement>) => {
    const search = event.currentTarget.value;
    this.setState({ searchQuery: search });
  };

  handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    this.props.onSubmit(this.state.searchQuery);

    this.setState({ searchQuery: '' });
  };

  render() {
    return (
      <header className="Searchbar">
        <form className="SearchForm" onSubmit={this.handleSubmit}>
          <button type="submit" className="SearchForm-button">
            <span className="SearchForm-button-label">Search</span>
          </button>

          <input
            className="SearchForm-input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={this.state.searchQuery}
            onChange={this.handleInputChange}
          />
        </form>
      </header>
    );
  }
}

export default Searchbar;

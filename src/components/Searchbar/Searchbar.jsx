import { Component } from 'react';

export default class Searchbar extends Component {
  handleSubmit = async event => {
    event.preventDefault();
    const form = event.currentTarget;
    const search = await form.elements.search.value.trim();
    if (search.length === 0) {
      alert('you need to enter a keyword to search');
      return;
    }
    this.props.onSubmit({ search });
    form.reset();
  };
  render() {
    return (
      <header className="searchbar">
        <form className="form" onSubmit={this.handleSubmit}>
          <button type="submit" className="button">
            <span className="button-label">Search</span>
          </button>

          <input
            className="input"
            name="search"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}

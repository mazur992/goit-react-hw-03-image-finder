import { Component } from 'react';

export default class Searchbar extends Component {
  handleSubmit = async event => {
    event.preventDefault();
    const form = event.currentTarget;
    const search = await form.elements.search.value;
    this.props.onSubmit({ search });
    form.reset();
  };
  render() {
    return (
      <header className="searchbar">
        <form className="form" onSubmit={this.handleSubmit}>
          <button
            type="submit"
            className="button"
            // disabled={this.props.isSubmiting}
          >
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

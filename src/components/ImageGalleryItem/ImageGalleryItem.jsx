import { Component } from 'react';

export default class ImageGalleryItem extends Component {
  handleClick = event => {
    this.props.addLargeI(
      event.currentTarget.dataset.large,
      event.currentTarget.dataset.tags
    );
    this.props.showModal();
  };
  render() {
    const { cards } = this.props;
    if (cards.length === 0) return;
    return cards.map(card => {
      return card.images.map(img => {
        return (
          <li
            key={img.id}
            className="gallery-item"
            data-large={img.largeImageURL}
            data-tags={img.tags}
            onClick={this.handleClick}
          >
            <img
              className="galleryItemImage"
              src={img.webformatURL}
              alt={img.tags}
            />
          </li>
        );
      });
    });
  }
}

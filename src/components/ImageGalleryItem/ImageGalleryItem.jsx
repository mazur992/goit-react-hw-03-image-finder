import { Component } from 'react';
import css from './ImageGalleryItem.module.css';

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
            className={css.galleryItem}
            data-large={img.largeImageURL}
            data-tags={img.tags}
            onClick={this.handleClick}
          >
            <img
              className={css.galleryItemImage}
              src={img.webformatURL}
              alt={img.tags}
            />
          </li>
        );
      });
    });
  }
}

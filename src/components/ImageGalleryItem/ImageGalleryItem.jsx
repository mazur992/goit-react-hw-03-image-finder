export default function ImageGalleryItem({ cards }) {
  if (cards.length === 0) return;
  return cards.map(card => {
    return card.images.map(img => {
      return (
        <li key={img.id} className="gallery-item">
          <img
            className="galleryItemImage"
            src={img.webformatURL}
            alt={img.tags}
            data-large={img.largeImageURL}
          />
        </li>
      );
    });
  });
}

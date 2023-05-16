export default function Button({ props, incrementPage }) {
  const handleLoadMore = () => {
    incrementPage();
  };
  const { images } = props;
  return (
    images.length !== 0 && (
      <button type="button" onClick={handleLoadMore}>
        Load more
      </button>
    )
  );
}

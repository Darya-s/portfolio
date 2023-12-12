const FullSizeImage = ({ imageUrl, className = '' }) => {
  const openFullSizeImage = () => {
    window.open(imageUrl, '_blank'); // Opens the image URL in a new tab
  };

  return (
    <img
      src={imageUrl}
      alt='Click for Full Size'
      onClick={openFullSizeImage}
      className={className}
      style={{ cursor: 'pointer' }}
    />
  );
};

export default FullSizeImage;

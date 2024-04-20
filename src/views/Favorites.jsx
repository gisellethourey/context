import React, { useContext } from 'react';
import { PhotoContext } from '../context/PhotoContext';

const Favorites = () => {
  const { photos } = useContext(PhotoContext);
  const favoritePhotos = photos.filter(photo => photo.liked);

  if (!Array.isArray(photos)) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1 className="title">Fotos favoritas</h1>
      <div className="p-3 gallery grid-columns-4">
        {favoritePhotos.map((photo, index) => (
          <div key={index} className="gallery-item">
            <img width="200px" height="200px" src={photo.src.original} alt={`Photo ${index}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Favorites;

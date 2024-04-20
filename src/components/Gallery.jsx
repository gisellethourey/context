import React, { useContext } from 'react';
import { PhotoContext } from '../context/PhotoContext';
import IconHeart from '../components/IconHeart';

const Gallery = () => {
  const { photos, setPhotos } = useContext(PhotoContext);

  const handleLikeToggle = (photoId) => {
    setPhotos(prevPhotos => {
      return prevPhotos.map(photo => {
        if (photo.id === photoId) {
          return { ...photo, liked: !photo.liked };
        }
        return photo;
      });
    });
  };

  if (!Array.isArray(photos)) {
    return <div>Loading...</div>;
  }

  return (
    <div className="gallery grid-columns-5 p-3">
      {photos.map((photo, index) => (
        <div key={index} className="gallery-item">
          <img width="200px" height="200px" src={photo.src.original} alt={`Photo ${index}`} />
          <button className="like-button" onClick={() => handleLikeToggle(photo.id)}>
            <IconHeart filled={photo.liked} />
          </button>
        </div>
      ))}
    </div>
  );
};

export default Gallery;

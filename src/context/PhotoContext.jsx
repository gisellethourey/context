import React, { createContext, useState, useEffect } from 'react';

export const PhotoContext = createContext();
const PhotoProvider = ({ children }) => {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    const fetchPhotos = async () => {
      try {
        const response = await fetch('./photos.json');
        const data = await response.json();
        const photosWithLiked = data.photos.map(photo => ({ ...photo, liked: false }));

        setPhotos(photosWithLiked);
        console.log(data);
      } catch (error) {
        console.error('Error fetching photos:', error);
      }
    };

    fetchPhotos();
  }, []);

  return (
    <PhotoContext.Provider value={{ photos, setPhotos }}>
      {children}
    </PhotoContext.Provider>
  );
};
export default PhotoProvider;

/* eslint-disable max-len */
import React, { useState, useEffect } from 'react';
import style from './Gallery.css';
import getImages from './imageAPI';

const Gallery = () => {
  const [imageList, setImageList] = useState([]);
  const [nextCursor, setNextCursor] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getImages();
      setImageList(data.resources);
      setNextCursor(data.next_cursor);
    };

    fetchData();
  }, []);

  const handleMoreImages = async () => {
    const data = await getImages(nextCursor);
    setImageList((currentImageList) => [...currentImageList, ...data.resources]);
    setNextCursor(data.next_cursor);
  };


  return (
    <>
      <div className={style.galleryGrid}>
        {imageList.map((image) => (
          <img key={image.url} src={image.url} alt={image.public_id}></img>
        ))}
      </div>
      {nextCursor && <button onClick={handleMoreImages} className={style.moreButton}>[More Photos]</button>}
    </>
  );
};

export default Gallery;


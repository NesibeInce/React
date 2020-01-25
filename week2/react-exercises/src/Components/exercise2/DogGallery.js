import React, { useState, useEffect } from 'react';
import Button from './Button';
import DogPhoto from './DogPhoto';

function DogGallery() {
  const [dogPhotos, setDogPhotos] = useState();
  const [isLoading, setLoading] = useState(true);
  const [hasError, setError] = useState(false);

  function getDogPhoto() {
    fetch(`https://dog.ceo/api/breeds/image/random`)
      .then(res => res.json())
      .then(data => {
        setDogPhotos(data);
        setLoading(false);
      })
      .catch(err => {
        console.log(err);
        setError(true);
        setLoading(false);
      });
  }
  useEffect(() => getDogPhoto(), []);

  if (isLoading) {
    return <p>Loading the picture for a dog ...</p>;
  }
  if (hasError) {
    return <p>Something went wrong</p>;
  }
  if (dogPhotos) {
    return (
      <div className="gallery">
        <Button getDogPhoto={getDogPhoto} />
        <DogPhoto dogPhotos={dogPhotos} />
      </div>
    );
  }
}

export default DogGallery;

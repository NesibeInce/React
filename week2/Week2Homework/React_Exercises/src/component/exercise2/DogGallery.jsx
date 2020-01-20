import React, { useState } from 'react';
import DogPhoto from './DogPhoto';
import axios from 'axios';
import Button from './Button';

export default function DogGallery() {
  const [dogPhotos, setDogPhotos] = useState([]);

  const getDogPhoto = async () => {
    try {
      const fetchedData = await axios.get('https://dog.ceo/api/breeds/image/random');
      await setDogPhotos([fetchedData.data.message]);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div style={container}>
      <div style={{ margin: '3%' }}>
        <Button getDogPhoto={getDogPhoto} />
      </div>

      {dogPhotos.length === 0 ? (
        <h1>"Get your first dog by clicking the button!"</h1>
      ) : (
        dogPhotos.map((dogPhoto, i) => <DogPhoto key={i} dogPhoto={dogPhoto} />)
      )}
    </div>
  );
}

const container = {
  background: 'wheat',
  padding: '3%',
  margin: '3% 0',
};

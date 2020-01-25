import React from 'react';

function DogPhoto({ dogPhotos }) {
  return (
    <div>
      <img src={dogPhotos.message} alt={'dogs'} />
    </div>
  );
}

export default DogPhoto;

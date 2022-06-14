import React from 'react';
import useAlbums from './useAlbums.js';
import AlbumsPhotosCards from './AlbumsPhotosCards';
import Container from 'react-bootstrap/Container';

export default function AlbumsPhotos() {
  const { users } = useAlbums();

  return (
    <Container
      style={{
        display: 'flex',
        padding: '0 5px',
        flexWrap: 'wrap',
      }}
    >
      {users.map((photo) => (
        <AlbumsPhotosCards key={photo.id} photo={photo} />
      ))}
    </Container>
  );
}

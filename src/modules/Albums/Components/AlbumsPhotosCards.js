import React from 'react';
import { Card } from 'react-bootstrap';

export default function AlbumsPhotosCards({ photo }) {
  return (
    <Card
      style={{
        width: '18rem',
        flex: '1 1 auto',
        margin: '0.5% 5px',
      }}
    >
      <Card.Img variant="top" src={photo.avatar} />
      <Card.Body>
        <Card.Title>{photo.name}</Card.Title>
        <Card.Text>{photo.text}</Card.Text>
      </Card.Body>
    </Card>
  );
}

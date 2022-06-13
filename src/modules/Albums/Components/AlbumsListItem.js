import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import { Link } from 'react-router-dom';

export default function AlbumsListItem({ item, location }) {
  return (
    <Accordion.Item eventKey={item.id}>
      <Accordion.Header>User # {item.id}</Accordion.Header>
      <Accordion.Body>
        <Link to={location + item.id}>{item.name}</Link>
      </Accordion.Body>
    </Accordion.Item>
  );
}

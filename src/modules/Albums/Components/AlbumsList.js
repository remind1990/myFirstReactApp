import React from 'react';
import AlbumsListItem from './AlbumsListItem';
import Accordion from 'react-bootstrap/Accordion';
import { useLocation } from 'react-router-dom';
import Loading from '../../Loaders/loading';

export default function AlbumsList({ users, Status }) {
  const location = useLocation();
  return (
    <>
      {Status === 'Loading' ? (
        <Loading />
      ) : (
        <Accordion defaultActiveKey="1">
          {users.map((user) => (
            <AlbumsListItem
              key={user.id}
              item={user}
              location={location.pathname + '/'}
            />
          ))}
        </Accordion>
      )}
    </>
  );
}

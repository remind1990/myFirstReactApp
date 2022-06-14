import React from 'react';
import AlbumsList from './AlbumsList.js';
import useAlbums from './useAlbums.js';
import Loading from '../../Loaders/loading';

export default function AlbumsPage() {
  const { users, Status } = useAlbums();

  return (
    <>
      {Status === 'Loading' ? (
        <Loading />
      ) : (
        <AlbumsList users={users} />
      )}
    </>
  );
}

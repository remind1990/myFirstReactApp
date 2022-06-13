import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import AlbumsPage from './AlbumsPage.js';
import AlbumsPhotos from './AlbumsPhotos.js';
import AlbumsPickedPhoto from './AlbumsPickedPhoto.js';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
export default function Albums() {
  return (
    <div className="container">
      <Breadcrumb>
        <Link
          to="/"
          style={{
            textDecoration: 'none',
          }}
        >
          Home
        </Link>
        {' / '}
        <Link
          to=""
          style={{
            textDecoration: 'none',
          }}
        >
          List of Users
        </Link>
        {' / '}
        <Link
          to="all"
          style={{
            textDecoration: 'none',
          }}
        >
          Show All
        </Link>
      </Breadcrumb>

      <Routes>
        <Route path="/" element={<AlbumsPage />} />
        <Route path="all" element={<AlbumsPhotos />} />
        <Route path="/:id" element={<AlbumsPickedPhoto />} />
      </Routes>
    </div>
  );
}

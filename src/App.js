import React from 'react';
import '../src/App.css';
import './modules/Loaders/loaders.css';
import './modules/StickersList/components/stickersGlobal.css';

import './modules/UsersList/components/usersListCompleteCss.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomeWorkSelector from './modules/homeworks selector/homeWorkSelector.js';

export default function App() {
  return <HomeWorkSelector />;
}

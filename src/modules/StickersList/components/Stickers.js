import React from 'react';
import StickersHeader from './StickersHeader.js';
import StickersBody from './StickersBody.js';
import { useLocalStorages } from '../../hooks/hooks.js';
import { useStickers } from './useStickers';
import Loading from '../../Loaders/loading';

export default function Stickers() {
  const [Search, setSearch] = useLocalStorages('Search');
  const {
    Stickers,
    Status,
    deleteOneSticker,
    createNewSticker,
    updateText,
  } = useStickers(Search);

  return (
    <div className="main-container">
      <StickersHeader
        stickers={Stickers}
        createNewSticker={createNewSticker}
        Search={Search}
        setSearch={setSearch}
      />
      {Status === 'Loading...' ? (
        <Loading />
      ) : Status === 'Done' ? (
        <StickersBody
          stickers={Stickers}
          deleteOneSticker={deleteOneSticker}
          onChangeText={updateText}
        />
      ) : null}
    </div>
  );
}

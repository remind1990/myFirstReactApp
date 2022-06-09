import React from 'react';
import StickersBodyComponent from './StickersBodyComponent.js';

export default function StickersBody({
  stickers,
  deleteOneSticker,
  onChangeText,
}) {
  return (
    <ul className="StickersUl">
      {stickers.map((sticker) => (
        <StickersBodyComponent
          key={sticker.id}
          sticker={sticker}
          deleteOneSticker={deleteOneSticker}
          onChangeText={onChangeText}
        />
      ))}
    </ul>
  );
}

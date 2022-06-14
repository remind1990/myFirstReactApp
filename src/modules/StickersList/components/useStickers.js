import { useAsync } from '../../hooks/hooks';
import {
  getStickers,
  deleteSticker,
  getNewSticker,
  updateSticker,
} from '../../services/services';
import { useEffect, useCallback } from 'react';

export function useStickers(Search) {
  const {
    Status,
    data: Stickers,
    run,
    setData: setStickers,
  } = useAsync(() => getStickers(Search), []);

  useEffect(run, [Search]);

  function deleteOneSticker(id) {
    deleteSticker(id);

    const newStickers = Stickers.filter((user) => user.id !== id);
    setStickers(newStickers);
  }

  const createNewSticker = useCallback((newSticker) => {
    getNewSticker(newSticker).then(
      (newSticker) =>
        setStickers((Stickers) => {
          return [...Stickers, newSticker];
        }) // для того что бы не вызывать замыкание при нажатие удаление и добавление нового стикера передаем стрелочную функцию которая будет нам давать актуальный стейт
    );
  }, []);
  function updateText(id, newTitle) {
    const item = Stickers.find((sticker) => sticker.id === id);
    const newSticker = { ...item, title: newTitle };
    const newArray = Stickers.map((sticker) =>
      sticker.id === id ? newSticker : sticker
    );
    setStickers(newArray);

    updateSticker(newSticker);
  }

  return {
    Status,
    Stickers,
    setStickers,
    deleteOneSticker,
    createNewSticker,
    updateText,
  };
}

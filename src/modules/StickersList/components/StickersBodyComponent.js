import React, { useState } from 'react';
import { Button } from 'react-bootstrap';

export default function StickersBodyComponent({
  sticker,
  deleteOneSticker,
  onChangeText,
}) {
  const [Disable, setDisable] = useState(true);
  const [Text, setText] = useState(sticker);

  function onDelete(e) {
    e.stopPropagation();
    deleteOneSticker(sticker.id);
  }

  function onTextArea(e) {
    setDisable(!Disable);
  }

  function onSaveText(e) {
    onTextArea(e);

    if (sticker.title !== e.target.value) {
      console.log(sticker.title, Text.title);
      onChangeText(Text.id, Text.title);
    }
  }

  function onTextAreaChange(e) {
    setText({
      ...Text,
      [e.target.name]: e.target.value,
    });
  }

  return (
    <>
      <li className="stickers" style={{ background: sticker.color }}>
        <div className="stickers-header">
          Task № {sticker.id}
          <Button
            variant="outline-danger"
            size="sm"
            onClick={onDelete}
          >
            X
          </Button>
        </div>
        <textarea
          className="stickers-input"
          id={Text.id}
          name="title"
          rows="5"
          cols="33"
          disabled={Disable}
          style={{ resize: 'none' }}
          onMouseOver={onTextArea}
          onMouseOut={onSaveText}
          onChange={onTextAreaChange}
          value={Text.title}
        >
          {Text.title}
        </textarea>
      </li>
    </>
  );
}

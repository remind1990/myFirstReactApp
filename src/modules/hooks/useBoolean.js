import { useState, useCallback } from 'react';

export default function useBoolean(defaultValue) {
  const [value, setValue] = useState((defaultValue = false));
  const toggle = useCallback(
    (newValue) => {
      setValue((value) => {
        if (value === undefined) {
          newValue = !value;
        }
        return newValue;
      });
    },
    [setValue]
  );

  return [value, toggle];
}

import { useState, useEffect } from 'react';
export function useLocalStorages(key, defaultValue = '') {
  const [value, setValue] = useState(
    localStorage.getItem(key),
    defaultValue
  );
  useEffect(() => {
    localStorage.setItem(key, value);
  }, [value]);
  return [value, setValue];
}

export function useAsync(cb, defaultValue = []) {
  const [Status, setStatus] = useState('Pending...');

  const [data, setData] = useState(defaultValue);

  function run() {
    setStatus('Loading...');
    cb()
      .then((data) => {
        setStatus('Done');
        setData(data);
        return data;
      })
      .catch((error) => {
        setStatus('Error');
        return Promise.reject(error);
      });
  }
  return {
    Status,
    data,
    run,
    setData,
  };
}

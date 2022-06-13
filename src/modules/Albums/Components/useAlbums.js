import { useState, useEffect } from 'react';
import axios from 'axios';
import { fakeUrl } from '../../constants/constatns';

export default function useAlbums() {
  const [users, setUsers] = useState([]);
  const [Status, setStatus] = useState('Pending');
  const [PickerUsers, setPickerUsers] = useState([]);
  const [Error, setError] = useState('No Error');

  useEffect(() => {
    setStatus('Loading');
    axios.get(fakeUrl).then(({ data }) => {
      setStatus('Done');
      setUsers(data);
    });
  }, []);
  function getPickedStickers(defaultId) {
    setStatus('Loading');
    axios
      .get(fakeUrl + defaultId)
      .then((response) => {
        setStatus('Done');
        setPickerUsers(response.data);
      })
      .catch((error) => setError(error));
  }

  return {
    users,
    setUsers,
    Status,
    setStatus,
    PickerUsers,
    setPickerUsers,
    Error,
    setError,
    getPickedStickers,
  };
}

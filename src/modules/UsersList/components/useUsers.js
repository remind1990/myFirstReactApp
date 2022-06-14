import { useState, useEffect } from 'react';
import axios from 'axios';
import { usersUrl } from '../../constants/constatns.js';
import { useLocalStorages } from '../../hooks/hooks.js';

export function useUsers() {
  const [users, setUsers] = useState([]);
  const [filter, setFilter] = useLocalStorages('filter' || 'all');
  const [Status, setStatus] = useState('Pending');

  // useEffect(() => {
  //   localStorage.setItem('filter', filter);
  // }, [filter]);

  useEffect(() => {
    setStatus('Loading');
    axios.get(usersUrl).then(({ data }) => {
      setStatus('Done');
      setUsers(data);
    });
  }, []);

  function deleteOneUser(id) {
    axios.delete(usersUrl + id);

    const newUsersArray = users.filter((user) => user.id !== id);
    setUsers(newUsersArray);
  }

  function createNewUser(user) {
    user.job = '';
    axios
      .post(usersUrl, user)
      .then(({ data }) => setUsers([...users, data]));
  }

  function saveData(id, newName) {
    const item = users.find((user) => user.id === id);
    const newUser = { ...item, name: newName };
    const newArray = users.map((user) =>
      user.id === id ? newUser : user
    );
    setUsers(newArray);

    axios.put(usersUrl + id, newUser);
  }

  return {
    users,
    Status,
    setStatus,
    setUsers,
    filter,
    setFilter,
    deleteOneUser,
    createNewUser,
    saveData,
  };
}

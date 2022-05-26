import { usersUrl } from '../constants/constatns';
export function getUsers() {
  return fetch(usersUrl).then((response) => response.json());
}

export function updateUser(newUser) {
  return fetch(usersUrl + newUser.id, {
    method: 'PUT',
    body: JSON.stringify(newUser),
    headers: { 'Content-Type': 'application/json' },
  }).then((response) => response.json());
}
export function deleteUser(id) {
  return fetch(usersUrl + id, {
    method: 'DELETE',
  }).then((response) => response.json());
}
export function createNew(user) {
  return fetch(usersUrl, {
    method: 'POST',
    body: JSON.stringify(user),
    headers: { 'Content-Type': 'application/json' },
  }).then((response) => response.json());
}

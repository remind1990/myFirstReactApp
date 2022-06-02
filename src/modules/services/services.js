import { usersUrl, stickersUrl } from '../constants/constatns.js';


export function getUsers() {
  return fetch(usersUrl).then((response) => response.json());
}

export function updateUser(newUser) {
  return fetch(usersUrl + newUser.id, {
    method: 'PUT',
    body: JSON.stringify(newUser),
    headers: { 'Content-Type': 'application/json' },
  }).then((response) =>
    response.ok ? response.json() : response.status
  );
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

export function getStickers(searchString) {
  const query = searchString ? '?title=' + searchString : '';
  return fetch(stickersUrl + query).then((response) =>
    response.json()
  );
}

export function deleteSticker(id) {
  return fetch(stickersUrl + id, {
    method: 'DELETE',
  }).then((response) => response.json());
}

export function getNewSticker(sticker) {
  return fetch(stickersUrl, {
    method: 'POST',
    body: JSON.stringify(sticker),
    headers: { 'Content-Type': 'application/json' },
  }).then((response) => response.json());
}

export function updateSticker(newSticker) {
  return fetch(stickersUrl + newSticker.id, {
    method: 'PUT',
    body: JSON.stringify(newSticker),
    headers: { 'Content-Type': 'application/json' },
  }).then((response) =>
    response.ok ? response.json() : response.status
  );
}

import fetch from 'isomorphic-fetch';

let nextId = 0;

export const addTodo = (text) => ({
  type: 'ADD_TODO',
  id: nextId++,
  text
});

export const toggleTodo = (id) => ({
  type: 'TOGGLE_TODO',
  id
});

function requestUsers() {
  return {
    type: 'REQUEST_USERS'
  };
}
function recvUsers(users) {
  return {
    type: 'RECV_USERS',
    users,
    receivedAt: Date.now()
  };
}
export function fetchUsers() {
  return function(dispatch) {
    dispatch(requestUsers());
    return fetch(`http://reqres.in/api/users?page=1`)
      .then(response => response.json())
      .then(res => dispatch(recvUsers(res.data)));
  };
}

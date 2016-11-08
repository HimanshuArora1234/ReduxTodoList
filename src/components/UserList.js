import React, { PropTypes } from 'react'

const UserList = ({ users, onLoadUsersClick }) => (
  <div>
    <a href="#" onClick={e => {
        e.preventDefault();
        onLoadUsersClick();
      }}
    >
      Load users
    </a>
    <ul>
      {users.map(u =>
        <li>
          <img src={u.avatar} />
          {u.first_name + " " + u.last_name}
        </li>
      )}
    </ul>
  </div>

);

UserList.propTypes = {
  users: PropTypes.array.isRequired,
  onLoadUsersClick: PropTypes.func.isRequired
};

export default UserList;

import React, { useState } from 'react';

const ContactTable = ({ users }) => {
  const [selectedUser, setSelectedUser] = useState({});
  console.log(selectedUser);
  return (
    <div>
      {users.map((user, i) => (
        <div
          key={i}
          className="single-Contact"
          onClick={() => setSelectedUser(user)}
        >
          <div className=" py-2 fw-bolder ">{user.name}</div>
          {selectedUser.id === user.id && (
            <div className="user-info">
              {user.phone} <br />
              {user.website}
              <br />
              {user.email}
              <br />
            </div>
          )}
          <hr />
        </div>
      ))}
    </div>
  );
};

export default ContactTable;

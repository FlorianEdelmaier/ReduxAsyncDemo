import React from 'react';

const UserName = ({ user }) => (
    <h3>{user.firstName} {user.lastName}</h3>
);

export default UserName;

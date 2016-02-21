import React from 'react';

const UserName = ({ user }) => (
    <h3>{user ? user.firstName : ''} {user ? user.lastName : ''}</h3>
);

export default UserName;

import React from 'react';
import globalUserStore from '../store/user.store';

const UserAvatar: React.FC = () => {
    const { user } = globalUserStore();

    return (
        <>
      {user && user.preferences && <img
        src={user.preferences.avatarUrl}
        alt={`${user.username}'s avatar`}
        className="w-[2.4rem] h-[2.4rem] object-cover rounded-full"
      />}
        </>
    );
};

export default UserAvatar;
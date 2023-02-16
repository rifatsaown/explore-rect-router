import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Friend from '../../Friend/Friend';
import './Friends.css';

const Friends = () => {
    const friends = useLoaderData();
    return (
        <div className='friends-data'>
            {
                friends.map((friend,index) => <Friend key={index} friend={friend}/>)
            }
        </div>
    );
};

export default Friends;
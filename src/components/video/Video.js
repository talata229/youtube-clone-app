import React from 'react';
import './_video.scss';
import { AiFillEye } from 'react-icons/ai';

const Video = () => {
  return (
    <div className='video'>
      <div className='video__top'>
        <img
          src='https://i.ytimg.com/vi/f687hBjwFcM/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLAIiD8SUG05ClWt8q-BBSnRVfJEaA'
          alt=''
        />
        <span>05:43</span>
      </div>
      <div className='video__title'>
        Create app in 5 minutes reate app in 5 minutes reate app in 5 minutes
      </div>
      <div className='video__details'>
        <span>
          <AiFillEye /> 4m views •
        </span>
        <span>5 days ago</span>
      </div>
      <div className='video__channel'>
        <img
          src='https://i.ytimg.com/vi/f687hBjwFcM/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLAIiD8SUG05ClWt8q-BBSnRVfJEaA'
          alt=''
        />
        <p>Rainbow Hat jr</p>
      </div>
    </div>
  );
};

export default Video;

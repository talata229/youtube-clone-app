import moment from 'moment';
import React from 'react';
import './_comment.scss';
const Comment = ({ comment }) => {
  const {
    textOriginal,
    textDisplay,
    authorDisplayName,
    authorProfileImageUrl,
    publishedAt,
  } = comment;
  
  return (
    <div className='comment p-2 d-flex'>
      <img src={authorProfileImageUrl} alt='' className='rounded-circle mr-3' />
      <div className='comment__body'>
        <p className='comment__header mb-1'>
          {authorDisplayName} • {moment(publishedAt).fromNow()}
        </p>
        <p className='mb-0'>{textOriginal}</p>
      </div>
    </div>
  );
};

export default Comment;

import moment from 'moment';
import React from 'react';
import './_comment.scss'
const Comment = () => {
  return (
    <div className='comment p-2 d-flex'>
      <img
        src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuoovVYEMl5PlyrnrmjPY_0bH_k0RaXYByiMVOWeEhWeG9wxWP2ozVw0Ab51hiQzxErpo&usqp=CAU'
        alt=''
        className='rounded-circle mr-3'
      />
      <div className='comment__body'>
        <p className='comment__header mb-1'>
          Tran Van Quang • {moment('2020-05-06').fromNow()}
        </p>
        <p className='mb-0'>Nice video!!!</p>
      </div>
    </div>
  );
};

export default Comment;

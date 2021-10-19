import React from 'react';
import './_comments.scss';
import Comment from '../comment/Comment';
const Comments = () => {
  const hanldeSubmit = () => {};
  return (
    <div className='comments'>
      <p>1234 comments</p>
      <div className='comments_form d-flex w-100 my-2'>
        <img
          src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuoovVYEMl5PlyrnrmjPY_0bH_k0RaXYByiMVOWeEhWeG9wxWP2ozVw0Ab51hiQzxErpo&usqp=CAU'
          alt=''
          className='rounded-circle mr-3'
        />
        <form
          onSubmit={hanldeSubmit}
          className='comments_form d-flex flex-grow-1'
        >
          <input
            type='text'
            className='flex-grow-1'
            placeholder='Write a comment'
          />
          <button className='border-0 p-2'>Comment</button>
        </form>
      </div>

      <div className='comments__list'>
        {[...Array(15)].map(() => (
          <Comment />
        ))}
      </div>
    </div>
  );
};
export default Comments;

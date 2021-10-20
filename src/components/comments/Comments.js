import React, { useEffect, useState } from 'react';
import './_comments.scss';
import Comment from '../comment/Comment';
import { useDispatch, useSelector } from 'react-redux';
import {
  addComment,
  getCommentsOfVideoById,
} from '../../redux/actions/comments.action';

const Comments = ({ videoId,totalComments }) => {
  const dispatch = useDispatch();
  const [text, setText] = useState('');
  useEffect(() => {
    dispatch(getCommentsOfVideoById(videoId));
  }, [dispatch, videoId]);

  const comments = useSelector((state) => state.commentList.comments);
  const _comments = comments?.map(
    (comment) => comment.snippet.topLevelComment.snippet
  );
  const hanldeSubmit = (e) => {
    e.preventDefault();
    if (text.length == 0) return;
    dispatch(addComment(videoId, text));
  };

  return (
    <div className='comments'>
      <p>{totalComments} comments</p>
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
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <button className='border-0 p-2'>Comment</button>
        </form>
      </div>

      <div className='comments__list'>
        {_comments?.map((comment, i) => (
          <Comment key={i} comment={comment} />
        ))}
      </div>
    </div>
  );
};
export default Comments;

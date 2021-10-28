import React, { useEffect } from 'react';
import { Container, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { getListVideoCategory, getVideosByCategory } from '../../redux/actions/videos.action';
import './_videoCategoryScreen.scss';
const VideoCategoryScreen = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getListVideoCategory());
  }, [dispatch]);

  const videoCategories = useSelector(
    (state) => state.videoCategories.categories
  );
  const _categoryNames = videoCategories.map(item=>item.snippet?.title)
  const loading = useSelector((state) => state.videoCategories.loading);
  const history = useHistory()
  const hanldeClick = (name) => {
       history.push(`/search/${name}`);
  }
  return !loading ? (
    <div className='video-category-list'>
      {_categoryNames?.map((name) => (
        <div className='video-category-list__item' onClick={()=>hanldeClick(name)}>{name}</div>
      ))}
    </div>
  ) : (
    <div>Loading....</div>
  );
};

export default VideoCategoryScreen;

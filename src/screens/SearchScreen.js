import React, { useEffect } from 'react';
import { Container } from 'react-bootstrap';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import VideoHorizontal from '../components/videoHorizontal/VideoHorizontal';
import { getVideosBySearch } from '../redux/actions/videos.action';

const SearchScreen = () => {
  const { query } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getVideosBySearch(query));
  }, [dispatch, query]);

  const { videos, loading } = useSelector((state) => state.searchedVideos);
  return (
    <Container>
      {!loading ? (
        videos?.map((video, i) => (
          <VideoHorizontal video={video} key={video.id.videoId} searchScreen />
        ))
      ) : (
        <SkeletonTheme color='#343a40' highlightColor='#3c4147'>
          <Skeleton height={180} width='100%' count={20} />
        </SkeletonTheme>
      )}
    </Container>
  );
};

export default SearchScreen;

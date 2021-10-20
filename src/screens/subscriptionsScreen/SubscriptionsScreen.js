import React, { useEffect } from 'react';
import { Container } from 'react-bootstrap';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import { useDispatch, useSelector } from 'react-redux';
import VideoHorizontal from '../../components/videoHorizontal/VideoHorizontal';
import { getSubcribedChannels } from '../../redux/actions/videos.action';
import './_subscriptionsScreen.scss';

const SubscriptionsScreen = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getSubcribedChannels());
  }, [dispatch]);

  const { videos, loading } = useSelector(
    (state) => state.subscriptionsChannel
  );
  return (
    <Container fluid>
      {!loading ? (
        videos?.map((video) => (
          <VideoHorizontal video={video} key={video.id} subScreen />
        ))
      ) : (
        <SkeletonTheme color='#343a40' highlightColor='#3c4147'>
          <Skeleton height={180} width='100%' count={20} />
        </SkeletonTheme>
      )}
    </Container>
  );
};

export default SubscriptionsScreen;

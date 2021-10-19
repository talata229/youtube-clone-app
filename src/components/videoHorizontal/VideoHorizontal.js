import React from 'react';
import './_videoHorizontal.scss';
import moment from 'moment';
import numeral from 'numeral';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Col, Row } from 'react-bootstrap';
import { AiFillEye } from 'react-icons/ai';

const VideoHorizontal = () => {
  const seconds = moment.duration('100').asSeconds();
  const _duration = moment.utc(seconds * 1000).format('mm:ss');

  return (
    <Row className='videoHorizontal m-1 py-2 align-items-center'>
      <Col xs={6} md={4} className='videoHorizontal__left'>
        <LazyLoadImage
          src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuoovVYEMl5PlyrnrmjPY_0bH_k0RaXYByiMVOWeEhWeG9wxWP2ozVw0Ab51hiQzxErpo&usqp=CAU'
          effect='blur'
          className='videoHorizontal__thumbnail rounded-circle'
          wrapperClassName='videoHorizontal__thumbnail-wrapper'
        />
        <span className='video__top__duration'>{_duration}</span>
      </Col>
      <Col xs={6} md={8} className='videoHorizontal__right p-0'>
        <p className='videoHorizontal__title mb-1'>B a full dev in 1 month</p>
        <div className='videoHorizontal__details'>
          <AiFillEye /> {numeral(1000).format('0.a')} Views •{'  '}
          {moment('2020-05-05').fromNow()}
        </div>
        <div className='videoHorizontal__channel d-flex align-items-center my-1'>
          <p>Backbench Coder</p>
        </div>
      </Col>
    </Row>
  );
};

export default VideoHorizontal;

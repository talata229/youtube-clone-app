import moment from 'moment';
import numeral from 'numeral';
import React from 'react';
import { AiFillEye } from 'react-icons/ai';
import { MdThumbDown, MdThumbUp } from 'react-icons/md';
import './_videoMetaData.scss';
import ReactShowMoreText from 'react-show-more-text';
const VideoMetaData = () => {
  return (
    <div className='videoMetaData py-2'>
      <div className='videoMetaData__top'>
        <h5>Video Title</h5>
        <div className='d-flex justify-content-between align-items-center py-1'>
          <span>
            {numeral(10000).format('0.a')} Views •{'  '}
            {moment('2020-05-06').fromNow()}
          </span>
          <div>
            <span className='mr-3'>
              <MdThumbUp size={26} /> {numeral(10000).format('0.a')}
            </span>
            <span className='mr-3'>
              <MdThumbDown size={26} /> {numeral(10000).format('0.a')}
            </span>
          </div>
        </div>
      </div>
      <div className='videoMetaData__channel d-flex justify-content-between align-items-center my-2 py-2'>
        <div className='d-flex'>
          <img
            src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuoovVYEMl5PlyrnrmjPY_0bH_k0RaXYByiMVOWeEhWeG9wxWP2ozVw0Ab51hiQzxErpo&usqp=CAU'
            alt='avatar'
            className='rounded-circle mr-3'
          />
          <div className='d-flex flex-column'>
            <span>Channel Name</span>
            <span>{numeral(10000).format('0.a')} Subscribers</span>
          </div>
        </div>
        <button className='btn border-0 p-2 m-2'>Subscribe</button>
      </div>
      <div className='videoMetaData__description'>
        <ReactShowMoreText
          lines={3}
          more='SHOW MORE'
          less='SHOW LESS'
          anchorClass='showMoreText'
          expanded={false}
        >
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo
          nesciunt recusandae, labore qui placeat odit saepe dolor a dolore
          delectus at fugit laborum eos pariatur sit, necessitatibus ut quos
          aliquid minima ea, atque facilis ex suscipit? Assumenda, sequi rem qui
          inventore dignissimos nihil iure sunt unde eius quasi! Molestiae
          laborum commodi voluptatum quis vel error quod dolores autem cumque
          enim repellat labore deleniti iusto, asperiores laboriosam quisquam
          quas? Aliquam architecto obcaecati fugiat neque aliquid tempore
          repellendus! Sit voluptatibus hic, voluptatum natus officiis omnis
          itaque eum libero ipsa ipsum quod minus magnam deserunt quaerat at
          rem. Iure recusandae magnam animi minus.
        </ReactShowMoreText>
      </div>
    </div>
  );
};

export default VideoMetaData;

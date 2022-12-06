import React from 'react';
import {BsRecord2} from 'react-icons/bs'
import './DotComponent.scss'

const DotComponent = ({header, text}) => {
  return (
    <div className='d-flex gx-5 align-items-center '>
      <BsRecord2 />
      <div >
        <span className='dot_head'>{header}</span> - <i>{text}</i>
      </div>
    </div>
  );
};

export default DotComponent;
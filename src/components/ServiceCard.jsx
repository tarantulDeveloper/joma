import React from 'react';

const ServiceCard = ({icon, title}) => {
  return (
    <div className='d-flex flex-column col-sm-12 col-md-4 col-lg-3 align-items-center justify-content-center'>
      {/*{React.createElement(icon, {fontSize: '100px', color: 'red'})}*/}
      {icon}
      <div className='myTxt mt-2'>{title}</div>
      <p className='text-center yep mt-2 mb-4 pb-5'>The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32</p>
    </div>
  );
};

export default ServiceCard;
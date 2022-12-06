import React from 'react';
import {Card} from "react-bootstrap";
import Image from 'react-bootstrap/Image'

const MyCard = ({image}) => {
  return (
    <div className="c-body col-lg-3 col-md-6 col-sm-12" >
      <div className='d-flex align-items-center justify-content-center'>
        <img src={image} className="rounded-circle img-fluid my-img" alt="..."/>
      </div>
      <div className="text-center text-white">
        <h5 className="pt-3">Jenn Gwapa</h5>
        <h6 className="">CEO / Founder</h6>
        <p >Do not seek to change what has
          come before. Seek to create that which has not.</p>
      </div>
    </div>
  );
};

export default MyCard;
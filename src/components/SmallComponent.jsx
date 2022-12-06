import React from 'react';
import MyCard from "./MyCard";
import p1 from "../img/team/01.jpg";
import p2 from "../img/team/02.jpg";

const SmallComponent = () => {
  return (
    <>
      <MyCard image={p1} />
      <MyCard image={p2} />
    </>
  );
};

export default SmallComponent;
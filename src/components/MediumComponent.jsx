import React from 'react';
import MyCard from "./MyCard";
import p1 from "../img/team/01.jpg";
import p2 from "../img/team/02.jpg";
import p3 from "../img/team/03.jpg";
import p4 from "../img/team/04.jpg";

const MediumComponent = () => {
  return (
    <>
      <MyCard image={p1} />
      <MyCard image={p2} />
      <MyCard image={p3} />
      <MyCard image={p4} />
      <MyCard image={p1} />
      <MyCard image={p2} />
    </>
  );
};

export default MediumComponent;
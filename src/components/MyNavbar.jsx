import React from 'react';
import {Container, Nav, Navbar} from "react-bootstrap";
import styles from './MyNavbar.module.scss'
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

const MyNavbar = ({color}) => {
  return (
    <Navbar fixed='top' expand="lg" bg={color ? 'dark' : ''} >
      <Container className='text-uppercase'>
        <Navbar.Brand href="#" className='text-white'>Project2</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll"/>
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{maxHeight: '100px'}}
            navbarScroll
          >

          </Nav>
          <Nav className={` ${styles.myNavBar} `}>
            <Link activeClass="active" spy to="home">home</Link>
            <Link activeClass="active" spy to="about">about</Link>
            <Link activeClass="active" spy to="team">team</Link>
            <Link activeClass="active" spy to="services">services</Link>
            <Link activeClass="active" spy to="portfolio">portfolio</Link>
            <Link activeClass="active" spy to="testimonials">testimonials</Link>
            <Link activeClass="active" spy to="contact">contact</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;
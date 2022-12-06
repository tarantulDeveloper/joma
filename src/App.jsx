import "./App.css";
import {useEffect, useState} from "react";
import MyNavbar from "./components/MyNavbar";
import styles from "./App.module.scss";
import {AiFillCamera, AiFillDownCircle, AiOutlineGooglePlus} from "react-icons/ai";
import img2 from "./img/02.png";
import DotComponent from "./components/DotComponent";
import MediumComponent from "./components/MediumComponent";
import LargeComponent from "./components/LargeComponent";
import SmallComponent from "./components/SmallComponent";
import ExtraSmall from "./components/ExtraSmall";
import ServiceCard from "./components/ServiceCard";
import {MdLaptopMac} from 'react-icons/md'
import {BsFillPhoneFill} from 'react-icons/bs'
import {HiSpeakerphone} from 'react-icons/hi'
import p1 from './img/client/01.png'
import p2 from './img/client/02.png'
import p3 from './img/client/03.png'
import p4 from './img/client/04.png'
import p5 from './img/client/05.png'
import p6 from './img/client/06.png'
import Data from './data'
import Tabs from './components/Tabs'
import Items from './components/Items'
import {Carousel} from "react-bootstrap";
import {useForm} from "react-hook-form";
import {CiFacebook, CiTwitter} from 'react-icons/ci'

function App() {
  const [color, setColor] = useState(false);
  const [width, setWidth] = useState(0);

  const changeBackground = () => {
    if (window.scrollY >= 300) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  const resize = () => {
    setWidth(window.innerWidth);
  }

  useEffect(() => {
    changeBackground();
    resize();
    window.addEventListener("scroll", changeBackground);
    window.addEventListener("resize", resize)
  });


  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  const [data, setData] = useState(Data);
  const categoryData = Data.map((value) => {
    return value.category
  });
  const tabsData = ["all", ...new Set(categoryData)];

  const filterCategory = (category) => {
    if (category === "all") {
      setData(Data);
      return;
    }
    const filteredData = Data.filter((value) => {
      return value.category === category;
    })
    setData(filteredData);
  }

  const {register, handleSubmit, reset} = useForm({
    defaultValues: {
      email: "",
      password: "",
      message: "",
    },
  });

  const [textArea, setTextArea] = useState("");

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div>
      <MyNavbar color={color}/>
      <div
        id="home"
        className={`${styles.myBackground} ${styles.skier} d-flex justify-content-center align-items-center flex-column`}
      >
        <div className={` content text-center ${styles.relative} `}>
          <h2 className="text-uppercase text-white">
            Welcome on <span className={styles.goldText}>project2</span>
          </h2>
          <h4 className="text-white">
            We are a digital agency with{" "}
            <span className={styles.bold}>years of experience</span> and with{" "}
            <span className={styles.bold}>extraordinary people</span>
          </h4>
        </div>
        <div className={styles.absolute}>
          <a href="#about">
            <AiFillDownCircle
              color="white"
              style={{fontSize: "60px"}}
              className={styles.icon}
            />
          </a>
        </div>
      </div>
      <div className="container my-5  py-lg-5" id="about">
        <div className="row">
          <div className="col-sm-12 col-md-6 d-flex d-flex align-items-center justify-content-center">
            <img src={img2} alt="PC" className="img-fluid"/>
          </div>
          <div
            className={`col-sm-12 col-md-6 d-flex flex-column ${styles.thinText} my-5`}
          >
            <h4>ABOUT US</h4>
            <h3>SOME WORDS ABOUT US</h3>
            <div className="yellow"/>
            <p className="pt-3">
              We love building and rebuilding brands through our specific
              skills. Using colour, fonts, and illustration, we brand companies
              in a way they will never forget.
            </p>
            <DotComponent
              header="Mission"
              text="We deliver uniqueness and quality"
            />
            <DotComponent
              header="Skills"
              text="Delivering fast and excellent results"
            />
            <DotComponent
              header="Client"
              text="Satisfied clients thanks to our experience"
            />
          </div>
        </div>
      </div>
      <div className={`${styles.myBackground} ${styles.team}`} id="team">
        <div className="container d-flex flex-column align-items-center justify-content-center">
          <h2 className="text-center pt-5 text-white">MEET OUR TEAM</h2>
          <div className="yellow"/>
          <div className="small_yellow"/>
          <div className="container mt-5 ">
            <div className="row ">
              {(() => {
                if (width <= 380) {
                  return <ExtraSmall/>
                } else if (width <= 767) {
                  return <SmallComponent/>
                } else if (width <= 992) {
                  return <MediumComponent/>
                } else {
                  return <LargeComponent/>
                }
              })()}
            </div>
          </div>
        </div>
      </div>
      <div className="container d-flex flex-column align-items-center justify-content-center" id="services">
        <h2 className="text-center pt-5 ">TAKE A LOOK AT OUR SERVICES</h2>
        <div className="yellow"/>
        <div className="small_yellow"/>
        <p className='mt-3 myP text-center pb-5'>Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus
          Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on
          the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor
          sit amet..", comes from a line in section 1.10.32.</p>
        <div className="row pt-2">
          <ServiceCard icon={<MdLaptopMac className={styles.icon} fontSize='100px'/>} title='WEB DESIGN'/>
          <ServiceCard icon={<BsFillPhoneFill className={styles.icon} fontSize='100px'/>} title='MOBILE APPS'/>
          <ServiceCard icon={<AiFillCamera className={styles.icon} fontSize='100px'/>} title='PHOTOGRAPHY'/>
          <ServiceCard icon={<HiSpeakerphone className={styles.icon} fontSize='100px'/>} title='MARKETING'/>
        </div>
      </div>
      <div className={`${styles.smallBackground} ${styles.portfolio}`}>
        <div className="container d-flex flex-column align-items-center justify-content-center">
          <h2 className="text-center pt-5 text-white">SOME OF OUR CLIENTS</h2>
          <div className="yellow"/>
          <div className="small_yellow"/>
          <div className="container d-flex align-items-center justify-content-center pt-5  pb-1">
            <div className="row">
              <div className="col-md-2 d-flex align-items-center justify-content-center pt-2">
                <img src={p1} className='img-fluid' alt="."/>
              </div>
              <div className="col-md-2 d-flex align-items-center justify-content-center pt-2">
                <img src={p2} className='img-fluid' alt="."/>
              </div>
              <div className="col-md-2 d-flex align-items-center justify-content-center pt-2">
                <img src={p3} className='img-fluid' alt="."/>
              </div>
              <div className="col-md-2 d-flex align-items-center justify-content-center pt-2">
                <img src={p4} className='img-fluid' alt="."/>
              </div>
              <div className="col-md-2 d-flex align-items-center justify-content-center pt-2">
                <img src={p5} className='img-fluid' alt="."/>
              </div>
              <div className="col-md-2 d-flex align-items-center justify-content-center pt-2">
                <img src={p6} className='img-fluid' alt="."/>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="" id="portfolio">
        <div className="container ">
          <div className="container d-flex align-items-center justify-content-center flex-column">
            <h2 className="text-center pt-5 ">TAKE A LOOK AT OUR SERVICES</h2>
            <div className="yellow"/>
            <div className="small_yellow"/>
            <p className='mt-3 myP text-center pb-5'>Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus
              Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise
              on
              the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum
              dolor
              sit amet..", comes from a line in section 1.10.32.</p>
          </div>
          <div className="row">
            <div className="col-sm-1">
            </div>
            <div className="col-sm-10">
              <Tabs filterCategory={filterCategory} tabsData={tabsData}/>
              <Items data={data}/>
            </div>
            <div className="col-sm-1">

            </div>
          </div>

        </div>
      </div>
      <div
        className={`${styles.mediumBackground} ${styles.testimonials} d-flex align-items-center justify-content-center flex-column`}
        id="testimonials">
        <div className="container d-flex flex-column align-items-center justify-content-center">
          <h2 className="text-center text-white">SOME OF OUR CLIENTS</h2>
          <div className="yellow"/>
          <div className="small_yellow"/>
        </div>
        <Carousel activeIndex={index} onSelect={handleSelect} className='container pt-5'>
          <Carousel.Item>
            <p className='text-uppercase text-center text-white'>this book is a treatise on the theory of ethics,
              very popular during the renaissance. the first
              line of Lorem ipsum, "lorem ipsum dolor sit amet..", comes from
              a line in section 1.10.32</p>
            <p className='text-center text-white pb-4'><b>Dean Martin</b>, CEO Acme Inc.</p>
          </Carousel.Item>
          <Carousel.Item>
            <p className='text-uppercase text-center text-white'>this book is a treatise on the theory of ethics,
              very popular during the renaissance. the first
              line of Lorem ipsum, "lorem ipsum dolor sit amet..", comes from
              a line in section 1.10.32</p>
            <p className='text-center text-white pb-4'><b>Dean Martin</b>, CEO Acme Inc.</p>
          </Carousel.Item>
          <Carousel.Item>
            <p className='text-uppercase text-center text-white'>this book is a treatise on the theory of ethics,
              very popular during the renaissance. the first
              line of Lorem ipsum, "lorem ipsum dolor sit amet..", comes from
              a line in section 1.10.32</p>
            <p className='text-center text-white pb-4'><b>Dean Martin</b>, CEO Acme Inc.</p>
          </Carousel.Item>
        </Carousel>
      </div>
      <div className="container d-flex flex-column align-items-center justify-content-center w-75 mb-5 pb-5"
           id="contact">
        <div className="container d-flex flex-column align-items-center justify-content-center pt-5 ">
          <h2 className="text-center pt-3 ">FEEL FREE TO CONTACT US</h2>
          <div className="yellow"/>
          <div className="small_yellow"/>
          <p className='mt-3 myP text-center'>Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus
            Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise
            on
            the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum
            dolor
            sit amet..", comes from a line in section 1.10.32.</p>
        </div>
        <div className={`container ${styles.myForm} `}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className={styles.inputs}>
              <div className="d-flex flex-column">
                <label htmlFor="email">Email:</label>
                <input {...register("email")} id='email' placeholder="Enter email"/>
              </div>
              <div className="d-flex flex-column">
                <label htmlFor="pass">Password:</label>
                <input type="password" {...register("password")} id='pass' placeholder="Password"/>
              </div>
            </div>
            <div className='pt-2'>
              Message:
              <textarea {...register("message")} />
            </div>
            <div className={`${styles.buttons} d-flex justify-content-between`}>
              <button type="submit">Submit</button>
              <button
                onClick={() => {
                  reset();
                }}
              >
                Reset
              </button>
            </div>
          </form>
        </div>
      </div>
      <footer className={`${styles.footer} d-flex justify-content-center align-items-center`}>
        <div className="container text-white">
          <div className="row">
            <div className="col-lg-10 col-sm-12">
              ALL RIGHTS RESERVED. COPYRIGHT © 2014. Designed by Robert Berki and Coded by Jenn Pereira
            </div>
            <div className='col-lg-2 col-sm-12 d-flex justify-content-center align-items-center'>
              <CiFacebook style={{fontSize: '30px'}}/>
              <CiTwitter style={{fontSize: '30px'}}/>
              <AiOutlineGooglePlus style={{fontSize: '30px'}}/>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;

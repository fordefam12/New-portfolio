import "./index.scss";
import { useEffect, useState } from "react";
import AnimatedLetters from "../AnimatedLetters";
import headShot from '../../assets/me.jpg'


const Profile = () => {
  const [letterClass, setletterClass] = useState("text-animate");

  useEffect(() => {
    const timeOutID = setTimeout(() => {
      setletterClass("text-animate-hover");
    }, 4000);
    return () => {
      clearTimeout(timeOutID);
    };
  }, []);

  return (
    <div className="jobs">
      <section id="work" >
        <h1>
          <div className="glitch">
            <AnimatedLetters
              strArray={["P", "r", "o", "f", "i", "l", "e"]}
              letterClass={letterClass}
              idx={15}
            />
          </div>
        </h1>
        <section className="banner">
          <div
            className="banner--content"
            data-aos="fade-in"
            data-aos-duration="2000"
          >
            <h3 className="name">Branodn Forde</h3>
            <h1 className="designation">Freelance graphic designer</h1>
            <p className="tagline">
            <svg className="arrows">
							<path className="a1" d="M0 0 L30 32 L60 0"></path>
							<path className="a2" d="M0 20 L30 52 L60 20"></path>
							<path className="a3" d="M0 40 L30 72 L60 40"></path>
						</svg>
            </p>
          </div>
        </section>
        {/* .banner */}
        <section className="promo">
          <div className="content" data-aos="fade-up" data-aos-offset="50">
            <h2>
              We bring your <span className="bold">ideas</span> to life
              <span className="orange">.</span>
            </h2>
            <p>Great ideas, beautifully executed & commercially sound.</p>
          </div>
        </section>
        <section id="about">
          <div className="content">
            <h2>About Me</h2>
            <div className="about-container">
              <div
                className="about-container-left"
                data-aos="fade-up-right"
                data-aos-duration="1000"
              >
                <p>
                In the realm of Browser-Based Technologies, I have a solid foundation in HTML/CSS and JavaScript/jQuery, which allows me to create and enhance web applications. I am enthusiastic about responsive design principles and have worked on ensuring that web applications I have been involved in are accessible and functional across various devices. My familiarity with Bootstrap helps me create visually appealing and user-friendly interfaces. Additionally, I have a basic understanding of Progressive Web Applications (PWAs) and web storage mechanisms like Local Storage and Session Storage. I am in the early stages of learning React.js and am eager to apply this knowledge to build dynamic user interfaces.
                </p>
              </div>
              <div
                className="about-container-right"
                data-aos="fade-up-left"
                data-aos-duration="1500"
              >
                <img
                  src={headShot}
                  alt="Brandon Forde, headshot"
                />
              </div>
            </div>
          </div>
        </section>
        {/* #about */}
        <section id="skill">
          <div className="content skill--content">
            <div className="left">
              <h2>My skills &amp; expertise</h2>
              <p>
              As an entry-level software developer, I bring a foundational understanding of Computer Science Applied to JavaScript and a strong desire to learn and grow in the field. My skills encompass essential areas such as algorithmic thinking, including searches and sorts, as well as basic knowledge of performance optimization techniques. I have a grasp of time complexity and an introductory understanding of Big O Notation, which I am eager to expand upon as I gain more experience.
              </p>
            </div>
            {/* <div className="right">
              <div
                className="item"
                data-aos="flip-left"
                data-aos-duration="1000"
              >
                <img src="assets/images/photoshop.png" alt="Photoshop" />
                <h3>Abode Photoshop</h3>
                <p>
                  laboriosam temporibus harum culpa recusandae nemo tempora ut
                  vitae earum quo.
                </p>
              </div>
              <div
                className="item"
                data-aos="flip-right"
                data-aos-duration="2000"
              >
                <img src="assets/images/illustrator.png" alt="Illustrator" />
                <h3>Abode Illustrator</h3>
                <p>
                  Sunt doloribus perferendis officia soluta enim optio
                  distinctio exercitationem.
                </p>
              </div>
              <div
                className="item"
                data-aos="flip-left"
                data-aos-duration="1500"
              >
                <img src="assets/images/indesign.png" alt="InDesign" />
                <h3>Abode InDesign</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit qui
                  debitis.
                </p>
              </div>
            </div> */}
          </div>
        </section>
        {/* #skill */}
        
        {/* #service */}
       
        {/* portfolio */}
        
        {/* testimonial */}
       
        {/* #pricing */}
    
    
      
        
      </section>
    </div>
  );
};

export default Profile;

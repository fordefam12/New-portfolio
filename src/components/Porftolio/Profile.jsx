import "./index.scss";
import { useEffect, useState } from "react";
import AnimatedLetters from "../AnimatedLetters";

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
        <nav className="site-header">
          <div className="nav-logo">
            <a href="index.html">
              <img
                src="assets/images/logo.png"
                alt="logo"
                width="314"
                height="60"
              />
            </a>
          </div>
          <button className="hamburger">
            <img src="assets/images/menu.png" alt="menu toggle icon" />
          </button>
          <div className="nav-links">
            <ul>
              <li>
                <a href="index.html">Home</a>
              </li>
              <li>
                <a href="#about">About Me</a>
              </li>
              <li>
                <a href="#skill">Skills</a>
              </li>
              <li>
                <a href="#service">Services</a>
              </li>
              <li>
                <a href="#portfolio">Portfolio</a>
              </li>
              <li>
                <a href="#testimonial">Testimonial</a>
              </li>
              <li>
                <a href="#pricing">Pricing</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>
        </nav>
        {/* .site-header */}
        <section className="banner">
          <div
            className="banner--content"
            data-aos="fade-in"
            data-aos-duration="2000"
          >
            <h3 className="name">Your name</h3>
            <h1 className="designation">Freelance graphic designer</h1>
            <p className="tagline">
              If you&apos;re writer or something else, change the title as per
              your profession.
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
                  Consectetur adipisicing elit fugiat ratione laboriosam nostrum
                  atque. Accusantium atque molestias amet culpa, quam illo
                  porro, cupiditate repellendus explicabo sunt natus voluptate
                  fugit ducimus esse.
                </p>
                <h3>Accusantium atque molestias</h3>
                <ul>
                  <li>Amet consectetur adipisicing elit</li>
                  <li>Fugiat ratione laboriosam nostrum atque</li>
                  <li>Cupiditate repellendus explicabo</li>
                </ul>
                <p>
                  Fugiat ratione laboriosam nostrum atque. Lorem ipsum dolor sit
                  amet consectetur adipisicing elit.
                </p>
                <h4>Atque lccusantium molestias amet</h4>
                <p>
                  Auam illo porro cupiditate repellendus explicabo ducimus esse.
                  Dupiditate repellendus explicabo sunt natus voluptate fugit
                  ducimus esse
                </p>
              </div>
              <div
                className="about-container-right"
                data-aos="fade-up-left"
                data-aos-duration="1500"
              >
                <img
                  src="assets/images/headshot.jpg"
                  alt="your name, headshot"
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
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea
                quibusdam inventore molestias maiores esse eum, recusandae
                impedit? Neque inventore, saepe esse culpa, adipisci ipsum sed
                suscipit debitis in voluptatibus nisi.
              </p>
            </div>
            <div className="right">
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
            </div>
          </div>
        </section>
        {/* #skill */}
        <section id="service">
          <h2>Services I offer</h2>
          <div
            className="content service--content"
            data-aos="fade-up"
            data-aos-duration="3000"
          >
            <div className="item">
              <h3>Logo design</h3>
              <img src="assets/images/logo-design.png" alt="Logo design" />
              <p>Maiores dicta suscipit voluptate dignissimos fugiat!</p>
              <a href="#contact">Hire Me</a>
            </div>
            {/* .item */}
            <div className="item">
              <h3>Packaging design</h3>
              <img
                src="assets/images/packaging-design.png"
                alt="Packaging design"
              />
              <p>
                Consectetur adipisicing elit. Dicta necessitatibus officia
                vitae.
              </p>
              <a href="#contact">Hire Me</a>
            </div>
            {/* .item */}
            <div className="item">
              <h3>3D image manipulation</h3>
              <img
                src="assets/images/3d-image-design.png"
                alt="3D image manipulation"
              />
              <p>
                Possimus repellendus voluptas vel assumenda distinctio tatibus.
              </p>
              <a href="#contact">Hire Me</a>
            </div>
            {/* .item */}
          </div>
        </section>
        {/* #service */}
        <section id="portfolio">
          <h2 className="center">Portfolio -My past work samples</h2>
          <div className="content portfolio--content">
            <div className="item">
              <h3>Project Name</h3>
              <img src="assets/images/project-one.jpg" alt="logo design" />
            </div>
            {/* item */}
            <div className="item">
              <h3>Project Name</h3>
              <img src="assets/images/project-two.jpg" alt="logo design" />
            </div>
            {/* item */}
            <div className="item">
              <h3>Project Name</h3>
              <img src="assets/images/project-three.png" alt="logo design" />
            </div>
            {/* item */}
            <div className="item">
              <h3>Project Name</h3>
              <img src="assets/images/project-four.jpg" alt="logo design" />
            </div>
            {/* item */}
            <div className="item">
              <h3>Project Name</h3>
              <img src="assets/images/project-five.jpg" alt="logo design" />
            </div>
            {/* item */}
            <div className="item">
              <h3>Project Name</h3>
              <img src="assets/images/project-six.jpg" alt="logo design" />
            </div>
            {/* item */}
          </div>
        </section>
        {/* portfolio */}
        <section id="testimonial">
          <h2>Testimonial -What clients are saying about me</h2>
          <div className="content testimonial--content">
            <div className="item">
              <figure>
                <blockquote cite="https://www.huxley.net/bnw/four.html">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Neque cumque quibusdam libero! Aperiam qui unde dolores iste
                    eos, odit laboriosam optio sunt commodi aliquid pariatur
                    nobis dolore! Excepturi, harum possimus.
                  </p>
                </blockquote>
                <figcaption>
                  —John Doe, <cite>CEO, Lorem Digital</cite>
                </figcaption>
              </figure>
            </div>
            {/* item */}
            <div className="item">
              <figure>
                <blockquote cite="https://www.huxley.net/bnw/four.html">
                  <p>
                    Sit amet consectetur adipisicing elit. Neque cumque
                    quibusdam libero! Aperiam qui unde dolores iste eos, odit
                    laboriosam optio sunt commodi aliquid pariatur nobis dolore!
                    Excepturi, harum possimus.
                  </p>
                </blockquote>
                <figcaption>
                  —John Doe, <cite>CEO, Lorem Digital</cite>
                </figcaption>
              </figure>
            </div>
            {/* item */}
            <div className="item">
              <figure>
                <blockquote cite="https://www.huxley.net/bnw/four.html">
                  <p>
                    Consectetur adipisicing elit. Neque cumque quibusdam libero!
                    Aperiam qui unde dolores iste eos, odit laboriosam optio
                    sunt commodi aliquid pariatur nobis dolore! Excepturi, harum
                    possimus.
                  </p>
                </blockquote>
                <figcaption>
                  —John Doe, <cite>CEO, Lorem Digital</cite>
                </figcaption>
              </figure>
            </div>
            {/* item */}
            <div className="item">
              <figure>
                <blockquote cite="https://www.huxley.net/bnw/four.html">
                  <p>
                    Adipisicing elit. Neque cumque quibusdam libero! Aperiam qui
                    unde dolores iste eos, odit laboriosam optio sunt commodi
                    aliquid pariatur nobis dolore! Excepturi, harum possimus.
                  </p>
                </blockquote>
                <figcaption>
                  —John Doe, <cite>CEO, Lorem Digital</cite>
                </figcaption>
              </figure>
            </div>
            {/* item */}
          </div>
          {/* .testimonial--content */}
        </section>
        {/* testimonial */}
        <section
          id="pricing"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-offset="50"
        >
          <h2 className="center">Pricing</h2>
          <p className="center">
            I charge $30/hour (USD). But if you need any of the following tasks
            done, see the fixed price below.
          </p>
          <div className="pricing--content">
            <div className="item">
              <h3>Logo design</h3>
              <p className="price">$235</p>
              <img
                src="assets/images/logo-design.png"
                alt="logo design price"
              />
              <p className="description">
                1 Professional Logo Designs in transparent format (png).
              </p>
              <a href="#contact">Hire me</a>
            </div>
            {/* item */}
            <div className="item">
              <h3>Packaging design</h3>
              <p className="price">$450</p>
              <img
                src="assets/images/packaging-design.png"
                alt="packaging design price"
              />
              <p className="description">
                Print ready design label or packaging for one product.
              </p>
              <a href="#contact">Hire Me</a>
            </div>
            {/* item */}
            <div className="item">
              <h3>Illustrate album cover</h3>
              <p className="price">$370</p>
              <img
                src="assets/images/3d-image-design.png"
                alt="3d image design price"
              />
              <p className="description">
                Hi-res front cover image for streaming platforms.
              </p>
              <a href="#contact">Hire Me</a>
            </div>
            {/* item */}
          </div>
          {/* pricing--content */}
        </section>
        {/* #pricing */}
        <section id="contact">
          <div className="content">
            <h2 className="center">Contact Me</h2>
            <p className="center contact-detail">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt
              nam doloremque, pariatur, repellat est natus soluta autem atque
              velit nisi ipsum sint fuga tenetur, harum molestias doloribus
              fugiat obcaecati culpa!
            </p>
            <address>
              <p>
                Email Me:{" "}
                <a href="mailto:hello@shihabiiuc.com">hello@shihabiiuc.com</a>
              </p>
              <p>
                Call me: <a href="tel:+88012345876">+88012345876</a>
              </p>
              <p>
                Office address: Box 564, Manchester
                <br />
                England.
              </p>
            </address>
          </div>
        </section>
        <div
          className="social-share"
          data-aos="fade-up"
          data-aos-offset="200"
          data-aos-anchor-placement="center-top"
        >
          <a
            href="https://www.facebook.com/sharer/sharer.php?u=https://shihabiiuc.github.io/portfolio/index.html"
            target="_blank" rel="noreferrer"
          >
            <img src="assets/svg/facebook.svg" alt="share on facebook" />
          </a>
          <a
            href="https://twitter.com/intent/tweet?url=https://shihabiiuc.github.io/portfolio/index.html&text="
            target="_blank" rel="noreferrer"
          >
            <img src="assets/svg/twitter.svg" alt="share on twitter" />
          </a>
          <a
            href="https://pinterest.com/pin/create/button/?url=https://shihabiiuc.github.io/portfolio/index.html&media=&description="
            target="_blank" rel="noreferrer"
          >
            <img src="assets/svg/pinterest.svg" alt="share on pinterest" />
          </a>
          <a
            href="https://www.linkedin.com/shareArticle?mini=true&url=https://shihabiiuc.github.io/portfolio/index.html"
            target="_blank" rel="noreferrer"
          >
            <img src="assets/svg/linkedin.svg" alt="share on linkedin" />
          </a>
        </div>
        <footer className="site-footer">
          <div className="content site-footer--content">
            <div className="footer-left">
              <img src="assets/images/logo-footer.png" alt="logo" />
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Repellat necessitatibus a pariatur, quibusdam dolorem impedit
                assumenda laborum modi nam, rem odit, doloremque commodi in
                consectetur vitae nisi. Nostrum, voluptatum quibusdam. Rpsum
                dolor sit amet consectetur adipisicing elit. Repellat
                necessitatibus a pariatur, quibusdam dolorem impedit assumenda
                laborum modi nam, rem odit, doloremque commodi in consectetur
                vitae nisi. Nostrum, voluptatum quibusdam
              </p>
            </div>
            <div className="footer-right">
              <address>
                <p>
                  Email Me:{" "}
                  <a href="mailto:hello@shihabiiuc.com">hello@shihabiiuc.com</a>
                </p>
                <p>
                  Call me: <a href="tel:+88012345876">+88012345876</a>
                </p>
                <p>
                  Office address: Box 564, Manchester
                  <br />
                  England.
                </p>
              </address>
            </div>
          </div>
          <div className="copyright-notice">
            <p>
              &copy; <time dateTime="2022">2022,</time> All rights reserved by
              your_name
            </p>
          </div>
        </footer>
        <script src="js/script.js"></script>
        {/* AOS */}
        <script src="https://unpkg.com/aos@next/dist/aos.js"></script>
        <script>AOS.init();</script>
      </section>
    </div>
  );
};

export default Profile;

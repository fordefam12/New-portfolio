import  { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './testing.scss'; // Make sure to include your CSS styles

function Testing() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="Testing-page">
    
      <section className="banner">
      <section className="banner">
      <div
        className="banner--content"
        data-aos="fade-in"
        data-aos-duration="2000"
      >
        <div className='spherespinner'>
            <div className='sphere'>

            </div>
        </div>
        <h3 className="name">Your name</h3>
        <h1 className="designation">Freelance graphic designer</h1>
        <p className="tagline">If youre a writer or something else, change the title as per your profession.</p>
      </div>
    </section>
      </section>

      <section className="promo">
      <div
        className="content"
        data-aos="fade-up"
        data-aos-offset="50"
      >
        <h2>We bring your <span className="bold">ideas</span> to life<span className="orange">.</span></h2>
        <p>Consectetur adipisicing elit fugiat ratione laboriosam nostrum atque. Accusantium atque molestias amet culpa, quam illo porro, cupiditate repellendus explicabo sunt natus voluptate fugit ducimus esseConsectetur adipisicing elit fugiat ratione laboriosam nostrum atque. Accusantium atque molestias amet culpa, quam illo porro, cupiditate repellendus explicabo sunt natus voluptate fugit ducimus esseConsectetur adipisicing elit fugiat ratione laboriosam nostrum atque. Accusantium atque molestias amet culpa, quam illo porro, cupiditate repellendus explicabo sunt natus voluptate fugit ducimus esseConsectetur adipisicing elit fugiat ratione laboriosam nostrum atque. Accusantium atque molestias amet culpa, quam illo porro, cupiditate repellendus explicabo sunt natus voluptate fugit ducimus esseConsectetur adipisicing elit fugiat ratione laboriosam nostrum atque. Accusantium atque molestias amet culpa, quam illo porro, cupiditate repellendus explicabo sunt natus voluptate fugit ducimus esseConsectetur adipisicing elit fugiat ratione laboriosam nostrum atque. Accusantium atque molestias amet culpa, quam illo porro, cupiditate repellendus explicabo sunt natus voluptate fugit ducimus esseConsectetur adipisicing elit fugiat ratione laboriosam nostrum atque. Accusantium atque molestias amet culpa, quam illo porro, cupiditate repellendus explicabo sunt natus voluptate fugit ducimus esseConsectetur adipisicing elit fugiat ratione laboriosam nostrum atque. Accusantium atque molestias amet culpa, quam illo porro, cupiditate repellendus explicabo sunt natus voluptate fugit ducimus esseConsectetur adipisicing elit fugiat ratione laboriosam nostrum atque. Accusantium atque molestias amet culpa, quam illo porro, cupiditate repellendus explicabo sunt natus voluptate fugit ducimus esseConsectetur adipisicing elit fugiat ratione laboriosam nostrum atque. Accusantium atque molestias amet culpa, quam illo porro, cupiditate repellendus explicabo sunt natus voluptate fugit ducimus esseConsectetur adipisicing elit fugiat ratione laboriosam nostrum atque. Accusantium atque molestias amet culpa, quam illo porro, cupiditate repellendus explicabo sunt natus voluptate fugit ducimus esseConsectetur adipisicing elit fugiat ratione laboriosam nostrum atque. Accusantium atque molestias amet culpa, quam illo porro, cupiditate repellendus explicabo sunt natus voluptate fugit ducimus esse</p>
        
      </div>
    </section>

      <section id="about">
        {/* About Me content */}
      </section>

      <section id="skill">
        {/* Skills content */}
      </section>

      <section id="service">
        {/* Services content */}
      </section>

      <section id="portfolio">
        {/* Portfolio content */}
      </section>

      <section id="testimonial">
        {/* Testimonial content */}
      </section>

      <section id="pricing">
        {/* Pricing content */}
      </section>

      <section id="contact">
        {/* Contact Me content */}
      </section>

      <div className="social-share">
        {/* Social share icons */}
      </div>

      <footer className="site-footer">
        {/* Footer content */}
      </footer>

    </div>
  )
}

export default Testing;

import React, { useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Nav from "../../components/NavTabs";
import Footer from "../../components/footer";
import { Dna } from "react-loader-spinner";
import "./index.scss";
import PersonalLogo from "../../assets/me.jpg";
import Loader from "../Loader";

function HomePage() {
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();

  const handleRouteChange = () => {
    setIsLoading(true);
    // Simulate loading time
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  };

  return (
    <Loader isLoading={isLoading}>
      <div className="container-fluid app-container">
        <header className="row app-header bg-danger">
          <div className="col-md-6">
            <h1 data-aos="zoom-in">
              <img
                className="my-pic"
                width={200}
                height={100}
                src={PersonalLogo}
                alt="Brandon forde"
              />
              Brandon's Portfolio
            </h1>
          </div>
          <div
            data-aos="fade-up"
            className="col-md-6 d-flex justify-content-end "
          >
            <Nav />
          </div>
        </header>
        <main className="app-main">
          <main className="app-main">
            <Outlet />
            {isLoading && (
              <div className="loading-overlay">
                <Dna
                  visible={isLoading}
                  height={80}
                  width={80}
                  ariaLabel="dna-loading"
                  wrapperStyle={{}}
                  wrapperClass="dna-wrapper"
                  ballColors={["#ff0000", "#00ff00", "#0000ff"]}
                  backgroundColor="#F4442E"
                />
              </div>
            )}
          </main>
        </main>
        <Footer />
      </div>
    </Loader>
  );
}

export default HomePage;

import React, { useEffect, useState } from "react";
import { Dna } from "react-loader-spinner";
import AOS from "aos";
import "aos/dist/aos.css";

function Loader({ children }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    AOS.init();
    AOS.refresh();

    const loadingTimer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    window.addEventListener("load", () => {
      clearTimeout(loadingTimer);
      setIsLoading(false);
    });

    return () => {
      clearTimeout(loadingTimer);
      window.removeEventListener("load", () => {});
    };
  }, []);

  return (
    <>
      {isLoading && (
        <div className="loading-overlay">
          <div className="loader-container">
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
        </div>
      )}
      {children}
    </>
  );
}

export default Loader;


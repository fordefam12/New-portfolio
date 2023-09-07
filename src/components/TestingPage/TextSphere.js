import TagCloud from "TagCloud";
import { useEffect } from "react";
import './testing.scss'

const TextSphere = () => {
useEffect(() => {
    return () => {
      const container = ".tagcloud";

      const texts = [
        "HTML",
        "CSS",
        "SASS",
        "JavaScript",
        "ReactJS",
        "vue",
        "Nuxt",
        "NodeJS",
        "Babel",
        "Jquery",
        "ES6",
        "GIT",
        "GITHUB",
      ];

      const options = {
        radius: 600,
        maxspeed: "normal",
        initspeed: "normal",
        keep: true,
      };
      TagCloud(container, texts, options);
    };
  });

  return(
    <>
    <div className="text-sphere" >
      <span className="tagcloud"></span>
      </div>
    </>
  )
}
  export default TextSphere
import { useSpring, animated } from 'react-spring';

const ImageGrid = () => {
  const images =[src/assets/Gear_5_Infobox.png];

  const animate = useSpring({
    from: { opacity: 0, transform: 'scale(0.9)' },
    to: { opacity: 1, transform: 'scale(1)' },
    config: { tension: 280, friction: 20 },
  });

  return (
    <div className="image-grid">
      {images.map((image, index) => (
        <animated.div className="image-item" key={index} style={animate}>
          <img src={image} alt={`Image ${index}`} />
        </animated.div>
      ))}
    </div>
  );
};

export default ImageGrid;

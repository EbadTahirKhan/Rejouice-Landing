import { useState, useRef, useEffect } from "react";
import Lottie from "lottie-react";
import tapAnimation from "../../public/assets/svgs/hand-pointer.json";

const Page3 = () => {
  const [hoverStates, setHoverStates] = useState([false, false, false]);
  const [hidden, setHidden] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const containerRefs = useRef([]);

  useEffect(() => {
    setIsMobile(window.innerWidth < 1000);
    const handleResize = () => setIsMobile(window.innerWidth < 1000);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  

  const handleClickInside = (index) => {
    setHidden(true);
  };

  // Detect clicks outside to show again
  const handleClickOutside = (event) => {
    if (
      containerRefs.current.every((ref) => ref && !ref.contains(event.target))
    ) {
      setHidden(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  const boxes = [
    {
      textImg: "/assets/images/rivian-logo.png",
      img: "/assets/images/rivian-showcase.jpg",
      video: "/assets/videos/1st-box-video.mp4",
    },
    {
      textImg: "/assets/images/oura-logo.svg",
      img: "/assets/images/oura-showcase.jpg",
      video: "/assets/videos/2nd-box-video.mp4",
    },
    {
      textImg: "/assets/images/third-logo.svg",
      img: "/assets/images/third-showcase.jpg",
      video: "/assets/videos/3rd-box-video.mp4",
    },
  ];

  return (
    <div id="page3">
      <div id="page3-top">
        <h4>
          Agency & Venture <span>Models</span> <a>↴</a>
        </h4>
        <h2>Explore our services</h2>
        <h2>& engagement models</h2>
        <div id="page3-elem">
          {boxes.map((box, index) => (
            <div
              key={index}
              className="box"
              ref={(el) => (containerRefs.current[index] = el)}
              onClick={() => handleClickInside(index)}
              onMouseEnter={() => {
                const newHoverStates = [...hoverStates];
                newHoverStates[index] = true;
                setHoverStates(newHoverStates);
              }}
              onMouseLeave={() => {
                const newHoverStates = [...hoverStates];
                newHoverStates[index] = false;
                setHoverStates(newHoverStates);
              }}
            >
              {isMobile && !hidden ? (
                <div className="tap">
                  <Lottie
                    animationData={tapAnimation}
                    loop
                    autoplay
                    className="tap-icon"
                  />
                </div>
              ) : null}
              <img
                className="text"
                src={box.textImg}
                alt=""
                style={{ opacity: hoverStates[index] ? 1 : 0 }}
              />
              <img
                className="img"
                src={box.img}
                alt=""
                style={{ opacity: hoverStates[index] ? 0 : 1 }}
              />
              <video autoPlay loop muted src={box.video}></video>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Page3;

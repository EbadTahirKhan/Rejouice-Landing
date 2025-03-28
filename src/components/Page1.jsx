import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Cursor from "./Cursor";

const Page1 = () => {
  const lettersRef = useRef([]);

  useEffect(() => {
    const tl = gsap.timeline();

    const isMobile = window.innerWidth < 500;

    if (!isMobile) {
      tl.to(`#page1-content h1 span`, {
        y: 90,
        opacity: 0,
      }),
        tl.to(`#page1-content h1 span`, {
          y: 10,
          opacity: 1,
          stagger: 0.05,
          delay: 0,
        });
    } else {
      tl.to(`#page1-content h1 span`, {
        x: (index) => (index % 2 ? -(index + 1) * 75 : (index + 1) * 75),
        y: (index) => (index % 2 ? (index + 1) * 110 : -(index + 1) * 110),
        opacity: 0,
      }),
        tl.to(`#page1-content h1 span`, {
          x: 0,
          y: 0,
          opacity: 1,
          stagger: (index) => index * 0.07,
          delay: 0,
        });
    }
  }, []);

  return (
    <div id="page1">
      <Cursor text="Play Reel" />
      <video autoPlay loop muted src="/assets/videos/bg-video.mp4"></video>
      <div id="page1-content">
        <nav>
          <h3>The Venture Agency.</h3>
          <h4>Menu</h4>
        </nav>
        <h1 ref={lettersRef}>
          {["r", "e", "J", "o", "u", "i", "c", "e"].map((letter, i) => (
            <span key={i}>{letter}</span>
          ))}
        </h1>
      </div>
    </div>
  );
};

export default Page1;

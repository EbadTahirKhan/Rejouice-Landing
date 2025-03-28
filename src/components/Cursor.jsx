import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const Cursor = ({ text }) => {
  const cursorRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const targetElement = text === "Play Reel" ? "#page1-content" : "#page4";

    const element = document.querySelector(targetElement);

    const handleMouseMove = (e) => {
      gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
      });
    };

    const handleMouseEnter = () => {
      gsap.to(cursor, {
        scale: 1,
        opacity: 1,
      });
    };

    const handleMouseLeave = () => {
      gsap.to(cursor, {
        scale: 0,
        opacity: 0,
      });
    };

    element.addEventListener("mousemove", handleMouseMove);
    element.addEventListener("mouseenter", handleMouseEnter);
    element.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      element.removeEventListener("mousemove", handleMouseMove);
      element.removeEventListener("mouseenter", handleMouseEnter);
      element.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [text]);

  return (
    <div id={text === "Play Reel" ? "cursor" : "cursor2"} ref={cursorRef}>
      <p>{text}</p>
    </div>
  );
};

export default Cursor;

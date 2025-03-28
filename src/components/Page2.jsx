import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Page2 = () => {
  const h1ElementsRef = useRef([]);

  gsap.registerPlugin(ScrollTrigger);
  useEffect(() => {
    const tl = gsap.timeline();
    tl.to(".elem h1 ", {
      y: 120,
      delay: 0,
    });
    gsap.to(".elem h1", {
      y: 0,
      stagger: 0.5,
      duration: 2,
      scrollTrigger: {
        trigger: "#page2-top",
        scroller: "body",
        start: "top 57%",
        end: "top 10%",
        toggleActions: "play none play reverse",
        scrub: 2,
        // markers: true,
      },
    });
  }, []);

  return (
    <div id="page2">
      <div id="page2-top">
        <h3>Strategy. Design. Development. Two engagement models.</h3>
        <h4>Paris/San Diego</h4>
      </div>
      <div className="elem">
        {[
          "    ",
          "We are a brand accelerator for fast-growing",
          "companies. Our mission is to transform founders'",
          "visions into remarkable brands. Choose",
          "traditional compensation or an equity offset of up",
          "to 50% of our fees through our Venture Model—",
          "your vision, your decision. In any case, we",
          "are your new unfair advantage.",
        ].map((line, i) => (
          <h1 key={i} ref={(el) => (h1ElementsRef.current[i] = el)}>
            {line}
          </h1>
        ))}
      </div>
    </div>
  );
};

export default Page2;

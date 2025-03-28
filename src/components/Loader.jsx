import { useEffect, useState } from "react";
import { gsap } from "gsap";

const Loader = ({ LoaderCompletion }) => {
  useEffect(() => {
    const tl = gsap.timeline();
    tl.to("#loader h4", {
      x: 20,
      opacity: 0,
      duration: 0.01,
      delay: -1,
      stagger: 0.05,
    });
    tl.to("#loader h4", {
      x: 0,
      opacity: 1,
      duration: 0.5,
      delay: 1,
      stagger: 0.05,
    })
      .to("#loader h4", {
        opacity: 0,
        x: -15,
        duration: 0.5,
        stagger: 0.05,
      })
      .to("#loader", {
        opacity: 0,
      })
      .to("#loader", {
        display: "none",
        onComplete: () => {
          LoaderCompletion(true);
        },
      });
  }, []);

  return (
    <div id="loader">
      <h4>Tomorrow's</h4>
      <h4>Brands,</h4>
      <h4>Today.©</h4>
    </div>
  );
};

export default Loader;

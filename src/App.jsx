import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import LocomotiveScroll from 'locomotive-scroll'
import Loader from './components/Loader'
import Page1 from './components/Page1'
import Page2 from './components/Page2'
import Page3 from './components/Page3'
import Page4 from './components/Page4'

function App() {
  const containerRef = useRef(null);
  const [loaderCompletion, setLoaderCompletion] = useState(false);
  const locoScrollRef = useRef(null);

  useEffect(() => {
    if (!loaderCompletion) return;

    gsap.registerPlugin(ScrollTrigger);
    
    locoScrollRef.current = new LocomotiveScroll({
      el: containerRef.current,
      smooth: true
    });

    // Update ScrollTrigger when LocomotiveScroll updates
    locoScrollRef.current.on('scroll', ScrollTrigger.update);

    // Sync ScrollTrigger with LocomotiveScroll
    ScrollTrigger.scrollerProxy(containerRef.current, {
      scrollTop(value) {
        return arguments.length 
          ? locoScrollRef.current.scrollTo(value, 0, 0) 
          : locoScrollRef.current.scroll.instance.scroll.y;
      },
      getBoundingClientRect() {
        return {
          top: 0,
          left: 0,
          width: window.innerWidth,
          height: window.innerHeight
        };
      },
      pinType: containerRef.current.style.transform ? "transform" : "fixed"
    });

    // Cleanup
    return () => {
      if (locoScrollRef.current) {
        locoScrollRef.current.destroy();
      }
      ScrollTrigger.addEventListener('refresh', () => locoScrollRef.current?.update());
      ScrollTrigger.refresh();
    };
  }, [loaderCompletion]);

  return (
    <div className="App">
      {loaderCompletion ? (
        <div id="main" ref={containerRef}>
          <Page1 />
          <Page2 />
          <Page3 />
          <Page4 />
        </div>
      ) : (
        <Loader LoaderCompletion={setLoaderCompletion} />
      )}
    </div>
  )
}

export default App
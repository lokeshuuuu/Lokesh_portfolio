import { useEffect, useState } from 'react';
import ScrollReveal from 'scrollreveal';
import './About.css';

import SwordBladeCanvas from '../Components/SwordBlade';

const About = () => {
  const [isDark, setIsDark] = useState(true);
  useEffect(() => {
  const interBubble = document.querySelector('.interactive');
  let curX = 0;
  let curY = 0;
  let tgX = 0;
  let tgY = 0;

  function move() {
    curX += (tgX - curX) / 20;
    curY += (tgY - curY) / 20;
    if (interBubble) {
      interBubble.style.transform = `translate(${Math.round(curX)}px, ${Math.round(curY)}px)`;
    }
    requestAnimationFrame(move);
  }

  window.addEventListener('mousemove', (event) => {
    tgX = event.clientX;
    tgY = event.clientY;
  });

  move();

  return () => {
    window.removeEventListener('mousemove', () => {});
  };
}, []);


  useEffect(() => {
    const checkTheme = () => {
      setIsDark(document.documentElement.classList.contains('dark'));
    };

    checkTheme();

    const observer = new MutationObserver(checkTheme);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class'],
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    ScrollReveal().reveal('.about-title', {
      delay: 200,
      distance: '50px',
      origin: 'bottom',
      opacity: 0,
      easing: 'ease-in-out'
    });
    ScrollReveal().reveal('.about-text', {
      delay: 400,
      distance: '50px',
      origin: 'bottom',
      opacity: 0,
      easing: 'ease-in-out',
      interval: 200
    });
  }, []);

  return (
    <section id="about" className={`about ${isDark ? 'about-dark' : 'about-light'}`}>
   <div className="gradient-bg">
  <svg xmlns="http://www.w3.org/2000/svg">
    <defs>
      <filter id="goo">
        <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
        <feColorMatrix
          in="blur"
          mode="matrix"
          values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8"
          result="goo"
        />
        <feBlend in="SourceGraphic" in2="goo" />
      </filter>
    </defs>
  </svg>
  <div className="gradients-container">
    <div className="g1"></div>
    <div className="g2"></div>
    <div className="g3"></div>
    <div className="g4"></div>
    <div className="g5"></div>
    <div className="interactive"></div>
  </div>
</div>

      <div className="about-content-wrapper">
        <div className="about-container">
          <h2 className="about-title">About Me</h2>
          <p className={`about-text ${isDark ? 'about-text-dark' : 'about-text-light'}`}>
            I’m Lokeshwar, a developer who loves blending design and code to craft elegant user experiences.
          </p>
          <p className={`about-text ${isDark ? 'about-text-dark' : 'about-text-light'}`}>
            My focus is on modern frontend frameworks like React, and I explore 3D UI/UX using Three.js.
          </p>
        </div>

        <div className="about-empty-container">
          <SwordBladeCanvas />
        </div>
      </div>
    </section>
  );
};

export default About;

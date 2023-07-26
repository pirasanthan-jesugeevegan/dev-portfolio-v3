import React from 'react';
import AnimatedHeroText from '../components/AnimatedHeroText';
import '../styles/globals.css';

function Hero() {
  return (
    <section
      id="hero"
      className="container grid grid-cols-1 my-10 md:grid-cols-2"
    >
      <div className="relative pt-24 pb-14 max-md:px-4">
        <div className="absolute inset-y-0 right-0 w-full rounded-lg md:w-screen bg-secondary-shaded"></div>
        <AnimatedHeroText />
      </div>
      <div></div>
    </section>
  );
}
export default Hero;

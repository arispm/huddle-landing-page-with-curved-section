import React from 'react';
import Header from './Header';
import Hero from './Hero';
import Feature from './Feature';
import Footer from './Footer';

const Container = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Feature />
      </main>
      <Footer />
    </>
  );
};

export default Container;

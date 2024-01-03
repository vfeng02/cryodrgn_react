import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='/videos/cryodrgn-video.mov' autoPlay loop muted />
      <h1>cryoDRGN</h1>
      <p>Deep neural networks for continuous heterogeneous cryo-EM reconstruction.</p>
      <div className='hero-btns'>
        {/* <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          GET STARTED
        </Button> */}
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          path='https://github.com/zhonge/cryodrgn'
        >
          SOFTWARE
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;

import React from 'react';
import './Cards.css';
import CardItem from './CardItem';
import { Button } from './Button';

function Cards() {
  return (
    <section id='manuscript'>
    <div className='cards'>
          <h1>Manuscript</h1>
          <div className='cards__container'>
            <div className='cards__wrapper'>
              <ul className='cards__items'>
                <CardItem
                  src='images/spliceosome.gif'
                  text='CryoDRGN: Reconstruction of heterogeneous cryo-EM structures using neural networks. Nature Methods 2021.'
                  label='Ellen D. Zhong, Tristan Bepler, Bonnie Berger*, Joseph H Davis*'
                  path='https://doi.org/10.1038/s41592-020-01049-4'
                />
                <CardItem
                  src='images/cryodrgn_iclr.png'
                  text='Reconstructing continuous distributions of 3D protein structure from cryo-EM images. ICLR 2020.'
                  label='Ellen D. Zhong, Tristan Bepler, Joseph H. Davis*, Bonnie Berger*'
                  path='https://arxiv.org/abs/1909.05215'
                />
              </ul>
            </div>
          </div>
    </div>
    </section>
  );
}

export default Cards;

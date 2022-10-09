import React from 'react'
import './Stars.scss';
import Hero from '../../components/Hero/Hero';
import Cataclysmic from '../../components/Cataclysmic/Cataclysmic';
import Cepheids from '../../components/Cepheids/Cepheids';
import LightCurves from '../../components/LightCurves/LightCurves';

const HomePage = () => {
  return (
    <>
    <Hero />
    <Cataclysmic />
    <Cepheids />
    <LightCurves />
    </>
  )
}

export default HomePage
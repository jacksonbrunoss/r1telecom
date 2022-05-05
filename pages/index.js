import styled from '../styles/Home.module.css'

import Hero from '../components/Hero';
import Plan from '../components/Plan';
import BoxRural from '../components/BoxRural';

export default function Home() {
  return (
    <>
      <Hero />
      <div className={styled.Line}></div>
      <Plan />
      <BoxRural />
    </>
  )
}

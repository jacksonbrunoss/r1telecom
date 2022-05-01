import styled from '../styles/Home.module.css'

import Hero from '../components/Hero';

export default function Home() {
  return (
    <>
      <Hero />
      <div className={styled.Line}></div>
    </>
  )
}

import styled from '../styles/Home.module.css'

import Hero from '../components/Hero';
import Plan from '../components/Plan';
import BoxRural from '../components/BoxRural';
import BlogHome from '../components/BlogHome';
import Clientes from '../components/Clientes';

export default function Home() {
  return (
    <>
      <Hero />
      <div className={styled.Line}></div>
      <Plan />
      <BoxRural />
      <BlogHome />
      <Clientes />
      <div className={styled.Content}>
        <h3>Você ainda tem dúvidas? Vamos te ajudar</h3>
        <p>Confira nossos vídeos e saiba como ter a melhor experiência com os nossos serviços.</p>
      </div>
      <div className={styled.Line}></div>
    </>
  )
}

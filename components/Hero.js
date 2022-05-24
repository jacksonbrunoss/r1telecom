import styled from '../styles/Hero.module.css'

import Button from './Button';
import Image from 'next/image';

export default function Hero() {
  return (
    <div className={styled.HeroWrapper}>
      <div className={styled.HeroContainer}>
        <div className={styled.HeroInfo}>
          <h1>
            O mundo mais perto, rápido e conectado com você
          </h1>
          <p>
            Velocidade é tudo, seja nosso cliente e aproveite a melhor internet banda larga do medio parnaiba.
          </p>
          <Button go="/assinatura" info="Assine Agora" />
        </div>
        <div className={styled.ImgHero}>
          <Image src="/imghero.svg" width="400" height="400" alt="" />
        </div>
      </div> 
    </div>
  )
}
import styled from '../styles/Hero.module.css'

import Button from './Button';
import Image from 'next/image';

const link = "https://api.whatsapp.com/send?phone=558695095492&text=Ol%C3%A1%2C%20gostaria%20de%20assinar%20um%20novo%20plano%20com%20a%20R1%20Telecom%20%F0%9F%A4%A9"

export default function Hero() {
  return (
    <div className={styled.HeroWrapper}>
      <div className={styled.HeroContainer}>
        <div className={styled.HeroInfo}>
          <h1>
          O melhor provedor de internet focado na zona rural do médio Parnaíba.
          </h1>
          <p>
            Velocidade é tudo, seja nosso cliente e aproveite a melhor internet banda larga do médio Parnaíba.
          </p>
          <Button go={link} info="Assine Agora" />
        </div>
        <div className={styled.ImgHero}>
          <Image src="/Brand-hero.png" width="300" height="250" alt="" />
        </div>
      </div> 
    </div>
  )
}
import styled from '../styles/BlogHome.module.css';

import Image from 'next/image';
import Button from '../components/Button'

export default function BlogHome() {
  return (
    <div className={styled.BlogHomeWrapper}>
      <div className={styled.BlogHomeContainer}>
        <div className={styled.BlogHomeTitle}>
          <h2>
            Acompanhe nosso blog e mergulhe no universo R1 Telecom
          </h2>
          <p>
            Dicas, novidades e conteúdos exclusivos para levar informação e a melhor experiência para você.
          </p>
        </div>
        <div className={styled.BlogHomeContent}>
          <div className={styled.BlogHomeBoxes}>
            <div className={styled.BlogHomeCard}>
              <div>
                <Image src="/bg-box.jpg" width="300" height="250" alt="logo" />
              </div>
              <div className={styled.BlogHomeCardTitle}>
                <h4>5 series para assistir na netflix.</h4>
              </div>
              <div className={styled.BlogHomeCardDescription}>
                <p>Super dicas de series para você e sua familia maratona</p>
              </div>
            </div>
            <div className={styled.BlogHomeCard}>
              <div>
                <Image src="/bg-box.jpg" width="300" height="250" alt="logo" />
              </div>
              <div className={styled.BlogHomeCardTitle}>
                <h4>5 series para assistir na netflix.</h4>
              </div>
              <div className={styled.BlogHomeCardDescription}>
                <p>Super dicas de series para você e sua familia maratona</p>
              </div>
            </div>
            <div className={styled.BlogHomeCard}>
              <div>
                <Image src="/bg-box.jpg" width="300" height="250" alt="logo" />
              </div>
              <div className={styled.BlogHomeCardTitle}>
                <h4>5 series para assistir na netflix.</h4>
              </div>
              <div className={styled.BlogHomeCardDescription}>
                <p>Super dicas de series para você e sua familia maratona</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className={styled.BlogHomeAction}>
          <Button go="/blog" info="Carregar mais conteúdo" />
        </div>
      </div>
    </div>
  )
}
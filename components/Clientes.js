import styled from '../styles/Clientes.module.css';

import Image from 'next/image';

export default function Clientes() {
  return (
    <div className={styled.ClientesWrapper}>
      <div className={styled.ClientesContainer}>
        <div className={styled.ClientesTitle}>
          <h2>O que falam nossos clientes</h2>
          <p>Veja os depoimentos de quem já vive em alta velocidade e aproveita a internet com o melhor custo-benefício do mercado.</p>
        </div>
        <div className={styled.ClientesContent}>
          <div className={styled.ClientesCard}>
            <div className={styled.ClientesCardAvatar}>
              <Image src="/c2.jpg" width="100"  height="100" alt="Marta Rocha" />
            </div> 
            <div className={styled.ClientesCardName}>
              <p>Marta Rocha</p>
            </div>
            <div className={styled.ClientesCardIcon}>
              <Image src="/cite.svg" width="50"  height="50" alt="icon" />
            </div>
            <div className={styled.ClientesCardComent}>
              <p>&quot;Sou cliente da R1 Telecom e não tenho intenção de mudar. É o melhor provedor em todos os quesitos, da estabilidade e velocidade da internet ao atendimento e suporte oferecido.&quot;</p>
            </div>
          </div>
          <div className={styled.ClientesCard}>
            <div className={styled.ClientesCardAvatar}>
              <Image src="/avatarclient.png" width="100"  height="100" alt="sds" />
            </div> 
            <div className={styled.ClientesCardName}>
              <p>Jackson Bruno</p>
            </div>
            <div className={styled.ClientesCardIcon}>
              <Image src="/cite.svg" width="50"  height="50" alt="" />
            </div>
            <div className={styled.ClientesCardComent}>
              <p>&quot;O melhor provedor de internet que já contratei, até hoje nunca tive problemas.&quot;</p>
            </div>
          </div>
          <div className={styled.ClientesCard}>
            <div className={styled.ClientesCardAvatar}>
              <Image src="/c3.jpg" width="100"  height="100" alt="sds" />
            </div> 
            <div className={styled.ClientesCardName}>
              <p>João Vitor</p>
            </div>
            <div className={styled.ClientesCardIcon}>
              <Image src="/cite.svg" width="50"  height="50" alt="" />
            </div>
            <div className={styled.ClientesCardComent}>
              <p>&quot;O melhor provedor de internet que já contratei, até hoje nunca tive problemas.&quot;</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
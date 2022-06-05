import styled from '../styles/Plan.module.css';

import Button from './Button'

const radio = [
  {
    id: 1,
    megas: 30,
    infos: [
      "MEGA DE DOWNLOAD",
      "MEGA DE UPLOAD",
      "SUPORTE"
    ],
    preco: 100.00,
  },
  {
    id: 2,
    megas: 50,
    infos: [
      "MEGA DE DOWNLOAD",
      "MEGA DE UPLOAD",
      "SUPORTE"
    ],
    preco: 106.00,
  }
]

const fibra = [
  {
    id: 1,
    megas: 120,
    infos: [
      "MEGA DE DOWNLOAD",
      "MEGA DE UPLOAD",
      "WIFI ULTRA",
      "FIBRA ÓPTICA",
      "SUPORTE"
    ],
    preco: 100.00,
  },
  {
    id: 2,
    megas: 220,
    infos: [
      "MEGA DE DOWNLOAD",
      "MEGA DE UPLOAD",
      "WIFI ULTRA",
      "FIBRA ÓPTICA",
      "SUPORTE"
    ],
    preco: 106.00,
  },
  {
    id: 3,
    megas: 320,
    infos: [
      "MEGA DE DOWNLOAD",
      "MEGA DE UPLOAD",
      "WIFI ULTRA",
      "FIBRA ÓPTICA",
      "SUPORTE"
    ],
    preco: 115.00,
  },
  {
    id: 4,
    megas: 450,
    infos: [
      "MEGA DE DOWNLOAD",
      "MEGA DE UPLOAD",
      "WIFI ULTRA",
      "FIBRA ÓPTICA",
      "SUPORTE"
    ],
    preco: 125.00,
  }
]

const link = "https://api.whatsapp.com/send?phone=558695095492&text=Ol%C3%A1%2C%20gostaria%20de%20assinar%20um%20novo%20plano%20com%20a%20R1%20Telecom%20%F0%9F%A4%A9"
export default function Plan() {
  return (
    <div className={styled.PlanWrapper}>
      <div className={styled.PlanContainer}>
        <div className={styled.PlanTitle}>
            <h2>Planos para você curtir por inteiro</h2>
              <p>
                Alta performance para usar o wifi em seus dispositivos
              </p>  
        </div>
        <div data-aos="zoom-out-up" className={styled.PlanContent}>
            { fibra.map((dado) => 
              <div key={dado.id} className={styled.PlanCard}>
                <div  className={styled.PlanCardTitle}>
                  <h3>{dado.megas} MEGAS</h3>
                </div>
                <div className={styled.PlanCardContent}>
                  <ul>
                    <li>{dado.megas} {dado.infos[0]}</li>
                    <li>{dado.megas} {dado.infos[1]}</li>
                    <li>{dado.infos[2]}</li>
                    <li>{dado.infos[3]}</li>
                    <li>{dado.infos[4]}</li>
                  </ul>
                  <p>R$ {dado.preco},00</p>
                </div>
                <div className={styled.PlanCardAction}>
                  <Button go={link} info="Assinar Agora" />
                </div>
              </div>
              )
            }
          </div>
          <div className={styled.PlanContent}>
            { radio.map((dadoR) => 
              <div key={dadoR.id} className={styled.PlanCard}>
                <div  className={styled.PlanCardTitle}>
                  <h3>{dadoR.megas} MEGAS RADIO</h3>
                </div>
                <div className={styled.PlanCardContent}>
                  <ul>
                    <li>{dadoR.megas} {dadoR.infos[0]}</li>
                    <li>{dadoR.megas} {dadoR.infos[1]}</li>
                    <li>{dadoR.infos[2]}</li>
                    <li>{dadoR.infos[3]}</li>
                    <li>{dadoR.infos[4]}</li>
                  </ul>
                  <p>R$ {dadoR.preco},00</p>
                </div>
                <div className={styled.PlanCardAction}>
                  <Button go={link} info="Assinar Agora" />
                </div>
              </div>
              )
            }
          </div>
          <div className={styled.PlanActions}>
          <Button go={link} info="Central do cliente" />
          <Button go="https://fast.com/pt/" info="teste de velocidade" />
        </div>
        </div>
        
      </div>
  )
}
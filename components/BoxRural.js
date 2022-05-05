import styled from '../styles/BoxRural.module.css'

import Image from 'next/image'

export default function BoxRural() {
  return (
    <div className={styled.BoxRuralwrapper}>
      <div className={styled.BoxRuralContainer}>
        <div className={styled.BoxRuralTitle}>
          <h2>
          Oferecemos vantagens e benefícios aos nossos Clientes, sua satisfação é o que nos move a cada dia.
          </h2>
        </div>
        <div className={styled.BoxRuralContent}>
          <div className={styled.BoxRuralContentBoxes}>
            <div className={styled.BoxRuralBox}>
              <span>Equipe</span>
              <p>
                Equipe de Suporte qualificada para respostas rápidas.
              </p>
            </div>
            <div className={styled.BoxRuralBox}>
              <span>Satisfação Garantida</span>
              <p>
                Qualidade no Atendimento com foco nos indicadores de satisfação do cliente
              </p>
            </div>
            <div className={styled.BoxRuralBox}>
              <span>Confiança</span>
              <p>
                Com uma política de segurança em constante aperfeiçoamento, você navega tranquilo e seguro.
              </p>
            </div>
            <div className={styled.BoxRuralBox}>
              <span>Estabilidade</span>
              <p>
                Sempre buscando utilizar o que há de melhor em equipamentos e soluções para lhe proporcionar uma navegação rápida e estável.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
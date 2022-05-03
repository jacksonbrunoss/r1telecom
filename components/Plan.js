import styled from '../styles/Plan.module.css';

import Button from './Button'

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
        <div className={styled.PlanContent}>
          <div className={styled.PlanCard}>
            <div className={styled.PlanCardTitle}>
              <h3>300 MEGAS</h3>
            </div>
            <div className={styled.PlanCardContent}>
              <ul>
                <li>300 Mega de Download</li>
                <li>300 Mega de Upload</li>
                <li>Wifi Ultra</li>
                <li>Fibra Óptica</li>
              </ul>
              <p>R$ 90,00</p>
            </div>
            <div className={styled.PlanCardAction}>
              <Button go="/" info="Assinar Agora" />
            </div>
          </div>
          <div className={styled.PlanCard}>
            <div className={styled.PlanCardTitle}>
              <h3>300 MEGAS</h3>
            </div>
            <div className={styled.PlanCardContent}>
              <ul>
                <li>300 Mega de Download</li>
                <li>300 Mega de Upload</li>
                <li>Wifi Ultra</li>
                <li>Fibra Óptica</li>
              </ul>
              <p>R$ 90,00</p>
            </div>
            <div className={styled.PlanCardAction}>
              <Button go="/" info="Assinar Agora" />
            </div>
          </div>
          <div className={styled.PlanCard}>
            <div className={styled.PlanCardTitle}>
              <h3>300 MEGAS</h3>
            </div>
            <div className={styled.PlanCardContent}>
              <ul>
                <li>300 Mega de Download</li>
                <li>300 Mega de Upload</li>
                <li>Wifi Ultra</li>
                <li>Fibra Óptica</li>
              </ul>
              <p>R$ 90,00</p>
            </div>
            <div className={styled.PlanCardAction}>
              <Button go="/" info="Assinar Agora" />
            </div>
          </div>
        </div>
        <div className={styled.PlanActions}>
          <Button go="/" info="Central do cliente" />
          <Button go="https://fast.com/pt/" info="teste de velocidade" />
        </div>
      </div>
    </div>
  )
}
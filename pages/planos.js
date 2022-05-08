import styled from '../styles/PlanosPage.module.css'
import { GrAed, GrDeploy, GrGroup } from "react-icons/gr";

import Plan from '../components/Plan'

export default function Planos() {
  return (
    <section className={styled.PlanosPage}>
      <header className={styled.PlanosPageHeader}>
        <div className={styled.PlanosPageContainer}>
          <div className={styled.PlanosPageTitle}>
            <h1>
              Conexão e qualidade para você fazer o que gosta
            </h1>
            <p>
              Soluções para navegar com rapidez e segurança em todos os momentos sem preocupação.
            </p>
          </div>
          <div className={styled.PlanosPageCards}>
            <div className={styled.PlanosPageCard}>
                <div className={styled.Icon}><GrDeploy /></div>
                <h4>Plano</h4>
                <strong>TURBINADOS</strong>
            </div>
            <div className={styled.PlanosPageCard}>
                <div className={styled.Icon}><GrAed /></div>
                <h4>Plano</h4>
                <strong>ILIMITADOS</strong>
            </div>
            <div className={styled.PlanosPageCard}>
                <div className={styled.Icon}><GrGroup /></div>
                <h4>Plano</h4>
                <strong>FAMÍLIA CONECTADA</strong>
            </div>
          </div>
        </div>
      </header>
      <Plan />
    </section>
  )
}
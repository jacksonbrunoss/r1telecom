import styled from '../styles/AboutPage.module.css';
import Image from 'next/image';
import Button from '../components/Button';

export default function Sobre() {
  return (
    <article className={styled.AboutPage}>
      <div className={styled.BannerAboutImage}>
        <div className={styled.BannerAbout}>
          <div className={styled.BannerAboutBox}>
            <h3>Sua internet mais perto de você</h3>
            <p>Conexão para todas as horas e soluções para toda a família com segurança e qualidade.</p> 
          </div>
        </div>
      </div>
      <div className={styled.AboutInfo}>
          <h4>
            Nós somos a R1 Telecom
          </h4>
          <p>
            Vivemos numa era hiperconectada. Nela, podemos encontrar tudo o que desejamos com apenas um clique ou um toque, através da internet. É para aproximar você de tudo o que você deseja que a R1 Telecom está nascendo, trazendo soluções inovadoras capazes de transformar sua vida para melhor. Sempre com a maior atenção, dedicação, qualidade e presteza. Valorizamos a inovação, as mais modernas tecnologias, a transformação digital que muda realidades com a maior velocidade. Isso tudo sem esquecer de valorizar as pessoas, afinal é com elas, por elas e para elas que tudo faz sentido, nos levando a querer ir além todos os dias.
          </p>
      </div>
      <div className={styled.AboutDesc}>
            <div className={styled.AboutDescBox}>
              <h4>Missão</h4>
              <p>Prover aos clientes acesso a internet com qualidade. Estar em constante aprimoramento e comercializar soluções tecnológicas. Contribuir para o sucesso de pessoas e empresas por meio do nosso trabalho e a partir disso ser referência na área em que atuamos.</p>
            </div>
          <div className={styled.AboutDescBox}>
            <h4>Visão</h4>
            <p>A partir do nosso serviço, buscamos destacar nossa marca no mercado e sermos considerados sinônimo de qualidade pelos nossos clientes. Temos como filosofia principal o respeito e a transparência para com as pessoas, fornecendo produtos e serviços de qualidade, tornando-se um parceiro em relação às questões tecnológicas.</p>
          </div>
          <div className={styled.AboutDescBox}>
            <h4>Valores</h4>
            <p> Ética, comprometimento e credibilidade.
                Valorização humana, sustentabilidade, qualidade e agilidade de nossos serviços e integridade com todos os públicos.</p>
          </div>
      </div>
      <div className={styled.AboutPlanos}>
        <div className={styled.AboutPlanosBox}>
          <h4>Contrate nossos serviços</h4>
          <p>Venha aproveitar as melhores soluções para você se conectar com o mundo.</p>
          <Button info="Assine Agora" go="/planos" />
        </div>
      </div>
    </article>
  )
}
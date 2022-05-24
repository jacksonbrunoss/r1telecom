import styled from "../styles/Footer.module.css";
import Link from "next/link";
import Image from "next/image";
import { 
  BsWhatsapp, 
  BsInstagram, 
} from "react-icons/bs";

export default function Footer() {
  return (
    <footer className={styled.Footer}>
      <div className={styled.ContentFooter}>
        <div className={styled.CaseFooter}>
          <div className={styled.Box}>
            <article className={styled.MiniAbout}>
              <div className={styled.ImgMiniAbout}>
                <Image src="/brand.svg" width="100" height="100" alt="Logo" />
              </div>
              <p>
              A R1 Telecom conecta você a um mundo de possibilidades, oferecendo o melhor serviço de internet. Estude, trabalhe, assista, jogue, encontre a sua diversão e se aproxime muito mais dos seus sonhos. A  R1 Telecom te leva além!
              </p>
            </article>
          </div>
          <div className={styled.Box}>
            <article className={styled.MiniContato}>
              <h3>Contato</h3>
              <p>Rua Nome da rua N° 000 Centro – Amarante - Pi, Brasil, 64400-000 <br /> contato@r1telecom.com.br</p>
              <h4>Nossa Redes</h4>
              <ul>
                <li><Link href="https://api.whatsapp.com/send?phone=5586995095492&text=Ol%C3%A1!%20Eu%20estava%20no%20site%20e%20tenho%20uma%20d%C3%BAvida..."><a><BsWhatsapp /></a></Link></li>
                <li><Link href="https://www.instagram.com/r1telecom/"><a><BsInstagram /></a></Link></li>
              </ul>
            </article>
          </div>
          <div className={styled.Box}>
            <article className={styled.Anatel}>
              <h3>Autorizado por:</h3>
              <div className={styled.ImgAnatel}>
                <Image src="/box.svg" width="150" height="150" alt="Logo" />
              </div>
            </article>
          </div>
        </div>
        
      </div>
      <div className={styled.Copy}>
         2022 R1 Telecom &copy; - Todos os Direitos Reservados. Desenvolvimento | <Link href="https://youthful-snyder-38a835.netlify.app/"><a>Jackson Bruno</a></Link>
        </div>
    </footer>
  )
}
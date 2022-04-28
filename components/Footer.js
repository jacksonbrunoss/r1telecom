import styled from "../styles/Footer.module.css";
import Link from "next/link";
import Image from "next/image";
//import 'boxicons'

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
              A R1 Telecom conecta você a um mundo de possibilidades, oferecendo o melhor serviço de internet. Estude, trabalhe, assista, jogue, encontre a sua diversão e se aproxxime muito mais dos seus sonhos. A  R1 Telecom te leva além!
              </p>
            </article>
          </div>
          <div className={styled.Box}>
            <article className={styled.MiniContato}>
              <h3>Contato</h3>
              <p>Rua Nome da rua N° 000 Centro – Amarante - Pi, Brasil, 64400-000 <br /> contato@r1telecom.com.br</p>
              <h4>Nossa Redes</h4>
              <ul>
                <li><Link href="/"><a><box-icon color="#fff" type='logo' name='whatsapp'></box-icon></a></Link></li>
                <li><Link href="/"><a><box-icon color="#fff" className="pin" type='logo' name='instagram'></box-icon></a></Link></li>
              </ul>
            </article>
          </div>
          <div className={styled.Box}>
            <article className={styled.Anatel}>
              <h3>Autorizado por:</h3>
              <div className={styled.ImgAnatel}>
                <Image src="/box.svg" width="110" height="110" alt="Logo" />
              </div>
            </article>
          </div>
        </div>
        
      </div>
      <div className={styled.Copy}>
         2022 R1 Telecom &copy; - Todos os Direitos Reservados. Desenvolvimento | Jackson Bruno
        </div>
    </footer>
  )
}
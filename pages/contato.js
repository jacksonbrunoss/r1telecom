import emailjs from 'emailjs-com';

import { BsWhatsapp, BsFacebook, BsInstagram } from "react-icons/bs";
import Input from '../components/Input';
import Textarea from "../components/Textarea";
import Link from 'next/link';

import styled from '../styles/ContatoPage.module.css';


export default function Contato() {
  function sendEmail() {
    alert("Funcionando.")
  }
  return (
    <section className={styled.ContatoWrapper}>
      <div className={styled.ContatoTitle}>
          <h1>Entre em contato</h1>
          <p>Fale com a gente, deixe sua mensagem e responderemos prontamente.</p>
        </div>
      <div className={styled.ContatoContainer}>
        <div className={styled.ContatoContainerBox}>
          <div className={styled.ContatoInfoContato}>
            <div className={styled.InfoContato}>
              <h3>Contate por outros canais</h3>
              <p>Rua São Benedito, Centro, n° 92, Amarante - Piauí, Brasil, 64400-000</p>
              <h3>E-mail</h3>
              <p>r1telecom21@gmail.com</p>
              <h3>Telefone</h3>
              <p>86 9546-2851</p>
              <h3>Redes Sociais</h3>
              <ul>
                <li><Link href="https://api.whatsapp.com/send?phone=5586995095492&text=Ol%C3%A1!%20Eu%20estava%20no%20site%20e%20tenho%20uma%20d%C3%BAvida..."><a><BsWhatsapp /></a></Link></li>
                <li><Link href="https://www.facebook.com/r1telecompi"><a><BsFacebook /></a></Link></li>
                <li><Link href="https://www.instagram.com/r1telecom/"><a><BsInstagram /></a></Link></li>
              </ul>
            </div>
          </div>
          <div className={styled.ContatoForm}>
            <form onSubmit={sendEmail} className={styled.FormContato}>
              <fieldset>
                <Input 
                  name="nome" 
                  type="text" 
                  desc="Nome"
                />
                <Input 
                  name="email" 
                  type="mail" 
                  desc="E-mail"
                />
                <Input 
                  name="assunto" 
                  type="text" 
                  desc="Assunto"
                />
                <Textarea 
                  name="messagem"
                  type="text"
                  desc="Messagem"  
                />
                <input className={styled.BtnForm} type="submit" value="Enviar Menssagem" />
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
import emailjs from 'emailjs-com';

import { BsWhatsapp, BsFacebook, BsInstagram } from "react-icons/bs";
import Input from '../components/Input';
import Textarea from "../components/Textarea";
import Button from '../components/Button';
import Link from 'next/link';

import styled from '../styles/ContatoPage.module.css';


export default function Contato() {
  function sendEmail() {
    
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
              <p>Rua Nome da rua N° 000 Centro – Amarante - Pi, Brasil, 64400-000</p>
              <h3>E-mail</h3>
              <p>falecom@r1telecom.net</p>
              <h3>Telefone</h3>
              <p>0800 083 1155</p>
              <h3>Redes Sociais</h3>
              <ul>
                <li><Link href="/"><a><BsWhatsapp /></a></Link></li>
                <li><Link href="/"><a><BsFacebook /></a></Link></li>
                <li><Link href="/"><a><BsInstagram /></a></Link></li>
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
                <input type="submit" value="Send" />
                <Button info="Enviar" go="/"/>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
import emailjs from 'emailjs-com';

import { BsWhatsapp, BsFacebook, BsInstagram } from "react-icons/bs";
import Input from '../components/Input';
import Textarea from "../components/Textarea";
import Link from 'next/link';

import styled from '../styles/ContatoPage.module.css';


const link = "https://api.whatsapp.com/send?phone=558695095492&text=Ol%C3%A1%2C%20gostaria%20de%20assinar%20um%20novo%20plano%20com%20a%20R1%20Telecom%20%F0%9F%A4%A9"

export default function Contato() {
  const userID = process.env.REACT_APP_USER_ID;
  const templateID = process.env.REACT_APP_TEMPLATE_ID;
  const serviceID = process.env.REACT_APP_SERVICE_ID;

  function sendEmail(e) {
    e.preventDefault();

	emailjs.sendForm(
    serviceID,
    templateID,
    e.target,
    userID
	)
	.then((result) => {
	    console.log(result.text);
	  }, (error) => {
	console.log(error.text);
    });
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
                <li><Link href={link}><a><BsWhatsapp /></a></Link></li>
                <li><Link href="https://www.facebook.com/r1telecompi"><a><BsFacebook /></a></Link></li>
                <li><Link href="https://www.instagram.com/r1telecom/"><a><BsInstagram /></a></Link></li>
              </ul>
            </div>
          </div>
          <div className={styled.ContatoForm}>
            <form onSubmit={sendEmail} className={styled.FormContato}>
              <fieldset>
                <Input 
                  name="user_name" 
                  type="text" 
                  desc="Nome"
                />
                <Input 
                  name="user_email" 
                  type="mail" 
                  desc="E-mail"
                />
                <Input 
                  name="user_assunto" 
                  type="text" 
                  desc="Assunto"
                />
                <Textarea 
                  name="user_msg"
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
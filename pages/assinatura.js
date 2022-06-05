import React, {useState} from 'react';
import Link from 'next/link';
import styled from '../styles/Assinatura.module.css';

import Input from '../components/Input';

export default function Assinatura() {

  const [nome, setNome] = useState('');
  const [cpf, setCpf] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [district, setDistrict] = useState('');
  const [city, setCity] = useState('');
  const [plan, setPlan] = useState('');

  const changeForm = (e) => {
    e.preventDefault();
  }

  return (
    <section className={styled.WrapperAssinatura}>
      <div className={styled.TitleAssinatura}>
        <h1>Solicite agora sua assinatura</h1>
        <span><Link href="/"><a>Home</a></Link> / Nova assinatura</span>
      </div>
      <div className={styled.ContainerAssinatura}>
        <div className={styled.ContentAssinatura}>
          <h2>Quero assinar um plano com a R1 Telecom.</h2>
          <div className={styled.BoxForm}>
            <form className={styled.FormAssinatura} onSubmit={changeForm}>
              <fieldset>
                <Input desc="Nome Completo" type="text" name="nome" />
                <Input desc="CPF" type="text" name="cpf" />
                <Input desc="E-mail" type="mail" name="email" />
                <Input desc="Telefone/WhatsApp" type="text" name="tel" />
                <Input desc="Endereço/Comunidade" type="text" name="endereco" />
                <Input desc="Bairro" type="text" name="bairro" />
                <Input desc="Cidade" type="text" name="estado" />
                <label htmlFor="cars" className={styled.SelectFormLabel}>Escolha seu plano:</label>
                <select name="plans" id="cars" className={styled.SelectForm}>
                  <option value="120mb">120 MEGAS - R$ 100,00</option>
                  <option value="220mb">220 MEGAS - R$ 106,00</option>
                  <option value="320mb">320 MEGAS - R$ 115,00</option>
                  <option value="450mb">450 MEGAS - R$ 125,00</option>
                  <option value="30mb">30 MEGAS RADIO - R$ 100,00</option>
                  <option value="50mb">50 MEGAS RADIO - R$ 106,00</option>
                </select>
                <input type="submit" value="Enviar" className={styled.BtnForm} />
              </fieldset> 
            </form>
          </div>
        </div>
      </div>
    </section>
  ) 
}
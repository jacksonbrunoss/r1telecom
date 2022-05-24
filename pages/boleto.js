import React, {useState} from 'react';
import Link from 'next/link';
import styled from '../styles/Boleto.module.css';

import Input from '../components/Input';

export default function Boleto() {

  const changeForm = (e) => {
    e.preventDefault();
  }

  return (
    <section className={styled.WrapperBoleto}>
      <div className={styled.TitleBoleto}>
        <h1>Emitir Segunda Via</h1>
        <span><Link href="/"><a>Home</a></Link> / 2° Via do Boleto</span>
      </div>
      <div className={styled.ContainerBoleto}>
        <div className={styled.ContentBoleto}>
          <h2>Quero solicitar a 2° via do boleto.</h2>
          <div className={styled.BoxForm}>
            <form className={styled.FormBoleto} onSubmit={changeForm}>
              <fieldset>
                <Input desc="Nome Completo" type="text" name="nome" />
                <Input desc="CPF" type="text" name="cpf" />
                <input type="submit" value="Enviar" className={styled.BtnForm} />
              </fieldset> 
            </form>
          </div>
        </div>
      </div>
    </section>
  ) 
}
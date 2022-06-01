import React, {useState} from 'react';
import { useForm } from "react-hook-form";
import Link from 'next/link';
import styled from '../styles/Boleto.module.css';

import Input from '../components/Input';

export default function Boleto() {
  const { register, handleSubmit } = useForm();
  const [data, setData] = useState("");

  

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
            <form className={styled.FormBoleto} onSubmit={handleSubmit((data) => setData(JSON.stringify(data)))}>
              <fieldset>
                <div className={styled.BoxInputBoleto}>
                  <label className={styled.FormLabel}>Nome</label>
                  <input className={styled.FormInput} {...register("nome")} />
                </div>
                <div className={styled.BoxInputBoleto}>
                  <label className={styled.FormLabel}>CPF</label>
                  <input className={styled.FormInput} {...register("cpf")} />
                </div>
                <input type="submit" value="Enviar" className={styled.BtnForm} />
                <p>{data}</p>
              </fieldset> 
            </form>
          </div>
        </div>
      </div>
    </section>
  ) 
}
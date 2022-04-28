import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Button from './Button';
//import 'boxicons'


import styled from '../styles/Navbar.module.css';

export default function Navbar() {

  const [toggle, setToggle] = useState(false);

  const handleMenuToggle = () => {
    setToggle(!toggle)
    if(toggle == true) {
      console.log("Menu Ativado");
    } else {
      console.log("Menu Desativado");
    }
  }
  return (
    <header className={styled.Navbar}>
      <div className={styled.NavbarInfo}>
        <div className={styled.ContentNavbarInfo}>
          <div className={styled.SocialLinksInfo}>
            <ul>
              <li>
                <box-icon color="#fff" type='logo' name='whatsapp'></box-icon><span>86 99999-9999</span>
              </li>
              <li>
                <box-icon color="#fff" className="pin" type='logo' name='instagram'></box-icon><span>@r1telecom</span>
              </li>
              <li>
                <box-icon color="#fff" name='envelope'></box-icon><span>r1telecom@gmail.com</span>
              </li>
            </ul>
          </div>
          <div className={styled.LocationInfo}>
          <box-icon color="#fff" name='location-plus'></box-icon><span>Nome da rua, Bairro, 000, Cidade - PI</span>
          </div>
        </div>
      </div>
      <nav className={styled.NavLinks}>
        <div>
          <Image src="/brand.svg" width="75" height="75" />
        </div>
        <div 
        className={styled.MenuTogge} 
        onClick={handleMenuToggle}
        >
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div 
        onClick={handleMenuToggle}
        className={(toggle ? styled.prev : styled.BoxToggle)}>
          <p>jhjhjhj</p>
          <button onClick={handleMenuToggle}></button>
        </div>
        <div className={styled.NavLinksMenu}>
          <ul>
            <li>
              <Link href="/"><a>Home</a></Link>
            </li>
            <li>
              <Link href="/about"><a>Quem Somos</a></Link>
            </li>
            <li>
              <Link href="/"><a>Planos</a></Link>
            </li>
            <li>
              <Link href="/"><a>Novidades</a></Link>
            </li>
            <li>
              <Link href="/"><a>Contato</a></Link>
            </li>
          </ul>
          <Button go="/404" info="2° via boleto" />
        </div>
      </nav>
    </header>
  )
}
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Button from './Button';
import { 
  BsWhatsapp, 
  BsInstagram, 
  BsEnvelope, 
  BsGeoAltFill 
} from "react-icons/bs";


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
              <BsWhatsapp /><Link href="https://api.whatsapp.com/send?phone=5586995095492&text=Ol%C3%A1!%20Eu%20estava%20no%20site%20e%20tenho%20uma%20d%C3%BAvida..."><a>86 995095492</a></Link>
              </li>
              <li>
                <BsInstagram /><Link href="https://www.instagram.com/r1telecom/"><a>@r1telecom</a></Link>
              </li>
              <li>
                <BsEnvelope /><span>r1telecom@gmail.com</span>
              </li>
            </ul>
          </div>
          <div className={styled.LocationInfo}>
          <BsGeoAltFill /><span>Nome da rua, Bairro, 000, Cidade - PI</span>
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
        className={(toggle ? styled.BoxToggle : styled.prev)}>
          <ul>
            <li onClick={handleMenuToggle}>
              <Link  href="/"><a>Home</a></Link>
            </li>
            <li onClick={handleMenuToggle}>
              <Link  href="/sobre"><a>Quem Somos</a></Link>
            </li>
            <li onClick={handleMenuToggle}>
              <Link  href="/cobertura"><a>Cobertura</a></Link>
            </li>
            <li onClick={handleMenuToggle}>
              <Link  href="/planos"><a>Planos</a></Link>
            </li>
            <li onClick={handleMenuToggle}>
              <Link  href="/novidades"><a>Novidades</a></Link>
            </li>
            <li onClick={handleMenuToggle}>
              <Link  href="/contato"><a>Contato</a></Link>
            </li>
          </ul>
          <div className={styled.ButtonToggle}>
            <Button 
              color="#ffffff" 
              go="/404" 
              info="2° via boleto" 
            /> 
          </div>
        </div>
        <div className={styled.NavLinksMenu}>
          <ul>
            <li>
              <Link href="/"><a>Home</a></Link>
            </li>
            <li>
              <Link href="/sobre"><a>Quem Somos</a></Link>
            </li>
            <li>
              <Link href="/cobertura"><a>Cobertura</a></Link>
            </li>
            <li>
              <Link href="/planos"><a>Planos</a></Link>
            </li>
            <li>
              <Link href="/novidades"><a>Novidades</a></Link>
            </li>
            <li>
              <Link href="/contato"><a>Contato</a></Link>
            </li>
          </ul>
          <Button go="/404" info="2° via boleto" />
        </div>
      </nav>
    </header>
  )
}
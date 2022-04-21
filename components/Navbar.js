import 'boxicons'

import styled from '../styles/Navbar.module.css';

export default function Navbar() {
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
        <div>logo</div>
        <div>menu</div>
      </nav>
    </header>
  )
}
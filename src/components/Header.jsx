import React from 'react'
import Logo from "../img/logo-icon.svg"

export default function Header() {
  return (
    <>
    <div class="filter"></div>
    <div class="mobile-slider">
        <div class="top">
            <div class="mobile-slider-top">
              <i class="fas fa-times close-menu"></i>
              <i class="fas fa-times close-menu"></i>
            </div>
        </div>

        <ul class="mobile__list">
            <li class="mobile__item"><a href="#services" class="nav__link">Xizmatlar</a></li>
            <li class="mobile__item"><a href="#medicine" class="nav__link">Dorilar</a></li>
            <li class="mobile__item"><a href="#honey" class="nav__link">Asal</a></li>
            <li class="mobile__item"><a href="#contact" class="nav__link">Kontaktlar</a></li>
            <li class="mobile__item"><a href="https://qudratulloh.netlify.app/" class="nav__link">Blog</a></li>
        </ul>

        <a href="#hero" class="mobile__btn">Qabulga yozilish</a>

    </div>

    <nav class="nav">

        <div class="container">

            <div class="nav__inner">
                
                <a href="#" class="nav__logo">
                    
                    <div class="nav__img-box">
    
                        <img class="nav__img" src={Logo} alt="AnsorMed"/>
    
                    </div>
    
                    <strong class="nav__title">AnsorMed</strong>
                    
                </a>
    
                <ul class="nav__list">
                    <li class="nav__item"><a href="#services" class="nav__link">Xizmatlar</a></li>
                    <li class="nav__item"><a href="#medicine" class="nav__link">Dorilar</a></li>
                    <li class="nav__item"><a href="#honey" class="nav__link">Asal</a></li>
                    <li class="nav__item"><a href="#contact" class="nav__link">Kontaktlar</a></li>
                    <li class="nav__item"><a href="https://qudratulloh.netlify.app/" class="nav__link">Blog</a></li>
                </ul>
    
                <a href="#hero" class="btn">Qabulga yozilish</a>
    
                <div class="menu">
                    <div class="burger"></div>
                </div>
    
            </div>
            
        </div>
        
    </nav>
    </>
  );
}

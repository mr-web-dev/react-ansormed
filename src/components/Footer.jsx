import React from 'react'
import Logo from "../img/logo-icon.svg"

export default function Footer() {
  return (
    <>
    <footer class="footer">
        
        <div class="footer__container container">
            
            <a href="#" class="foot__logo">
                
                <div class="foot__img-box">

                    <img class="foot__img" src={Logo} alt="AnsorMed"/>
                </div>

                <strong class="foot__title">AnsorMed</strong>

            </a>

            <ul class="foot__list">
                <li class="foot__item"><a class="foot__link" href="#services">Xizmatlar</a></li>
                <li class="foot__item"><a class="foot__link" href="#medicine">Dorilar</a></li>
                <li class="foot__item"><a class="foot__link" href="#honey">Asal</a></li>
                <li class="foot__item"><a class="foot__link" href="#contact">Kontaktlar</a></li>
                <li class="foot__item"><a href="https://qudratulloh.netlify.app/" class="foot__link">Blog</a></li>
            </ul>
            
        </div>

    </footer>
    </>
  );
}

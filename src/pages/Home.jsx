import React from 'react'
import Img from "../img/person.png"

export default function Home() {
  return (
    <>
    <div class="hero" id="hero">

        <div class="container hero__container">

            <div class="hero__text-box">

                <h1 class="hero__title">Tabiiy davolash usullari yordamida kasalliklardan xalos bo’ling.</h1>

                <p class="hero__text">Hijoma, manual terapiya, zuluk va turli tabiiy giyohlar eng ko’p uchraydigan kasalliklarni yengishda yordam beradi. Sog’ligingizni o’z ishining professionallariga ishonib topshiring.</p>

                <a href="#honey" class="btn hero__btn">Qabulga yozilish</a>

            </div>

            <div class="hero__img-box">
                <img class="hero__img" src={Img} alt="Person"/>
            </div>

        </div>

    </div>
    </>
  );
}

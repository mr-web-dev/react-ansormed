import React from 'react'
import CardImg1 from "../img/xizmat__hijoma.png"
import CardImg2 from "../img/xizmat__manual-terapiya.png"
import CardImg3 from "../img/xizmat__zuluk.png"
import CardImg4 from "../img/xizmat__tabiy.png"

export default function Services() {
    const obj = [
        {
            id: 1,
            idName: "medicine",
            img: CardImg1,
            title: "Hijoma",
            text: "Imom Termiziy Abdulloh ibn Abbos raziyallohu anhumodan rivoyat qilgan hadisda rasululloh sallallohu alayhi va sallam dedilar: «Sizlar hijoma qiladigan kunlaringizning eng yaxshisi 17, 19 va 21-kunlardir» (bu kunlar hijrij-kamariy hisobdagi oylar kunlaridir)."
        },
        {
            id: 2,
            img: CardImg2,
            title: "Manual terapiya",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac metus placerat, pellentesque enim ac, rhoncus lectus. Maecenas et posuere lorem. Fusce sed massa sit amet elit viverra hendrerit."
        },
        {
            id: 3,
            img: CardImg3,
            title: "Zuluk bilan davolash",
            text: "Girudoterapiya (lot. hirūdō — «zuluk» va qad. yun. θεραπεία — «davolash») — ma’lum kasalliklarni dorivor zuluklar (Hirudo medicinalis) yordamida davolash usuli. Fizioterapevtik muolaja, muqobil tibbiyotga oid sanaladi. Bunday zuluklar ushbu kichik sinf chuvchalchanglariga oid yagona tur hisoblanadi, qolganlari shifobaxsh ta’sir ko’rsatmaydi.."
        },
        {
            id: 4,
            idName: "honey",
            img: CardImg4,
            title: "Tabiiy dori vositalari",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac metus placerat, pellentesque enim ac, rhoncus lectus. Maecenas et posuere lorem. Fusce sed massa sit amet elit viverra hendrerit."
        }
    ]
  return (
    <>
    <div className="services" id="services">

        <h2 className="services__title">Xizmatlar</h2>
        
        <div className="container services__container">

            {obj.map((item) => {
                return (
                    <div className="card" id={item.idName || null} key={item.id}>

                        <div className="card__img-box">
                            <img className="card__img" src={item.img} alt={item.title}/>
                        </div>

                        <div className="card__text-box">
                            <h3 className="card__title">{item.title}</h3>
                            <p className="card__text">{item.text}</p>
                        </div>

                    </div>
                )
            })}
            
            <a href="#contact" className="btn services__btn">Qabulga yozilish</a>

        </div>
        
    </div>
    </>
  );
}

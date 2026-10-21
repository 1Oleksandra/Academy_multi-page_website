
import robotBag from '../images/bag-robot.png'
import cloud from '../images/cloud.png' 
import anArrow from '../images/an-arrow.gif'
import { Link } from 'react-router-dom'
import ParallaxLayer from './ParallaxLayer'

function Offer() {
  const offers = [

    {
      title: "HTML, CSS, JS",
      text: "Підійде як новачкам, так і тим, хто вже має досвід — допоможемо опанувати інструменти професійної верстки",
      color: "offer-card purple",
      to: "/courses#frontend"
    },
    {
      title: "React & Frontend",
      text: "Сучасні фреймворки, створення SPA та інтеграція з API — все для професійного фронтенду",
      color: "offer-card turquoise",
      to: "/courses#react"
    },
    {
        img: robotBag,
        parallaxSpeed: 0.03
    },
    {
        img: cloud
    },
    {
      title: "Backend Basics",
      text: "Node.js, Express та робота з базами даних — старт для повного стеку",
      color: "offer-card yellow",
      to: "/courses#nodejs"
    },
    {
      title: "UI/UX Design",
      text: "Основи дизайну, Figma та створення інтерфейсів, які люблять користувачі",
      color: "offer-card blue",
      to: "/courses#uiux"
    },
    {
      title: "Career Support",
      text: "Допомога з резюме, підготовка до співбесід та пошук першої роботи",
      color: "offer-card magenta",
      to: "/courses#career-support"
    },
    {
      title: "Soft Skills",
      text: "Комунікація, тайм-менеджмент та командна робота — важливі навички для IT",
      color: "offer-card pink",
      to: "/courses#soft-skills"
    },
    {
      titleClick: "Клік по курсу",
      img: anArrow,
      to: "/courses"
    }
  ];

  return (
    <section className="offer">
      <div className="container">
        <h2 className="offer-title">Що ми <span>пропонуємо</span> ?</h2>
        <div className="offer-grid">
          {offers.map((item, index) => (
            item.to ? (
              <Link key={index} to={item.to} className={`${item.color || "offer-visual"} offer-card--link`}>
                {item.title && <h3>{item.title}</h3>}
                {item.titleClick && <h3 className="offer-title__click">{item.titleClick}</h3>}
                {item.text && <p>{item.text}</p>}
                {item.img && <img src={item.img} alt={item.title || "img"} />}
                {item.title && <span className="offer-card__action">Переглянути курс →</span>}
              </Link>
            ) : (
              <div key={index} className="offer-visual offer-visual__cloud" aria-hidden="true">
                {item.img && (
                  item.parallaxSpeed ? (
                    <ParallaxLayer speed={item.parallaxSpeed}>
                      <img src={item.img} alt="" />
                    </ParallaxLayer>
                  ) : <img src={item.img} alt="" />
                )}
              </div>
            )
          ))}
        </div>
      </div>
    </section>
  );
}

export default Offer;



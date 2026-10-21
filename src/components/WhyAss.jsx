
import robotMagic from '../images/magic-robot.png'
import stars from '../images/stars.gif'
import exclamationMark from '../images/exclamation-mark.gif'
import ParallaxLayer from './ParallaxLayer'



function WhyUs() {
    
  const reasons = [
    {
      number: "01",
      title: "Досвідчені ментори",
      text: "Наші викладачі – практикуючі спеціалісти з багаторічним досвідом у сфері IT, які діляться інсайтами та допомагають уникнути типових помилок.",
      color: "whyus-card__title purple-title"
    },
    {
      number: "02",
      title: "Практичні завдання",
      text: "Курси побудовані на реальних кейсах, студенти одразу застосовують знання у власних проєктах.",
      color: "whyus-card__title blue-title"
    },
    {
      number: "03",
      title: "Портфоліо",
      text: "Всі роботи можна додати до портфоліо, щоб показати свої навички роботодавцям.",
      color: "whyus-card__title turquoise-title"
    },
    {
      number: "04",
      title: "Підтримка",
      text: "Ми супроводжуємо студентів на кожному етапі навчання та допомагаємо з пошуком роботи.",
      color: "whyus-card__title magenta-title"
    }
  ];

  return (
    <section className="whyus">
      <div className="container whyus-container">
        <div className="whyus-left">
          <h2 className="whyus-title">Чому <span>ми?</span></h2>
          <p className="whyus-text">
            Наші курси побудовані на реальних кейсах та практичних завданнях, які дають змогу студентам застосовувати знання одразу в роботі.
          </p>
          <div className="whyus-grid">
            {reasons.map((item, index) => (
              <div key={index} className="whyus-card">
                <h3 className={item.color}>{item.number} {item.title}</h3>
                <p>{item.text}</p>
              </div>
            ))}
            <img src={exclamationMark} alt="exclamation mark" className="whyus-img__exclamationMark"/>
          </div>
        </div>
        <div className="whyus-right">
          <ParallaxLayer speed={0.045}>
            <img src={robotMagic} alt="Robot with magic wand" className="whyus-img"/>
          </ParallaxLayer>
          <img src={stars} alt="stars" className="whyus-img__stars"/>
        </div>
      </div>
    </section>
  );
}

export default WhyUs;

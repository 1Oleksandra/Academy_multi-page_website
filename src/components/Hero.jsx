import robotImg from "../images/show2-robot.png";
import beetle from "../images/beetle.png";


import ParallaxLayer from "./ParallaxLayer";

function Hero() {
  return (
    <section className="hero paralax">
      <div className="container hero-shell">
        <h1 className="hero-title">
          <span>ITLEO</span> <span>Academy</span>
        </h1>

        <div className="hero-container">
          {/* Робот */}
          <ParallaxLayer speed={0.1}>
            <div className="hero-left paralax-01">
              <img src={robotImg} alt="ITLEO Robot" />
            </div>
          </ParallaxLayer>

          {/* Текстова частина */}
          <div className="hero-right">
            <h2 className="hero-title_s">від 0 до Профі</h2>
            <button className="btn-primary">Залишити заявку</button>
            <p className="hero-text">
              Хочеш увійти в IT, але не знаєш з чого почати? У ITLEO Academy ми
              навчимо тебе програмуванню з нуля, дамо практику та підтримаємо на
              шляху до першої роботи. Приєднуйся — і твій шлях від 0 до Профі
              стане реальністю!
            </p>
          </div>

          {/* Сонечко */}
   
            <div className="img-beetle paralax-2">
              <img src={beetle} alt="beetle" />
            </div>

        </div>
      </div>
    </section>
  );
}

export default Hero;


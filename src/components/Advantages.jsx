
import robotLoudspeaker from '../images/loudspeaker-robot.png'
import ParallaxLayer from './ParallaxLayer'


function Advantages() {
  const advantages = [
    { text: "онлайн-навчання", color: "adv-card turquoise" },
    { text: "фриланс", color: "adv-card purple" },
    { text: "реальні кейси", color: "adv-card yellow" },
    { text: "практичні завдання", color: "adv-card blue" },
    { text: "портфоліо", color: "adv-card pink" }
  ];

  return (
    <section className="advantages">
      <div className="container">
        <h2 className="advantages-title">Переваги <span>академії</span></h2>
        <div className="avantages-content">
          <div className="advantages-img">
            <ParallaxLayer speed={0.035}>
              <img src={robotLoudspeaker} alt="robot with loudspeaker"/>
            </ParallaxLayer>
          </div>
        
        <div className="advantages-grid">
          {advantages.map((item, index) => (
            <div key={index} className={item.color}>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
        </div>
      </div>
    </section>
  );
}

export default Advantages;

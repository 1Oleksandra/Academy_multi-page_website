import RobotShow from '../images/show-robot.png'
import ParallaxLayer from './ParallaxLayer'

function AboutTop (){
    return (
        <>
          <section className="about-top">
            <div className="container about-top__container">
              <div className="about-top__left">
                <h2 className="about-top__title">ITLEO ACADEMY:<span> <br /> Ваш шлях до кар’єри в IT</span></h2>
                <p className="about-top__text">
                  Ласкаво просимо до ITLEO ACADEMY – інноваційної української онлайн-академії, яка відкриває двері у світ сучасних ІТ-професій. Ми віримо, що сьогоднішній стрімкий розвиток технологій створює безмежні можливості, і наша місія – допомогти вам стати їх частиною. Наші програми розроблені для тих, хто робить перші кроки в ІТ, і для досвідчених фахівців, які прагнуть поглибити свої знання. Ми не просто навчаємо – ми будуємо місток між вашими амбіціями та успішною кар’єрою.
                </p>
                <p className="about-top__text">
                  ITLEO ACADEMY — це більше, ніж просто онлайн-курси. Це активна спільнота менторів, професійних розробників та мотивованих студентів, об’єднаних однією метою: надавати якісну, практичну освіту, яка відкриває реальні перспективи.
                </p>
              </div>
              <div className="about-top__right">
                <ParallaxLayer speed={0.045}>
                  <img src={RobotShow} alt="Robot with magic wand" className="about-top__img"/>
                </ParallaxLayer>
              </div>
            </div>
          </section>
        </>
    )
}

export default AboutTop

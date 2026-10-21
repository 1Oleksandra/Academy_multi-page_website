
import RobotWithPencil from '../images/pencil-robot.png'
import ParallaxLayer from './ParallaxLayer'

function PricesTop () {
    return(
        <>
            <section className="about-top">
            <div className="container about-top__container">
              <div className="about-top__left">
                <h2 className="about-top__title prices-top__title">Ціни та<span> відгуки </span></h2>
                <p className="about-top__text">
                 У ITLEO ACADEMY ми створили систему навчання, яка адаптується до вашого темпу та життєвого графіку, забезпечуючи при цьому максимальну ефективність та глибоке занурення в матеріал. Наша мета — зробити IT-освіту доступною та комфортною для кожного, хто прагне змінити свою кар’єру.
                </p>
            
              </div>
              <div className="about-top__right prices-top__img">
                <ParallaxLayer speed={0.045}>
                  <img src={RobotWithPencil} alt="Robot with pencil" className="about-top__img"/>
                </ParallaxLayer>
              </div>
            </div>
          </section>
        </>
    )
} 

export default PricesTop

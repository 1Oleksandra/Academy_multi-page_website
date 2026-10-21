import RobotBag from '../images/happy2-robot.png'
import ParallaxLayer from './ParallaxLayer'

function Cta () {
    return (
        <>
            <section className="cta">
                <div className="container">
                    <div className="cta-banner">
                        <div className="bag-robot">
                            <ParallaxLayer speed={0.035}>
                                <img src={RobotBag} alt="robot with bag" />
                            </ParallaxLayer>
                        </div>
                        <p className="cta-text">Розпочніть свій шлях до успіху з нами !</p>
                        <a href="/apply" className="cta-btn">Залишити заявку</a>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Cta

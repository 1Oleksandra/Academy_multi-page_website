
import Robot from '../images/robot-with-power-plug.png'
import ParallaxLayer from './ParallaxLayer'

function CoursesSupportBlok(){

    return(
        <>
        <section className="support-block container">

                    <div className="support-block__left">
                        <h2 className="support-title">Навчання з <span>підтримкою</span> менторів </h2>
                        <p className="support-text">
                        Наші досвідчені ментори супроводжують тебе на кожному етапі навчання:
                        пояснюють складні теми, відповідають на запитання та діляться практичними
                        порадами. Ти отримуєш не лише знання, а й постійну підтримку та мотивацію,
                        щоб упевнено рухатися до своєї кар’єри в IT.
                        </p>
                    </div>
                    <div className="support-block__right">
                        <div className="support-block__img">
                            <ParallaxLayer speed={0.04}>
                                <img src={Robot} alt="robot" />
                            </ParallaxLayer>
                        </div>
                    </div>
        

        </section>
        </>
    )
}

export default CoursesSupportBlok

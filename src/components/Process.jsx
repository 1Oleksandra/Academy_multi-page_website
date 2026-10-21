import ListRobot from '../images/list-robot.png'
import BlueThing from '../images/blue-thing.png'
import ParallaxLayer from './ParallaxLayer'


function Process(){
 const   cards = [
        {
            title: 'Актуальні та затребувані знання',
            text: 'Ми викладаємо лише найсучасніші технології, які активно використовуються в реальних проєктах. Це гарантує, що після навчання випускники будуть готові працювати у компаніях без додаткової підготовки.',
            color: "var(--magenta)"
        },
        {
            title: 'Гнучкий графік навчання',
            text: 'Доступні онлайн-курси, записані лекції, живі заняття та можливість навчання у зручний час – усе це дозволяє поєднувати навчання з роботою або іншими заняттями.',
            color: "var(--blue)"
        },
         {
            title: 'Тестування ПЗ та DevOps',
            text: 'Навчаємо якісному тестуванню та автоматизації процесів розробки',
            color: "var(--yellow-s)"
        },
         {
            title: 'Підтримка після навчання',
            text: 'Наші студенти залишаються частиною спільноти Leo IT Academy навіть після завершення курсів – ми допомагаємо їм розвиватися, консультуємо та підтримуємо на професійному шляху.',
            color: "var(--purple)"
        }
    ]

    return(
    <>
        <section className="process">
            <div className="container">
                <h2 className="process-title">Процес <span>навчання</span></h2>
                <div className="process-content">
                    <div className="list-robot">
                        <ParallaxLayer speed={0.04}>
                            <img src={ListRobot} alt="robot with list"/>
                        </ParallaxLayer>
                    </div>
                    <div className="process-grid">
                    {cards.map(card => (
                        <div className="process-card">
                        <h3 className='process-card__title' style={{color : card.color}}>{card.title}</h3>
                        <p>{card.text}</p>
                    </div>
                    ))}
                    </div>
                    <div className="blue-thing">
                        <img src={BlueThing} alt="Blue Thing"/>
                    </div>
                </div>
            </div>
        </section>

    </>)
}

export default Process

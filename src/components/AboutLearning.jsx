

import Microphone from '../images/microphone.gif'

function AboutLearning(){

    const cards = [
        {
            title: 'Актуальність',
            text: ' Ми викладаємо лише ті технології, які є затребуваними сьогодні. Жодної “води” — тільки те, що працює в реальних проєктах',
            color: 'var(--blue)',
            colorText: 'var(--white)'
        },
        {
            title: 'Гнучкість',
            text: 'Ми пропонуємо онлайн-курси, живі заняття, доступ до записів та можливість навчатись у зручному темпі, поєднуючи навчання з роботою чи іншими справами',
            color: 'var(--turquoise)',
            colorText: 'var(--white)'
        },
        {
            title: 'Підтримка',
            text: 'Наші випускники залишаються частиною спільноти ITLEO. Ми продовжуємо надавати консультації та підтримувати їх на професійному шляху',
            color: 'var(--pink)',
            colorText: 'var(--white)'
        },
        {
            title: 'Практика',
            text: 'Кожен курс передбачає роботу над реальними проєктами, які стають частиною вашого професійного портфоліо',
            color: 'var(--purple)',
            colorText: 'var(--white)'
        }

    ]

    return(
        <>
        <section className="learning-process">
            <div className="container">
                <div className="learning-container">
                    <div className="learning-left">
                        <div className="learning-left__comtent">
                            <h2 className="learning-title">
                                Наш процес навчання побудований так, щоб бути <span>максимально ефективним:</span> 
                            </h2>
                            <p className="learning-text">
                            Готові зробити перший крок до своєї IT‑кар’єри? <span> <br /> ITLEO ACADEMY</span> — це місце, де ваше майбутнє стає реальністю.
                            </p>
                        </div>
                        <div className="learning-left__comtent-img">
                            <img src={Microphone} alt="microphone" />
                        </div>
                    </div>

                <div className="learning-grid">
                    {cards.map((card, index) => (
                        <div 
                        key={index} 
                        className="learning-card" 
                        style={{ background : card.color }}
                        >
                        <h3 style ={{color: card.colorText}}>{card.title}</h3>
                        <p style ={{color: card.colorText}}>{card.text}</p>
                        </div>
                    ))}
                    </div>
                </div>
            </div>
            </section>
        </>
    )

}

export default AboutLearning
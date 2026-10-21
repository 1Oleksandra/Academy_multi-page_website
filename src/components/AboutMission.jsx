import Battery from '../images/green battery.png'
import Arrow from '../images/arrow-pink.gif'

function AboutMission (){
      
    const missions = [
            {
            number: "01",
            title: "Актуальність та практичність знань:",
            text: "Ми гарантуємо, що наші навчальні програми завжди відповідають найновішим трендам і вимогам ринку. Наші студенти вивчають лише ті технології, які активно використовуються в реальних комерційних проєктах. Навчання побудоване на практичному досвіді, де ви будете працювати над реальними проєктами, створюючи своє портфоліо з перших днів.",
            color: "mission-card__title purple-title"
            },
            {
            number: "02",
            title: "Підготовка затребуваних фахівців:",
            text: "Наша мета – випустити не просто випускників, а справжніх професіоналів, готових до викликів сучасної ІТ-індустрії. Ми зосереджені на розвитку навичок, які цінуються роботодавцями: командна робота, критичне мислення, вміння швидко адаптуватися та розв’язувати проблеми.",
            color: "mission-card__title blue-title"
            },
            {
            number: "03",
            title: "Інноваційний підхід до навчання:",
            text: "Ми не просто даємо теорію. Ми заохочуємо вас мислити нестандартно, шукати ефективні рішення та перетворювати свої знання на інноваційні продукти. Наші методики розроблені для того, щоб ви не заучували матеріал, а розуміли його суть і могли застосовувати в будь-якій ситуації.",
            color: "mission-card__title turquoise-title"
            },
            {
            number: "04",
            title: "Формування активної спільноти:",
            text: "ITLEO ACADEMY — це місце зустрічі однодумців. Ми створюємо умови для нетворкінгу, обміну досвідом та спільного розвитку. Наша спільнота – це місце, де ви знайдете майбутніх колег, партнерів по проєктах і досвідчених наставників, які завжди готові допомогти.",
            color: "mission-card__title yellow-title"
            },
            {
            img: Battery
            }
        ];
    return(
        <>
            <section className="about-mission">
                <div className="container">
                <div className="about-mission__container">
                    <div className="about-mission__content">
                        <div className="about-mission__arrow">
                            <img src={Arrow} alt="arrow" />
                        </div>
                        <div className="about-mission__right">
                            <h2 className="about-mission__title">Наша місія: <span>формуємо майбутнє <br /> IT-інновацій</span> <span></span></h2>
                            <p className="about-mission__subtitle">
                                Наша робота ґрунтується на чотирьох ключових принципах, які роблять ITLEO ACADEMY особливою:
                            </p>
                        </div>
                    </div>
                    <div className="about-mission__grid">
                            {missions.map((item, index) => (
                            <div key={index} className="mission-card">
                                {item.img ? (
                                    <div className="mission-img">
                                        <img src={item.img} alt="mission" />
                                    </div>
                                    
                                ) : (
                                    <>
                                    <h3 className={item.color}>{item.number} {item.title}</h3>
                                    <p>{item.text}</p>
                                    </>
                                )}
                            </div>
                            ))}
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}

export default AboutMission
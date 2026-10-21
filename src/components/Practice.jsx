
import Cloud from '../images/cloud.png'

function Practice () {

    const practices = [
        {
            title: 'Живі онлайн‑лекції  ',
            text: 'Онлайн‑заняття з ментором‑практиком у реальному часі з можливістю ставити запитання та отримувати миттєвий зворотний зв’язок',
            color: 'var(--blue)'
        },
        {
            img: Cloud,
        },
        {
            title: 'Доступ до записів:',
            text: 'Усі лекції зберігаються у вашому кабінеті, щоб ви могли навчатися у зручний час і власним темпом',
            color: 'var(--purple)'
        },
        {
            title: 'Індивідуальні консультації:',
            text: 'Ментори готові допомогти вам розібрати складні теми, обговорити проєкти та дати кар’єрні поради',
            color: 'var(--turquoise)'
        },
        {
            title: 'Практика ',
            text: 'Кожен курс включає завдання та реальні проєкти. Наприкінці навчання ви створите власний завершений проєкт для портфоліо',
            color: 'var(--yellow-s)'
        },
        {
            title: 'Домашні роботи',
            text: 'Після занять ви отримуєте завдання для закріплення матеріалу. Всі роботи організовані через Google Classroom з коментарями від ментора',
            color: 'var(--magenta)'
        },
    ]

    return(
        <>
            <section className="practice-section">
                <div className="container">
                    <h2 className="practice-title">
                    Як ми навчаємо: <span>гнучкість та практика</span> 
                    </h2>
                    <div className="practice-content">
                    <div className="practice-grid">
                        {practices.map((practice, index) => (
                        <div 
                            key={index} 
                            className="practice-card " 
                            style={{ border: `1px solid ${practice.color}` }}
                        >
                            {/* якщо є картинка */}
                            {practice.img && (
                            <img src={practice.img} alt={practice.title || "practice"} className="practice-icon"  />
                            )}

                            {/* якщо є текст */}
                            {practice.title && (
                            <div className="practice-text">
                                <h3 style={{ color: practice.color}}>{practice.title}</h3>
                                <p style={{ color: practice.color }}>{practice.text}</p>
                            </div>
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

export default Practice
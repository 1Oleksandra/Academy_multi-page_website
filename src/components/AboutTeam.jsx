
import { Link } from 'react-router-dom'

function AboutTeam (){
    const skills = [
        {
            title: 'Верстка сайтів HTML, CSS:',
            text: 'Ваш фундамент у веброзробці. Навчіться створювати структуру та стиль веб-сторінок з нуля',
            color: 'var(--blue-light)',
            to: '/courses#frontend'
        },
        {
            title: 'Основи JavaScript:',
            text: 'Почніть писати динамічні та інтерактивні елементи, які оживляють сайти',
            color: 'var(--yellow-s)',
            to: '/courses#javascript-basics'
        },
        {
            title: 'JavaScript Продвинутий:',
            text: 'Перейдіть на новий рівень, вивчаючи складні концепції мови, що дозволить вам створювати потужні вебзастосунки',
            color: 'var(--gray-dark)',
            to: '/courses#javascript-advanced'
        },
        {
            title: 'React:',
            text: 'Освойте найпопулярнішу бібліотеку для створення сучасних, швидких та масштабованих інтерфейсів',
            color: 'var(--purple)',
            to: '/courses#react'
        },
        {
            title: 'Node.js:',
            text: 'Зануртеся у Back-end розробку, навчившись будувати ефективні серверні застосунки на JavaScript',
            color: 'var(--turquoise)',
            to: '/courses#nodejs'
        },
        {
            title: 'Django:',
            text: 'Станьте Back-end розробником, використовуючи потужний та стабільний фреймворк на Python',
            color: 'var(--pink)',
            to: '/courses#django'
        }
    ]
    const tests = [
        {
            title: 'QA Manual:',
            text: 'Навчіться знаходити помилки та перевіряти функціональність застосунків вручну. Це ідеальний старт у сфері тестування',
            color: 'var(--blue-light)',
            to: '/courses#qa-manual'
        },
        {
            title: 'AQA (Автоматизоване тестування):',
            text: 'Автоматизуйте рутинні перевірки, використовуючи спеціальні інструменти, щоб зробити процес тестування швидшим та надійнішим',
            color: 'var(--pink)',
            to: '/courses#aqa'
        },
        {
            title: 'QA Backend/API:',
            text: 'Зосередьтеся на тестуванні серверної частини та програмних інтерфейсів, щоб забезпечити безперебійну роботу застосунків',
            color: 'var(--turquoise)',
            to: '/courses#qa-api'
        }
    ]
    
    const languages = [
        {
            title: 'Основи Swift:',
            text: 'Почніть розробку нативні мобільні застосунки для платформ iOS та macOS',
            color: 'var(--yellow-s)',
            to: '/courses#swift'
        },
        {
            title: 'Python Основи:',
            text: 'Зробіть перші кроки у вивченні універсальної мови, яка використовується у веброзробці, аналізі даних та автоматизації',
            color: 'var(--purple)',
            to: '/courses#python'
        },
        {
            title: 'Python Продвинутий:',
            text: 'Поглибіть свої знання, опанувавши складні концепції та бібліотеки, необхідні для професійної роботи з Python',
            color: 'var(--blue-dark)',
            to: '/courses#python-advanced'
        }
    ]

    return(
        <>
            <section className="about-team">
                <div className="container">
                    <h2 className="about-team__title">Наша <span>команда</span> та підхід до навчання</h2>
                    <p className="about-team__subtitle">
                    Досвідчені ментори — серце ITLEO Academy. Це практикуючі розробники, тестувальники, дизайнери та адміністратори з багаторічним досвідом.
                    </p>

                    <h3 className="about-team__course">Веброзробка (Front‑end & Back‑end)</h3>
                    <p className="about-team__desc">
                    Опануйте повний цикл створення сайтів та застосунків — від дизайну до серверної логіки.
                    </p>

                    <div className="skills-grid">
                    {skills.map(skill => (
                        <Link
                        key={skill.to}
                        to={skill.to}
                        className="skill-card" 
                        style={{ 
                            border: `1px solid ${skill.color}`, 
                            '--hover-color': skill.color 
                        }}
                        >
                        <div className="skill-content">
                            <h3 className="skill-card__title" style={{ color: skill.color,
                                '--hover-title': 'var(--white)'
                            }}>
                            {skill.title}
                            </h3>
                            <p className="skill-card__text">{skill.text}</p>
                        </div>
                        </Link>
                    ))}
                    </div>

                    <h3 className="about-team__course">QA & Тестування</h3>
                    <p className="about-team__desc">
                    Гарантуйте якість цифрових продуктів і станьте незамінним фахівцем у команді розробки
                    </p>

                    <div className="skills-grid">
                    {tests.map(test => (
                    <Link
                        key={test.to}
                        to={test.to}
                        className="skill-card" 
                        style={{ 
                            border: `1px solid ${test.color}`, 
                            '--hover-color': test.color 
                        }}
                        >
                        <div className="skill-content">
                            <h3 className="skill-card__title" style={{ color: test.color }}>
                            {test.title}
                            </h3>
                            <p className="skill-card__text">{test.text}</p>
                        </div>
                        </Link>
                    ))}
                    </div>

                    <h3 className="about-team__course">Розробка ПЗ та мови програмування</h3>
                    <p className="about-team__desc">
                    Будуйте логіку додатків та опановуйте мови, які відкривають безліч можливостей
                    </p>

                    <div className="skills-grid">
                    {languages.map((language) => (
                        <Link
                        key={language.to}
                        to={language.to}
                        className="skill-card" 
                        style={{ 
                            border: `1px solid ${language.color}`, 
                            '--hover-color': language.color 
                        }}
                        >
                        <div className="skill-content">
                            <h3 className="skill-card__title" style={{ color: language.color }}>
                            {language.title}
                            </h3>
                            <p className="skill-card__text">{language.text}</p>
                        </div>
                        </Link>
                    ))}
                    </div>
                </div>
            </section>
        </>
    )
}

export default AboutTeam

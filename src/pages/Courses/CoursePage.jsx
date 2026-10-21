import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import CoursesSupportBlok from "../../components/CoursesSupportBlok";

function CoursesPage() {
const { hash } = useLocation();

const courses = [
  {
            id: "frontend",
            title: "FRONT-END DEVELOPMENT",
            description:
            "Курс Frontend Development допоможе тобі опанувати основи веб‑розробки та створювати сучасні сайти з нуля. Протягом навчання ти отримаєш практичні навички роботи з HTML, CSS та JavaScript, які є фундаментом для будь‑якого фронтенд‑проєкту.",
            stats: [
            "3 MONTHS",
            "25 LESSONS",
            "38 HOURS",
            "2 МЕНТОРИ",
            "26 ДОМАШОК",
            "3 РОБОТИ В ПОРТФОЛІО"
            ],
            learn: [
            "HTML5 → структура сторінки, семантичні теги, форми",
            "CSS3 → стилізація, Flexbox, Grid, адаптивна верстка, анімації",
            "JavaScript (ES6+) → змінні, функції, DOM‑маніпуляції, події, базова логіка",
            "Основи роботи з Git та GitHub для командної розробки"
            ],
            projects: [
            "Лендінг‑сторінка з адаптивним дизайном",
            "Інтерактивний калькулятор або невеликий веб‑додаток на JavaScript",
            "Міні‑галерея чи блог з динамічним контентом",
            "Фінальний проєкт — повноцінний сайт (портфоліо або сайт компанії)"
            ],
            colors: {
            primary: "var(--purple)", // фіолетовий для тайтлів
            accent: 'var(--yellow) ' // золотий для бордерів та елементів
            }
        },
        {
            id: "javascript-basics",
            title: "JAVASCRIPT BASICS",
            description:
                "Курс для тих, хто хоче зрозуміти логіку JavaScript і навчитися створювати інтерактивні вебсторінки. Від перших змінних ти поступово перейдеш до роботи з DOM, подіями та даними.",
            stats: ["2 MONTHS", "16 LESSONS", "24 HOURS", "1 МЕНТОР", "14 ДОМАШОК", "2 ПРОЄКТИ"],
            learn: [
                "Змінні, типи даних, оператори та умови",
                "Цикли, функції, масиви й об’єкти",
                "DOM, браузерні події та робота з формами",
                "Основи асинхронності та отримання даних через fetch"
            ],
            projects: [
                "Інтерактивний список завдань із локальним збереженням",
                "Мінігра або каталог із фільтрацією та динамічним контентом"
            ],
            colors: {
                primary: "var(--yellow-s)",
                accent: "var(--blue-dark)"
            }
        },
        {
            id: "javascript-advanced",
            title: "ADVANCED JAVASCRIPT",
            description:
                "Поглиблений курс JavaScript для впевненого створення масштабованих вебзастосунків. Ти розбереш складні механізми мови, архітектуру коду та сучасну асинхронну взаємодію з API.",
            stats: ["2.5 MONTHS", "20 LESSONS", "32 HOURS", "2 МЕНТОРИ", "18 ДОМАШОК", "2 ПРОЄКТИ"],
            learn: [
                "Замикання, контекст виконання, прототипи та класи",
                "Promises, async/await і обробка помилок",
                "Модулі, патерни проєктування та організація коду",
                "Оптимізація, тестування й робота зі складними API"
            ],
            projects: [
                "SPA-застосунок на чистому JavaScript із маршрутизацією",
                "Інтерактивний сервіс із авторизацією та зовнішнім API"
            ],
            colors: {
                primary: "var(--gray-dark)",
                accent: "var(--yellow)"
            }
        },
        {
            id: "react",
            title: "REACT DEVELOPMENT",
            description:
            "Поглиблений курс React, де ти навчишся створювати сучасні SPA, працювати з хуками та зовнішніми API.",
            stats: ["2 MONTHS", "20 LESSONS", "32 HOURS", "2 МЕНТОРИ", "20 ДОМАШОК", "2 ПРОЄКТИ"],
            learn: [
            "React компоненти та пропси",
            "Hooks (useState, useEffect)",
            "React Router",
            "Робота з API"
            ],
            projects: [
            "Міні‑додаток із зовнішнім API",
            "SPA — онлайн‑магазин або блог"
            ],
            colors: {
            primary: "var(--blue)",
            accent: "var(--pink-light)"
            }
        },
        {
            id: "nodejs",
            title: "NODE.JS DEVELOPMENT",
            description:
                "Практичний курс Node.js, де ти навчишся створювати серверні застосунки, працювати з базами даних та будувати API.",
            stats: ["2 MONTHS", "18 LESSONS", "28 HOURS", "2 МЕНТОРИ", "18 ДОМАШОК", "2 ПРОЄКТИ"],
            learn: [
                "Основи Node.js та npm",
                "Express.js — створення серверів",
                "Робота з базами даних (MongoDB)",
                "REST API та інтеграція з фронтендом"
            ],
            projects: [
                "Простий REST API для блогу",
                "Фінальний проєкт — серверна частина для веб‑додатку (наприклад, інтернет‑магазин)"
            ],
            colors: {
                primary: "var(--turquoise)",   // зелений для тайтлів
                accent: "var(--purple)" // темно‑зелений для бордерів та елементів
            }
            },
            {
            id: "django",
            title: "DJANGO DEVELOPMENT",
            description:
                "Практичний Back-end курс на Python і Django. Ти навчишся проєктувати структуру серверних застосунків, працювати з базами даних, авторизацією та створювати API.",
            stats: ["3 MONTHS", "24 LESSONS", "38 HOURS", "2 МЕНТОРИ", "22 ДОМАШКИ", "2 ПРОЄКТИ"],
            learn: [
                "Архітектура Django: apps, models, views і templates",
                "Django ORM, міграції та робота з PostgreSQL",
                "Авторизація, ролі користувачів і безпека",
                "Django REST Framework і документування API"
            ],
            projects: [
                "Адмін-панель і вебзастосунок для керування контентом",
                "REST API для сервісу бронювання або інтернет-магазину"
            ],
            colors: {
                primary: "var(--pink)",
                accent: "var(--turquoise)"
            }
            },
            {
            id: "qa-manual",
            title: "QA MANUAL",
            description:
                "Курс із ручного тестування дає системний старт у QA: від аналізу вимог і тест-дизайну до оформлення баг-репортів та перевірки готового продукту.",
            stats: ["2 MONTHS", "18 LESSONS", "28 HOURS", "1 МЕНТОР", "16 ПРАКТИК", "2 ПРОЄКТИ"],
            learn: [
                "Життєвий цикл розробки ПЗ і роль QA в команді",
                "Техніки тест-дизайну, чеклісти та тест-кейси",
                "Баг-репорти, Jira і робота з документацією",
                "Web і mobile testing, DevTools та базовий SQL"
            ],
            projects: [
                "Повне тестування навчального вебсервісу",
                "Тестова документація та звіт про якість продукту"
            ],
            colors: {
                primary: "var(--blue-light)",
                accent: "var(--yellow)"
            }
            },
            {
            id: "aqa",
            title: "AUTOMATION QA",
            description:
                "Курс автоматизованого тестування навчить перетворювати повторювані перевірки на стабільні автотести та інтегрувати їх у сучасний процес розробки.",
            stats: ["3 MONTHS", "22 LESSONS", "36 HOURS", "2 МЕНТОРИ", "20 ДОМАШОК", "2 ПРОЄКТИ"],
            learn: [
                "Основи програмування для тестувальників",
                "UI-автоматизація з Playwright або Cypress",
                "Page Object, тестові дані та звітність",
                "Git, CI/CD і запуск тестів у командному процесі"
            ],
            projects: [
                "Набір автоматизованих тестів для вебзастосунку",
                "Тестовий pipeline із автоматичним звітом у CI"
            ],
            colors: {
                primary: "var(--pink)",
                accent: "var(--blue-dark)"
            }
            },
            {
            id: "qa-api",
            title: "QA BACKEND & API",
            description:
                "Спеціалізований курс із перевірки серверної логіки та API. Ти навчишся знаходити проблеми за межами інтерфейсу й контролювати коректність обміну даними.",
            stats: ["2 MONTHS", "16 LESSONS", "26 HOURS", "1 МЕНТОР", "15 ПРАКТИК", "2 ПРОЄКТИ"],
            learn: [
                "HTTP, REST, JSON і клієнт-серверна архітектура",
                "Колекції, змінні та автотести в Postman",
                "Перевірка баз даних за допомогою SQL",
                "Авторизація, статус-коди, логи та негативні сценарії"
            ],
            projects: [
                "Колекція API-тестів із документацією",
                "Комплексна перевірка Back-end навчального продукту"
            ],
            colors: {
                primary: "var(--turquoise)",
                accent: "var(--purple)"
            }
            },
            {
            id: "swift",
            title: "SWIFT FUNDAMENTALS",
            description:
                "Стартовий курс нативної розробки для екосистеми Apple. Ти опануєш Swift, принципи створення інтерфейсів і збереш перші застосунки для iPhone.",
            stats: ["3 MONTHS", "22 LESSONS", "36 HOURS", "2 МЕНТОРИ", "20 ДОМАШОК", "3 ПРОЄКТИ"],
            learn: [
                "Синтаксис Swift, типи даних, функції та колекції",
                "ООП, протоколи, extensions і безпечна робота з optional",
                "SwiftUI, навігація та адаптивні інтерфейси",
                "Мережеві запити, локальні дані й архітектура застосунку"
            ],
            projects: [
                "Персональний трекер звичок на SwiftUI",
                "Застосунок погоди або новин із зовнішнім API",
                "Фінальний iOS-застосунок для портфоліо"
            ],
            colors: {
                primary: "var(--yellow-s)",
                accent: "var(--magenta)"
            }
            },
            {
            id: "python",
            title: "PYTHON DEVELOPMENT",
            description:
                "Базовий курс Python, де ти навчишся писати скрипти, працювати з даними та створювати перші програми.",
            stats: ["2 MONTHS", "20 LESSONS", "30 HOURS", "2 МЕНТОРИ", "20 ДОМАШОК", "2 ПРОЄКТИ"],
            learn: [
                "Основи синтаксису Python",
                "Робота з файлами та даними",
                "ООП у Python",
                "Бібліотеки для роботи з даними (pandas, requests)"
            ],
            projects: [
                "Консольний застосунок (наприклад, менеджер завдань)",
                "Фінальний проєкт — невеликий веб‑додаток або скрипт для автоматизації"
            ],
            colors: {
                primary: "var(--magenta)",   // жовтий для тайтлів
                accent: "var(--yellow-s)" // темно‑жовтий для бордерів та елементів
            }
            },
            {
            id: "python-advanced",
            title: "ADVANCED PYTHON",
            description:
                "Поглиблений курс для тих, хто вже знає основи Python і хоче писати чистий, продуктивний код, працювати з асинхронністю, тестуванням та професійними бібліотеками.",
            stats: ["3 MONTHS", "22 LESSONS", "36 HOURS", "2 МЕНТОРИ", "20 ДОМАШОК", "2 ПРОЄКТИ"],
            learn: [
                "Поглиблене ООП, декоратори, генератори та контекстні менеджери",
                "Асинхронне програмування з asyncio",
                "Тестування з pytest, типізація та якість коду",
                "Робота з даними, API й оптимізація продуктивності"
            ],
            projects: [
                "Асинхронний сервіс збору та обробки даних",
                "Production-ready Python застосунок із тестами та документацією"
            ],
            colors: {
                primary: "var(--blue-dark)",
                accent: "var(--yellow-s)"
            }
            },
            {
            id: "uiux",
            title: "UI/UX DESIGN",
            description:
                "Практичний курс дизайну цифрових продуктів, де ти навчишся досліджувати потреби користувачів, створювати зрозумілі інтерфейси та презентувати рішення у професійному портфоліо.",
            stats: ["2 MONTHS", "18 LESSONS", "28 HOURS", "2 МЕНТОРИ", "18 ДОМАШОК", "3 РОБОТИ В ПОРТФОЛІО"],
            learn: [
                "Figma → компоненти, Auto Layout, стилі та дизайн-системи",
                "UX-дослідження → аудиторія, сценарії та карта шляху користувача",
                "Wireframes і прототипи різної деталізації",
                "Адаптивний UI, типографіка, колір і перевірка зручності"
            ],
            projects: [
                "Прототип лендингу для цифрового продукту",
                "Мобільний застосунок із повним користувацьким сценарієм",
                "Оформлений UX/UI кейс для Behance або власного портфоліо"
            ],
            colors: {
                primary: "var(--blue)",
                accent: "var(--yellow)"
            }
            },
            {
            id: "career-support",
            title: "CAREER SUPPORT",
            description:
                "Кар’єрна програма допоможе впевнено вийти на ринок праці: упакувати досвід, підготувати сильне резюме й портфоліо та відпрацювати реальні сценарії співбесід.",
            stats: ["1 MONTH", "8 WORKSHOPS", "16 HOURS", "2 КАР’ЄРНІ МЕНТОРИ", "ПЕРСОНАЛЬНИЙ ФІДБЕК", "ГОТОВИЙ JOB KIT"],
            learn: [
                "Резюме, LinkedIn і профіль кандидата без типових помилок",
                "Позиціонування навичок та презентація навчальних проєктів",
                "Підготовка до HR- і технічної співбесіди",
                "Стратегія пошуку вакансій, нетворкінг і комунікація з рекрутерами"
            ],
            projects: [
                "Готовий комплект: CV, LinkedIn і структуроване портфоліо",
                "Пробна співбесіда з персональним розбором",
                "Індивідуальний план пошуку першої роботи"
            ],
            colors: {
                primary: "var(--magenta)",
                accent: "var(--turquoise)"
            }
            },
            {
            id: "soft-skills",
            title: "SOFT SKILLS FOR IT",
            description:
                "Курс розвиває навички, які допомагають ефективно працювати в IT-команді, домовлятися, презентувати власні рішення та впевнено реагувати на зміни.",
            stats: ["1 MONTH", "10 LESSONS", "15 HOURS", "1 МЕНТОР", "8 ПРАКТИК", "КОМАНДНИЙ ВОРКШОП"],
            learn: [
                "Комунікація в команді та конструктивний зворотний зв’язок",
                "Тайм-менеджмент, пріоритизація і робота з дедлайнами",
                "Презентація ідей, аргументація та робота із запереченнями",
                "Командна взаємодія, вирішення конфліктів і адаптивність"
            ],
            projects: [
                "Командна симуляція роботи над IT-проєктом",
                "Презентація власного рішення перед групою",
                "Особистий план розвитку soft skills"
            ],
            colors: {
                primary: "var(--pink)",
                accent: "var(--blue-dark)"
            }
            }

        ];

    useEffect(() => {
      if (!hash) return;

      const targetId = decodeURIComponent(hash.slice(1));
      const target = document.getElementById(targetId);

      if (!target) return;

      const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      target.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth", block: "start" });
    }, [hash]);

    return(
    <>
    <CoursesSupportBlok/>
      {courses.map((course) => (
        <section key={course.id} id={course.id} className="course-module">
          <div className="module-info">
            <div className="module-badge">
              <div
                className="purple-square"
                style={{ backgroundColor: course.colors.primary }}
              ></div>
              <div
                className="yellow-circle"
                style={{ backgroundColor: course.colors.accent }}
              ></div>
            </div>
            <ul className="module-stats">
              {course.stats.map((stat, index) => (
                <li key={index}>
                  <strong>{stat}</strong>
                </li>
              ))}
            </ul>
          </div>

          <div className="module-content">
            <div className="module-conteiner">
              <h2
                className="module-title"
                style={{ color: course.colors.primary }}
              >
                {course.title}
              </h2>
              <p className="module-description">{course.description}</p>

              <h3
                className="module-conteiner__title"
                style={{ borderBottom: `2px solid ${course.colors.accent}` }}
              >
                Що ти навчишся
              </h3>
              <ul className="module-learn">
                {course.learn.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>

              <h3
                className="module-conteiner__title"
                style={{ borderBottom: `2px solid ${course.colors.accent}` }}
              >
                Фінальні проєкти
              </h3>
              <ul className="module-learn">
                {course.projects.map((project, index) => (
                  <li key={index}>{project}</li>
                ))}
              </ul>

              <div className="module-actions">
                <button
                  className="module-btn btn"
                  style={{
                    backgroundColor: course.colors.primary,
                    border: `2px solid ${course.colors.accent}`,
                    color: `var(--white)`
                  }}
                >
                  Залишити заявку
                </button>
              </div>
            </div>
          </div>
        </section>
      ))}
    </>
  );

}

export default CoursesPage

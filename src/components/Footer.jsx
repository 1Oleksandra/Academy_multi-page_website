import RobotHeart from '../images/heart-robot.png'
import ParallaxLayer from './ParallaxLayer'


function Footer() {
    return(<>

    <footer className="footer">
        
        <div className="container footer-container">
            <div className="footer-logo">
            <p>Це місце, де ви стаєте частиною успішної IT‑спільноти!</p>
            </div>

            <div className="footer-links">
            <h4>Навігація</h4>
            <ul>
                <li><a href="/">Головна</a></li>
                <li><a href="/about">Про академію</a></li>
                <li><a href="/courses">Курси</a></li>
                <li><a href="/reviews">Відгуки</a></li>
                <li><a href="/projects">Роботи студентів</a></li>
                <li><a href="/news">Новини</a></li>
                <li><a href="/contacts">Контакти</a></li>
            </ul>
            </div>

        <div className="footer-contacts">
            <h4>Контакти</h4>
            <p> Viber/WhatsApp:<a href="tel:+380667388829">+380 66 73 888 29</a> </p>
            <p>Telegram: <a href="https://t.me/leogame_academy_ua">@leogame_academy_ua</a></p>
            <p>Час роботи: 9:00–21:00</p>
            </div>
        </div>
        <div className="footer-robot">
            <p className="footer-name" style={{color: 'var(--blue)'}}>ITLEO</p>
                <div className="footer-img">
                    <ParallaxLayer speed={0.025}>
                        <img src={RobotHeart} alt="robot with heart" />
                    </ParallaxLayer>
                </div>
            <p className="footer-name" style={{color: 'var(--yellow-s)'}}>ACADEMY</p>
        </div>

        <div className="footer-bottom">
            <p>© 2026 ITLEO Academy. Всі права захищені.</p>
        </div>
    </footer>
    </>)
}

export default Footer

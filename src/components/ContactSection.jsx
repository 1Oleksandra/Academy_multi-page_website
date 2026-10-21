
import Button from '../images/button.gif' 

function ContactSection(){
    return(
        <>
          <section className="signup-section">
            <div className="container">
              <h2 className="signup-title">ДО КАР’ЄРИ МРІЇ!</h2>
              
              <div className="signup-content">
                  <div className="signup-left">


              <form className="signup-form">
                <div className="form-group">
                  <label htmlFor="fullname">Ім’я та прізвище</label>
                  <input type="text" id="fullname" name="fullname" required />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input type="email" id="email" name="email" required />
                </div>

                <div className="form-group">
                  <label htmlFor="phone">Телефон</label>
                  <input type="tel" id="phone" name="phone" required />
                </div>

                <div className="form-group">
                  <label htmlFor="course">Вибрати курс</label>
                  <select id="course" name="course" required>
                    <option value="">Оберіть курс...</option>
                    <option value="frontend">Frontend Development</option>
                    <option value="javascript">JavaScript Fundamentals</option>
                    <option value="react">React Development</option>
                    <option value="uiux">UI/UX Design</option>
                    <option value="english">English for IT</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="message">Коментар / питання</label>
                  <textarea id="message" name="message" rows="4"></textarea>
                </div>

                <button type="submit" className="signup-btn btn">Відправити заявку</button>
              </form>
              </div>
              <div className="signup-img">
                    <p className="signup-subtitle">
                Твоя кар’єра в IT починається тут.  
                  Наші ментори проведуть тебе від базових знань до впевнених навичок, які потрібні роботодавцям. <span className='1'>Практика</span>, підтримка та реальні проєкти — усе це чекає на тебе. Залиш заявку, щоб отримати доступ до навчання та зробити перший крок до роботи мрії.
              </p>
                  <img src={Button} alt="button" />
              </div>
              </div>
              
            </div>
</section>





        </>
    )
}

export default ContactSection
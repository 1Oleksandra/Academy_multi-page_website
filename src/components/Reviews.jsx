
import workImgOneGif from '../images/student work/anim-work.gif'
import workImgTwoGif from '../images/student work/anim-work2.gif'
import workImgOne from '../images/student work/image-101-600x338.png'
import workImgTwo from '../images/student work/image-106-300x169.png'
import workImgThree from '../images/student work/image-108-291x300.png'





function Reviews() {
  const reviews = [
    {
      name: "Emily Carter",
      role: "Illustrator",
      text: "Цей курс допоміг мені зрозуміти, як створювати власні концепти, а не просто копіювати.",
      color: "var(--pink)",
      img: workImgOne,
      class: 'review-card'
    },
    {
      name: "Sophie Laurent",
      role: "Graphic Designer",
      text: "Я навчилась працювати з ідеями впевнено. Тепер мої роботи справді мої.",
      color: "var(--blue-dark)",
      class: 'review-card'
    },
    {
      name: "Omar Ali",
      role: "Designer",
      text: "Практичні завдання дали мені впевненість у реальних проєктах.",
      color: "var(--purple)",
      img: workImgTwo,
      class: 'review-card'
    },
    {
        img: workImgOneGif,
        class: 'review-card review-card__big'
    },
    {
      name: "Daniel Weber",
      role: "Motion Designer",
      text: "Найбільше мене вразила підтримка менторів та їхні інсайти.",
      color: "var(--blue)",
      img: workImgThree,
      class: 'review-card'
    },
    {
      name: "Daniel Weber",
      role: "Motion Designer",
      text: "Найбільше мене вразила підтримка менторів та їхні інсайти.",
      color: "var(--purple)",
      class: 'review-card'
    },
    {
      name: "Daniel Weber",
      role: "Motion Designer",
      text: "Найбільше мене вразила підтримка менторів та їхні інсайти.",
      color: "var(--blue-dark)",
      class: 'review-card'
    },
    {
        img: workImgTwoGif,
        class: 'review-card review-card__big',
    }
  ];

  return (
    <section className="reviews">
  <div className="container">
    <h2 className="reviews-title">Відгуки та <span>роботи</span> студентів</h2>
    <div className="reviews-slider">
  <div className="slider-track">
    <div className="slider-group">
      {reviews.map((item, index) => (
        <div key={index} className={item.class} style={{ background: item.color }}>
          {item.img && <img src={item.img} alt={item.name || "work"} className="review-card__img" />}
          <div className="review-card__content">
            {item.name && <h3>{item.name}</h3>}
            {item.role && <p className="review-role">{item.role}</p>}
            {item.text && <p className="review-text">{item.text}</p>}
          </div>
        </div>
      ))}
    </div>

    {/* дубльований контент для плавності */}
    <div className="slider-group" aria-hidden="true">
      {reviews.map((item, index) => (
        <div key={index} className={item.class} style={{ background: item.color }}>
          {item.img && <img src={item.img} alt={item.name || "work"} className="review-card__img" />}
          <div className="review-card__content">
            {item.name && <h3>{item.name}</h3>}
            {item.role && <p className="review-role">{item.role}</p>}
            {item.text && <p className="review-text">{item.text}</p>}
          </div>
        </div>
      ))}
    </div>
  </div>
</div>


  </div>
</section>

  );
}

export default Reviews;

import React, { useState } from "react";

import Oleksiy from '../images/teachers/photo_2025-03-26-19.46.14.jpeg'
import Serhiy from '../images/teachers/pexels-photo-614810-614810-2-scaled.jpg'
import Leonid from '../images/teachers/Screenshot-2025-03-26-at-19.46.53.png'
import Nastya from '../images/teachers/Screenshot-2025-08-07-at-22.44.32.png'



function Teachers(){

    const [checked, setChecked] = useState("t1");

    const teachers = [
  {
    id: 't1',
    name: "Олексій Колба",
    role: "Ментор курсу C#, .NET розробник",
    text: "Навчає сучасним підходам до дизайну та прототипування.",
    img: Oleksiy,
    color: "var(--pink)"
  },
  {
    id: 't2',
    name: "Сергій Немірчик",
    role: "Викладач дизайну та графіки",
    text: "Пояснює JavaScript та React на практичних прикладах.",
    img: Serhiy,
    color: "var(--blue)"
  },
  {
    id: 't3',
    name: "Леонід Ксенчук",
    role: "Веб – розробник, ментор курсу “Full Stack”, QA",
    text: "Ділиться досвідом управління IT‑командами.",
    img: Leonid,
    color: "var(--magenta)"
  },
  {
    id: 't4',
    name: "Анастасія Чумак",
    role: "Ментор, методист",
    text: "Ділиться досвідом управління IT‑командами.",
    img: Nastya,
   color: "var(--blue-dark)"
  }
];

    return(
        <>
    <section className="teachers">
      <div className="container">
        <h2 className="teachers-title">Наші <span>вчителі</span></h2>
        <div className="teachers-container">
          {teachers.map((teacher) => (
            <React.Fragment key={teacher.id}>
              <input
                type="radio"
                name="slide"
                id={teacher.id}
                checked={checked === teacher.id}
                onChange={() => setChecked(teacher.id)}
                className="teacher-input"
              />
              <label htmlFor={teacher.id} className="teacher-card"    style={{
                  background: checked === teacher.id ? teacher.color : "var(--white)",
                  border: `2px solid ${teacher.color}`
                }}>
                
                <div className="teacher-card__inner" >
                  <div className="teacher-img">
                    <img src={teacher.img} alt={teacher.name} />
                  </div>
                  
                  <div className="teacher-card__content">
                    <h3>{teacher.name}</h3>
                    <p className="teacher-role"  style={{
                        color: checked === teacher.id ? "var(--white)"  : teacher.color
                      }}>{teacher.role}</p>
                    <p className="teacher-text" style={{
                        color: checked === teacher.id ? "var(--white)"  : teacher.color
                      }}>{teacher.text}</p>
                  </div>
                </div>
              </label>
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
        </>
    )
}

export default Teachers
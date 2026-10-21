
function BlogSection() {

const posts = [
  {
    id: 1,
    title: "Як почати кар'єру у фронтенді",
    excerpt: "Поради для новачків: з чого почати, які технології вивчати та як скласти портфоліо.",
    color: 'var(--purple)'
  },
  {
    id: 2,
    title: "React: перші кроки",
    excerpt: "Основи бібліотеки React, створення компонентів та управління станом.",
    color: 'var(--blue)'
  },
  {
    id: 3,
    title: "DevOps для тестувальників",
    excerpt: "Чому знання DevOps важливі для QA-спеціалістів та як їх застосовувати.",
    color: 'var(--turquoise)'
  },
  {
    id: 4,
    title: "Робота над реальними проектами",
    excerpt: "Як навчання на практичних кейсах допомагає швидше отримати роботу.",
    color: "var(--pink)"
  },
  {
    id: 3,
    title: "DevOps для тестувальників",
    excerpt: "Чому знання DevOps важливі для QA-спеціалістів та як їх застосовувати.",
    color: "var(--yellow-s)"
  },
  {
    id: 4,
    title: "Робота над реальними проектами",
    excerpt: "Як навчання на практичних кейсах допомагає швидше отримати роботу.",
    color: "var(--blue-dark)"
  }
];


    return(
        <>
            <section className="blog">
                <div className="container">
                    <h2 className="blog-title">Наш <span>блог</span></h2>
                    <div className="blog-grid">
                    {posts.map((post, index) => (
                        <div key={index} className="blog-card" style={{ border: `1px solid ${post.color}` }}>
                        {/* <div className="blog-img">
                            <img src={post.img} alt={post.title} />
                        </div> */}
                        <div className="blog-content">
                            <h2 className="blog-card__title" style={{color: post.color}}>{post.title}</h2>
                            <p className="blog-card__excerpt">{post.excerpt}</p>
                            <a href={`/blog/${post.id}`} className="blog-btn" style={{background: post.color}}>Читати далі</a>
                        </div>
                        </div>
                    ))}
                    </div>
                </div>
            </section>

        </>
    )
}

export default BlogSection
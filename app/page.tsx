import ReelThumb from "@/components/ReelThumb";
import { pageInfo, services } from "@/data/research";

export default function Home() {
  const total = services.reduce((n, s) => n + s.findings.length, 0);

  return (
    <main>
      <header className="hero">
        <div className="registration" aria-hidden>
          <span className="reg-c" />
          <span className="reg-m" />
          <span className="reg-y" />
          <span className="reg-k" />
        </div>
        <h1>{pageInfo.title}</h1>
        <p className="hero-desc">{pageInfo.description}</p>
        <p className="hero-meta">
          서비스 {services.length}곳, 릴스 사례 {total}개
        </p>
      </header>

      <nav className="service-nav" aria-label="서비스 목록">
        {services.map((s) => (
          <a key={s.id} href={`#${s.id}`}>
            {s.name}
            <span className="count">{s.findings.length}</span>
          </a>
        ))}
      </nav>

      {services.map((service) => (
        <section key={service.id} id={service.id} className="service">
          <div className="service-head">
            <h2>{service.name}</h2>
            <p>릴스 사례 {service.findings.length}개</p>
          </div>

          <div className="findings">
            {service.findings.map((f) => (
              <article key={f.url} className="finding">
                <ReelThumb
                  url={f.url}
                  thumbnail={f.thumbnail}
                  alt={`${service.name} 릴스: ${f.summary}`}
                />
                <div className="finding-body">
                  <span className="tag">{f.tag}</span>
                  <p className="summary">{f.summary}</p>
                  <a className="reel-link" href={f.url} target="_blank" rel="noopener noreferrer">
                    인스타그램에서 보기
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>
      ))}

      <footer className="footer">마케팅 리서치 내부 자료</footer>
    </main>
  );
}

import HeroFrame from "@/components/HeroFrame";
import ThemeToggle from "@/components/ThemeToggle";
import {
  siteUrl,
  profile,
  metrics,
  projects,
  research,
  skills,
  uiuxCareer,
  frontendCareer,
  repos,
} from "@/data/content";

// Structured data: tells search engines and AI tools who this page is about,
// and links the site to the same person's LinkedIn, GitHub and X profiles.
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  url: siteUrl,
  mainEntity: {
    "@type": "Person",
    "@id": `${siteUrl}/#person`,
    name: profile.name,
    url: siteUrl,
    description: profile.summary,
    jobTitle: profile.roles,
    email: `mailto:${profile.email}`,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Bengaluru",
      addressRegion: "Karnataka",
      addressCountry: "IN",
    },
    sameAs: Object.values(profile.links),
    knowsAbout: skills.flatMap((g) => g.items),
    alumniOf: [
      { "@type": "CollegeOrUniversity", name: "Shri Venkateshwara University" },
      { "@type": "CollegeOrUniversity", name: "Veer Bahadur Singh Purvanchal University" },
    ],
  },
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
      />
      <a className="skip" href="#work">Skip to work</a>

      <header className="nav">
        <a href="#top" className="brand" aria-label="Shifali Gwal home">
          <span className="brand-mark">SG</span>
        </a>
        <nav aria-label="Primary">
          <a href="#work">Work</a>
          <a href="#research" className="nav-hidden">Research</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </nav>
        <ThemeToggle />
      </header>

      <main id="top">
        <section className="hero wrap">
          <div className="hero-copy">
            <p className="status"><span className="dot" aria-hidden="true" />{profile.status}</p>
            <h1>
              {profile.name}
              <span className="h1-sub">
                {profile.roles[0]} <em>&amp;</em> {profile.roles[1]}
              </span>
            </h1>
            <p className="lede">{profile.intro}</p>
            <div className="cta">
              <a className="btn primary" href="#work">See my work</a>
              <a className="btn" href={`mailto:${profile.email}`}>Email me</a>
            </div>
            <p className="where">{profile.location}</p>
          </div>
          <HeroFrame />
        </section>

        <section className="wrap metrics">
          <details className="collapse">
            <summary><h2>Results in numbers</h2></summary>
            <ul>
              {metrics.map((m) => (
                <li key={m.label}>
                  <strong>{m.value}</strong>
                  <span>{m.label}</span>
                  <small>{m.note}</small>
                </li>
              ))}
            </ul>
          </details>
        </section>

        <section id="work" className="wrap section">
          <h2>Selected work</h2>
          <div className="projects">
            {projects.map((p) => (
              <article key={p.id} className="project">
                <div className="project-head">
                  <span className={`tag ${p.kind === "Design" ? "tag-design" : "tag-eng"}`}>
                    {p.kind}
                  </span>
                  <span className="period">{p.period}</span>
                </div>
                <h3>{p.title}</h3>
                <p className="org">{p.org}</p>
                <p>{p.summary}</p>
                <ul className="points">
                  {p.points.map((pt) => (
                    <li key={pt}>{pt}</li>
                  ))}
                </ul>
                <ul className="chips" aria-label="Tools">
                  {p.stack.map((s) => (
                    <li key={s}>{s}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="wrap section about">
          <h2>About</h2>
          <div className="about-body">
            {profile.about.map((t) => (
              <p key={t}>{t}</p>
            ))}
          </div>
        </section>

        <section id="research" className="wrap section">
          <details className="collapse">
            <summary><h2>Research</h2></summary>
            <article className="research">
              <p className="org">{research.context}</p>
              <h3>{research.title}</h3>
              <p>{research.summary}</p>
              <dl>
                {research.facts.map(([k, v]) => (
                  <div key={k}>
                    <dt>{k}</dt>
                    <dd>{v}</dd>
                  </div>
                ))}
              </dl>
              <ul className="chips" aria-label="Tools">
                {research.stack.map((s) => (
                  <li key={s}>{s}</li>
                ))}
              </ul>
            </article>
          </details>
        </section>

        <section id="skills" className="wrap section">
          <h2>Skills</h2>
          <div className="skills">
            {skills.map((g) => (
              <div key={g.group}>
                <h3>{g.group}</h3>
                <ul className="chips">
                  {g.items.map((i) => (
                    <li key={i}>{i}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className="wrap section">
          <details className="collapse">
            <summary><h2>UI/UX career</h2></summary>
            <ol className="timeline">
              {uiuxCareer.map((t) => (
                <li key={t.what + t.when}>
                  <span className="when">{t.when}</span>
                  <span className="what">{t.what}</span>
                  <span className="where-at">{t.where}</span>
                </li>
              ))}
            </ol>
          </details>
        </section>

        <section className="wrap section">
          <details className="collapse">
            <summary><h2>Frontend career</h2></summary>
            <ol className="timeline">
              {frontendCareer.map((t) => (
                <li key={t.what + t.when}>
                  <span className="when">{t.when}</span>
                  <span className="what">{t.what}</span>
                  <span className="where-at">{t.where}</span>
                </li>
              ))}
            </ol>
          </details>
        </section>

        <section className="wrap section">
          <details className="collapse">
            <summary><h2>On GitHub</h2></summary>
            <ul className="repos">
              {repos.map((r) => (
                <li key={r.name}>
                  <a href={`${profile.links.github}/${r.name}`} target="_blank" rel="noreferrer">
                    {r.name}
                  </a>
                  <span>{r.note}</span>
                </li>
              ))}
            </ul>
          </details>
        </section>

        <section id="contact" className="wrap contact">
          <h2>Let&rsquo;s work together</h2>
          <p>
            I&rsquo;m open to {profile.openTo.join(", ")} roles, hybrid or remote.
          </p>
          <div className="cta">
            <a className="btn primary" href={`mailto:${profile.email}`}>{profile.email}</a>
            <a className="btn" href={profile.links.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
            <a className="btn" href={profile.links.github} target="_blank" rel="noreferrer">GitHub</a>
            <a className="btn" href={profile.links.x} target="_blank" rel="noreferrer">X</a>
          </div>
        </section>
      </main>

      <footer className="wrap foot">
        <span>© {new Date().getFullYear()} {profile.name}</span>
        <span>Designed and built by me with Next.js</span>
      </footer>
    </>
  );
}

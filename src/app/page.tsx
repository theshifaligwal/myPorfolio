"use client";

import { useEffect, useState } from "react";
import HeroFrame from "@/components/HeroFrame";
import {
  profile,
  metrics,
  projects,
  research,
  skills,
  uiuxCareer,
  frontendCareer,
  repos,
} from "@/data/content";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = savedTheme ? savedTheme === "dark" : false;
    setDarkMode(prefersDark);
    document.documentElement.setAttribute("data-theme", prefersDark ? "dark" : "light");
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", darkMode ? "dark" : "light");
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  useEffect(() => {
    const heroCopy = document.querySelector(".hero-copy") as HTMLElement | null;
    const heroFrame = document.querySelector(".hero-frame") as HTMLElement | null;

    if (!heroCopy || !heroFrame) return;

    const updateMotion = () => {
      const scrollY = window.scrollY || 0;
      const progress = Math.min(scrollY / 600, 1);

      heroCopy.style.transform = `translateY(${scrollY * 0.12}px)`;
      heroCopy.style.opacity = `${1 - progress * 0.2}`;

      heroFrame.style.transform = `translateY(${scrollY * 0.18}px)`;
      heroFrame.style.opacity = `${1 - progress * 0.1}`;
    };

    updateMotion();
    window.addEventListener("scroll", updateMotion, { passive: true });

    return () => window.removeEventListener("scroll", updateMotion);
  }, []);

  return (
    <>
      <a className="skip" href="#work">Skip to work</a>

      <header className="nav">
        <a href="#top" className="brand">Shifali Gwal</a>
        <nav aria-label="Primary">
          <a href="#work">Work</a>
          <a href="#research" className="nav-hidden">Research</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </nav>
        <button
          type="button"
          className={`theme-toggle ${darkMode ? "is-dark" : "is-light"}`}
          onClick={() => setDarkMode((current) => !current)}
          aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
          title={darkMode ? "Switch to light mode" : "Switch to dark mode"}
        >
          <span className="theme-toggle-track">
            <span className="theme-toggle-thumb" aria-hidden="true" />
          </span>
          <span className="theme-toggle-label">{darkMode ? "Dark" : "Light"}</span>
        </button>
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

        <section className="wrap metrics hidden-section" aria-label="Results">
          <ul>
            {metrics.map((m) => (
              <li key={m.label}>
                <strong>{m.value}</strong>
                <span>{m.label}</span>
                <small>{m.note}</small>
              </li>
            ))}
          </ul>
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

        <section id="research" className="wrap section hidden-section">
          <h2>Research</h2>
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

        <section className="wrap section hidden-section">
          <h2>UI/UX career</h2>
          <ol className="timeline">
            {uiuxCareer.map((t) => (
              <li key={t.what + t.when}>
                <span className="when">{t.when}</span>
                <span className="what">{t.what}</span>
                <span className="where-at">{t.where}</span>
              </li>
            ))}
          </ol>
        </section>

        <section className="wrap section hidden-section">
          <h2>Frontend career</h2>
          <ol className="timeline">
            {frontendCareer.map((t) => (
              <li key={t.what + t.when}>
                <span className="when">{t.when}</span>
                <span className="what">{t.what}</span>
                <span className="where-at">{t.where}</span>
              </li>
            ))}
          </ol>
        </section>

        <section className="wrap section hidden-section">
          <h2>On GitHub</h2>
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

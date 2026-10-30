"use client";

import { useSyncExternalStore } from "react";

type Theme = "dark" | "light";

// The inline script in layout.tsx sets data-theme before first paint (dark unless
// the visitor chose light), so this component only reads it and never causes a flash.
function subscribe(onChange: () => void) {
  const observer = new MutationObserver(onChange);
  observer.observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });
  return () => observer.disconnect();
}

const getTheme = (): Theme =>
  document.documentElement.getAttribute("data-theme") === "light" ? "light" : "dark";

export default function ThemeToggle() {
  const theme = useSyncExternalStore(subscribe, getTheme, (): Theme => "dark");
  const darkMode = theme === "dark";

  const toggle = () => {
    const next: Theme = darkMode ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", next);
    document
      .querySelector('meta[name="theme-color"]')
      ?.setAttribute("content", next === "dark" ? "#181412" : "#f5f1ee");
    try {
      localStorage.setItem("theme", next);
    } catch {}
  };

  return (
    <button
      type="button"
      className={`theme-toggle ${darkMode ? "is-dark" : "is-light"}`}
      onClick={toggle}
      aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
      title={darkMode ? "Switch to light mode" : "Switch to dark mode"}
    >
      <span className="theme-toggle-track">
        <span className="theme-toggle-thumb" aria-hidden="true" />
      </span>
      <span className="theme-toggle-label">{darkMode ? "Dark" : "Light"}</span>
    </button>
  );
}

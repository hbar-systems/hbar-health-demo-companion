/**
 * hbar.health — Demo (presenter companion)
 *
 * A static reference the operator speaks from while demonstrating to a Praxis:
 * overview, why-for-practice, the tools, architecture/where-data-lives, legal
 * notes, and an objection-handling FAQ. DE/EN toggle so the operator reads
 * English while showing German. No model, no data.
 */

import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import { type Theme, getStoredTheme, storeTheme, colors } from "./theme";
import {
  type Lang,
  PROSE_SECTIONS,
  OVERVIEW,
  WHY,
  ARCHITECTURE,
  LEGAL,
  ROADMAP,
  TOOLS,
  FAQ,
} from "./content";
import "./styles.css";

const LANG_KEY = "hbar-health-lang";
function getStoredLang(): Lang {
  try {
    if (localStorage.getItem(LANG_KEY) === "en") return "en";
  } catch {
    // fallback
  }
  return "de";
}
function storeLang(l: Lang): void {
  try {
    localStorage.setItem(LANG_KEY, l);
  } catch {
    // ignore
  }
}

type SectionId = "overview" | "why" | "tools" | "architecture" | "legal" | "faq" | "roadmap";

const NAV: { id: SectionId; de: string; en: string }[] = [
  { id: "overview", de: OVERVIEW.title.de, en: OVERVIEW.title.en },
  { id: "why", de: WHY.title.de, en: WHY.title.en },
  { id: "tools", de: "Die Werkzeuge", en: "The tools" },
  { id: "architecture", de: ARCHITECTURE.title.de, en: ARCHITECTURE.title.en },
  { id: "legal", de: LEGAL.title.de, en: LEGAL.title.en },
  { id: "faq", de: "FAQ", en: "FAQ" },
  { id: "roadmap", de: ROADMAP.title.de, en: ROADMAP.title.en },
];

function App() {
  const [theme, setTheme] = useState<Theme>(getStoredTheme);
  const [lang, setLang] = useState<Lang>(getStoredLang);
  const [section, setSection] = useState<SectionId>("overview");
  const c = colors(theme);

  const toggleTheme = () => {
    const next: Theme = theme === "light" ? "dark" : "light";
    setTheme(next);
    storeTheme(next);
  };
  const toggleLang = () => {
    const next: Lang = lang === "de" ? "en" : "de";
    setLang(next);
    storeLang(next);
  };

  const prose = PROSE_SECTIONS.find((s) => s.id === section);

  const paraStyle: React.CSSProperties = { fontSize: "0.98rem", lineHeight: 1.7, color: c.text, margin: "0 0 0.9rem 0" };

  return (
    <div style={{ minHeight: "100vh", background: c.bg, color: c.text, padding: "0 1rem" }}>
      <div style={{ maxWidth: 780, margin: "0 auto", paddingTop: "1rem", paddingBottom: "3rem" }}>
        {/* Nav */}
        <nav style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "0.7rem 0", borderBottom: `1px solid ${c.navBorder}`, marginBottom: "0.5rem", gap: "0.75rem", flexWrap: "wrap" }}>
          <span style={{ fontSize: "0.9rem", fontWeight: 800, color: c.brand, letterSpacing: "0.04em" }}>hbar.health · Demo</span>
          <div style={{ display: "flex", gap: "0.4rem" }}>
            <button type="button" onClick={toggleLang} style={{ padding: "0.2rem 0.55rem", fontSize: "0.75rem", fontWeight: 600, border: `1px solid ${c.border}`, borderRadius: 4, background: "transparent", color: c.muted, cursor: "pointer" }}>
              {lang === "de" ? "DE → EN" : "EN → DE"}
            </button>
            <button type="button" onClick={toggleTheme} style={{ padding: "0.2rem 0.55rem", fontSize: "0.75rem", fontWeight: 600, border: `1px solid ${c.border}`, borderRadius: 4, background: "transparent", color: c.muted, cursor: "pointer" }}>
              {theme === "light" ? "☀ → ☾" : "☾ → ☀"}
            </button>
          </div>
        </nav>

        {/* Section pills */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem", margin: "1rem 0 1.5rem 0" }}>
          {NAV.map((n) => (
            <button
              key={n.id}
              type="button"
              onClick={() => setSection(n.id)}
              style={{
                padding: "0.35rem 0.8rem",
                fontSize: "0.82rem",
                fontWeight: 600,
                border: `1px solid ${section === n.id ? c.brand : c.border}`,
                borderRadius: 999,
                background: section === n.id ? c.brand : "transparent",
                color: section === n.id ? "#fff" : c.muted,
                cursor: "pointer",
              }}
            >
              {lang === "de" ? n.de : n.en}
            </button>
          ))}
        </div>

        {/* Content */}
        {prose && (
          <div>
            <h1 style={{ fontSize: "1.5rem", fontWeight: 800, margin: "0 0 1rem 0", color: c.text }}>{prose.title[lang]}</h1>
            {prose.paras[lang].map((p, i) => (
              <p key={i} style={paraStyle}>{p}</p>
            ))}
          </div>
        )}

        {section === "tools" && (
          <div>
            <h1 style={{ fontSize: "1.5rem", fontWeight: 800, margin: "0 0 1rem 0", color: c.text }}>{lang === "de" ? "Die Werkzeuge" : "The tools"}</h1>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: "0.7rem" }}>
              {TOOLS.map((t, i) => (
                <div key={i} style={{ background: c.card, border: `1px solid ${c.border}`, borderRadius: 10, padding: "0.85rem 1rem" }}>
                  <div style={{ fontWeight: 700, color: c.text, fontSize: "0.95rem" }}>{t[lang].name}</div>
                  <div style={{ fontSize: "0.86rem", color: c.muted, marginTop: "0.2rem", lineHeight: 1.5 }}>{t[lang].desc}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {section === "faq" && (
          <div>
            <h1 style={{ fontSize: "1.5rem", fontWeight: 800, margin: "0 0 1rem 0", color: c.text }}>FAQ</h1>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              {FAQ.map((f, i) => (
                <div key={i} style={{ background: c.card, border: `1px solid ${c.border}`, borderRadius: 10, padding: "0.9rem 1.1rem" }}>
                  <div style={{ fontWeight: 700, color: c.text, fontSize: "0.92rem", marginBottom: "0.35rem" }}>{f[lang].q}</div>
                  <div style={{ fontSize: "0.9rem", color: c.muted, lineHeight: 1.6 }}>{f[lang].a}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        <p style={{ fontSize: "0.75rem", color: c.muted, marginTop: "2.5rem", lineHeight: 1.55 }}>
          {lang === "de"
            ? "Interner Präsentations-Begleiter. Rechtliche Aussagen sind vorläufig und werden anwaltlich geprüft."
            : "Internal presenter companion. Legal statements are provisional, pending lawyer review."}
        </p>
      </div>
    </div>
  );
}

const root = createRoot(document.getElementById("root")!);
root.render(<App />);

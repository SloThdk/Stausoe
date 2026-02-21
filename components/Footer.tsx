"use client";
import Link from "next/link";

export default function Footer() {
  return (
    <footer style={{ background: "var(--st-dark)", color: "rgba(255,255,255,0.85)" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "60px 24px 32px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))", gap: 48, marginBottom: 48 }}>

          {/* Brand */}
          <div>
            <p style={{ fontFamily: "var(--font-heading)", fontSize: 22, fontWeight: 700, color: "#fff", marginBottom: 4 }}>
              Restaurant
            </p>
            <p style={{ fontFamily: "var(--font-heading)", fontSize: 18, color: "var(--st-gold)", letterSpacing: "0.12em", marginBottom: 16 }}>
              STAUSØ
            </p>
            <p style={{ fontSize: 14, lineHeight: 1.7, color: "rgba(255,255,255,0.6)", maxWidth: 220 }}>
              Over 40 års tradition for god dansk mad og hyggelige selskaber i Henne.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 style={{ fontSize: 11, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--st-gold)", marginBottom: 20, fontWeight: 600 }}>
              Navigation
            </h4>
            {[
              { href: "/",          label: "Forside"   },
              { href: "/menu",      label: "Menukort"  },
              { href: "/selskaber", label: "Selskaber" },
              { href: "/kontakt",   label: "Kontakt"   },
            ].map(l => (
              <Link key={l.href} href={l.href} prefetch={false} style={{
                display: "block", marginBottom: 12, textDecoration: "none",
                fontSize: 14, color: "rgba(255,255,255,0.65)",
                transition: "color 0.2s",
              }}
              onMouseEnter={e=>(e.currentTarget.style.color="#fff")}
              onMouseLeave={e=>(e.currentTarget.style.color="rgba(255,255,255,0.65)")}>
                {l.label}
              </Link>
            ))}
          </div>

          {/* Contact */}
          <div>
            <h4 style={{ fontSize: 11, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--st-gold)", marginBottom: 20, fontWeight: 600 }}>
              Kontakt
            </h4>
            <p style={{ fontSize: 14, color: "rgba(255,255,255,0.65)", lineHeight: 1.9 }}>
              Klintingvej 204<br />
              6854 Henne<br />
              <a href="tel:75255101" style={{ color: "var(--st-gold)", textDecoration: "none" }}>75 25 51 01</a>
            </p>
          </div>

          {/* Hours */}
          <div>
            <h4 style={{ fontSize: 11, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--st-gold)", marginBottom: 20, fontWeight: 600 }}>
              Åbningstider
            </h4>
            <p style={{ fontSize: 14, color: "rgba(255,255,255,0.65)", lineHeight: 1.9 }}>
              Kun efter forudgående<br />
              reservation.<br />
              <br />
              Ring os på<br />
              <a href="tel:75255101" style={{ color: "var(--st-gold)", textDecoration: "none" }}>75 25 51 01</a>
            </p>
          </div>
        </div>

        <div style={{ borderTop: "1px solid rgba(255,255,255,0.1)", paddingTop: 24, display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 12 }}>
          <p style={{ fontSize: 13, color: "rgba(255,255,255,0.4)" }}>
            © {new Date().getFullYear()} Restaurant Stausø · Henne
          </p>
          <p style={{ fontSize: 13, color: "rgba(255,255,255,0.3)" }}>
            Forretter · Stegeretter · Selskaber
          </p>
        </div>
      </div>
    </footer>
  );
}

"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="14" height="14" style={{ flexShrink: 0 }}>
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.07 12a19.79 19.79 0 0 1-3.07-8.67 2 2 0 0 1 1.99-2.18h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.09 9.91a16 16 0 0 0 5.997 5.997l1.17-1.17a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
    </svg>
  );
}

const links = [
  { href: "/",              label: "Forside"       },
  { href: "/menu",          label: "Menukort"      },
  { href: "/lokaler",       label: "Lokaler"       },
  { href: "/selskaber",     label: "Selskaber"     },
  { href: "/abningstider",  label: "Åbningstider"  },
  { href: "/kontakt",       label: "Kontakt"       },
];

export default function Navigation() {
  const pathname   = usePathname();
  const [solid, setSolid]       = useState(false);
  const [open, setOpen]         = useState(false);

  const norm = (p: string) => p.replace(/\/$/, "") || "/";

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  const navBg = solid || open
    ? "rgba(248,242,230,0.97)"
    : "transparent";
  const textColor   = solid || open ? "var(--st-text)"  : "#fff";
  const borderColor = solid || open ? "var(--st-border)" : "transparent";

  return (
    <>
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 50,
        background: navBg,
        borderBottom: `1px solid ${borderColor}`,
        backdropFilter: solid || open ? "blur(12px)" : "none",
        transition: "background 0.3s, border-color 0.3s",
      }}>
        <div style={{
          maxWidth: 1200, margin: "0 auto",
          display: "flex", alignItems: "center",
          padding: "0 24px", height: 68,
          justifyContent: "space-between",
        }}>
          {/* Logo — cropped from their actual restaurant photo */}
          <Link href="/" prefetch={false} style={{ display: "flex", alignItems: "center", textDecoration: "none" }}>
            <div style={{
              width: 144, height: 46, overflow: "hidden", position: "relative", borderRadius: 3,
              boxShadow: solid || open ? "0 2px 12px rgba(0,0,0,0.18)" : "none",
              transition: "box-shadow 0.3s",
            }}>
              <div style={{
                position: "absolute", inset: 0,
                backgroundImage: "url('/images/topfoto.jpg')",
                backgroundSize: "480%",
                backgroundPosition: "44% 33%",
              }} />
            </div>
          </Link>

          {/* Desktop links */}
          <div className="nav-desktop" style={{ display: "flex", alignItems: "center", gap: 24 }}>
            {links.map((l) => {
              const active = norm(pathname) === norm(l.href);
              return (
                <Link key={l.href} href={l.href} prefetch={false} style={{
                  fontSize: 13, fontWeight: 500,
                  letterSpacing: "0.08em", textTransform: "uppercase",
                  textDecoration: "none",
                  color: active ? "var(--st-gold)" : textColor,
                  paddingBottom: 4,
                  borderBottom: active ? "2px solid var(--st-gold)" : "2px solid transparent",
                  transition: "color 0.2s, border-color 0.2s",
                }}>
                  {l.label}
                </Link>
              );
            })}
            <a href="tel:75255101" style={{
              display: "flex", alignItems: "center", gap: 7,
              padding: "9px 20px", borderRadius: 4,
              background: "var(--st-gold)",
              color: "#fff", fontSize: 13, fontWeight: 600,
              textDecoration: "none", letterSpacing: "0.04em",
              transition: "opacity 0.2s, transform 0.2s",
            }}
            onMouseEnter={e => (e.currentTarget.style.opacity = "0.88")}
            onMouseLeave={e => (e.currentTarget.style.opacity = "1")}>
              <PhoneIcon /> 75 25 51 01
            </a>
          </div>

          {/* Burger */}
          <button onClick={() => setOpen(v => !v)} aria-label="Menu"
            className="nav-burger"
            style={{ display: "none", background: "none", border: "none", padding: 8, color: textColor }}>
            {open ? (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
              </svg>
            ) : (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/>
              </svg>
            )}
          </button>
        </div>

        {/* Mobile menu */}
        {open && (
          <div style={{
            background: "rgba(248,242,230,0.99)", borderTop: "1px solid var(--st-border)",
            padding: "20px 24px 28px",
          }}>
            {links.map((l) => {
              const active = norm(pathname) === norm(l.href);
              return (
                <Link key={l.href} href={l.href} prefetch={false} style={{
                  display: "block", padding: "14px 0",
                  borderBottom: "1px solid var(--st-border)",
                  textDecoration: "none", fontSize: 16, fontWeight: 500,
                  color: active ? "var(--st-gold)" : "var(--st-text)",
                  letterSpacing: "0.04em",
                }}>
                  {l.label}
                </Link>
              );
            })}
            <a href="tel:75255101" style={{
              display: "block", marginTop: 20, textAlign: "center",
              padding: "14px 0", background: "var(--st-gold)", borderRadius: 8,
              color: "#fff", fontWeight: 600, fontSize: 16, textDecoration: "none",
            }}>
              Ring: 75 25 51 01
            </a>
          </div>
        )}
      </nav>

      <style>{`
        @media (max-width: 1020px) {
          .nav-desktop { display: none !important; }
          .nav-burger   { display: flex !important; }
        }
      `}</style>
    </>
  );
}

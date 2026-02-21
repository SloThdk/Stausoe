"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

const links = [
  { href: "/",           label: "Forside"    },
  { href: "/menu",       label: "Menukort"   },
  { href: "/selskaber",  label: "Selskaber"  },
  { href: "/kontakt",    label: "Kontakt"    },
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
          {/* Logo */}
          <Link href="/" prefetch={false} style={{
            display: "flex", alignItems: "center", gap: 12, textDecoration: "none",
          }}>
            <span style={{
              fontFamily: "var(--font-heading)", fontSize: 20, fontWeight: 700,
              color: solid || open ? "var(--st-green)" : "#fff",
              letterSpacing: "0.02em", lineHeight: 1.2,
            }}>
              Restaurant<br />
              <span style={{ color: "var(--st-gold)", fontSize: 16, fontWeight: 400, letterSpacing: "0.08em" }}>
                STAUSØ
              </span>
            </span>
          </Link>

          {/* Desktop links */}
          <div className="nav-desktop" style={{ display: "flex", alignItems: "center", gap: 36 }}>
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
              padding: "9px 20px", borderRadius: 6,
              background: "var(--st-gold)",
              color: "#fff", fontSize: 13, fontWeight: 600,
              textDecoration: "none", letterSpacing: "0.04em",
              transition: "opacity 0.2s, transform 0.2s",
            }}
            onMouseEnter={e => (e.currentTarget.style.opacity = "0.88")}
            onMouseLeave={e => (e.currentTarget.style.opacity = "1")}>
              📞 75 25 51 01
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
        @media (max-width: 820px) {
          .nav-desktop { display: none !important; }
          .nav-burger   { display: flex !important; }
        }
      `}</style>
    </>
  );
}

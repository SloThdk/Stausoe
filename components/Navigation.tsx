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
  { href: "/",             label: "Forside"      },
  { href: "/menu",         label: "Menukort"     },
  { href: "/lokaler",      label: "Lokaler"      },
  { href: "/selskaber",    label: "Selskaber"    },
  { href: "/abningstider", label: "Åbningstider" },
  { href: "/kontakt",      label: "Kontakt"      },
];

export default function Navigation() {
  const pathname = usePathname();
  const [solid, setSolid] = useState(false);
  const [open,  setOpen]  = useState(false);

  const norm = (p: string) => p.replace(/\/$/, "") || "/";

  useEffect(() => {
    // Hysteresis: go solid at 60px, only go back transparent below 20px
    // Prevents iOS rubber-band bounce from toggling the state
    const onScroll = () => {
      const y = window.scrollY;
      setSolid(prev => {
        if (!prev && y > 60)  return true;
        if (prev  && y < 20)  return false;
        return prev;
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  // Always dark — no cream/white flash. Transparent at top, warm dark when scrolled.
  const navBg = solid || open
    ? "rgba(16,10,4,0.97)"
    : "rgba(0,0,0,0)";

  return (
    <>
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 50,
        background: navBg,
        borderBottom: solid || open ? "1px solid rgba(255,255,255,0.07)" : "1px solid transparent",
        backdropFilter: solid || open ? "blur(14px)" : "none",
        WebkitBackdropFilter: solid || open ? "blur(14px)" : "none",
        transition: "background 0.35s ease, border-color 0.35s ease",
      }}>
        <div style={{
          maxWidth: 1200, margin: "0 auto",
          display: "flex", alignItems: "center",
          padding: "0 24px", height: 68,
          justifyContent: "space-between",
        }}>
          {/* Logo */}
          <Link href="/" prefetch={false} style={{ display: "flex", alignItems: "center", textDecoration: "none", lineHeight: 1.1 }}>
            <span style={{
              fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: 21,
              color: "#fff", letterSpacing: "-0.01em",
            }}>
              Restaurant
            </span>
            <span style={{
              fontFamily: "var(--font-heading)", fontStyle: "italic", fontWeight: 400,
              fontSize: 26, color: "var(--st-gold)", marginLeft: 7, letterSpacing: "0.01em",
            }}>
              Stausø
            </span>
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
                  color: active ? "var(--st-gold)" : "#fff",
                  paddingBottom: 4,
                  borderBottom: active ? "2px solid var(--st-gold)" : "2px solid transparent",
                  transition: "color 0.2s, border-color 0.2s",
                  opacity: active ? 1 : 0.85,
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
              transition: "opacity 0.2s",
            }}
            onMouseEnter={e => (e.currentTarget.style.opacity = "0.85")}
            onMouseLeave={e => (e.currentTarget.style.opacity = "1")}>
              <PhoneIcon /> 75 25 51 01
            </a>
          </div>

          {/* Burger */}
          <button onClick={() => setOpen(v => !v)} aria-label="Menu"
            className="nav-burger"
            style={{ display: "none", background: "none", border: "none", padding: 8, color: "#fff" }}>
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

        {/* Mobile menu — dark */}
        {open && (
          <div style={{
            background: "rgba(16,10,4,0.99)",
            borderTop: "1px solid rgba(255,255,255,0.08)",
            padding: "20px 24px 28px",
          }}>
            {links.map((l) => {
              const active = norm(pathname) === norm(l.href);
              return (
                <Link key={l.href} href={l.href} prefetch={false} style={{
                  display: "block", padding: "14px 0",
                  borderBottom: "1px solid rgba(255,255,255,0.07)",
                  textDecoration: "none", fontSize: 16, fontWeight: 500,
                  color: active ? "var(--st-gold)" : "#fff",
                  letterSpacing: "0.04em", opacity: active ? 1 : 0.8,
                }}>
                  {l.label}
                </Link>
              );
            })}
            <a href="tel:75255101" style={{
              display: "block", marginTop: 20, textAlign: "center",
              padding: "14px 0", background: "var(--st-gold)", borderRadius: 4,
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

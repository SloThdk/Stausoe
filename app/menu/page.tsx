"use client";
import Image from "next/image";
import Link from "next/link";
import { menuCategories, buffetMenus, kaffebord } from "@/lib/menu-data";
import AnimateIn from "@/components/AnimateIn";

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="17" height="17" style={{ flexShrink: 0 }}>
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.07 12a19.79 19.79 0 0 1-3.07-8.67 2 2 0 0 1 1.99-2.18h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.09 9.91a16 16 0 0 0 5.997 5.997l1.17-1.17a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
    </svg>
  );
}

export default function MenuPage() {
  return (
    <main>
      {/* ── PAGE HEADER ── */}
      <section style={{
        position: "relative", paddingTop: 68,
        minHeight: 320, display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden",
      }}>
        <Image src="/images/interior_glasses.jpg" alt="Elegant bordopdækning hos Restaurant Stausø"
          fill priority quality={88} style={{ objectFit: "cover", objectPosition: "center 55%" }} />
        <div style={{ position: "absolute", inset: 0, background: "rgba(10,6,2,0.75)" }} />
        <div style={{ position: "relative", textAlign: "center", padding: "64px 24px 56px" }}>
          <p style={{ fontSize: 11, letterSpacing: "0.26em", color: "var(--st-gold)", textTransform: "uppercase", fontWeight: 600, marginBottom: 16 }}>Menukort</p>
          <h1 style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(36px, 5vw, 64px)", color: "#fff", fontWeight: 700, lineHeight: 1.05, marginBottom: 14 }}>
            Vores Menukort
          </h1>
          <p style={{ fontSize: 15, color: "rgba(255,255,255,0.58)", maxWidth: 460, margin: "0 auto" }}>
            Gældende fra 1. januar 2026 · Minimum 20 kuverter ved alle menuer
          </p>
        </div>
      </section>

      {/* ── MENU ITEMS — dark throughout ── */}
      <section style={{ background: "var(--st-dark)", padding: "80px 24px" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>

          {menuCategories.map((cat, ci) => (
            <AnimateIn key={cat.id} delay={ci * 40}>
              <div style={{ marginBottom: 64 }}>
                {/* Category heading */}
                <div style={{ display: "flex", alignItems: "center", gap: 20, marginBottom: 6 }}>
                  <h2 style={{ fontFamily: "var(--font-heading)", fontSize: 28, fontWeight: 700, color: "#fff", whiteSpace: "nowrap" }}>
                    {cat.title}
                  </h2>
                  <div style={{ flex: 1, height: 1, background: "rgba(255,255,255,0.12)" }} />
                </div>
                {cat.subtitle && (
                  <p style={{ fontSize: 13, color: "rgba(255,255,255,0.4)", fontStyle: "italic", marginBottom: 20 }}>{cat.subtitle}</p>
                )}

                <div style={{ display: "grid", gap: 1 }}>
                  {cat.items.map((item, ii) => (
                    <div key={ii} style={{
                      display: "flex", justifyContent: "space-between", alignItems: "flex-start",
                      padding: "13px 16px", gap: 16,
                      background: ii % 2 === 0 ? "rgba(255,255,255,0.04)" : "transparent",
                    }}>
                      <div style={{ flex: 1 }}>
                        <div style={{ display: "flex", alignItems: "baseline", gap: 10 }}>
                          {item.number && (
                            <span style={{ fontSize: 11, color: "rgba(255,255,255,0.3)", fontWeight: 600, minWidth: 28, flexShrink: 0 }}>
                              {item.number}
                            </span>
                          )}
                          <span style={{ fontSize: 15, fontWeight: 600, color: "#fff" }}>{item.name}</span>
                        </div>
                        {item.desc && (
                          <p style={{ fontSize: 13, color: "rgba(255,255,255,0.45)", marginTop: 4, marginLeft: item.number ? 38 : 0, lineHeight: 1.55 }}>
                            {item.desc}
                          </p>
                        )}
                      </div>
                      <span style={{ fontFamily: "var(--font-heading)", fontSize: 15, fontWeight: 600, color: "var(--st-gold)", flexShrink: 0, whiteSpace: "nowrap" }}>
                        {typeof item.price === "number" ? `${item.price},-` : item.price}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </AnimateIn>
          ))}

          {/* Kaffebord */}
          <AnimateIn>
            <div style={{ marginBottom: 64 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 20, marginBottom: 16 }}>
                <h2 style={{ fontFamily: "var(--font-heading)", fontSize: 28, fontWeight: 700, color: "#fff", whiteSpace: "nowrap" }}>Kaffebord</h2>
                <div style={{ flex: 1, height: 1, background: "rgba(255,255,255,0.12)" }} />
              </div>
              <div style={{ background: "rgba(255,255,255,0.04)", padding: "16px 16px", display: "flex", justifyContent: "space-between", alignItems: "center", gap: 16 }}>
                <p style={{ fontSize: 15, color: "rgba(255,255,255,0.55)" }}>{kaffebord.desc}</p>
                <span style={{ fontFamily: "var(--font-heading)", fontSize: 15, fontWeight: 600, color: "var(--st-gold)", flexShrink: 0 }}>{kaffebord.price},-</span>
              </div>
            </div>
          </AnimateIn>

          {/* Buffet & Brunch */}
          <AnimateIn>
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: 20, marginBottom: 28 }}>
                <h2 style={{ fontFamily: "var(--font-heading)", fontSize: 28, fontWeight: 700, color: "#fff", whiteSpace: "nowrap" }}>Buffet & Brunch</h2>
                <div style={{ flex: 1, height: 1, background: "rgba(255,255,255,0.12)" }} />
              </div>
              <div style={{ display: "grid", gap: 2 }}>
                {buffetMenus.map(b => (
                  <div key={b.title}>
                    <div style={{
                      display: "flex", justifyContent: "space-between", alignItems: "baseline",
                      padding: "14px 16px", background: "rgba(255,255,255,0.06)",
                      borderLeft: "2px solid var(--st-gold)",
                    }}>
                      <h3 style={{ fontFamily: "var(--font-heading)", fontSize: 18, color: "#fff", fontWeight: 700 }}>{b.title}</h3>
                      <div style={{ display: "flex", alignItems: "baseline", gap: 6 }}>
                        <span style={{ fontFamily: "var(--font-heading)", fontSize: 18, color: "var(--st-gold)", fontWeight: 600 }}>{b.price},-</span>
                        <span style={{ fontSize: 11, color: "rgba(255,255,255,0.35)" }}>pr. pers.</span>
                      </div>
                    </div>
                    <div style={{ padding: "16px 16px 20px", background: "rgba(255,255,255,0.02)", borderLeft: "2px solid rgba(184,150,46,0.2)", marginBottom: 12 }}>
                      <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                        {b.items.map((item, i) => (
                          <li key={i} style={{ fontSize: 14, color: "rgba(255,255,255,0.5)", padding: "4px 0", display: "flex", alignItems: "flex-start", gap: 10 }}>
                            <svg viewBox="0 0 8 8" width="8" height="8" style={{ flexShrink: 0, marginTop: 5 }}>
                              <circle cx="4" cy="4" r="2.5" fill="var(--st-gold)" />
                            </svg>
                            {item}
                          </li>
                        ))}
                      </ul>
                      {b.note && <p style={{ marginTop: 12, fontSize: 12, color: "var(--st-gold)", fontWeight: 600, letterSpacing: "0.04em" }}>{b.note}</p>}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{ position: "relative", padding: "80px 24px", textAlign: "center", overflow: "hidden" }}>
        <Image src="/images/tables3.jpg" alt="Book bord hos Restaurant Stausø" fill quality={72}
          style={{ objectFit: "cover", objectPosition: "center 40%" }} />
        <div style={{ position: "absolute", inset: 0, background: "rgba(10,6,2,0.80)" }} />
        <AnimateIn>
          <div style={{ position: "relative" }}>
            <p style={{ fontSize: 11, letterSpacing: "0.22em", color: "var(--st-gold)", textTransform: "uppercase", fontWeight: 600, marginBottom: 18 }}>Book et selskab</p>
            <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(24px, 3.5vw, 40px)", color: "#fff", fontWeight: 700, marginBottom: 18 }}>
              Ønsker du at bestille bord?
            </h2>
            <p style={{ fontSize: 15, color: "rgba(255,255,255,0.55)", marginBottom: 40, maxWidth: 420, margin: "0 auto 40px" }}>
              Ring til os og vi sammensætter menuen i samarbejde med kokken.
            </p>
            <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
              <a href="tel:75255101" style={{
                display: "flex", alignItems: "center", gap: 9, padding: "14px 36px", borderRadius: 4,
                background: "var(--st-gold)", color: "#fff", fontSize: 14, fontWeight: 600, textDecoration: "none",
              }}>
                <PhoneIcon /> 75 25 51 01
              </a>
              <Link href="/kontakt" prefetch={false} style={{
                padding: "14px 36px", borderRadius: 4, border: "1.5px solid rgba(255,255,255,0.35)", color: "#fff",
                fontSize: 14, fontWeight: 600, textDecoration: "none",
              }}>
                Send besked
              </Link>
            </div>
          </div>
        </AnimateIn>
      </section>
    </main>
  );
}

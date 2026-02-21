"use client";
import { menuCategories, buffetMenus, kaffebord } from "@/lib/menu-data";
import AnimateIn from "@/components/AnimateIn";

export default function MenuPage() {
  return (
    <main style={{ paddingTop: 68 }}>
      {/* Header */}
      <section style={{
        background: "linear-gradient(135deg, #243d1a 0%, #1a1208 100%)",
        padding: "72px 24px 60px", textAlign: "center",
      }}>
        <p style={{ fontSize: 12, letterSpacing: "0.18em", color: "var(--st-gold)", textTransform: "uppercase", fontWeight: 600, marginBottom: 16 }}>
          Menukort
        </p>
        <h1 style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(36px, 5vw, 60px)", color: "#fff", fontWeight: 700, marginBottom: 16 }}>
          Vores Menukort
        </h1>
        <p style={{ fontSize: 15, color: "rgba(255,255,255,0.6)", maxWidth: 480, margin: "0 auto" }}>
          Gældende fra 1. januar 2026 · Minimum 20 kuverter ved alle menuer
        </p>
      </section>

      {/* Categories */}
      <section style={{ background: "var(--st-cream)", padding: "80px 24px" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          {menuCategories.map((cat, ci) => (
            <AnimateIn key={cat.id} delay={ci * 40}>
              <div style={{ marginBottom: 72 }}>
                <div style={{ display: "flex", alignItems: "baseline", gap: 16, marginBottom: 8 }}>
                  <h2 style={{ fontFamily: "var(--font-heading)", fontSize: 32, fontWeight: 700, color: "var(--st-dark)" }}>
                    {cat.title}
                  </h2>
                  <div style={{ flex: 1, height: 1, background: "var(--st-border)" }} />
                </div>
                {cat.subtitle && (
                  <p style={{ fontSize: 13, color: "var(--st-muted)", fontStyle: "italic", marginBottom: 28 }}>{cat.subtitle}</p>
                )}

                <div style={{ display: "grid", gap: 2 }}>
                  {cat.items.map((item, ii) => (
                    <div key={ii} style={{
                      display: "flex", justifyContent: "space-between", alignItems: "flex-start",
                      padding: "14px 18px",
                      background: ii % 2 === 0 ? "#fff" : "transparent",
                      borderRadius: 8,
                      gap: 16,
                    }}>
                      <div style={{ flex: 1 }}>
                        <div style={{ display: "flex", alignItems: "baseline", gap: 10 }}>
                          {item.number && (
                            <span style={{ fontSize: 11, color: "var(--st-muted)", fontWeight: 600, minWidth: 28, flexShrink: 0 }}>
                              {item.number}
                            </span>
                          )}
                          <span style={{ fontSize: 15, fontWeight: 600, color: "var(--st-dark)" }}>{item.name}</span>
                        </div>
                        {item.desc && (
                          <p style={{ fontSize: 13, color: "var(--st-muted)", marginTop: 4, marginLeft: item.number ? 38 : 0, lineHeight: 1.5 }}>
                            {item.desc}
                          </p>
                        )}
                      </div>
                      <span style={{
                        fontFamily: "var(--font-heading)", fontSize: 15, fontWeight: 600,
                        color: "var(--st-green)", flexShrink: 0,
                        whiteSpace: "nowrap",
                      }}>
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
            <div style={{ marginBottom: 72 }}>
              <div style={{ display: "flex", alignItems: "baseline", gap: 16, marginBottom: 20 }}>
                <h2 style={{ fontFamily: "var(--font-heading)", fontSize: 32, fontWeight: 700, color: "var(--st-dark)" }}>Kaffebord</h2>
                <div style={{ flex: 1, height: 1, background: "var(--st-border)" }} />
              </div>
              <div style={{ background: "#fff", borderRadius: 10, padding: "20px 18px", display: "flex", justifyContent: "space-between", alignItems: "center", gap: 16 }}>
                <p style={{ fontSize: 15, color: "var(--st-muted)" }}>{kaffebord.desc}</p>
                <span style={{ fontFamily: "var(--font-heading)", fontSize: 15, fontWeight: 600, color: "var(--st-green)", flexShrink: 0 }}>{kaffebord.price},-</span>
              </div>
            </div>
          </AnimateIn>

          {/* Buffet / Brunch */}
          <AnimateIn>
            <div>
              <div style={{ display: "flex", alignItems: "baseline", gap: 16, marginBottom: 28 }}>
                <h2 style={{ fontFamily: "var(--font-heading)", fontSize: 32, fontWeight: 700, color: "var(--st-dark)" }}>Buffet & Brunch</h2>
                <div style={{ flex: 1, height: 1, background: "var(--st-border)" }} />
              </div>
              <div style={{ display: "grid", gap: 20 }}>
                {buffetMenus.map(b => (
                  <div key={b.title} style={{
                    background: "#fff", borderRadius: 12,
                    border: "1px solid var(--st-border)", overflow: "hidden",
                  }}>
                    <div style={{ background: "var(--st-green)", padding: "16px 24px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                      <h3 style={{ fontFamily: "var(--font-heading)", fontSize: 20, color: "#fff", fontWeight: 700 }}>{b.title}</h3>
                      <div style={{ textAlign: "right" }}>
                        <span style={{ fontFamily: "var(--font-heading)", fontSize: 18, color: "var(--st-gold)", fontWeight: 600 }}>{b.price},-</span>
                        <span style={{ fontSize: 12, color: "rgba(255,255,255,0.55)", marginLeft: 6 }}>pr. pers.</span>
                      </div>
                    </div>
                    <div style={{ padding: "20px 24px" }}>
                      <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                        {b.items.map((item, i) => (
                          <li key={i} style={{ fontSize: 14, color: "var(--st-muted)", padding: "4px 0", display: "flex", alignItems: "flex-start", gap: 10 }}>
                            <span style={{ color: "var(--st-gold)", marginTop: 2, flexShrink: 0 }}>—</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                      {b.note && <p style={{ marginTop: 12, fontSize: 12, color: "var(--st-gold)", fontWeight: 600 }}>{b.note}</p>}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </AnimateIn>

          <AnimateIn>
            <div style={{
              marginTop: 60, background: "var(--st-stone)", borderRadius: 14,
              padding: "32px 28px", textAlign: "center",
              border: "1px solid var(--st-border)",
            }}>
              <p style={{ fontSize: 15, color: "var(--st-muted)", marginBottom: 20, lineHeight: 1.7 }}>
                Ønsker du at bestille et selskab? Ring til os og vi sammensætter menuen i samarbejde med kokken.
              </p>
              <a href="tel:75255101" style={{
                display: "inline-block", padding: "12px 32px", borderRadius: 6,
                background: "var(--st-gold)", color: "#fff", textDecoration: "none",
                fontSize: 14, fontWeight: 600, letterSpacing: "0.04em",
              }}>
                📞 Ring: 75 25 51 01
              </a>
            </div>
          </AnimateIn>
        </div>
      </section>
    </main>
  );
}

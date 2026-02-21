"use client";
import Link from "next/link";
import AnimateIn from "@/components/AnimateIn";

export default function Home() {
  return (
    <main>
      {/* ═══════════════════════════════════════════════════
          HERO
      ═══════════════════════════════════════════════════ */}
      <section style={{
        minHeight: "100vh",
        background: "linear-gradient(160deg, #1a2e10 0%, #243d1a 50%, #1a1208 100%)",
        display: "flex", alignItems: "center", justifyContent: "center",
        position: "relative", overflow: "hidden", padding: "120px 24px 80px",
      }}>
        {/* Subtle texture overlay */}
        <div style={{
          position: "absolute", inset: 0,
          backgroundImage: "radial-gradient(ellipse at 30% 40%, rgba(184,150,46,0.08) 0%, transparent 60%), radial-gradient(ellipse at 70% 80%, rgba(255,255,255,0.03) 0%, transparent 50%)",
          pointerEvents: "none",
        }} />

        <div style={{ textAlign: "center", position: "relative", maxWidth: 780 }}>
          <p className="fade-up delay-1" style={{
            fontSize: 12, letterSpacing: "0.22em", textTransform: "uppercase",
            color: "var(--st-gold)", marginBottom: 28, fontWeight: 500,
          }}>
            Klintingvej 204 · Henne · Siden 1984
          </p>

          <h1 className="fade-up delay-2" style={{
            fontFamily: "var(--font-heading)", fontWeight: 700,
            fontSize: "clamp(48px, 8vw, 96px)", lineHeight: 1.05,
            color: "#fff", marginBottom: 32, letterSpacing: "-0.01em",
          }}>
            Restaurant<br />
            <span style={{ color: "var(--st-gold)", fontStyle: "italic" }}>Stausø</span>
          </h1>

          <p className="fade-up delay-3" style={{
            fontSize: "clamp(17px, 2vw, 21px)", color: "rgba(255,255,255,0.75)",
            lineHeight: 1.7, maxWidth: 540, margin: "0 auto 48px",
            fontFamily: "var(--font-heading)", fontStyle: "italic",
          }}>
            Over 40 års tradition for god dansk mad,<br />
            hyggelige omgivelser og personlig betjening
          </p>

          <div className="fade-up delay-4" style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/selskaber" prefetch={false}
              className="btn-hover"
              style={{
                padding: "16px 36px", borderRadius: 6,
                background: "var(--st-gold)", color: "#fff",
                fontSize: 14, fontWeight: 600, textDecoration: "none",
                letterSpacing: "0.06em", textTransform: "uppercase",
                transition: "transform 0.2s, box-shadow 0.2s",
              }}>
              Book Selskab
            </Link>
            <Link href="/menu" prefetch={false}
              className="btn-ghost-hover"
              style={{
                padding: "16px 36px", borderRadius: 6,
                border: "1.5px solid rgba(255,255,255,0.45)", color: "#fff",
                fontSize: 14, fontWeight: 600, textDecoration: "none",
                letterSpacing: "0.06em", textTransform: "uppercase",
                transition: "background 0.2s, border-color 0.2s",
              }}>
              Se Menukort
            </Link>
          </div>

          {/* Scroll hint */}
          <div style={{ marginTop: 80, opacity: 0.4 }}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" style={{ margin: "0 auto", display: "block" }}>
              <path d="M12 5v14M5 12l7 7 7-7"/>
            </svg>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          ABOUT
      ═══════════════════════════════════════════════════ */}
      <section style={{ background: "var(--st-cream)", padding: "100px 24px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center" }}>
            <AnimateIn direction="left">
              <div>
                <p style={{ fontSize: 12, letterSpacing: "0.18em", color: "var(--st-gold)", textTransform: "uppercase", fontWeight: 600, marginBottom: 20 }}>
                  Om os
                </p>
                <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(32px, 4vw, 48px)", fontWeight: 700, color: "var(--st-dark)", marginBottom: 28, lineHeight: 1.15 }}>
                  En lokal tradition<br />siden 1984
                </h2>
                <p style={{ fontSize: 16, lineHeight: 1.85, color: "var(--st-muted)", marginBottom: 20 }}>
                  Restaurant Stausø ligger idyllisk i landlige omgivelser tæt på Blåbjerg, Henne og Houstrup Strand. I over 40 år har vi byder vores gæster velkommen til en autentisk dansk madoplevelse med fokus på kvalitet, hygge og personlig service.
                </p>
                <p style={{ fontSize: 16, lineHeight: 1.85, color: "var(--st-muted)", marginBottom: 36 }}>
                  Vores menukort er bygget op om de klassiske danske retter — fra en lun suppe og rejecocktail til møre stegeretter med årstidens grønt. Alt tilbehør aftales i samarbejde med kokken, så hvert selskab bliver præcis som I ønsker det.
                </p>
                <div style={{ display: "flex", gap: 40 }}>
                  {[{ n: "40+", l: "Års erfaring" }, { n: "140", l: "Gæstepladser" }, { n: "20+", l: "Min. kuverter" }].map(s => (
                    <div key={s.l}>
                      <p style={{ fontFamily: "var(--font-heading)", fontSize: 36, fontWeight: 700, color: "var(--st-green)", lineHeight: 1 }}>{s.n}</p>
                      <p style={{ fontSize: 12, color: "var(--st-muted)", letterSpacing: "0.08em", textTransform: "uppercase", marginTop: 6 }}>{s.l}</p>
                    </div>
                  ))}
                </div>
              </div>
            </AnimateIn>

            <AnimateIn direction="right">
              {/* Photo placeholder — will be replaced with real photo */}
              <div style={{
                aspectRatio: "4/5", borderRadius: 16, overflow: "hidden",
                background: "linear-gradient(160deg, var(--st-green) 0%, var(--st-dark) 100%)",
                display: "flex", alignItems: "flex-end", padding: 32,
                position: "relative",
              }}>
                <div style={{
                  position: "absolute", inset: 0,
                  backgroundImage: "radial-gradient(ellipse at 50% 30%, rgba(184,150,46,0.12) 0%, transparent 60%)",
                }} />
                <div style={{ position: "relative" }}>
                  <p style={{ fontFamily: "var(--font-heading)", fontSize: 22, fontStyle: "italic", color: "rgba(255,255,255,0.9)", lineHeight: 1.4 }}>
                    "Hyggelige omgivelser,<br />så ikke kun maven er mæt"
                  </p>
                  <p style={{ marginTop: 12, fontSize: 13, color: "var(--st-gold)", letterSpacing: "0.08em" }}>— Restaurant Stausø</p>
                </div>
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          MENU PREVIEW
      ═══════════════════════════════════════════════════ */}
      <section style={{ background: "var(--st-stone)", padding: "100px 24px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <AnimateIn>
            <div style={{ textAlign: "center", marginBottom: 64 }}>
              <p style={{ fontSize: 12, letterSpacing: "0.18em", color: "var(--st-gold)", textTransform: "uppercase", fontWeight: 600, marginBottom: 16 }}>
                Vores Menukort
              </p>
              <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(30px, 4vw, 44px)", fontWeight: 700, color: "var(--st-dark)" }}>
                Klassisk dansk køkken
              </h2>
            </div>
          </AnimateIn>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))", gap: 28 }}>
            {[
              {
                title: "Forretter",
                desc: "Fra klassisk rejecocktail og tartelet til hvidvinsdampet fiskefilet og håndpillede krebsehaler.",
                icon: "🐟", price: "fra 69 kr.",
              },
              {
                title: "Stegeretter",
                desc: "Møre stegeretter med årstidens grønt — fra flæskesteg med rødkål til kalvemørbrad med bearnaise.",
                icon: "🥩", price: "fra 124 kr.",
              },
              {
                title: "Desserter",
                desc: "Hjemmelavede desserter og fromager — afslut middagen med vores dessert- og kagebord.",
                icon: "🍰", price: "fra 64 kr.",
              },
            ].map((cat, i) => (
              <AnimateIn key={cat.title} delay={i * 80}>
                <div className="card-hover" style={{
                  background: "#fff", borderRadius: 14,
                  border: "1px solid var(--st-border)",
                  padding: "36px 32px",
                  transition: "transform 0.25s, box-shadow 0.25s",
                }}>
                  <div style={{
                    width: 52, height: 52, borderRadius: 12,
                    background: "rgba(36,61,26,0.08)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: 24, marginBottom: 20,
                  }}>
                    {cat.icon}
                  </div>
                  <h3 style={{ fontFamily: "var(--font-heading)", fontSize: 24, fontWeight: 700, color: "var(--st-dark)", marginBottom: 12 }}>
                    {cat.title}
                  </h3>
                  <p style={{ fontSize: 15, lineHeight: 1.7, color: "var(--st-muted)", marginBottom: 20 }}>{cat.desc}</p>
                  <p style={{ fontSize: 13, color: "var(--st-gold)", fontWeight: 600, letterSpacing: "0.04em" }}>{cat.price}</p>
                </div>
              </AnimateIn>
            ))}
          </div>

          <AnimateIn>
            <div style={{ textAlign: "center", marginTop: 48 }}>
              <Link href="/menu" prefetch={false} style={{
                display: "inline-block", padding: "14px 36px", borderRadius: 6,
                border: "1.5px solid var(--st-green)", color: "var(--st-green)",
                fontSize: 13, fontWeight: 600, textDecoration: "none",
                letterSpacing: "0.08em", textTransform: "uppercase",
                transition: "background 0.2s, color 0.2s",
              }}
              onMouseEnter={e => { e.currentTarget.style.background = "var(--st-green)"; e.currentTarget.style.color = "#fff"; }}
              onMouseLeave={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "var(--st-green)"; }}>
                Fuldt Menukort →
              </Link>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          SELSKABER CALLOUT
      ═══════════════════════════════════════════════════ */}
      <section style={{
        background: "linear-gradient(135deg, #243d1a 0%, #1a1208 100%)",
        padding: "100px 24px",
      }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center" }}>
            <AnimateIn direction="left">
              <div>
                <p style={{ fontSize: 12, letterSpacing: "0.18em", color: "var(--st-gold)", textTransform: "uppercase", fontWeight: 600, marginBottom: 20 }}>
                  Selskaber & Arrangementer
                </p>
                <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(28px, 3.5vw, 44px)", color: "#fff", fontWeight: 700, lineHeight: 1.15, marginBottom: 28 }}>
                  Vi holder<br />din fest
                </h2>
                <p style={{ fontSize: 16, lineHeight: 1.85, color: "rgba(255,255,255,0.7)", marginBottom: 36 }}>
                  Konfirmation, bryllup, mærkedag eller firmafest — Restaurant Stausø danner den perfekte ramme. Vores store sal rummer op til 140 gæster, og en hyggeligere skænk tager sig af mindre selskaber.
                </p>
                <Link href="/selskaber" prefetch={false}
                  className="btn-hover"
                  style={{
                    display: "inline-block", padding: "14px 32px", borderRadius: 6,
                    background: "var(--st-gold)", color: "#fff",
                    fontSize: 13, fontWeight: 600, textDecoration: "none",
                    letterSpacing: "0.08em", textTransform: "uppercase",
                    transition: "transform 0.2s, box-shadow 0.2s",
                  }}>
                  Læs mere om selskaber →
                </Link>
              </div>
            </AnimateIn>

            <AnimateIn direction="right">
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
                {[
                  { n: "140", l: "Gæster i stor sal" },
                  { n: "40+", l: "Års erfaring" },
                  { n: "20+", l: "Min. kuverter" },
                  { n: "3", l: "Buffet & brunch menuer" },
                ].map(s => (
                  <div key={s.l} style={{
                    background: "rgba(255,255,255,0.06)", borderRadius: 12,
                    border: "1px solid rgba(255,255,255,0.1)",
                    padding: "28px 24px",
                  }}>
                    <p style={{ fontFamily: "var(--font-heading)", fontSize: 40, fontWeight: 700, color: "var(--st-gold)", lineHeight: 1, marginBottom: 8 }}>{s.n}</p>
                    <p style={{ fontSize: 13, color: "rgba(255,255,255,0.55)", lineHeight: 1.4 }}>{s.l}</p>
                  </div>
                ))}
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          BRUNCH / BUFFET
      ═══════════════════════════════════════════════════ */}
      <section style={{ background: "var(--st-cream)", padding: "100px 24px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <AnimateIn>
            <div style={{ textAlign: "center", marginBottom: 64 }}>
              <p style={{ fontSize: 12, letterSpacing: "0.18em", color: "var(--st-gold)", textTransform: "uppercase", fontWeight: 600, marginBottom: 16 }}>
                Buffeter & Brunch
              </p>
              <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(28px, 4vw, 40px)", fontWeight: 700, color: "var(--st-dark)", marginBottom: 16 }}>
                Komplet oplevelse for hele selskabet
              </h2>
              <p style={{ fontSize: 16, color: "var(--st-muted)", maxWidth: 520, margin: "0 auto" }}>
                Vælg mellem vores sammensatte buffetmenuer eller en lun søndagsbrunch. Min. 25 personer.
              </p>
            </div>
          </AnimateIn>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))", gap: 24 }}>
            {[
              { title: "Anretning", price: "218 kr.", desc: "Torskefad, Serranoskinke med pesto, glaseret skinke, croissant med hønsesalat, roastbeef og kvark-kage." },
              { title: "Buffet", price: "348 kr.", desc: "Indbagt tun, letsaltet skankesteg, kalvemørbrad, kalkun med ris, salatbar, 2 slags kartofler og dessertbord. Min. 25 pers." },
              { title: "Brunch", price: "295 kr.", desc: "Laksesalat, scrambleæg, frikadeller, rullepølse, pandekager, rugbrød og boller, ost, frugt, kaffe og te. Min. 25 pers." },
            ].map((b, i) => (
              <AnimateIn key={b.title} delay={i * 70}>
                <div style={{
                  background: "#fff", borderRadius: 14, overflow: "hidden",
                  border: "1px solid var(--st-border)",
                }}>
                  <div style={{ background: "var(--st-green)", padding: "20px 28px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <h3 style={{ fontFamily: "var(--font-heading)", fontSize: 20, color: "#fff", fontWeight: 700 }}>{b.title}</h3>
                    <span style={{ fontFamily: "var(--font-heading)", fontSize: 18, color: "var(--st-gold)", fontWeight: 600 }}>
                      {b.price} <span style={{ fontSize: 12, color: "rgba(255,255,255,0.6)", fontFamily: "sans-serif", fontWeight: 400 }}>pr. pers.</span>
                    </span>
                  </div>
                  <div style={{ padding: "24px 28px" }}>
                    <p style={{ fontSize: 14, lineHeight: 1.8, color: "var(--st-muted)" }}>{b.desc}</p>
                  </div>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          FINAL CTA
      ═══════════════════════════════════════════════════ */}
      <section style={{
        background: "var(--st-dark)", padding: "100px 24px", textAlign: "center",
      }}>
        <AnimateIn>
          <p style={{ fontSize: 12, letterSpacing: "0.18em", color: "var(--st-gold)", textTransform: "uppercase", fontWeight: 600, marginBottom: 20 }}>
            Klar til at booke?
          </p>
          <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(28px, 4vw, 48px)", color: "#fff", fontWeight: 700, marginBottom: 20 }}>
            Ring og lad os planlægge<br />dit selskab
          </h2>
          <p style={{ fontSize: 16, color: "rgba(255,255,255,0.6)", marginBottom: 48, maxWidth: 480, margin: "0 auto 48px" }}>
            Vi er klar til at hjælpe med alt fra menu til lokale. Minimum 20 kuverter.
          </p>
          <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
            <a href="tel:75255101" className="btn-hover" style={{
              padding: "16px 40px", borderRadius: 6,
              background: "var(--st-gold)", color: "#fff",
              fontSize: 15, fontWeight: 600, textDecoration: "none",
              letterSpacing: "0.04em",
              transition: "transform 0.2s, box-shadow 0.2s",
            }}>
              📞 75 25 51 01
            </a>
            <Link href="/kontakt" prefetch={false} className="btn-ghost-hover" style={{
              padding: "16px 40px", borderRadius: 6,
              border: "1.5px solid rgba(255,255,255,0.35)", color: "#fff",
              fontSize: 15, fontWeight: 600, textDecoration: "none",
              transition: "background 0.2s",
            }}>
              Send besked
            </Link>
          </div>
        </AnimateIn>
      </section>
    </main>
  );
}

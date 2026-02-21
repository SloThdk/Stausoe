"use client";
import Link from "next/link";
import Image from "next/image";
import AnimateIn from "@/components/AnimateIn";
import { CountUp } from "@/components/CountUp";

/* ── SVG ICONS ────────────────────────────────────────────── */
function IconPhone() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="18" height="18">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.07 12a19.79 19.79 0 0 1-3.07-8.67 2 2 0 0 1 1.99-2.18h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.09 9.91a16 16 0 0 0 5.997 5.997l1.17-1.17a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
    </svg>
  );
}

const galleryPhotos = [
  { src: "/images/interior_glasses.jpg", alt: "Elegant bordopdækning med vinglas", wide: true },
  { src: "/images/exterior2.jpg",        alt: "Restaurant Stausø set udefra" },
  { src: "/images/dining1.jpg",          alt: "Hyggelig middag i restauranten", wide: true },
  { src: "/images/tables2.jpg",          alt: "Selskabssal klar til fest" },
  { src: "/images/exterior1.jpg",        alt: "Bygningen en sommerdag" },
  { src: "/images/tables1.jpg",          alt: "Festligt dækkede borde", wide: true },
];

export default function Home() {
  return (
    <main>
      {/* ═══════════════════════════════════════════════════
          HERO — REAL PHOTO
      ═══════════════════════════════════════════════════ */}
      <section style={{
        minHeight: "100vh",
        position: "relative",
        display: "flex", alignItems: "center", justifyContent: "center",
        overflow: "hidden",
      }}>
        {/* Background photo — high-quality wine glasses, no baked-in text conflict */}
        <Image
          src="/images/interior_glasses.jpg"
          alt="Restaurant Stausø — elegant bordopdækning"
          fill
          priority
          quality={92}
          style={{ objectFit: "cover", objectPosition: "center 50%" }}
        />
        <div style={{
          position: "absolute", inset: 0,
          background: "linear-gradient(to bottom, rgba(14,9,3,0.46) 0%, rgba(14,9,3,0.70) 100%)",
        }} />

        <div style={{ textAlign: "center", position: "relative", maxWidth: 780, padding: "140px 24px 100px" }}>
          <p className="fade-up delay-1" style={{
            fontSize: 11, letterSpacing: "0.28em", textTransform: "uppercase",
            color: "var(--st-gold)", marginBottom: 24, fontWeight: 500,
          }}>
            Klintingvej 204 · Henne · Siden 1984
          </p>

          <h1 className="fade-up delay-2" style={{
            fontFamily: "var(--font-heading)", fontWeight: 700,
            fontSize: "clamp(52px, 9vw, 104px)", lineHeight: 1.0,
            color: "#fff", marginBottom: 28, letterSpacing: "-0.01em",
          }}>
            Restaurant<br />
            <em style={{ color: "var(--st-gold)", fontStyle: "italic", fontWeight: 400 }}>Stausø</em>
          </h1>

          <p className="fade-up delay-3" style={{
            fontSize: "clamp(16px, 1.8vw, 20px)", color: "rgba(255,255,255,0.78)",
            lineHeight: 1.8, maxWidth: 520, margin: "0 auto 52px",
            fontFamily: "var(--font-heading)", fontStyle: "italic",
          }}>
            Over 40 års tradition for god dansk mad,<br />
            hyggelige omgivelser og personlig betjening
          </p>

          <div className="fade-up delay-4" style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/selskaber" prefetch={false}
              className="btn-hover"
              style={{
                padding: "16px 40px", borderRadius: 4,
                background: "var(--st-gold)", color: "#fff",
                fontSize: 13, fontWeight: 600, textDecoration: "none",
                letterSpacing: "0.08em", textTransform: "uppercase",
                transition: "transform 0.2s, box-shadow 0.2s",
              }}>
              Book Selskab
            </Link>
            <Link href="/menu" prefetch={false}
              className="btn-ghost-hover"
              style={{
                padding: "16px 40px", borderRadius: 4,
                border: "1.5px solid rgba(255,255,255,0.5)", color: "#fff",
                fontSize: 13, fontWeight: 600, textDecoration: "none",
                letterSpacing: "0.08em", textTransform: "uppercase",
                transition: "background 0.2s, border-color 0.2s",
              }}>
              Se Menukort
            </Link>
          </div>

          <div style={{ marginTop: 88, opacity: 0.4 }}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" style={{ margin: "0 auto", display: "block" }}>
              <path d="M12 5v14M5 12l7 7 7-7"/>
            </svg>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          ABOUT
      ═══════════════════════════════════════════════════ */}
      <section style={{ background: "var(--st-cream)", padding: "110px 24px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div className="about-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center" }}>
            <AnimateIn direction="left">
              <div>
                <p style={{ fontSize: 11, letterSpacing: "0.22em", color: "var(--st-gold)", textTransform: "uppercase", fontWeight: 600, marginBottom: 22 }}>
                  Om os
                </p>
                <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(32px, 4vw, 48px)", fontWeight: 700, color: "var(--st-dark)", marginBottom: 28, lineHeight: 1.15 }}>
                  En lokal tradition<br />siden 1984
                </h2>
                <p style={{ fontSize: 16, lineHeight: 1.9, color: "var(--st-muted)", marginBottom: 22 }}>
                  Restaurant Stausø ligger idyllisk i landlige omgivelser tæt på Blåbjerg, Henne og Houstrup Strand. I over 40 år har vi budt vores gæster velkommen til en autentisk dansk madoplevelse med fokus på kvalitet, hygge og personlig service.
                </p>
                <p style={{ fontSize: 16, lineHeight: 1.9, color: "var(--st-muted)", marginBottom: 40 }}>
                  Vores menukort er bygget op om de klassiske danske retter — fra en lun suppe og rejecocktail til møre stegeretter med årstidens grønt. Alt tilbehør aftales i samarbejde med kokken, så hvert selskab bliver præcis som I ønsker det.
                </p>
                <div style={{ display: "flex", gap: 44 }}>
                  {[
                    { target: 40, suffix: "+", label: "Års erfaring"  },
                    { target: 140, suffix: "",  label: "Gæstepladser" },
                    { target: 20,  suffix: "+", label: "Min. kuverter" },
                  ].map(s => (
                    <div key={s.label}>
                      <CountUp
                        target={s.target}
                        suffix={s.suffix}
                        style={{ fontFamily: "var(--font-heading)", fontSize: 42, fontWeight: 700, color: "var(--st-gold)", lineHeight: 1, display: "block" }}
                      />
                      <p style={{ fontSize: 11, color: "var(--st-muted)", letterSpacing: "0.1em", textTransform: "uppercase", marginTop: 10 }}>{s.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </AnimateIn>

            <AnimateIn direction="right">
              <div style={{
                aspectRatio: "4/5", borderRadius: 3, overflow: "hidden",
                position: "relative", boxShadow: "0 24px 72px rgba(0,0,0,0.16)",
              }}>
                <Image
                  src="/images/exterior2.jpg"
                  alt="Restaurant Stausø bygning"
                  fill
                  quality={85}
                  style={{ objectFit: "cover", objectPosition: "center" }}
                />
                {/* Subtle warm vignette at bottom */}
                <div style={{
                  position: "absolute", bottom: 0, left: 0, right: 0,
                  height: "40%",
                  background: "linear-gradient(to top, rgba(20,12,4,0.55), transparent)",
                }} />
                <div style={{ position: "absolute", bottom: 28, left: 28, right: 28 }}>
                  <p style={{ fontFamily: "var(--font-heading)", fontSize: 18, fontStyle: "italic", color: "rgba(255,255,255,0.92)", lineHeight: 1.5 }}>
                    "Hyggelige omgivelser,<br />så ikke kun maven er mæt"
                  </p>
                </div>
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          PHOTO GALLERY
      ═══════════════════════════════════════════════════ */}
      <section style={{ background: "var(--st-dark)", padding: "80px 0 0" }}>
        <AnimateIn>
          <div style={{ textAlign: "center", padding: "0 24px 56px" }}>
            <p style={{ fontSize: 11, letterSpacing: "0.22em", color: "var(--st-gold)", textTransform: "uppercase", fontWeight: 600, marginBottom: 16 }}>
              Atmosfære
            </p>
            <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(28px, 4vw, 42px)", fontWeight: 700, color: "#fff" }}>
              Flotte omgivelser
            </h2>
          </div>
        </AnimateIn>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: 3,
        }}>
          {galleryPhotos.map((photo, i) => (
            <AnimateIn key={photo.src} delay={i * 60}>
              <div style={{
                position: "relative",
                aspectRatio: photo.wide ? "16/10" : "4/3",
                overflow: "hidden",
              }}>
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  quality={80}
                  style={{
                    objectFit: "cover",
                    transition: "transform 0.6s ease",
                  }}
                  className="gallery-img"
                />
              </div>
            </AnimateIn>
          ))}
        </div>

        <style>{`
          .gallery-img:hover { transform: scale(1.04); }
        `}</style>
      </section>

      {/* ═══════════════════════════════════════════════════
          MENU PREVIEW — dark, no white cards
      ═══════════════════════════════════════════════════ */}
      <section style={{ background: "var(--st-dark)", padding: "110px 24px" }}>
        <div style={{ maxWidth: 860, margin: "0 auto" }}>
          <AnimateIn>
            <div style={{ textAlign: "center", marginBottom: 72 }}>
              <p style={{ fontSize: 11, letterSpacing: "0.26em", color: "var(--st-gold)", textTransform: "uppercase", fontWeight: 600, marginBottom: 16 }}>
                Vores Menukort
              </p>
              <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(30px, 4vw, 48px)", fontWeight: 700, color: "#fff" }}>
                Klassisk dansk køkken
              </h2>
            </div>
          </AnimateIn>

          {/* Elegant horizontal menu rows — no white boxes */}
          {[
            {
              title: "Forretter",
              desc: "Fra klassisk rejecocktail og tartelet til hvidvinsdampet fiskefilet og håndpillede krebsehaler.",
              price: "fra 69 kr.",
            },
            {
              title: "Stegeretter",
              desc: "Møre stegeretter med årstidens grønt — fra flæskesteg med rødkål til kalvemørbrad med bearnaise.",
              price: "fra 124 kr.",
            },
            {
              title: "Desserter",
              desc: "Hjemmelavede desserter og fromager — afslut middagen med vores dessert- og kagebord.",
              price: "fra 64 kr.",
            },
            {
              title: "Buffet & Brunch",
              desc: "Tre sammensatte menuer til selskaber — Anretning, Buffet og Brunch. Minimum 25 personer.",
              price: "fra 218 kr.",
            },
          ].map((cat, i) => (
            <AnimateIn key={cat.title} delay={i * 60}>
              <div style={{
                display: "flex", alignItems: "baseline", justifyContent: "space-between",
                gap: 32,
                padding: "32px 0",
                borderBottom: "1px solid rgba(255,255,255,0.10)",
              }}>
                <div style={{ flex: 1 }}>
                  <h3 style={{
                    fontFamily: "var(--font-heading)", fontSize: "clamp(20px, 2.5vw, 26px)",
                    fontWeight: 700, color: "#fff", marginBottom: 8,
                  }}>{cat.title}</h3>
                  <p style={{ fontSize: 14, color: "rgba(255,255,255,0.52)", lineHeight: 1.7 }}>{cat.desc}</p>
                </div>
                <span style={{
                  fontFamily: "var(--font-heading)", fontSize: 16, fontWeight: 500,
                  color: "var(--st-gold)", flexShrink: 0, whiteSpace: "nowrap",
                }}>{cat.price}</span>
              </div>
            </AnimateIn>
          ))}

          <AnimateIn>
            <div style={{ textAlign: "center", paddingTop: 56 }}>
              <Link href="/menu" prefetch={false} className="btn-hover" style={{
                display: "inline-block", padding: "14px 40px", borderRadius: 4,
                background: "var(--st-gold)", color: "#fff",
                fontSize: 12, fontWeight: 600, textDecoration: "none",
                letterSpacing: "0.1em", textTransform: "uppercase",
                transition: "transform 0.2s, box-shadow 0.2s",
              }}>
                Se fuldt menukort →
              </Link>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          SELSKABER CALLOUT — dark photo, no green
      ═══════════════════════════════════════════════════ */}
      <section style={{ position: "relative", padding: "110px 24px", overflow: "hidden" }}>
        <Image src="/images/tables2.jpg" alt="Selskab hos Restaurant Stausø" fill quality={70} style={{ objectFit: "cover", objectPosition: "center 40%" }} />
        <div style={{ position: "absolute", inset: 0, background: "rgba(10,6,2,0.86)" }} />
        <div style={{ position: "relative", maxWidth: 1100, margin: "0 auto" }}>
          <div className="selskaber-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center" }}>
            <AnimateIn direction="left">
              <div>
                <p style={{ fontSize: 11, letterSpacing: "0.22em", color: "var(--st-gold)", textTransform: "uppercase", fontWeight: 600, marginBottom: 22 }}>
                  Selskaber & Arrangementer
                </p>
                <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(28px, 3.5vw, 44px)", color: "#fff", fontWeight: 700, lineHeight: 1.15, marginBottom: 28 }}>
                  Vi holder<br />din fest
                </h2>
                <p style={{ fontSize: 16, lineHeight: 1.9, color: "rgba(255,255,255,0.65)", marginBottom: 40 }}>
                  Konfirmation, bryllup, mærkedag eller firmafest — Restaurant Stausø danner den perfekte ramme. Vores store sal rummer op til 140 gæster, og en hyggeligere skænk tager sig af mindre selskaber.
                </p>
                <Link href="/selskaber" prefetch={false} className="btn-hover" style={{
                  display: "inline-block", padding: "14px 32px", borderRadius: 4,
                  background: "var(--st-gold)", color: "#fff",
                  fontSize: 12, fontWeight: 600, textDecoration: "none",
                  letterSpacing: "0.1em", textTransform: "uppercase",
                  transition: "transform 0.2s, box-shadow 0.2s",
                }}>
                  Læs mere om selskaber →
                </Link>
              </div>
            </AnimateIn>

            <AnimateIn direction="right">
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 2 }}>
                {[
                  { target: 140, suffix: "",  label: "Gæster i stor sal" },
                  { target: 40,  suffix: "+", label: "Års erfaring"      },
                  { target: 20,  suffix: "+", label: "Min. kuverter"     },
                  { target: 3,   suffix: "",  label: "Buffet & brunch"   },
                ].map(s => (
                  <div key={s.label} style={{
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.09)",
                    padding: "28px 24px",
                  }}>
                    <CountUp target={s.target} suffix={s.suffix}
                      style={{ fontFamily: "var(--font-heading)", fontSize: 44, fontWeight: 700, color: "var(--st-gold)", lineHeight: 1, marginBottom: 10, display: "block" }}
                    />
                    <p style={{ fontSize: 12, color: "rgba(255,255,255,0.45)", lineHeight: 1.5, letterSpacing: "0.04em", marginTop: 10 }}>{s.label}</p>
                  </div>
                ))}
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          BRUNCH / BUFFET — photo-backed, no white cards
      ═══════════════════════════════════════════════════ */}
      <section style={{ position: "relative", padding: "110px 24px", overflow: "hidden" }}>
        <Image
          src="/images/tables3.jpg"
          alt="Buffet og brunch hos Restaurant Stausø"
          fill quality={80}
          style={{ objectFit: "cover", objectPosition: "center 40%" }}
        />
        <div style={{ position: "absolute", inset: 0, background: "rgba(10,6,2,0.86)" }} />
        <div style={{ position: "relative", maxWidth: 860, margin: "0 auto" }}>
          <AnimateIn>
            <div style={{ textAlign: "center", marginBottom: 72 }}>
              <p style={{ fontSize: 11, letterSpacing: "0.26em", color: "var(--st-gold)", textTransform: "uppercase", fontWeight: 600, marginBottom: 16 }}>
                Buffeter & Brunch
              </p>
              <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(28px, 4vw, 44px)", fontWeight: 700, color: "#fff", marginBottom: 16 }}>
                Komplet oplevelse for hele selskabet
              </h2>
              <p style={{ fontSize: 16, color: "rgba(255,255,255,0.52)", maxWidth: 480, margin: "0 auto" }}>
                Vælg mellem vores sammensatte buffetmenuer eller en lun brunch. Min. 25 personer.
              </p>
            </div>
          </AnimateIn>

          {[
            { title: "Anretning", price: "218 kr.", desc: "Torskefad, Serranoskinke med pesto, glaseret skinke, croissant med hønsesalat, roastbeef og kvark-kage." },
            { title: "Buffet",    price: "348 kr.", desc: "Indbagt tun, letsaltet skankesteg, kalvemørbrad, kalkun med ris, salatbar, 2 slags kartofler og dessertbord." },
            { title: "Brunch",   price: "295 kr.", desc: "Laksesalat, scrambleæg, frikadeller, rullepølse, pandekager, rugbrød og boller, ost, frugt, kaffe og te." },
          ].map((b, i) => (
            <AnimateIn key={b.title} delay={i * 65}>
              <div style={{
                display: "flex", alignItems: "baseline", justifyContent: "space-between",
                gap: 32, padding: "30px 0",
                borderBottom: "1px solid rgba(255,255,255,0.10)",
              }}>
                <div style={{ flex: 1 }}>
                  <h3 style={{
                    fontFamily: "var(--font-heading)", fontSize: "clamp(20px, 2.5vw, 24px)",
                    fontWeight: 700, color: "#fff", marginBottom: 8,
                  }}>{b.title}</h3>
                  <p style={{ fontSize: 14, color: "rgba(255,255,255,0.50)", lineHeight: 1.7 }}>{b.desc}</p>
                </div>
                <div style={{ textAlign: "right", flexShrink: 0 }}>
                  <span style={{ fontFamily: "var(--font-heading)", fontSize: 20, fontWeight: 600, color: "var(--st-gold)", display: "block" }}>{b.price}</span>
                  <span style={{ fontSize: 11, color: "rgba(255,255,255,0.35)", letterSpacing: "0.06em" }}>pr. person</span>
                </div>
              </div>
            </AnimateIn>
          ))}

          <AnimateIn>
            <div style={{ textAlign: "center", paddingTop: 52 }}>
              <Link href="/selskaber" prefetch={false} style={{
                display: "inline-block", padding: "13px 36px", borderRadius: 4,
                border: "1.5px solid rgba(255,255,255,0.35)", color: "#fff",
                fontSize: 12, fontWeight: 600, textDecoration: "none",
                letterSpacing: "0.1em", textTransform: "uppercase",
              }}>
                Læs mere om selskaber →
              </Link>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          FINAL CTA — WARM PHOTO BACKGROUND
      ═══════════════════════════════════════════════════ */}
      <section style={{
        position: "relative", padding: "120px 24px", textAlign: "center", overflow: "hidden",
      }}>
        <Image
          src="/images/tables1.jpg"
          alt="Festbord klar til selskab"
          fill
          quality={80}
          style={{ objectFit: "cover", objectPosition: "center 60%" }}
        />
        <div style={{
          position: "absolute", inset: 0,
          background: "rgba(14,9,4,0.72)",
        }} />
        <AnimateIn>
          <div style={{ position: "relative" }}>
            <p style={{ fontSize: 11, letterSpacing: "0.22em", color: "var(--st-gold)", textTransform: "uppercase", fontWeight: 600, marginBottom: 20 }}>
              Klar til at booke?
            </p>
            <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(28px, 4vw, 48px)", color: "#fff", fontWeight: 700, marginBottom: 20 }}>
              Ring og lad os planlægge<br />dit selskab
            </h2>
            <p style={{ fontSize: 16, color: "rgba(255,255,255,0.6)", marginBottom: 52, maxWidth: 480, margin: "0 auto 52px" }}>
              Vi er klar til at hjælpe med alt fra menu til lokale. Minimum 20 kuverter.
            </p>
            <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
              <a href="tel:75255101" className="btn-hover" style={{
                display: "flex", alignItems: "center", gap: 10,
                padding: "16px 40px", borderRadius: 4,
                background: "var(--st-gold)", color: "#fff",
                fontSize: 15, fontWeight: 600, textDecoration: "none",
                letterSpacing: "0.04em",
                transition: "transform 0.2s, box-shadow 0.2s",
              }}>
                <IconPhone /> 75 25 51 01
              </a>
              <Link href="/kontakt" prefetch={false} className="btn-ghost-hover" style={{
                padding: "16px 40px", borderRadius: 4,
                border: "1.5px solid rgba(255,255,255,0.4)", color: "#fff",
                fontSize: 15, fontWeight: 600, textDecoration: "none",
                transition: "background 0.2s",
              }}>
                Send besked
              </Link>
            </div>
          </div>
        </AnimateIn>
      </section>

      <style>{`
        @media (max-width: 768px) {
          .about-grid { grid-template-columns: 1fr !important; gap: 48px !important; }
          .selskaber-grid { grid-template-columns: 1fr !important; gap: 48px !important; }
        }
        @media (max-width: 600px) {
          [style*="gridTemplateColumns: repeat(3"] {
            grid-template-columns: 1fr 1fr !important;
          }
        }
      `}</style>
    </main>
  );
}

"use client";
import Image from "next/image";
import Link from "next/link";
import AnimateIn from "@/components/AnimateIn";

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="17" height="17" style={{ flexShrink: 0 }}>
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.07 12a19.79 19.79 0 0 1-3.07-8.67 2 2 0 0 1 1.99-2.18h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.09 9.91a16 16 0 0 0 5.997 5.997l1.17-1.17a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
    </svg>
  );
}

const events = [
  {
    title: "Konfirmation",
    desc: "Fejr den store dag med familie og venner. Vi hjælper med at skabe den perfekte ramme for en uforglemmelig konfirmationsfest med god dansk mad.",
  },
  {
    title: "Bryllup",
    desc: "Lad Restaurant Stausø danne det hyggelige og personlige baggrundstæppe for jeres bryllupsdag — stor som lille.",
  },
  {
    title: "Mærkedage",
    desc: "Rund fødselsdage, jubilæer og andre mærkedage af med stil. Vi klarer alt det praktiske, så I kan nyde fejringen.",
  },
  {
    title: "Firmafester",
    desc: "Styrk kollegaskabet med en velorganiseret firmafest i hyggelige og afslappende omgivelser. Minimum 20 kuverter.",
  },
  {
    title: "Begravelseskaffe",
    desc: "En afdæmpet og respektfuld ramme for en mindesammenkomst med klassisk dansk mad og et smukt kagebord.",
  },
  {
    title: "Familiefester",
    desc: "Genforeninger, sommerfester og familiedage — vi er vant til at tage os af hele familien i alle aldre.",
  },
];

export default function SelskaberPage() {
  return (
    <main>
      {/* ── PAGE HEADER — real photo ── */}
      <section style={{
        position: "relative", paddingTop: 68,
        minHeight: 320, display: "flex", alignItems: "center",
        justifyContent: "center", overflow: "hidden",
      }}>
        <Image
          src="/images/tables1.jpg"
          alt="Festborde klar til selskab hos Stausø"
          fill priority quality={85}
          style={{ objectFit: "cover", objectPosition: "center 45%" }}
        />
        <div style={{ position: "absolute", inset: 0, background: "rgba(14,9,4,0.68)" }} />
        <div style={{ position: "relative", textAlign: "center", padding: "64px 24px 56px" }}>
          <p style={{ fontSize: 11, letterSpacing: "0.26em", color: "var(--st-gold)", textTransform: "uppercase", fontWeight: 600, marginBottom: 16 }}>
            Selskaber & Arrangementer
          </p>
          <h1 style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(36px, 5vw, 64px)", color: "#fff", fontWeight: 700, lineHeight: 1.05, marginBottom: 16 }}>
            Vi holder din fest
          </h1>
          <p style={{ fontSize: 16, color: "rgba(255,255,255,0.62)", maxWidth: 520, margin: "0 auto" }}>
            Med plads til 140 gæster og 40 års erfaring er Restaurant Stausø det naturlige valg til store og små selskaber.
          </p>
        </div>
      </section>

      {/* ── KAPACITET ── */}
      <section style={{ background: "var(--st-stone)", padding: "64px 24px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))", gap: 2 }}>
            {[
              { n: "140", l: "Gæster i stor sal",   sub: "Til store selskaber og fester" },
              { n: "20+", l: "Min. kuverter",       sub: "Ved alle menuer" },
              { n: "40+", l: "Års erfaring",        sub: "Siden 1984" },
              { n: "3",   l: "Buffet & brunch",     sub: "Sammensatte menuer" },
            ].map((s, i) => (
              <AnimateIn key={s.l} delay={i * 60}>
                <div style={{
                  background: "#fff", padding: "36px 28px",
                  textAlign: "center", borderRadius: 4,
                  borderTop: "3px solid var(--st-gold)",
                }}>
                  <p style={{ fontFamily: "var(--font-heading)", fontSize: 52, fontWeight: 700, color: "var(--st-dark)", lineHeight: 1, marginBottom: 8 }}>{s.n}</p>
                  <p style={{ fontSize: 13, fontWeight: 600, color: "var(--st-text)", marginBottom: 5, letterSpacing: "0.03em" }}>{s.l}</p>
                  <p style={{ fontSize: 12, color: "var(--st-muted)" }}>{s.sub}</p>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── EVENT TYPES — elegant cards, no emojis ── */}
      <section style={{ background: "var(--st-cream)", padding: "100px 24px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <AnimateIn>
            <div style={{ textAlign: "center", marginBottom: 64 }}>
              <p style={{ fontSize: 11, letterSpacing: "0.22em", color: "var(--st-gold)", textTransform: "uppercase", fontWeight: 600, marginBottom: 16 }}>
                Hvad fejrer I?
              </p>
              <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(28px, 4vw, 42px)", fontWeight: 700, color: "var(--st-dark)" }}>
                Vi har erfaring med det hele
              </h2>
            </div>
          </AnimateIn>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))", gap: 2 }}>
            {events.map((ev, i) => (
              <AnimateIn key={ev.title} delay={i * 55}>
                <div className="card-hover" style={{
                  background: "#fff",
                  borderLeft: "3px solid var(--st-gold)",
                  padding: "32px 28px",
                  transition: "transform 0.25s, box-shadow 0.25s",
                }}>
                  <h3 style={{
                    fontFamily: "var(--font-heading)", fontSize: 22, fontWeight: 700,
                    color: "var(--st-dark)", marginBottom: 14,
                  }}>
                    {ev.title}
                  </h3>
                  <p style={{ fontSize: 14, color: "var(--st-muted)", lineHeight: 1.8 }}>{ev.desc}</p>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section style={{ background: "var(--st-stone)", padding: "100px 24px" }}>
        <div style={{ maxWidth: 860, margin: "0 auto" }}>
          <AnimateIn>
            <div style={{ textAlign: "center", marginBottom: 60 }}>
              <p style={{ fontSize: 11, letterSpacing: "0.22em", color: "var(--st-gold)", textTransform: "uppercase", fontWeight: 600, marginBottom: 16 }}>
                Sådan foregår det
              </p>
              <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(26px, 3.5vw, 40px)", fontWeight: 700, color: "var(--st-dark)" }}>
                Fra idé til fest
              </h2>
            </div>
          </AnimateIn>

          <div style={{ display: "grid", gap: 3 }}>
            {[
              { n: "01", title: "Ring til os",            desc: "Tag fat i os på 75 25 51 01 og fortæl om jeres arrangement — dato, antal gæster og ønsker." },
              { n: "02", title: "Vi sammensætter menuen", desc: "I samarbejde med kokken sætter vi en menu sammen der passer præcis til jeres selskab og smag." },
              { n: "03", title: "Nyd festen",             desc: "I kan slappe helt af — vi klarer det hele fra anretning til oprydning. I fejrer, vi sørger for resten." },
            ].map((step, i) => (
              <AnimateIn key={step.n} delay={i * 80}>
                <div style={{
                  display: "flex", gap: 28, alignItems: "flex-start",
                  background: "#fff",
                  padding: "28px 28px",
                  borderRadius: 4,
                }}>
                  <span style={{
                    fontFamily: "var(--font-heading)", fontSize: 36, fontWeight: 700,
                    color: "var(--st-gold)", flexShrink: 0, lineHeight: 1, minWidth: 52,
                  }}>{step.n}</span>
                  <div>
                    <h3 style={{ fontFamily: "var(--font-heading)", fontSize: 20, fontWeight: 700, color: "var(--st-dark)", marginBottom: 8 }}>{step.title}</h3>
                    <p style={{ fontSize: 15, color: "var(--st-muted)", lineHeight: 1.8 }}>{step.desc}</p>
                  </div>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA — photo background ── */}
      <section style={{
        position: "relative", padding: "110px 24px", textAlign: "center", overflow: "hidden",
      }}>
        <Image
          src="/images/dining2.jpg"
          alt="Selskabsmiddag hos Restaurant Stausø"
          fill quality={75}
          style={{ objectFit: "cover", objectPosition: "center 50%" }}
        />
        <div style={{ position: "absolute", inset: 0, background: "rgba(14,9,4,0.76)" }} />
        <AnimateIn>
          <div style={{ position: "relative" }}>
            <p style={{ fontSize: 11, letterSpacing: "0.22em", color: "var(--st-gold)", textTransform: "uppercase", fontWeight: 600, marginBottom: 20 }}>
              Klar til at booke?
            </p>
            <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(28px, 4vw, 48px)", color: "#fff", fontWeight: 700, marginBottom: 18 }}>
              Ring og lad os planlægge<br />dit selskab
            </h2>
            <p style={{ fontSize: 16, color: "rgba(255,255,255,0.6)", marginBottom: 48, maxWidth: 440, margin: "0 auto 48px" }}>
              Vi vender hurtigt tilbage — ring eller send en besked.
            </p>
            <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
              <a href="tel:75255101" className="btn-hover" style={{
                display: "flex", alignItems: "center", gap: 9,
                padding: "16px 40px", borderRadius: 4,
                background: "var(--st-gold)", color: "#fff",
                fontSize: 15, fontWeight: 600, textDecoration: "none",
                letterSpacing: "0.04em",
                transition: "transform 0.2s, box-shadow 0.2s",
              }}>
                <PhoneIcon /> 75 25 51 01
              </a>
              <Link href="/kontakt" prefetch={false} style={{
                padding: "16px 40px", borderRadius: 4,
                border: "1.5px solid rgba(255,255,255,0.38)", color: "#fff",
                fontSize: 15, fontWeight: 600, textDecoration: "none",
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

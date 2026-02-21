"use client";
import Link from "next/link";
import AnimateIn from "@/components/AnimateIn";

const events = [
  { title: "Konfirmation",   icon: "🎓", desc: "Fejr den store dag med familie og venner. Vi hjælper med at skabe den perfekte ramme for en uforglemmelig konfirmationsfest." },
  { title: "Bryllup",        icon: "💍", desc: "Lad Restaurant Stausø danne det hyggelige og personlige baggrundstæppe for jeres bryllupsdag." },
  { title: "Mærkedage",      icon: "🥂", desc: "Rund fødselsdage, jubilæer og andre mærkedage af med stil — vi klarer alt det praktiske." },
  { title: "Firmafester",    icon: "🏢", desc: "Styrk kollegaskabet med en velorganiseret firmafest i hyggelige og afslappende omgivelser." },
  { title: "Begravelseskaffe", icon: "🕯️", desc: "En afdæmpet og respektfuld ramme for en mindesammenkomst med klassisk dansk mad og kagebord." },
  { title: "Familiefester",  icon: "👨‍👩‍👧‍👦", desc: "Genforeninger, sommerfester og familiedage — vi er vant til at tage os af hele familien." },
];

export default function SelskaberPage() {
  return (
    <main style={{ paddingTop: 68 }}>
      {/* Header */}
      <section style={{
        background: "linear-gradient(135deg, #243d1a 0%, #1a1208 100%)",
        padding: "72px 24px 60px", textAlign: "center",
      }}>
        <p style={{ fontSize: 12, letterSpacing: "0.18em", color: "var(--st-gold)", textTransform: "uppercase", fontWeight: 600, marginBottom: 16 }}>
          Selskaber & Arrangementer
        </p>
        <h1 style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(36px, 5vw, 60px)", color: "#fff", fontWeight: 700, marginBottom: 20 }}>
          Vi holder din fest
        </h1>
        <p style={{ fontSize: 16, color: "rgba(255,255,255,0.65)", maxWidth: 540, margin: "0 auto" }}>
          Med plads til 140 gæster og 40 års erfaring er Restaurant Stausø det naturlige valg til store og små selskaber i Henne-området.
        </p>
      </section>

      {/* Capacity */}
      <section style={{ background: "var(--st-stone)", padding: "60px 24px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))", gap: 20 }}>
            {[
              { n: "140", l: "Gæster i stor sal",   sub: "Til store selskaber og fester" },
              { n: "20+", l: "Min. kuverter",       sub: "Ved alle menuer" },
              { n: "40+", l: "Års erfaring",        sub: "Siden 1984" },
              { n: "3",   l: "Buffet & brunch",     sub: "Sammensatte menuer" },
            ].map(s => (
              <AnimateIn key={s.l}>
                <div style={{
                  background: "#fff", borderRadius: 14, padding: "32px 28px",
                  textAlign: "center", border: "1px solid var(--st-border)",
                }}>
                  <p style={{ fontFamily: "var(--font-heading)", fontSize: 48, fontWeight: 700, color: "var(--st-green)", lineHeight: 1, marginBottom: 8 }}>{s.n}</p>
                  <p style={{ fontSize: 14, fontWeight: 600, color: "var(--st-dark)", marginBottom: 6 }}>{s.l}</p>
                  <p style={{ fontSize: 12, color: "var(--st-muted)" }}>{s.sub}</p>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* Event types */}
      <section style={{ background: "var(--st-cream)", padding: "90px 24px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <AnimateIn>
            <div style={{ textAlign: "center", marginBottom: 60 }}>
              <p style={{ fontSize: 12, letterSpacing: "0.18em", color: "var(--st-gold)", textTransform: "uppercase", fontWeight: 600, marginBottom: 16 }}>
                Hvad fejrer I?
              </p>
              <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(28px, 4vw, 42px)", fontWeight: 700, color: "var(--st-dark)" }}>
                Vi har erfaring med det hele
              </h2>
            </div>
          </AnimateIn>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))", gap: 24 }}>
            {events.map((ev, i) => (
              <AnimateIn key={ev.title} delay={i * 60}>
                <div className="card-hover" style={{
                  background: "#fff", borderRadius: 14,
                  border: "1px solid var(--st-border)",
                  padding: "32px 28px",
                  transition: "transform 0.25s, box-shadow 0.25s",
                }}>
                  <div style={{ fontSize: 32, marginBottom: 16 }}>{ev.icon}</div>
                  <h3 style={{ fontFamily: "var(--font-heading)", fontSize: 22, fontWeight: 700, color: "var(--st-dark)", marginBottom: 12 }}>
                    {ev.title}
                  </h3>
                  <p style={{ fontSize: 14, color: "var(--st-muted)", lineHeight: 1.7 }}>{ev.desc}</p>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section style={{ background: "var(--st-stone)", padding: "90px 24px" }}>
        <div style={{ maxWidth: 860, margin: "0 auto" }}>
          <AnimateIn>
            <div style={{ textAlign: "center", marginBottom: 60 }}>
              <p style={{ fontSize: 12, letterSpacing: "0.18em", color: "var(--st-gold)", textTransform: "uppercase", fontWeight: 600, marginBottom: 16 }}>
                Sådan foregår det
              </p>
              <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(26px, 3.5vw, 40px)", fontWeight: 700, color: "var(--st-dark)" }}>
                Fra idé til fest
              </h2>
            </div>
          </AnimateIn>

          <div style={{ display: "grid", gap: 24 }}>
            {[
              { n: "01", title: "Ring til os", desc: "Tag fat i os på 75 25 51 01 og fortæl om jeres arrangement — dato, antal gæster og ønsker." },
              { n: "02", title: "Vi sammensætter menuen", desc: "I samarbejde med kokken sætter vi en menu sammen der passer præcis til jeres selskab og smag." },
              { n: "03", title: "Nyd festen", desc: "I kan slappe helt af — vi klarer det hele fra anretning til oprydning. I fejrer, vi sørger for resten." },
            ].map((step, i) => (
              <AnimateIn key={step.n} delay={i * 80}>
                <div style={{
                  display: "flex", gap: 28, alignItems: "flex-start",
                  background: "#fff", borderRadius: 14,
                  border: "1px solid var(--st-border)", padding: "28px 28px",
                }}>
                  <span style={{
                    fontFamily: "var(--font-heading)", fontSize: 32, fontWeight: 700,
                    color: "var(--st-gold)", flexShrink: 0, lineHeight: 1, minWidth: 48,
                  }}>{step.n}</span>
                  <div>
                    <h3 style={{ fontFamily: "var(--font-heading)", fontSize: 20, fontWeight: 700, color: "var(--st-dark)", marginBottom: 8 }}>{step.title}</h3>
                    <p style={{ fontSize: 15, color: "var(--st-muted)", lineHeight: 1.7 }}>{step.desc}</p>
                  </div>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: "var(--st-dark)", padding: "90px 24px", textAlign: "center" }}>
        <AnimateIn>
          <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(28px, 4vw, 44px)", color: "#fff", fontWeight: 700, marginBottom: 20 }}>
            Klar til at booke?
          </h2>
          <p style={{ fontSize: 16, color: "rgba(255,255,255,0.6)", marginBottom: 40, maxWidth: 440, margin: "0 auto 40px" }}>
            Ring til os eller send en besked — vi vender hurtigt tilbage.
          </p>
          <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
            <a href="tel:75255101" style={{
              padding: "16px 40px", borderRadius: 6,
              background: "var(--st-gold)", color: "#fff",
              fontSize: 15, fontWeight: 600, textDecoration: "none",
            }}>
              📞 75 25 51 01
            </a>
            <Link href="/kontakt" prefetch={false} style={{
              padding: "16px 40px", borderRadius: 6,
              border: "1.5px solid rgba(255,255,255,0.35)", color: "#fff",
              fontSize: 15, fontWeight: 600, textDecoration: "none",
            }}>
              Send besked
            </Link>
          </div>
        </AnimateIn>
      </section>
    </main>
  );
}

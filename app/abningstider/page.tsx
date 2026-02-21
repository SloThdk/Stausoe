import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Åbningstider — Restaurant Stausø",
  description: "Restaurant Stausø er åben efter forudgående reservation. Ring 75 25 51 01 for at booke bord.",
};

export default function AbningstiderPage() {
  return (
    <main>
      {/* ── HEADER ── */}
      <section style={{
        position: "relative", paddingTop: 68,
        minHeight: 300, display: "flex", alignItems: "center",
        justifyContent: "center", overflow: "hidden",
      }}>
        <Image
          src="/images/interior1.jpg"
          alt="Restaurant Stausø indgang"
          fill priority quality={85}
          style={{ objectFit: "cover", objectPosition: "center 40%" }}
        />
        <div style={{ position: "absolute", inset: 0, background: "rgba(14,9,4,0.68)" }} />
        <div style={{ position: "relative", textAlign: "center", padding: "64px 24px 56px" }}>
          <p style={{ fontSize: 11, letterSpacing: "0.26em", color: "var(--st-gold)", textTransform: "uppercase", fontWeight: 600, marginBottom: 16 }}>
            Åbningstider
          </p>
          <h1 style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(36px, 5vw, 64px)", color: "#fff", fontWeight: 700, lineHeight: 1.05 }}>
            Åbningstider & Reservation
          </h1>
        </div>
      </section>

      {/* ── CONTENT ── */}
      <section style={{ background: "var(--st-cream)", padding: "100px 24px" }}>
        <div style={{ maxWidth: 700, margin: "0 auto", textAlign: "center" }}>

          {/* Main info card */}
          <div style={{
            background: "#fff", borderRadius: 4,
            border: "1px solid var(--st-border)",
            borderTop: "3px solid var(--st-gold)",
            padding: "52px 48px",
            marginBottom: 32,
          }}>
            <p style={{ fontSize: 11, letterSpacing: "0.2em", color: "var(--st-gold)", textTransform: "uppercase", fontWeight: 600, marginBottom: 20 }}>
              Åbent
            </p>
            <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(26px, 4vw, 38px)", fontWeight: 700, color: "var(--st-dark)", lineHeight: 1.2, marginBottom: 24 }}>
              Kun efter forudgående<br />telefonisk reservation
            </h2>
            <p style={{ fontSize: 16, color: "var(--st-muted)", lineHeight: 1.85, maxWidth: 420, margin: "0 auto 40px" }}>
              Vi tilpasser os jeres arrangement og åbner efter aftale. Ring til os og vi finder en dato der passer — vi er klar til at hjælpe.
            </p>
            <a href="tel:75255101" style={{
              display: "inline-flex", alignItems: "center", gap: 12,
              padding: "16px 40px", borderRadius: 4,
              background: "var(--st-gold)", color: "#fff",
              fontSize: 16, fontWeight: 600, textDecoration: "none",
              letterSpacing: "0.04em",
            }}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="18" height="18">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.07 12a19.79 19.79 0 0 1-3.07-8.67 2 2 0 0 1 1.99-2.18h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.09 9.91a16 16 0 0 0 5.997 5.997l1.17-1.17a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
              </svg>
              75 25 51 01
            </a>
          </div>

          {/* Address strip */}
          <div style={{
            background: "var(--st-stone)", borderRadius: 4,
            padding: "28px 40px",
            display: "flex", justifyContent: "center", gap: 48, flexWrap: "wrap",
            border: "1px solid var(--st-border)",
          }}>
            <div>
              <p style={{ fontSize: 11, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--st-muted)", marginBottom: 6 }}>Adresse</p>
              <p style={{ fontFamily: "var(--font-heading)", fontSize: 16, fontWeight: 600, color: "var(--st-dark)" }}>Klintingvej 204, 6854 Henne</p>
            </div>
            <div>
              <p style={{ fontSize: 11, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--st-muted)", marginBottom: 6 }}>Selskaber</p>
              <p style={{ fontFamily: "var(--font-heading)", fontSize: 16, fontWeight: 600, color: "var(--st-dark)" }}>Min. 20 kuverter</p>
            </div>
          </div>

          <p style={{ marginTop: 40, fontSize: 14, color: "var(--st-muted)" }}>
            Ønsker du at skrive?{" "}
            <Link href="/kontakt" prefetch={false} style={{ color: "var(--st-gold)", textDecoration: "none", fontWeight: 500 }}>
              Send os en besked →
            </Link>
          </p>
        </div>
      </section>
    </main>
  );
}

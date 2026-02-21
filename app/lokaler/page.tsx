import Image from "next/image";
import Link from "next/link";
import { CountUp } from "@/components/CountUp";

export const metadata = {
  title: "Lokaler — Restaurant Stausø",
  description: "Se vores hyggelige lokaler i Henne. Stor sal med plads til 140 gæster og en intim skænk til mindre selskaber.",
};

const galleryImages = [
  { src: "/images/dining1.jpg",        alt: "Den store sal klar til selskab",     aspect: "wide"   },
  { src: "/images/interior1.jpg",      alt: "Hyggelig indretning",                aspect: "square" },
  { src: "/images/interior9.jpg",      alt: "Restaurantens stemningsfulde indre", aspect: "square" },
  { src: "/images/tables1.jpg",        alt: "Festligt dækkede borde",             aspect: "wide"   },
  { src: "/images/interior2.jpg",      alt: "Varmt og hyggeligt interiør",        aspect: "square" },
  { src: "/images/interior3.jpg",      alt: "Klassisk dansk indretning",          aspect: "square" },
  { src: "/images/tables2.jpg",        alt: "Klar til gæster",                    aspect: "wide"   },
  { src: "/images/interior4.jpg",      alt: "Detalje fra restauranten",           aspect: "square" },
  { src: "/images/interior10.jpg",     alt: "Skænken — intimt og hyggeligt",      aspect: "square" },
  { src: "/images/dining2.jpg",        alt: "Middag i restauranten",              aspect: "wide"   },
  { src: "/images/interior5.jpg",      alt: "Indretning og atmosfære",            aspect: "square" },
  { src: "/images/interior6.jpg",      alt: "Interiør detaljer",                  aspect: "square" },
  { src: "/images/tables3.jpg",        alt: "Borde dækket til fest",              aspect: "wide"   },
  { src: "/images/interior_tall1.jpg", alt: "Gang og lokaler",                    aspect: "square" },
  { src: "/images/interior_tall2.jpg", alt: "Lokale detaljer",                    aspect: "square" },
  { src: "/images/interior7.jpg",      alt: "Stemningsfuldt lys",                 aspect: "square" },
  { src: "/images/interior8.jpg",      alt: "Varmt og indbydende",                aspect: "square" },
  { src: "/images/exterior1.jpg",      alt: "Restaurant Stausø udefra",           aspect: "wide"   },
  { src: "/images/exterior2.jpg",      alt: "Bygningen — sommer",                 aspect: "square" },
  { src: "/images/entrance2.jpg",      alt: "Indgang og facade",                  aspect: "square" },
];

export default function LokalerPage() {
  return (
    <main>
      {/* ── HEADER ── */}
      <section style={{
        position: "relative", paddingTop: 68,
        minHeight: 340, display: "flex", alignItems: "center",
        justifyContent: "center", overflow: "hidden",
      }}>
        <Image
          src="/images/interior_glasses.jpg"
          alt="Restaurant Stausø atmosfære"
          fill priority quality={88}
          style={{ objectFit: "cover", objectPosition: "center 55%" }}
        />
        <div style={{ position: "absolute", inset: 0, background: "rgba(12,8,3,0.72)" }} />
        <div style={{ position: "relative", textAlign: "center", padding: "72px 24px 60px" }}>
          <p style={{ fontSize: 11, letterSpacing: "0.26em", color: "var(--st-gold)", textTransform: "uppercase", fontWeight: 600, marginBottom: 16 }}>
            Vores Lokaler
          </p>
          <h1 style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(36px, 5vw, 64px)", color: "#fff", fontWeight: 700, lineHeight: 1.05, marginBottom: 16 }}>
            Flotte omgivelser
          </h1>
          <p style={{ fontSize: 16, color: "rgba(255,255,255,0.70)", maxWidth: 500, margin: "0 auto" }}>
            God mad, flotte omgivelser og god betjening — velkommen til Restaurant Stausø
          </p>
        </div>
      </section>

      {/* ── INTRO — two spaces ── */}
      <section style={{ background: "var(--st-dark)", padding: "80px 24px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div className="spaces-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 3 }}>

            {/* Stor sal */}
            <div style={{ position: "relative", aspectRatio: "4/3", overflow: "hidden", borderRadius: 4 }}>
              <Image src="/images/tables1.jpg" alt="Den store sal" fill quality={82} style={{ objectFit: "cover" }} />
              <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(12,8,3,0.82) 0%, rgba(12,8,3,0.15) 55%)" }} />
              <div style={{ position: "absolute", bottom: 28, left: 28, right: 28 }}>
                <p style={{ fontSize: 11, letterSpacing: "0.2em", color: "var(--st-gold)", textTransform: "uppercase", marginBottom: 8 }}>Stor sal</p>
                <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(22px, 3vw, 32px)", color: "#fff", fontWeight: 700, marginBottom: 8 }}>
                  Op til <CountUp target={140} /> gæster
                </h2>
                <p style={{ fontSize: 14, color: "rgba(255,255,255,0.75)", lineHeight: 1.6 }}>
                  Vores store festsal er ideel til konfirmationer, bryllupper, firmaevents og andre store arrangementer.
                </p>
              </div>
            </div>

            {/* Skænken */}
            <div style={{ position: "relative", aspectRatio: "4/3", overflow: "hidden", borderRadius: 4 }}>
              <Image src="/images/interior10.jpg" alt="Skænken" fill quality={82} style={{ objectFit: "cover" }} />
              <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(12,8,3,0.82) 0%, rgba(12,8,3,0.15) 55%)" }} />
              <div style={{ position: "absolute", bottom: 28, left: 28, right: 28 }}>
                <p style={{ fontSize: 11, letterSpacing: "0.2em", color: "var(--st-gold)", textTransform: "uppercase", marginBottom: 8 }}>Skænken</p>
                <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(22px, 3vw, 32px)", color: "#fff", fontWeight: 700, marginBottom: 8 }}>
                  Til mindre selskaber
                </h2>
                <p style={{ fontSize: 14, color: "rgba(255,255,255,0.75)", lineHeight: 1.6 }}>
                  Vores hyggelige skænk er den perfekte ramme for intime sammenkomster og mindre familieselskaber.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── FULL PHOTO GALLERY ── */}
      <section style={{ background: "var(--st-dark)", padding: "0 0 80px" }}>
        <div style={{ textAlign: "center", padding: "72px 24px 52px" }}>
          <p style={{ fontSize: 11, letterSpacing: "0.22em", color: "var(--st-gold)", textTransform: "uppercase", fontWeight: 600, marginBottom: 14 }}>
            Galleri
          </p>
          <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(26px, 4vw, 40px)", fontWeight: 700, color: "#fff" }}>
            Se restauranten med egne øjne
          </h2>
        </div>

        {/* Masonry-style grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: 3,
          padding: "0 3px",
        }}>
          {galleryImages.map((img) => (
            <div
              key={img.src}
              style={{
                position: "relative",
                aspectRatio: img.aspect === "wide" ? "16/10" : "4/3",
                overflow: "hidden",
                gridColumn: img.aspect === "wide" ? "span 1" : undefined,
              }}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                quality={78}
                style={{
                  objectFit: "cover",
                  transition: "transform 0.5s ease",
                }}
                className="gallery-img"
              />
            </div>
          ))}
        </div>

        <style>{`.gallery-img:hover { transform: scale(1.04); }`}</style>
      </section>

      {/* ── CTA ── */}
      <section style={{
        position: "relative", padding: "100px 24px", textAlign: "center", overflow: "hidden",
      }}>
        <Image
          src="/images/dining2.jpg"
          alt="Book selskab hos Restaurant Stausø"
          fill quality={72}
          style={{ objectFit: "cover", objectPosition: "center 40%" }}
        />
        <div style={{ position: "absolute", inset: 0, background: "rgba(12,8,3,0.78)" }} />
        <div style={{ position: "relative" }}>
          <p style={{ fontSize: 11, letterSpacing: "0.22em", color: "var(--st-gold)", textTransform: "uppercase", fontWeight: 600, marginBottom: 18 }}>
            Kun efter forudgående reservation
          </p>
          <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(26px, 4vw, 44px)", color: "#fff", fontWeight: 700, marginBottom: 18 }}>
            Vi er klar til at byde jer velkommen
          </h2>
          <p style={{ fontSize: 16, color: "rgba(255,255,255,0.62)", maxWidth: 440, margin: "0 auto 44px" }}>
            Ring til os og book jeres næste arrangement — stor som lille.
          </p>
          <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
            <a href="tel:75255101" style={{
              display: "flex", alignItems: "center", gap: 9,
              padding: "16px 40px", borderRadius: 4,
              background: "var(--st-gold)", color: "#fff",
              fontSize: 15, fontWeight: 600, textDecoration: "none",
            }}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="17" height="17">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.07 12a19.79 19.79 0 0 1-3.07-8.67 2 2 0 0 1 1.99-2.18h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.09 9.91a16 16 0 0 0 5.997 5.997l1.17-1.17a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
              </svg>
              75 25 51 01
            </a>
            <Link href="/selskaber" prefetch={false} style={{
              padding: "16px 40px", borderRadius: 4,
              border: "1.5px solid rgba(255,255,255,0.38)", color: "#fff",
              fontSize: 15, fontWeight: 600, textDecoration: "none",
            }}>
              Om selskaber →
            </Link>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 640px) {
          .spaces-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </main>
  );
}

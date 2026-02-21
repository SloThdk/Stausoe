"use client";
import { useState } from "react";
import Image from "next/image";
import AnimateIn from "@/components/AnimateIn";

export default function KontaktPage() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", phone: "", guests: "", date: "", message: "" });

  const infoItems = [
    { label: "Adresse",     value: "Klintingvej 204, 6854 Henne", href: "https://maps.google.com/?q=Klintingvej+204+6854+Henne", linkText: "Se på kort →", ext: true },
    { label: "Telefon",     value: "75 25 51 01",                  href: "tel:75255101",         linkText: "Ring nu →",           ext: false },
    { label: "Reservation", value: "Kun ved forudgående telefonisk reservation", href: "tel:75255101", linkText: "Book bord →", ext: false },
  ];

  const field = (key: string, label: string, type: string, placeholder: string, required = false, fullWidth = false) => (
    <div key={key} style={{ gridColumn: fullWidth ? "1 / -1" : undefined }}>
      <label style={{ display: "block", fontSize: 11, fontWeight: 600, color: "rgba(255,255,255,0.45)", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 8 }}>
        {label}
      </label>
      <input
        type={type} required={required} placeholder={placeholder}
        value={(form as Record<string, string>)[key]}
        onChange={e => setForm(p => ({ ...p, [key]: e.target.value }))}
        style={{
          width: "100%", padding: "12px 16px",
          background: "rgba(255,255,255,0.06)",
          border: "1px solid rgba(255,255,255,0.14)",
          borderRadius: 4, fontSize: 14, color: "#fff",
          outline: "none",
        }}
      />
    </div>
  );

  return (
    <main>
      {/* ── HEADER ── */}
      <section style={{
        position: "relative", paddingTop: 68,
        minHeight: 300, display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden",
      }}>
        <Image src="/images/exterior2.jpg" alt="Restaurant Stausø bygning" fill priority quality={85}
          style={{ objectFit: "cover", objectPosition: "center 50%" }} />
        <div style={{ position: "absolute", inset: 0, background: "rgba(10,6,2,0.72)" }} />
        <div style={{ position: "relative", textAlign: "center", padding: "64px 24px 56px" }}>
          <p style={{ fontSize: 11, letterSpacing: "0.26em", color: "var(--st-gold)", textTransform: "uppercase", fontWeight: 600, marginBottom: 16 }}>Kontakt & Booking</p>
          <h1 style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(36px, 5vw, 64px)", color: "#fff", fontWeight: 700, lineHeight: 1.05 }}>
            Find os i Henne
          </h1>
        </div>
      </section>

      {/* ── CONTENT — dark throughout ── */}
      <section style={{ background: "var(--st-dark)", padding: "80px 24px 100px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div className="kontakt-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1.4fr", gap: 56, alignItems: "start" }}>

            {/* ── Info ── */}
            <AnimateIn direction="left">
              <div>
                {infoItems.map(item => (
                  <div key={item.label} style={{
                    padding: "22px 24px", marginBottom: 2,
                    background: "rgba(255,255,255,0.04)",
                    borderLeft: "2px solid var(--st-gold)",
                  }}>
                    <p style={{ fontSize: 11, letterSpacing: "0.14em", textTransform: "uppercase", color: "rgba(255,255,255,0.38)", marginBottom: 8 }}>{item.label}</p>
                    <p style={{ fontFamily: "var(--font-heading)", fontSize: 16, fontWeight: 600, color: "#fff", lineHeight: 1.5, marginBottom: 10 }}>{item.value}</p>
                    <a href={item.href} target={item.ext ? "_blank" : undefined} rel={item.ext ? "noopener noreferrer" : undefined}
                      style={{ fontSize: 13, color: "var(--st-gold)", textDecoration: "none", fontWeight: 500 }}>
                      {item.linkText}
                    </a>
                  </div>
                ))}

                <div style={{ marginTop: 16, overflow: "hidden", height: 200, border: "1px solid rgba(255,255,255,0.1)" }}>
                  <iframe
                    src="https://maps.google.com/maps?q=Klintingvej+204,+6854+Henne,+Denmark&z=14&output=embed"
                    width="100%" height="200"
                    style={{ border: 0, display: "block" }}
                    allowFullScreen loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Restaurant Stausø"
                  />
                </div>
              </div>
            </AnimateIn>

            {/* ── Form ── */}
            <AnimateIn direction="right">
              <div style={{ background: "rgba(255,255,255,0.04)", padding: "40px 36px", border: "1px solid rgba(255,255,255,0.09)" }}>
                <h2 style={{ fontFamily: "var(--font-heading)", fontSize: 26, fontWeight: 700, color: "#fff", marginBottom: 8 }}>
                  Forespørgsel om selskab
                </h2>
                <p style={{ fontSize: 14, color: "rgba(255,255,255,0.48)", marginBottom: 32, lineHeight: 1.65 }}>
                  Udfyld formularen, og vi vender tilbage hurtigst muligt. Du er altid velkommen til at ringe direkte på 75 25 51 01.
                </p>

                {sent ? (
                  <div style={{ textAlign: "center", padding: "48px 20px" }}>
                    <div style={{ width: 56, height: 56, borderRadius: "50%", background: "rgba(184,150,46,0.15)", border: "2px solid var(--st-gold)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 20px" }}>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--st-gold)" strokeWidth="2.5" strokeLinecap="round">
                        <path d="M20 6L9 17l-5-5"/>
                      </svg>
                    </div>
                    <h3 style={{ fontFamily: "var(--font-heading)", fontSize: 22, color: "#fff", marginBottom: 8 }}>Tak for din henvendelse!</h3>
                    <p style={{ fontSize: 14, color: "rgba(255,255,255,0.5)" }}>Vi vender tilbage hurtigst muligt.</p>
                  </div>
                ) : (
                  <form onSubmit={(e) => { e.preventDefault(); setSent(true); }}>
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14, marginBottom: 14 }}>
                      {field("name",   "Navn *",         "text",   "Dit navn",    true)}
                      {field("phone",  "Telefon *",      "tel",    "Dit tlf.nr.", true)}
                      {field("email",  "E-mail",         "email",  "Din e-mail")}
                      {field("guests", "Antal gæster *", "number", "Min. 20",    true)}
                    </div>
                    <div style={{ marginBottom: 14 }}>
                      {field("date",   "Ønsket dato",    "date",   "")}
                    </div>
                    <div style={{ marginBottom: 28 }}>
                      <label style={{ display: "block", fontSize: 11, fontWeight: 600, color: "rgba(255,255,255,0.45)", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 8 }}>Besked</label>
                      <textarea
                        rows={4} placeholder="Beskriv dit arrangement — type, ønsker, spørgsmål..."
                        value={form.message}
                        onChange={e => setForm(p => ({ ...p, message: e.target.value }))}
                        style={{
                          width: "100%", padding: "12px 16px",
                          background: "rgba(255,255,255,0.06)",
                          border: "1px solid rgba(255,255,255,0.14)",
                          borderRadius: 4, fontSize: 14, color: "#fff", outline: "none", resize: "vertical",
                        }}
                      />
                    </div>
                    <button type="submit" style={{
                      width: "100%", padding: "14px", borderRadius: 4,
                      background: "var(--st-gold)", color: "#fff",
                      fontSize: 15, fontWeight: 600, border: "none", letterSpacing: "0.04em",
                    }}>
                      Send forespørgsel
                    </button>
                  </form>
                )}
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 768px) { .kontakt-grid { grid-template-columns: 1fr !important; } }
        input::placeholder, textarea::placeholder { color: rgba(255,255,255,0.25); }
        input:focus, textarea:focus { border-color: var(--st-gold) !important; }
      `}</style>
    </main>
  );
}

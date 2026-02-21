"use client";
import { useState } from "react";
import AnimateIn from "@/components/AnimateIn";

export default function KontaktPage() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", phone: "", guests: "", date: "", message: "" });

  const infoCards = [
    {
      label: "Adresse",
      content: "Klintingvej 204\n6854 Henne",
      link: "https://maps.google.com/?q=Klintingvej+204+6854+Henne",
      linkText: "Se på kort →",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--st-green)" strokeWidth="2">
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 1 1 18 0z"/><circle cx="12" cy="10" r="3"/>
        </svg>
      ),
    },
    {
      label: "Telefon",
      content: "75 25 51 01",
      link: "tel:75255101",
      linkText: "Ring nu →",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--st-green)" strokeWidth="2">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.62 3.36 2 2 0 0 1 3.6 1.18h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.59a16 16 0 0 0 6.5 6.5l1.11-.97a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
        </svg>
      ),
    },
    {
      label: "Reservation",
      content: "Kun ved forudgående\ntelefonisk reservation",
      link: "tel:75255101",
      linkText: "Book bord →",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--st-green)" strokeWidth="2">
          <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>
        </svg>
      ),
    },
  ];

  return (
    <main style={{ paddingTop: 68 }}>
      {/* Header */}
      <section style={{
        background: "linear-gradient(135deg, #243d1a 0%, #1a1208 100%)",
        padding: "72px 24px 60px", textAlign: "center",
      }}>
        <p style={{ fontSize: 12, letterSpacing: "0.18em", color: "var(--st-gold)", textTransform: "uppercase", fontWeight: 600, marginBottom: 16 }}>
          Kontakt & Booking
        </p>
        <h1 style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(36px, 5vw, 60px)", color: "#fff", fontWeight: 700 }}>
          Find os i Henne
        </h1>
      </section>

      {/* Content */}
      <section style={{ background: "var(--st-cream)", padding: "80px 24px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1.4fr", gap: 64, alignItems: "start" }}>

            {/* Left: Info */}
            <div>
              <AnimateIn direction="left">
                {infoCards.map(card => (
                  <div key={card.label} style={{
                    background: "#fff", borderRadius: 12, padding: "20px 22px", marginBottom: 16,
                    border: "1px solid var(--st-border)",
                    boxShadow: "0 1px 8px rgba(0,0,0,0.04)",
                  }}>
                    <div style={{ display: "flex", gap: 14, alignItems: "flex-start" }}>
                      <span style={{
                        width: 40, height: 40, borderRadius: 10,
                        background: "rgba(36,61,26,0.08)",
                        display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
                      }}>
                        {card.icon}
                      </span>
                      <div>
                        <p style={{ fontSize: 11, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--st-muted)", marginBottom: 4 }}>
                          {card.label}
                        </p>
                        <p style={{ fontFamily: "var(--font-heading)", fontSize: 17, fontWeight: 600, color: "var(--st-text)", whiteSpace: "pre-line", marginBottom: 8 }}>
                          {card.content}
                        </p>
                        <a href={card.link} target={card.link.startsWith("http") ? "_blank" : undefined}
                          rel={card.link.startsWith("http") ? "noopener noreferrer" : undefined}
                          style={{ fontSize: 13, color: "var(--st-gold)", textDecoration: "none", fontWeight: 500 }}>
                          {card.linkText}
                        </a>
                      </div>
                    </div>
                  </div>
                ))}

                {/* Map */}
                <div style={{ marginTop: 8, borderRadius: 14, overflow: "hidden", border: "1px solid var(--st-border)", height: 200 }}>
                  <iframe
                    src="https://maps.google.com/maps?q=Klintingvej+204,+6854+Henne,+Denmark&z=14&output=embed"
                    width="100%" height="200"
                    style={{ border: 0, display: "block" }}
                    allowFullScreen loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Restaurant Stausø"
                  />
                </div>
              </AnimateIn>
            </div>

            {/* Right: Form */}
            <AnimateIn direction="right">
              <div style={{ background: "#fff", borderRadius: 16, padding: "40px 36px", border: "1px solid var(--st-border)" }}>
                <h2 style={{ fontFamily: "var(--font-heading)", fontSize: 28, fontWeight: 700, color: "var(--st-dark)", marginBottom: 8 }}>
                  Forespørgsel om selskab
                </h2>
                <p style={{ fontSize: 14, color: "var(--st-muted)", marginBottom: 32, lineHeight: 1.6 }}>
                  Udfyld formularen, og vi vender tilbage hurtigst muligt. Du er også altid velkommen til at ringe direkte på 75 25 51 01.
                </p>

                {sent ? (
                  <div style={{ textAlign: "center", padding: "40px 20px" }}>
                    <div style={{ fontSize: 48, marginBottom: 16 }}>✓</div>
                    <h3 style={{ fontFamily: "var(--font-heading)", fontSize: 22, color: "var(--st-green)", marginBottom: 8 }}>Tak for din henvendelse!</h3>
                    <p style={{ fontSize: 14, color: "var(--st-muted)" }}>Vi vender tilbage hurtigst muligt.</p>
                  </div>
                ) : (
                  <form onSubmit={(e) => { e.preventDefault(); setSent(true); }}>
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 16 }}>
                      {[
                        { key: "name",   label: "Navn *",        type: "text",   placeholder: "Dit navn",    required: true  },
                        { key: "phone",  label: "Telefon *",     type: "tel",    placeholder: "Dit tlf.nr.", required: true  },
                        { key: "email",  label: "E-mail",        type: "email",  placeholder: "Din e-mail",  required: false },
                        { key: "guests", label: "Antal gæster *",type: "number", placeholder: "Min. 20",     required: true  },
                      ].map(f => (
                        <div key={f.key}>
                          <label style={{ display: "block", fontSize: 12, fontWeight: 600, color: "var(--st-text)", letterSpacing: "0.05em", textTransform: "uppercase", marginBottom: 8 }}>
                            {f.label}
                          </label>
                          <input
                            type={f.type} required={f.required} placeholder={f.placeholder}
                            value={(form as Record<string, string>)[f.key]}
                            onChange={e => setForm(p => ({ ...p, [f.key]: e.target.value }))}
                            style={{
                              width: "100%", padding: "11px 14px",
                              border: "1.5px solid var(--st-border)", borderRadius: 8,
                              fontSize: 14, color: "var(--st-text)", background: "var(--st-cream)",
                              outline: "none",
                            }}
                          />
                        </div>
                      ))}
                    </div>

                    <div style={{ marginBottom: 16 }}>
                      <label style={{ display: "block", fontSize: 12, fontWeight: 600, color: "var(--st-text)", letterSpacing: "0.05em", textTransform: "uppercase", marginBottom: 8 }}>
                        Ønsket dato
                      </label>
                      <input
                        type="date" value={form.date}
                        onChange={e => setForm(p => ({ ...p, date: e.target.value }))}
                        style={{ width: "100%", padding: "11px 14px", border: "1.5px solid var(--st-border)", borderRadius: 8, fontSize: 14, color: "var(--st-text)", background: "var(--st-cream)", outline: "none" }}
                      />
                    </div>

                    <div style={{ marginBottom: 28 }}>
                      <label style={{ display: "block", fontSize: 12, fontWeight: 600, color: "var(--st-text)", letterSpacing: "0.05em", textTransform: "uppercase", marginBottom: 8 }}>
                        Besked
                      </label>
                      <textarea
                        rows={4} placeholder="Beskriv dit arrangement — type, ønsker, spørgsmål..."
                        value={form.message}
                        onChange={e => setForm(p => ({ ...p, message: e.target.value }))}
                        style={{ width: "100%", padding: "11px 14px", border: "1.5px solid var(--st-border)", borderRadius: 8, fontSize: 14, color: "var(--st-text)", background: "var(--st-cream)", outline: "none", resize: "vertical" }}
                      />
                    </div>

                    <button type="submit" style={{
                      width: "100%", padding: "14px", borderRadius: 8,
                      background: "var(--st-green)", color: "#fff",
                      fontSize: 15, fontWeight: 600, border: "none",
                      letterSpacing: "0.04em", transition: "opacity 0.2s",
                    }}
                    onMouseEnter={e => (e.currentTarget.style.opacity = "0.88")}
                    onMouseLeave={e => (e.currentTarget.style.opacity = "1")}>
                      Send forespørgsel
                    </button>
                  </form>
                )}
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>
    </main>
  );
}

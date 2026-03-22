import { useEffect, useMemo, useState } from "react";

export default function App() {
  const HERO_VIDEO = "/video/hero.mp4";
  const LOGO = "/logo/logo.png";
  const PHONE = "+39 085 8944509";
  const EMAIL = "info@hotellina.net";
  const year = new Date().getFullYear();

  const GALLERY = useMemo(
    () => ({
      camere: [
        "/gallery/camere/CAMERA - 1.jpg",
        "/gallery/camere/CAMERA - 2.jpg",
        "/gallery/camere/CAMERA - 3.jpg",
        "/gallery/camere/CAMERA - 4.jpg",
      ],
      hotel: [
        "/gallery/hotel/HOTEL - 1.jpg",
        "/gallery/hotel/HOTEL - 2.jpg",
        "/gallery/hotel/HOTEL - 3.jpg",
        "/gallery/hotel/HOTEL - 4.jpg",
        "/gallery/hotel/HOTEL - 5.jpg",
      ],
      cucina: [
        "/gallery/cucina/CUCINA - 1.jpg",
        "/gallery/cucina/CUCINA - 2.jpg",
        "/gallery/cucina/CUCINA - 3.jpg",
        "/gallery/cucina/CUCINA - 4.jpg",
        "/gallery/cucina/CUCINA - 5.jpg",
      ],
      spiaggia: [
        "/gallery/spiaggia/SPIAGGIA - 1.jpg",
        "/gallery/spiaggia/SPIAGGIA - 2.jpg",
        "/gallery/spiaggia/SPIAGGIA - 3.jpg",
        "/gallery/spiaggia/SPIAGGIA - 4.jpg",
      ],
    }),
    []
  );

  const [tab, setTab] = useState("camere");
  const [lightbox, setLightbox] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const scrollToId = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const photos = GALLERY[tab] || [];
  const heroTitleSize = isMobile ? 52 : 92;
  const heroLeadSize = isMobile ? 17 : 20;
  const heroLogo = isMobile ? 72 : 96;

  const s = {
    page: {
      fontFamily:
        'Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, Arial',
      color: "#10202b",
      background: "#fbf8f2",
      minHeight: "100vh",
      width: "100%",
      overflowX: "hidden",
    },

    cta: {
      padding: isMobile ? "12px 16px" : "13px 20px",
      borderRadius: 999,
      border: 0,
      background: "#28a6c8",
      color: "white",
      fontWeight: 950,
      cursor: "pointer",
      boxShadow: "0 14px 32px rgba(40,166,200,.24)",
      whiteSpace: "nowrap",
      fontSize: isMobile ? 14 : 15,
      width: isMobile ? "100%" : "auto",
    },

    hero: {
      position: "relative",
      minHeight: isMobile ? "88vh" : "82vh",
      overflow: "hidden",
      width: "100%",
    },

    heroVideo: {
      position: "absolute",
      inset: 0,
      width: "100%",
      height: "100%",
      objectFit: "cover",
      transform: "scale(1.03)",
    },

    heroOverlay: {
      position: "absolute",
      inset: 0,
      background:
        "linear-gradient(90deg, rgba(7,14,19,.78) 0%, rgba(7,14,19,.56) 50%, rgba(7,14,19,.20) 100%)",
    },

    heroFade: {
      position: "absolute",
      left: 0,
      right: 0,
      bottom: 0,
      height: 120,
      background:
        "linear-gradient(180deg, rgba(251,248,242,0) 0%, rgba(251,248,242,1) 100%)",
      zIndex: 2,
    },

    heroInner: {
      position: "relative",
      zIndex: 3,
      width: "100%",
      padding: isMobile ? "26px 16px 42px" : "110px 30px 60px",
      boxSizing: "border-box",
      color: "white",
    },

    heroTop: {
      display: "flex",
      alignItems: "center",
      gap: 14,
      flexWrap: "wrap",
    },

    heroLogo: {
      width: heroLogo,
      height: heroLogo,
      objectFit: "contain",
      borderRadius: isMobile ? 18 : 22,
      background: "rgba(255,255,255,.92)",
      padding: 8,
      boxShadow: "0 20px 46px rgba(0,0,0,.28)",
    },

    pill: {
      display: "inline-flex",
      alignItems: "center",
      padding: isMobile ? "9px 12px" : "10px 15px",
      borderRadius: 999,
      border: "1px solid rgba(255,255,255,.26)",
      background: "rgba(255,255,255,.10)",
      fontWeight: 900,
      fontSize: isMobile ? 12 : 13,
      backdropFilter: "blur(4px)",
      maxWidth: "100%",
    },

    h1: {
      margin: "18px 0 10px",
      fontSize: heroTitleSize,
      lineHeight: 0.98,
      fontWeight: 980,
      letterSpacing: "-0.04em",
      textShadow: "0 24px 60px rgba(0,0,0,.45)",
      maxWidth: 900,
    },

    lead: {
      fontSize: heroLeadSize,
      maxWidth: 780,
      lineHeight: 1.6,
      color: "rgba(255,255,255,.95)",
      margin: 0,
    },

    heroBtns: {
      display: "flex",
      gap: 12,
      flexWrap: "wrap",
      marginTop: 24,
      width: isMobile ? "100%" : "auto",
    },

    ghostBtn: {
      padding: isMobile ? "12px 16px" : "13px 20px",
      borderRadius: 999,
      border: "1px solid rgba(255,255,255,.28)",
      background: "rgba(255,255,255,.10)",
      color: "white",
      fontWeight: 950,
      cursor: "pointer",
      fontSize: isMobile ? 14 : 15,
      width: isMobile ? "100%" : "auto",
    },

    chips: {
      display: "grid",
      gridTemplateColumns: isMobile
        ? "1fr"
        : "repeat(auto-fit, minmax(220px, 1fr))",
      gap: 12,
      marginTop: 28,
      maxWidth: 1180,
    },

    chip: {
      padding: "14px 16px",
      borderRadius: 18,
      border: "1px solid rgba(255,255,255,.22)",
      background: "rgba(255,255,255,.10)",
      fontWeight: 900,
      color: "white",
      backdropFilter: "blur(4px)",
      fontSize: isMobile ? 14 : 15,
    },

    section: {
      width: "100%",
      padding: isMobile ? "42px 16px" : "64px 30px",
      boxSizing: "border-box",
    },

    sectionEyebrow: {
      fontSize: 12,
      fontWeight: 900,
      letterSpacing: "0.12em",
      opacity: 0.6,
      textTransform: "uppercase",
      marginBottom: 10,
    },

    sectionTitle: {
      fontSize: isMobile ? 28 : 40,
      fontWeight: 980,
      margin: "0 0 10px",
      letterSpacing: "-0.03em",
      lineHeight: 1.1,
    },

    sectionText: {
      opacity: 0.72,
      margin: "0 0 24px",
      maxWidth: 860,
      fontSize: isMobile ? 15 : 16,
      lineHeight: 1.65,
    },

    tabs: {
      display: "flex",
      gap: 10,
      flexWrap: "wrap",
      marginBottom: 18,
    },

    tab: (active) => ({
      padding: "11px 15px",
      borderRadius: 999,
      border: active
        ? "1px solid rgba(13,43,54,.18)"
        : "1px solid rgba(16,32,43,.12)",
      background: active ? "#0d2b36" : "white",
      color: active ? "white" : "#10202b",
      fontWeight: 900,
      cursor: "pointer",
      boxShadow: active ? "0 10px 24px rgba(13,43,54,.16)" : "none",
      fontSize: isMobile ? 14 : 15,
    }),

    gallery: {
      display: "grid",
      gridTemplateColumns: isMobile
        ? "1fr"
        : "repeat(auto-fit, minmax(260px, 1fr))",
      gap: 16,
      width: "100%",
    },

    photoWrap: {
      position: "relative",
      overflow: "hidden",
      borderRadius: 20,
      background: "white",
      border: "1px solid rgba(16,32,43,.08)",
      boxShadow: "0 14px 34px rgba(16,32,43,.08)",
    },

    photo: {
      width: "100%",
      height: isMobile ? 240 : 230,
      objectFit: "cover",
      display: "block",
      cursor: "pointer",
      background: "#eef2f7",
    },

    photoLabel: {
      position: "absolute",
      left: 12,
      bottom: 12,
      padding: "8px 12px",
      borderRadius: 999,
      background: "rgba(0,0,0,.48)",
      color: "white",
      fontWeight: 800,
      fontSize: 13,
      backdropFilter: "blur(6px)",
    },

    preventivoGrid: {
      display: "grid",
      gridTemplateColumns: isMobile
        ? "1fr"
        : "minmax(320px, 1.15fr) minmax(280px, .85fr)",
      gap: 18,
      alignItems: "start",
    },

    card: {
      background: "white",
      border: "1px solid rgba(16,32,43,.08)",
      borderRadius: 24,
      padding: isMobile ? 18 : 22,
      boxShadow: "0 18px 42px rgba(16,32,43,.06)",
    },

    form: {
      display: "grid",
      gap: 12,
    },

    inputRow: {
      display: "grid",
      gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
      gap: 12,
    },

    input: {
      padding: "14px 14px",
      borderRadius: 16,
      border: "1px solid rgba(16,32,43,.12)",
      outline: "none",
      fontSize: 14,
      background: "white",
      boxSizing: "border-box",
      width: "100%",
    },

    textarea: {
      padding: "14px 14px",
      borderRadius: 16,
      border: "1px solid rgba(16,32,43,.12)",
      outline: "none",
      fontSize: 14,
      minHeight: 120,
      resize: "vertical",
      background: "white",
      boxSizing: "border-box",
      width: "100%",
    },

    submit: {
      padding: "14px 18px",
      borderRadius: 16,
      border: 0,
      background: "#28a6c8",
      color: "white",
      fontWeight: 950,
      cursor: "pointer",
      fontSize: 15,
      boxShadow: "0 12px 30px rgba(40,166,200,.22)",
      width: isMobile ? "100%" : "auto",
    },

    contactTitle: {
      fontWeight: 950,
      marginBottom: 8,
      fontSize: 18,
    },

    contactText: {
      opacity: 0.76,
      marginBottom: 14,
      lineHeight: 1.6,
      fontSize: isMobile ? 14 : 15,
    },

    contactLink: {
      color: "#0d2b36",
      fontWeight: 900,
      textDecoration: "none",
      wordBreak: "break-word",
    },

    note: {
      marginTop: 16,
      opacity: 0.72,
      fontSize: 13,
      lineHeight: 1.6,
    },

    lightbox: {
      position: "fixed",
      inset: 0,
      background: "rgba(0,0,0,.76)",
      display: "grid",
      placeItems: "center",
      padding: isMobile ? 10 : 18,
      zIndex: 100,
    },

    lightboxInner: {
      width: isMobile ? "96vw" : "min(1200px, 96vw)",
      borderRadius: 20,
      overflow: "hidden",
      border: "1px solid rgba(255,255,255,.18)",
      background: "rgba(0,0,0,.35)",
    },

    lightboxImg: {
      width: "100%",
      height: "auto",
      display: "block",
    },

    lightboxBar: {
      display: "flex",
      justifyContent: "space-between",
      gap: 12,
      alignItems: "center",
      padding: 12,
      color: "rgba(255,255,255,.88)",
      fontSize: 14,
      flexWrap: "wrap",
    },

    close: {
      padding: "9px 12px",
      borderRadius: 12,
      border: "1px solid rgba(255,255,255,.22)",
      background: "rgba(255,255,255,.10)",
      color: "white",
      fontWeight: 950,
      cursor: "pointer",
    },

    footer: {
      width: "100%",
      padding: isMobile ? "22px 16px 28px" : "26px 30px 36px",
      boxSizing: "border-box",
      borderTop: "1px solid rgba(16,32,43,.08)",
      opacity: 0.75,
      fontSize: 13,
      background: "#fff",
    },
  };

  return (
    <div style={s.page}>
      <section style={s.hero}>
        <video
          style={s.heroVideo}
          src={HERO_VIDEO}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster="/logo/logo.png"
        />
        <div style={s.heroOverlay} />
        <div style={s.heroFade} />

        <div style={s.heroInner}>
          <div style={s.heroTop}>
            <img
              src={LOGO}
              alt="Logo Hotel Lina"
              style={s.heroLogo}
              onError={(e) => {
                e.currentTarget.style.display = "none";
              }}
            />
            <div style={s.pill}>Fronte mare • Roseto degli Abruzzi</div>
          </div>

          <h1 style={s.h1}>Hotel Lina</h1>

          <p style={s.lead}>
            Vacanze sul mare a Roseto degli Abruzzi: accoglienza familiare,
            cucina curata e relax per famiglie e coppie.
          </p>

          <div style={s.heroBtns}>
            <button style={s.cta} onClick={() => scrollToId("preventivo")}>
              Verifica disponibilità
            </button>
            <button style={s.ghostBtn} onClick={() => scrollToId("gallery")}>
              Guarda foto
            </button>
          </div>

         
        </div>
      </section>

      <section id="gallery" style={s.section}>
        <div style={s.sectionEyebrow}>Gallery</div>
        <h2 style={s.sectionTitle}>Scopri hotel, camere, cucina e spiaggia</h2>
        <p style={s.sectionText}>
          Una selezione di immagini per raccontare l’atmosfera dell’Hotel Lina
          e la qualità dell’esperienza sul mare.
        </p>

        <div style={s.tabs}>
          <button style={s.tab(tab === "camere")} onClick={() => setTab("camere")}>
            Camere
          </button>
          <button style={s.tab(tab === "hotel")} onClick={() => setTab("hotel")}>
            Hotel
          </button>
          <button style={s.tab(tab === "cucina")} onClick={() => setTab("cucina")}>
            Cucina
          </button>
          <button style={s.tab(tab === "spiaggia")} onClick={() => setTab("spiaggia")}>
            Spiaggia
          </button>
        </div>

        <div style={s.gallery}>
          {photos.map((src, index) => (
            <div key={src} style={s.photoWrap}>
              <img
                src={src}
                alt="Foto Hotel Lina"
                style={s.photo}
                loading="lazy"
                onClick={() => setLightbox(src)}
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                }}
              />
              <div style={s.photoLabel}>Foto {index + 1}</div>
            </div>
          ))}
        </div>
      </section>

      <section id="preventivo" style={s.section}>
        <div style={s.sectionEyebrow}>Preventivo</div>
        <h2 style={s.sectionTitle}>Richiedi disponibilità e offerta personalizzata</h2>
        <p style={s.sectionText}>
          Compila il form con i tuoi dati: ti rispondiamo con la soluzione più
          adatta alle tue esigenze.
        </p>

        <div style={s.preventivoGrid}>
          <div style={s.card}>
            <form
              style={s.form}
              action="https://formspree.io/f/mreyvqkd"
              method="POST"
            >
              <input
                type="hidden"
                name="_subject"
                value="Nuova richiesta preventivo - Hotel Lina"
              />

              <div style={s.inputRow}>
                <input style={s.input} name="nome" placeholder="Nome" required />
                <input style={s.input} name="cognome" placeholder="Cognome" required />
              </div>

              <div style={s.inputRow}>
                <input style={s.input} name="checkin" type="date" required />
                <input style={s.input} name="checkout" type="date" required />
              </div>

              <input
                style={s.input}
                name="email"
                type="email"
                placeholder="Email"
                required
              />

              <input
                style={s.input}
                name="telefono"
                type="tel"
                placeholder="Telefono (opzionale)"
              />

              <textarea
                style={s.textarea}
                name="messaggio"
                placeholder="Numero persone, bambini, richieste particolari..."
              />

              <button style={s.submit} type="submit">
                Invia richiesta
              </button>
            </form>
          </div>

          <div style={s.card}>
            <div style={s.contactTitle}>Contatti</div>
            <div style={s.contactText}>
              Hotel Lina, fronte mare a Roseto degli Abruzzi. Contattaci
              direttamente per informazioni, disponibilità e preventivi.
            </div>

            <div style={{ display: "grid", gap: 10 }}>
              <a href={`tel:${PHONE.replaceAll(" ", "")}`} style={s.contactLink}>
                {PHONE}
              </a>
              <a href={`mailto:${EMAIL}`} style={s.contactLink}>
                {EMAIL}
              </a>
            </div>

            <div style={s.note}>
              Compila il modulo per ricevere un preventivo personalizzato direttamente via email.
            </div>
          </div>
        </div>
      </section>

      <footer style={s.footer}>
        © {year} Hotel Lina • Roseto degli Abruzzi • Demo sito
      </footer>

      {lightbox ? (
        <div style={s.lightbox} onClick={() => setLightbox(null)}>
          <div style={s.lightboxInner} onClick={(e) => e.stopPropagation()}>
            <img src={lightbox} alt="Foto" style={s.lightboxImg} />
            <div style={s.lightboxBar}>
              <div>Clicca fuori per chiudere</div>
              <button style={s.close} onClick={() => setLightbox(null)}>
                Chiudi
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
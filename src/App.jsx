import { useEffect, useMemo, useState } from "react";

export default function App() {
  const HERO_VIDEO = "/video/hero.mp4";
  const LOGO = "/logo/logo.png";
  const PHONE = "+39 085 8944509";
  const EMAIL = "info@hotellina.net";
  const year = new Date().getFullYear();

  const GALLERY = useMemo(
    () => ({
      hotel: [
        "/gallery/hotel/HOTEL - 1.jpg",
        "/gallery/hotel/HOTEL - 2.jpg",
        "/gallery/hotel/HOTEL - 3.jpg",
        "/gallery/hotel/HOTEL - 4.jpg",
        "/gallery/hotel/HOTEL - 5.jpg",
      ],
      spiaggia: [
        "/gallery/spiaggia/SPIAGGIA - 1.jpg",
        "/gallery/spiaggia/SPIAGGIA - 2.jpg",
        "/gallery/spiaggia/SPIAGGIA - 3.jpg",
        "/gallery/spiaggia/SPIAGGIA - 4.jpg",
      ],
      cucina: [
        "/gallery/cucina/CUCINA - 1.jpg",
        "/gallery/cucina/CUCINA - 2.jpg",
        "/gallery/cucina/CUCINA - 3.jpg",
        "/gallery/cucina/CUCINA - 4.jpg",
        "/gallery/cucina/CUCINA - 5.jpg",
      ],
      camere: [
        "/gallery/camere/CAMERA - 1.jpg",
        "/gallery/camere/CAMERA - 2.jpg",
        "/gallery/camere/CAMERA - 3.jpg",
        "/gallery/camere/CAMERA - 4.jpg",
      ],
    }),
    []
  );

  const [tab, setTab] = useState("hotel");
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
      width: isMobile ? "100%" : 360,
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
      width: isMobile ? "100%" : 170,
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
      filter: "contrast(1.05) brightness(1.05)",
    },

    heroOverlay: {
      position: "absolute",
      inset: 0,
      background:
        "linear-gradient(90deg, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.35) 50%, rgba(0,0,0,0.1) 100%)",
    },

    heroFade: {
      position: "absolute",
      left: 0,
      right: 0,
      bottom: 0,
      height: 60,
      background:
        "linear-gradient(180deg, rgba(251,248,242,0) 0%, rgba(251,248,242,0.6) 100%)",
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

    section: {
      width: "100%",
      padding: isMobile ? "42px 16px" : "64px 30px",
      boxSizing: "border-box",
    },

    sectionAlt: {
      width: "100%",
      padding: isMobile ? "42px 16px" : "68px 30px",
      boxSizing: "border-box",
      background: "linear-gradient(180deg, #fbf8f2 0%, #ffffff 100%)",
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

    hotelIntroGrid: {
      display: "grid",
      gridTemplateColumns: isMobile ? "1fr" : "1.05fr .95fr",
      gap: 22,
      alignItems: "center",
      marginTop: 28,
      marginBottom: 24,
    },

    hotelIntroCard: {
      background: "white",
      borderRadius: 28,
      padding: isMobile ? 20 : 28,
      border: "1px solid rgba(16,32,43,.08)",
      boxShadow: "0 18px 42px rgba(16,32,43,.06)",
    },

    hotelIntroTitle: {
      fontSize: isMobile ? 25 : 34,
      lineHeight: 1.12,
      margin: "0 0 14px",
      fontWeight: 980,
      letterSpacing: "-0.03em",
    },

    hotelIntroText: {
      fontSize: isMobile ? 15 : 17,
      lineHeight: 1.75,
      margin: 0,
      color: "rgba(16,32,43,.72)",
    },

    hotelHeroImage: {
      width: "100%",
      height: isMobile ? 260 : 390,
      objectFit: "cover",
      borderRadius: 28,
      display: "block",
      boxShadow: "0 22px 52px rgba(16,32,43,.12)",
    },

    servicesGrid: {
      display: "grid",
      gridTemplateColumns: isMobile ? "1fr" : "repeat(4, 1fr)",
      gap: 18,
      marginTop: 22,
    },

    serviceCard: {
      background: "white",
      borderRadius: 24,
      overflow: "hidden",
      border: "1px solid rgba(16,32,43,.08)",
      boxShadow: "0 18px 42px rgba(16,32,43,.06)",
    },

    serviceImage: {
      width: "100%",
      height: isMobile ? 230 : 190,
      objectFit: "cover",
      display: "block",
    },

    serviceBody: {
      padding: 18,
    },

    serviceTitle: {
      fontSize: 20,
      fontWeight: 950,
      margin: "0 0 8px",
      color: "#10202b",
    },

    serviceText: {
      fontSize: 15,
      lineHeight: 1.65,
      margin: 0,
      color: "rgba(16,32,43,.72)",
    },

    tabs: {
      display: "flex",
      gap: 10,
      flexWrap: "wrap",
      marginBottom: 18,
    },

    tab: (active) => ({
      padding: isMobile ? "10px 14px" : "11px 15px",
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
      outline: "none",
      WebkitTapHighlightColor: "transparent",
      appearance: "none",
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

    inputWrap: {
      display: "grid",
      gap: 6,
    },

    fieldLabel: {
      fontSize: 13,
      fontWeight: 800,
      color: "#10202b",
      opacity: 0.8,
      paddingLeft: 4,
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
      color: "#10202b",
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
      color: "#10202b",
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

    mapBox: {
      overflow: "hidden",
      borderRadius: 24,
      border: "1px solid rgba(16,32,43,.10)",
      boxShadow: "0 18px 42px rgba(16,32,43,.08)",
      marginBottom: 34,
    },

    contactGrid: {
      display: "grid",
      gridTemplateColumns: isMobile ? "1fr" : "repeat(3, 1fr)",
      gap: 28,
    },

    contactBigTitle: {
      fontSize: isMobile ? 28 : 34,
      margin: "0 0 14px",
      color: "#00759b",
      textTransform: "uppercase",
      fontWeight: 950,
    },

    contactInfo: {
      fontSize: 16,
      lineHeight: 1.7,
      color: "#4f5d66",
      margin: 0,
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
          poster="/hero-poster.jpg"
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

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              marginTop: 24,
              gap: 14,
            }}
          >
            <button style={s.cta} onClick={() => scrollToId("preventivo")}>
              Richiedi disponibilità
            </button>

            <div
              style={{
                display: "flex",
                gap: 12,
                flexWrap: "wrap",
              }}
            >
              <button style={s.ghostBtn} onClick={() => scrollToId("gallery")}>
                Guarda foto
              </button>

              <button style={s.ghostBtn} onClick={() => scrollToId("contatti")}>
                Contatti
              </button>
            </div>
          </div>
        </div>
      </section>

      <section id="hotel" style={s.sectionAlt}>
        <div style={s.sectionEyebrow}>Hotel</div>
        <h2 style={s.sectionTitle}>L’Hotel Lina: mare, relax e accoglienza familiare</h2>
        <p style={s.sectionText}>
          Una struttura fronte mare a Roseto degli Abruzzi, pensata per chi desidera una
          vacanza comoda, semplice e rilassante, con camere accoglienti, cucina curata e
          spiaggia a pochi passi.
        </p>

        <div style={s.hotelIntroGrid}>
          <div style={s.hotelIntroCard}>
            <h3 style={s.hotelIntroTitle}>Il comfort di una vacanza sul mare</h3>
            <p style={s.hotelIntroText}>
              All’Hotel Lina trovi un ambiente familiare e ospitale, ideale per coppie,
              famiglie e bambini. La posizione fronte mare rende il soggiorno pratico e
              piacevole: in pochi passi sei in spiaggia, vicino alla passeggiata e ai
              principali servizi di Roseto degli Abruzzi.
              <br />
              <br />
              La struttura offre camere confortevoli, spazi comuni curati e un’atmosfera
              tranquilla, perfetta per chi cerca relax, buona cucina e una vacanza senza
              pensieri.
            </p>
          </div>

          <img
            src="/gallery/hotel/HOTEL - 4.jpg"
            alt="Hotel Lina fronte mare"
            style={s.hotelHeroImage}
          />
        </div>

        <div style={s.servicesGrid}>
          <div style={s.serviceCard}>
            <img
              src="/gallery/hotel/HOTEL - 1.jpg"
              alt="Hotel Lina"
              style={s.serviceImage}
            />
            <div style={s.serviceBody}>
              <h3 style={s.serviceTitle}>Posizione fronte mare</h3>
              <p style={s.serviceText}>
                L’hotel si affaccia direttamente sul mare, in una zona comoda e centrale,
                perfetta per vivere la spiaggia ogni giorno.
              </p>
            </div>
          </div>

          <div style={s.serviceCard}>
            <img
              src="/gallery/camere/CAMERA - 3.jpg"
              alt="Camera Hotel Lina"
              style={s.serviceImage}
            />
            <div style={s.serviceBody}>
              <h3 style={s.serviceTitle}>Camere confortevoli</h3>
              <p style={s.serviceText}>
                Camere semplici, luminose e accoglienti, pensate per garantire riposo,
                praticità e tranquillità durante il soggiorno.
              </p>
            </div>
          </div>

          <div style={s.serviceCard}>
            <img
              src="/gallery/cucina/CUCINA - 1.jpg"
              alt="Cucina Hotel Lina"
              style={s.serviceImage}
            />
            <div style={s.serviceBody}>
              <h3 style={s.serviceTitle}>Cucina genuina</h3>
              <p style={s.serviceText}>
                Una cucina curata e familiare, con piatti pensati per rendere la vacanza
                ancora più piacevole.
              </p>
            </div>
          </div>

          <div style={s.serviceCard}>
            <img
              src="/gallery/spiaggia/SPIAGGIA - 4.jpg"
              alt="Spiaggia Hotel Lina"
              style={s.serviceImage}
            />
            <div style={s.serviceBody}>
              <h3 style={s.serviceTitle}>Ideale per famiglie</h3>
              <p style={s.serviceText}>
                Spiaggia vicina, ambiente tranquillo e servizi comodi rendono l’Hotel Lina
                una scelta adatta anche alle famiglie con bambini.
              </p>
            </div>
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
          <button style={s.tab(tab === "hotel")} onClick={() => setTab("hotel")}>
            Hotel
          </button>
          <button
            style={s.tab(tab === "spiaggia")}
            onClick={() => setTab("spiaggia")}
          >
            Spiaggia
          </button>
          <button style={s.tab(tab === "cucina")} onClick={() => setTab("cucina")}>
            Cucina
          </button>
          <button style={s.tab(tab === "camere")} onClick={() => setTab("camere")}>
            Camere
          </button>
        </div>

        <div style={s.gallery}>
          {photos.map((src) => (
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
            </div>
          ))}
        </div>
      </section>

      <section id="preventivo" style={s.section}>
        <div style={s.sectionEyebrow}>Preventivo</div>
        <h2 style={s.sectionTitle}>
          Richiedi disponibilità e offerta personalizzata
        </h2>
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
                <input
                  style={s.input}
                  name="cognome"
                  placeholder="Cognome"
                  required
                />
              </div>

              <div style={s.inputRow}>
                <div style={s.inputWrap}>
                  <label style={s.fieldLabel}>Check-in</label>
                  <input style={s.input} name="checkin" type="date" required />
                </div>

                <div style={s.inputWrap}>
                  <label style={s.fieldLabel}>Check-out</label>
                  <input style={s.input} name="checkout" type="date" required />
                </div>
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
              Compila il modulo per ricevere un preventivo personalizzato
              direttamente via email.
            </div>
          </div>
        </div>
      </section>

      <section id="contatti" style={s.section}>
        <div style={s.sectionEyebrow}>Contatti</div>
        <h2 style={s.sectionTitle}>Contattaci</h2>
        <p style={s.sectionText}>
          Siamo a Roseto degli Abruzzi, fronte mare. Contattaci per
          informazioni, disponibilità e preventivi.
        </p>

        <div style={s.mapBox}>
          <iframe
            title="Mappa Hotel Lina"
            src="https://www.google.com/maps?q=Hotel%20Lina%20Viale%20Marche%202%20Roseto%20degli%20Abruzzi&output=embed"
            width="100%"
            height="420"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        <div style={s.contactGrid}>
          <div>
            <h3 style={s.contactBigTitle}>Indirizzo</h3>
            <p style={s.contactInfo}>
              Viale Marche, 2
              <br />
              64026 Roseto degli Abruzzi TE
            </p>
          </div>

          <div>
            <h3 style={s.contactBigTitle}>Telefoni</h3>
            <p style={s.contactInfo}>
              <a href="tel:+390858944509" style={s.contactLink}>
                +39 085 8944509
              </a>
              <br />
              <a href="tel:+3908534147" style={s.contactLink}>
                +39 085 34147
              </a>
              <br />
              <a href="tel:+393283114812" style={s.contactLink}>
                +39 328 3114812
              </a>
            </p>
          </div>

          <div>
            <h3 style={s.contactBigTitle}>E-mail</h3>
            <p style={s.contactInfo}>
              <a href="mailto:info@hotellina.net" style={s.contactLink}>
                info@hotellina.net
              </a>
            </p>
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
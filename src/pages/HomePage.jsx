import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import hotArt from "../assets/images/CARD KONTEN IMAGES/cafe latte hot art.png";
import latteIce from "../assets/images/CARD KONTEN IMAGES/cafe latte ice.png";
import mochaccino from "../assets/images/CARD KONTEN IMAGES/Mochaccino.png";
import coffeeShopBuilding from "../assets/images/TEMPAT BANGUNAN/bangun_foto_tempat_wide.png";

export default function HomePage() {
  const heroSlides = [
    {
      src: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=1400&q=80",
      alt: "Kopi premium"
    },
    {
      src: "src/assets/images/CAROUSOUL/Yeri_model_duduk_pegang_matcha.png",
      alt: "Seduhan kopi hangat"
    },
    {
      src: "src/assets/images/CAROUSOUL/Yeri_model_pegang_kopi_susu.png",
      alt: "Biji kopi pilihan"
    }
  ];
  const [activeSlide, setActiveSlide] = useState(0);
  const [isLocationImageOpen, setIsLocationImageOpen] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5500);

    return () => clearInterval(intervalId);
  }, [heroSlides.length]);


  useEffect(() => {
    if (!isLocationImageOpen) {
      return;
    }

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setIsLocationImageOpen(false);
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isLocationImageOpen]);
  const goToPrevSlide = () => {
    setActiveSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  const goToNextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % heroSlides.length);
  };

  return (
    <div style={{ background: "#f8f5f2", color: "#3b2f2f" }}>
      <section
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "60px 40px",
          gap: "60px",
          maxWidth: "1400px",
          margin: "0 auto"
        }}
      >
        <div style={{ flex: 1, minWidth: "300px" }}>
          <h1 style={{ fontSize: "48px", fontWeight: "bold", marginBottom: "24px", lineHeight: "1.3", color: "#2b2b2b" }}>
            Nikmati Kopi <br /> Terbaik dari Biji <br /> Pilihan
          </h1>
          <p style={{ fontSize: "16px", marginBottom: "32px", color: "#5a5a5a", lineHeight: "1.7" }}>
            Kopi berkualitas tinggi yang diproses dengan penuh dedikasi untuk menemani hari-hari Anda.
          </p>
          <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
            <Link to="/products">
              <button className="home-pop-btn" style={{ background: "#8b6f47", color: "white", border: "none", padding: "13px 36px", fontSize: "15px", borderRadius: "8px", cursor: "pointer", fontWeight: "600" }}>
                Lihat Produk
              </button>
            </Link>
            <Link to="/about">
              <button className="home-pop-btn" style={{ background: "transparent", color: "#8b6f47", border: "2px solid #8b6f47", padding: "11px 36px", fontSize: "15px", borderRadius: "8px", cursor: "pointer", fontWeight: "600" }}>
                Tentang Kami
              </button>
            </Link>
          </div>
        </div>

        <div style={{ flex: 1, minWidth: "300px", position: "relative" }}>
          <img
            src={heroSlides[activeSlide].src}
            alt={heroSlides[activeSlide].alt}
            style={{ width: "100%", height: "450px", borderRadius: "16px", boxShadow: "0 10px 40px rgba(0, 0, 0, 0.15)", objectFit: "cover" }}
          />
          <button
            type="button"
            onClick={goToPrevSlide}
            aria-label="Sebelumnya"
            style={{
              position: "absolute",
              top: "50%",
              left: "12px",
              transform: "translateY(-50%)",
              border: "none",
              width: "36px",
              height: "36px",
              padding: 0,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: "50%",
              background: "rgba(0, 0, 0, 0.38)",
              color: "white",
              cursor: "pointer",
              fontSize: "22px",
              lineHeight: "1"
            }}
          >
            &#8249;
          </button>
          <button
            type="button"
            onClick={goToNextSlide}
            aria-label="Berikutnya"
            style={{
              position: "absolute",
              top: "50%",
              right: "12px",
              transform: "translateY(-50%)",
              border: "none",
              width: "36px",
              height: "36px",
              padding: 0,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: "50%",
              background: "rgba(0, 0, 0, 0.38)",
              color: "white",
              cursor: "pointer",
              fontSize: "22px",
              lineHeight: "1"
            }}
          >
            &#8250;
          </button>
          <div
            style={{
              position: "absolute",
              left: "50%",
              bottom: "16px",
              transform: "translateX(-50%)",
              display: "flex",
              gap: "8px"
            }}
          >
            {heroSlides.map((slide, index) => (
              <button
                key={slide.src}
                type="button"
                aria-label={`Slide ${index + 1}`}
                onClick={() => setActiveSlide(index)}
                style={{
                  width: "6px",
                  height: "6px",
                  minWidth: "6px",
                  minHeight: "6px",
                  padding: 0,
                  display: "block",
                  appearance: "none",
                  borderRadius: "50%",
                  border: "none",
                  background: index === activeSlide ? "#ffffff" : "rgba(255, 255, 255, 0.45)",
                  cursor: "pointer"
                }}
              />
            ))}
          </div>
        </div>
      </section>

      <section style={{ background: "white", padding: "80px 40px" }}>
        <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "40px", fontWeight: "700", textAlign: "center", marginBottom: "60px", color: "#2b2b2b" }}>
            Kenapa Memilih Kopi Kami?
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "40px", maxWidth: "1200px", margin: "0 auto" }}>
            <div className="home-brand-card" style={{ padding: "40px 32px", borderRadius: "12px", background: "#e1e1e1", textAlign: "center" }}>
              <h3 style={{ fontSize: "22px", fontWeight: "700", marginBottom: "14px", color: "#2b2b2b" }}>Biji Kopi Pilihan</h3>
              <p style={{ color: "#5a5a5a", lineHeight: "1.7", fontSize: "15px" }}>Dipetik dari perkebunan terbaik di Indonesia dengan standar kualitas tinggi.</p>
            </div>
            <div className="home-brand-card" style={{ padding: "40px 32px", borderRadius: "12px", background: "#e1e1e1", textAlign: "center" }}>
              <h3 style={{ fontSize: "22px", fontWeight: "700", marginBottom: "14px", color: "#2b2b2b" }}>Proses Alami</h3>
              <p style={{ color: "#5a5a5a", lineHeight: "1.7", fontSize: "15px" }}>Diproses secara higienis dengan metode tradisional untuk menjaga cita rasa asli.</p>
            </div>
            <div className="home-brand-card" style={{ padding: "40px 32px", borderRadius: "12px", background: "#e1e1e1", textAlign: "center" }}>
              <h3 style={{ fontSize: "22px", fontWeight: "700", marginBottom: "14px", color: "#2b2b2b" }}>Rasa Autentik</h3>
              <p style={{ color: "#5a5a5a", lineHeight: "1.7", fontSize: "15px" }}>Aroma dan rasa yang konsisten dan lezat di setiap seduhan.</p>
            </div>
          </div>
        </div>
      </section>

      <section style={{ background: "#f8f5f2", padding: "60px 40px" }}>
        <div style={{ maxWidth: "1000px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "24px" }}>
          <div>
            <img className="home-gallery-card" src={hotArt} alt="Cafe Latte Hot Art" style={{ width: "100%", height: "280px", objectFit: "cover", borderRadius: "16px" }} />
            <p style={{ marginTop: "12px", textAlign: "center", fontWeight: "600", color: "#5a3e2b" }}>Cafe Latte Hot Art</p>
          </div>
          <div>
            <img className="home-gallery-card" src={latteIce} alt="Cafe Latte Ice" style={{ width: "100%", height: "280px", objectFit: "cover", borderRadius: "16px" }} />
            <p style={{ marginTop: "12px", textAlign: "center", fontWeight: "600", color: "#5a3e2b" }}>Cafe Latte Ice</p>
          </div>
          <div>
            <img className="home-gallery-card" src={mochaccino} alt="Mochaccino" style={{ width: "100%", height: "280px", objectFit: "cover", borderRadius: "16px" }} />
            <p style={{ marginTop: "12px", textAlign: "center", fontWeight: "600", color: "#5a3e2b" }}>Mochaccino</p>
          </div>
        </div>
      </section>

      <section style={{ background: "#8b6f47", color: "white", padding: "100px 40px", textAlign: "center" }}>
        <h2 style={{ fontSize: "44px", fontWeight: "700", marginBottom: "20px" }}>Saatnya Menikmati Kopi Berkualitas</h2>
        <p style={{ fontSize: "18px", marginBottom: "32px", opacity: "0.95" }}>Pesan sekarang dan rasakan perbedaannya dalam setiap tegukan.</p>
        <Link to="/products">
          <button className="home-pop-btn" style={{ background: "white", color: "#8b6f47", border: "none", padding: "14px 40px", fontSize: "16px", borderRadius: "8px", fontWeight: "600", cursor: "pointer" }}>
            Pesan Sekarang
          </button>
        </Link>
      </section>

      <section style={{ background: "white", padding: "70px 40px 80px" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "34px", fontWeight: "700", color: "#2b2b2b", textAlign: "center", marginBottom: "12px" }}>
            Lokasi Kami
          </h2>
          <p style={{ textAlign: "center", color: "#5a5a5a", marginBottom: "36px" }}>
            Datang langsung ke toko kami untuk menikmati suasana dan kopi terbaik.
          </p>

          <div style={{ background: "#faf8f5", border: "1px solid #eee6dc", borderRadius: "16px", padding: "24px" }}>
            <div style={{ borderRadius: "12px", overflow: "hidden", marginBottom: "35px" }}>
              <button
                type="button"
                onClick={() => setIsLocationImageOpen(true)}
                aria-label="Lihat foto toko ukuran penuh"
                style={{
                  display: "block",
                  width: "100%",
                  border: "none",
                  padding: 0,
                  background: "transparent",
                  cursor: "zoom-in"
                }}
              >
                <img
                  src={coffeeShopBuilding}
                  alt="Bangunan Sunday Coffee Shop"
                  style={{ width: "100%", height: "260px", objectFit: "cover", display: "block" }}
                />
              </button>
            </div>

            <div style={{ display: "flex", gap: "24px", alignItems: "stretch", flexWrap: "wrap" }}>
              <div
                style={{
                  flex: "1 1 620px",
                  minWidth: "320px",
                  borderRadius: "14px",
                  overflow: "hidden",
                  boxShadow: "0 10px 28px rgba(0, 0, 0, 0.12)"
                }}
              >
                <iframe
                  title="Peta Sunday Coffe Shop"
                  src="https://www.google.com/maps?q=Jl+Angsana+1+No+126+127+Kabupaten+Cirebon&output=embed"
                  width="100%"
                  height="320"
                  style={{ border: 0, display: "block" }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>

              <div
                style={{
                  flex: "1 1 300px",
                  minWidth: "280px",
                  background: "white",
                  border: "1px solid #eee6dc",
                  borderRadius: "14px",
                  padding: "24px"
                }}
              >
                <h3 style={{ fontSize: "22px", color: "#2b2b2b", marginBottom: "14px" }}>Alamat Toko</h3>
                <p style={{ color: "#5a5a5a", lineHeight: "1.8", marginBottom: "16px" }}>
                  Jl. Angsana 1 No.126/127 BAS
                  <br />
                  G7+C8P, RT.001/RW.011
                  <br />
                  Girang, Kec. Talun
                  <br />
                  Kabupaten Cirebon, Jawa Barat 45171
                </p>
                <p style={{ color: "#8b6f47", fontWeight: "600" }}>
                  Buka setiap hari: 08.00 - 22.00
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {isLocationImageOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Foto bangunan Sunday Coffee Shop"
          onClick={() => setIsLocationImageOpen(false)}
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0, 0, 0, 0.86)",
            zIndex: 1200,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "20px"
          }}
        >
          <div
            onClick={(event) => event.stopPropagation()}
            style={{ position: "relative", width: "100%", maxWidth: "1200px" }}
          >
            <button
              type="button"
              onClick={() => setIsLocationImageOpen(false)}
              aria-label="Tutup foto"
              style={{
                position: "absolute",
                top: "12px",
                right: "12px",
                width: "40px",
                height: "40px",
                borderRadius: "50%",
                border: "none",
                background: "rgba(0, 0, 0, 0.5)",
                color: "white",
                fontSize: "18px",
                fontWeight: "700",
                lineHeight: 1,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer"
              }}
            >
              X
            </button>

            <img
              src={coffeeShopBuilding}
              alt="Bangunan Sunday Coffee Shop ukuran penuh"
              style={{
                display: "block",
                width: "100%",
                maxHeight: "85vh",
                objectFit: "contain",
                borderRadius: "12px"
              }}
            />
          </div>
        </div>
      )}
    </div>
  );
}






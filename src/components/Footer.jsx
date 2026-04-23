import { Link } from "react-router-dom";
import {
  Facebook,
  Instagram,
  Mail,
  MapPin,
  Phone,
  Share2,
  Youtube
} from "lucide-react";

function Footer() {
  return (
    <footer
      style={{
        background: "#353535",
        color: "#e0e0e0",
        paddingTop: "60px",
        paddingBottom: "20px",
        marginTop: "80px"
      }}
    >
      <div
        style={{
          maxWidth: "1400px",
          margin: "0 auto",
          paddingLeft: "40px",
          paddingRight: "40px"
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "50px",
            marginBottom: "50px"
          }}
        >
          <div>
            <h4
              style={{
                fontSize: "20px",
                fontWeight: "700",
                marginBottom: "20px",
                color: "#d4a574"
              }}
            >
              Sunday Coffe Shop
            </h4>
            <p style={{ fontSize: "14px", lineHeight: "1.8", color: "#b0b0b0" }}>
              Menyediakan kopi berkualitas tinggi dari biji pilihan Indonesia untuk menemani setiap momen spesial Anda.
            </p>
          </div>

          <div>
            <h4
              style={{
                fontSize: "16px",
                fontWeight: "700",
                marginBottom: "20px",
                color: "#d4a574"
              }}
            >
              Menu
            </h4>
            <ul style={{ listStyle: "none", padding: 0 }}>
              <li style={{ marginBottom: "12px" }}><Link to="/" style={{ textDecoration: "none", color: "#b0b0b0", fontSize: "14px" }}>Beranda</Link></li>
              <li style={{ marginBottom: "12px" }}><Link to="/products" style={{ textDecoration: "none", color: "#b0b0b0", fontSize: "14px" }}>Produk</Link></li>
              <li style={{ marginBottom: "12px" }}><Link to="/about" style={{ textDecoration: "none", color: "#b0b0b0", fontSize: "14px" }}>Tentang Kami</Link></li>
            </ul>
          </div>

          <div>
            <h4
              style={{
                fontSize: "16px",
                fontWeight: "700",
                marginBottom: "20px",
                color: "#d4a574"
              }}
            >
              Hubungi Kami
            </h4>
            <div style={{ display: "flex", flexDirection: "column", gap: "14px", color: "#b0b0b0", fontSize: "14px" }}>
              <div style={{ display: "flex", alignItems: "flex-start", gap: "12px" }}>
                <MapPin size={20} color="#d4a574" style={{ marginTop: "2px", flexShrink: 0 }} />
                <span>Jalan Angsana. 12345<br />Pasiripis, Jawa Barat, Indonesia - 45457</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <Phone size={20} color="#d4a574" />
                <span>+62 838-777-05331</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <Mail size={20} color="#d4a574" />
                <span>infoSundayCoffe@gmail.com</span>
              </div>
            </div>
          </div>

          <div>
            <h4
              style={{
                fontSize: "16px",
                fontWeight: "700",
                marginBottom: "20px",
                color: "#d4a574"
              }}
            >
              Ikuti Kami
            </h4>
            <div style={{ display: "flex", gap: "16px", alignItems: "center" }}>
              <a href="https://www.facebook.com/share/1BWSCFccEA/" target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", width: "44px", height: "44px", background: "#4a4a4a", borderRadius: "50%", color: "#d4a574", textDecoration: "none" }} title="Facebook"><Facebook size={20} /></a>
              <a href="https://www.instagram.com/kevin.sky_?igsh=Z3l5dzN3cmR0bTk1" target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", width: "44px", height: "44px", background: "#4a4a4a", borderRadius: "50%", color: "#d4a574", textDecoration: "none" }} title="Instagram"><Instagram size={20} /></a>
              <a href="#" style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", width: "44px", height: "44px", background: "#4a4a4a", borderRadius: "50%", color: "#d4a574", textDecoration: "none" }} title="Bagikan"><Share2 size={20} /></a>
              <a href="https://youtube.com/@kevin_sky?si=4u1pcqwGHNyf3cka" target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", width: "44px", height: "44px", background: "#4a4a4a", borderRadius: "50%", color: "#d4a574", textDecoration: "none" }} title="YouTube"><Youtube size={20} /></a>
            </div>
          </div>
        </div>

        <div
          style={{
            borderTop: "1px solid #4a4a4a",
            paddingTop: "20px",
            textAlign: "center",
            fontSize: "13px",
            color: "#888"
          }}
        >
          <p>© 2026 Sunday Coffe Shop. All rights reserved. | Privacy Policy | Terms of Service</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

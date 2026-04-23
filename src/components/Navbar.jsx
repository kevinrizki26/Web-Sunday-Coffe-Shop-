import "../App.css";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDown, Minus, Plus, ShoppingCart } from "lucide-react";
import logoImg from "../assets/images/SUNDAY COFFE SHOP-TITTLE.png";

const formatCurrency = (value) =>
  new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0
  }).format(value);

const Navbar = ({
  cartCount = 0,
  cartItems = [],
  cartSubtotal = 0,
  onIncreaseItem = () => {},
  onDecreaseItem = () => {},
  onRemoveItem = () => {},
  onClearCart = () => {}
}) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const cartRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (cartRef.current && !cartRef.current.contains(event.target)) {
        setIsCartOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="navbar">
      <div className="logo">
        <img src={logoImg} alt="Sunday Coffee Shop" style={{ height: 200, marginTop: "15px" }} />
      </div>

        <ul className="nav-menu">
          <li><Link to="/">Beranda</Link></li>
          <li className="nav-item-dropdown">
            <span className="nav-link">
              Menu <ChevronDown size={14} className="nav-link-icon" />
            </span>
            <div className="dropdown dropdown-menu">
              <div className="dropdown-section">
                <div className="dropdown-section-title">Minuman</div>
                <a href="#" className="dropdown-item">Americano</a>
                <a href="#" className="dropdown-item">Espresso</a>
                <a href="#" className="dropdown-item">V60</a>
                <a href="#" className="dropdown-item">Vietnam Drip</a>
                <a href="#" className="dropdown-item">Cafe Latte Ice</a>
                <a href="#" className="dropdown-item">Cafe Latte Hot Art</a>
                <a href="#" className="dropdown-item">Mochaccino</a>
                <a href="#" className="dropdown-item">Caramel Macchiato</a>
                <a href="#" className="dropdown-item">Matcha Latte</a>
                <a href="#" className="dropdown-item">Es Kopi Susu Gula Aren</a>
              </div>
              <div className="dropdown-section">
                <div className="dropdown-section-title">Makanan</div>
                <a href="#" className="dropdown-item">French Fries</a>
                <a href="#" className="dropdown-item">Croissant</a>
                <a href="#" className="dropdown-item">Brownies</a>
                <a href="#" className="dropdown-item">Cookies</a>
                <a href="#" className="dropdown-item">Mix Platter</a>
                <a href="#" className="dropdown-item">Sandwich</a>
              </div>
            </div>
          </li>
          <li><Link to="/about">Tentang</Link></li>
          <li className="nav-item-dropdown">
            <span className="nav-link">
              Kontak <ChevronDown size={14} className="nav-link-icon" />
            </span>
            <div className="dropdown">
              <a href="tel:+6281234567890" className="dropdown-item">Telepon: +62 812-3456-7890</a>
              <a href="mailto:info@sundaycoffeeshop.com" className="dropdown-item">Email: infoSundayCoffe@gmail.com</a>
            </div>
          </li>
        </ul>

      <div className="navbar-actions">
        <div className="cart-wrapper" ref={cartRef}>
          <button
            type="button"
            className="cart-button"
            aria-label="Keranjang"
            onClick={() => setIsCartOpen((prev) => !prev)}
          >
            <ShoppingCart
              className="cart-icon"
              aria-hidden="true"
              size={24}
              strokeWidth={2.4}
            />
            {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
          </button>

          {isCartOpen && (
            <div className="cart-dropdown">
              <div className="cart-dropdown-header">
                <h4>Keranjang</h4>
                {cartItems.length > 0 && (
                  <button type="button" className="cart-clear-btn" onClick={onClearCart}>
                    Kosongkan
                  </button>
                )}
              </div>

              {cartItems.length === 0 ? (
                <p className="cart-empty">Belum ada produk di keranjang.</p>
              ) : (
                <>
                  <ul className="cart-list">
                    {cartItems.map((item) => (
                      <li key={item.id} className="cart-item">
                        <div className="cart-item-main">
                          <span className="cart-item-name">{item.name}</span>
                          <span className="cart-item-price">Rp {item.price}</span>
                        </div>
                        <div className="cart-item-actions">
                          <button
                            type="button"
                            className="cart-qty-btn"
                            aria-label={`Kurangi ${item.name}`}
                            onClick={() => onDecreaseItem(item.id)}
                          >
                            <Minus size={14} aria-hidden="true" />
                          </button>
                          <span>{item.quantity}</span>
                          <button
                            type="button"
                            className="cart-qty-btn"
                            aria-label={`Tambah ${item.name}`}
                            onClick={() => onIncreaseItem(item.id)}
                          >
                            <Plus size={14} aria-hidden="true" />
                          </button>
                          <button type="button" className="cart-remove-btn" onClick={() => onRemoveItem(item.id)}>
                            Hapus
                          </button>
                        </div>
                      </li>
                    ))}
                  </ul>

                  <div className="cart-summary">
                    <span>Subtotal</span>
                    <strong>{formatCurrency(cartSubtotal)}</strong>
                  </div>

                  <Link to="/checkout" className="cart-pay-btn" onClick={() => setIsCartOpen(false)}>
                    Bayar
                  </Link>
                </>
              )}

              <Link to="/products" className="cart-open-products" onClick={() => setIsCartOpen(false)}>
                Lihat Produk
              </Link>
            </div>
          )}
        </div>
        <Link to="/products" className="btn-primary">
          Ayo pesan
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;

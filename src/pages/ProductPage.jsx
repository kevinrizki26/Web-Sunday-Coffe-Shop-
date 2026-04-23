import { useState } from "react";
import { ShoppingCart } from "lucide-react";
import { useNavigate, useOutletContext } from "react-router-dom";
import "../styles/main.css";

const ProductPage = () => {
  const [modal, setModal] = useState({ open: false, type: "", item: null });
  const navigate = useNavigate();
  const outletContext = useOutletContext() || {};
  const addToCart = outletContext.addToCart || (() => {});

  const products = [
    { id: 1, name: "Espresso", price: "25K", image: "/src/assets/images/CATALOG KOPI/esspreso - pinteres.jpg", category: "coffee" },
    { id: 2, name: "Americano", price: "22K", image: "/src/assets/images/CATALOG KOPI/americano - pinteres.jpg", category: "coffee" },
    { id: 3, name: "Latte Hot Art", price: "30K", image: "/src/assets/images/CATALOG KOPI/cafe latte hot art.png", category: "coffee" },
    { id: 4, name: "Kopi Susu", price: "28K", image: "/src/assets/images/CATALOG KOPI/kopi susu - pinteres.jpg", category: "coffee" },
    { id: 5, name: "V60", price: "35K", image: "/src/assets/images/CATALOG KOPI/v60 - pinteres.jpg", category: "coffee" },
    { id: 6, name: "Vietnam Drip", price: "27K", image: "/src/assets/images/CATALOG KOPI/Vietnam drip - pinteres.jpg", category: "coffee" },
    { id: 7, name: "Cafe Latte Ice", price: "30K", image: "/src/assets/images/CATALOG KOPI/cafe latte ice.png", category: "coffee" },
    { id: 8, name: "Mochaccino", price: "32K", image: "/src/assets/images/CATALOG KOPI/Mochaccino.png", category: "coffee" },
    { id: 9, name: "Caramel Macchiato", price: "33K", image: "/src/assets/images/CATALOG KOPI/Caramel Macchiato - pinteres.jpg", category: "coffee" },
    { id: 10, name: "Matcha Latte", price: "29K", image: "/src/assets/images/CATALOG KOPI/matcha - pinteres.jpg", category: "coffee" },
    { id: 11, name: "Croissant", price: "18K", image: "/src/assets/images/CATALOG MAKANAN/Croissant - pinteres.jpg", category: "food" },
    { id: 13, name: "Cookies", price: "15K", image: "/src/assets/images/CATALOG MAKANAN/Cookies - pinteres.jpg", category: "food" },
    { id: 14, name: "French Fries", price: "16K", image: "/src/assets/images/CATALOG MAKANAN/frien french - pinteres.jpg", category: "food" },
    { id: 15, name: "Mix Platter", price: "45K", image: "/src/assets/images/CATALOG MAKANAN/Mix Platter -  pinteres.jpg", category: "food" },
    { id: 16, name: "Brownies dan Ice Cream", price: "12K", image: "/src/assets/images/CATALOG MAKANAN/brownis and ice cream - pinteres.jpg", category: "food" },
    { id: 17, name: "Sandwich", price: "30K", image: "/src/assets/images/CATALOG MAKANAN/sandwich - pinteres.jpg", category: "food" },
    { id: 19, name: "Salad", price: "22K", image: "/src/assets/images/CATALOG MAKANAN/salad - pinteres.jpg", category: "food" },
    { id: 20, name: "Risol", price: "28K", image: "/src/assets/images/CATALOG MAKANAN/risol - pinteres.jpg", category: "food" }
  ];

  const coffees = products.filter((item) => item.category === "coffee");
  const foods = products.filter((item) => item.category === "food");

  const handleAddToCart = (item) => {
    addToCart(item);
    setModal({ open: true, type: "cart", item });
  };

  const closeModal = () => setModal({ open: false, type: "", item: null });

  const confirmOrder = () => {
    if (modal.item) {
      addToCart(modal.item);
    }
    closeModal();
    navigate("/checkout");
  };

  const renderCard = (item) => (
    <div key={item.id} className="card">
      <img src={item.image} alt={item.name} />
      <h4 style={{ marginTop: 8 }}>{item.name}</h4>
      <p style={{ color: "#8b6f47", marginTop: 6 }}>Rp {item.price}</p>
      <div className="card-actions">
        <button className="btn-cart" onClick={() => handleAddToCart(item)}>
          <ShoppingCart size={16} />
          <span>Tambah</span>
        </button>
        <button className="btn-order" onClick={() => setModal({ open: true, type: "order", item })}>
          Pesan
        </button>
      </div>
    </div>
  );

  return (
    <div className="product-page container">
      <h1 style={{ textAlign: "center", margin: "40px 0" }}>Produk Kami</h1>

      <section>
        <h2 style={{ textAlign: "center", marginBottom: "32px" }}>Menu Kopi</h2>
        <div className="grid">{coffees.map(renderCard)}</div>
      </section>

      <section style={{ marginTop: 24 }}>
        <h2 style={{ textAlign: "center", marginBottom: "32px" }}>Menu Makanan</h2>
        <div className="grid">{foods.map(renderCard)}</div>
      </section>

      {modal.open && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <h3>{modal.type === "cart" ? "Keranjang" : "Pesanan"}</h3>
            <p>
              {modal.type === "cart"
                ? `${modal.item.name} berhasil ditambahkan ke keranjang.`
                : `Lanjutkan pemesanan untuk ${modal.item.name}?`}
            </p>
            <div className="modal-actions">
              <button className="btn-cancel" onClick={closeModal}>Batal</button>
              <button onClick={modal.type === "cart" ? closeModal : confirmOrder}>
                {modal.type === "cart" ? "OK" : "Lanjut ke Pembayaran"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductPage;

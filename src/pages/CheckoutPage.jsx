import { useEffect, useMemo, useState } from "react";
import { useOutletContext } from "react-router-dom";
import danaLogo from "../assets/images/LOGO OPTITION PAYMENTS/dana-logo.png";
import gopayLogo from "../assets/images/LOGO OPTITION PAYMENTS/gopay-logo.svg";
import linkajaLogo from "../assets/images/LOGO OPTITION PAYMENTS/linkaja-logo.png";
import shopeepayLogo from "../assets/images/LOGO OPTITION PAYMENTS/shopeepay-logo.png";
import ovoLogo from "../assets/images/LOGO OPTITION PAYMENTS/GKL14_OVO - Koleksilogo.com.png";

const formatCurrency = (value) =>
  new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0
  }).format(value);

const formatTimer = (seconds) => {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  return `${String(minutes).padStart(2, "0")}:${String(remainingSeconds).padStart(2, "0")}`;
};

const CheckoutPage = () => {
  const outletContext = useOutletContext() || {};
  const cartItems = outletContext.cartItems || [];
  const cartSubtotal = outletContext.cartSubtotal || 0;
  const clearCart = outletContext.clearCart || (() => {});

  const [selectedMethod, setSelectedMethod] = useState("online");
  const [cashInstructionShown, setCashInstructionShown] = useState(false);
  const [isCashModalOpen, setIsCashModalOpen] = useState(false);
  const [queueNumber, setQueueNumber] = useState("");
  const [tableNumber, setTableNumber] = useState("");
  const [remainingSeconds, setRemainingSeconds] = useState(0);
  const [paidTotal, setPaidTotal] = useState(0);

  useEffect(() => {
    if (!queueNumber || remainingSeconds <= 0) {
      return;
    }

    const timerId = window.setInterval(() => {
      setRemainingSeconds((prev) => Math.max(0, prev - 1));
    }, 1000);

    return () => window.clearInterval(timerId);
  }, [queueNumber, remainingSeconds]);

  useEffect(() => {
    if (!isCashModalOpen) {
      return;
    }

    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setIsCashModalOpen(false);
      }
    };

    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [isCashModalOpen]);

  const orderTotal = useMemo(() => {
    if (queueNumber && paidTotal > 0) {
      return paidTotal;
    }

    return cartSubtotal;
  }, [cartSubtotal, paidTotal, queueNumber]);

  const generateQueueNumber = () => {
    const generated = `A${String(Math.floor(Math.random() * 900) + 100)}`;
    const generatedTable = String(Math.floor(Math.random() * 50) + 1).padStart(2, "0");
    setQueueNumber(generated);
    setTableNumber(generatedTable);
    setRemainingSeconds(15 * 60);
  };

  const completePayment = () => {
    setPaidTotal(cartSubtotal);
    generateQueueNumber();
    clearCart();
  };

  const handleCashInstruction = () => {
    setIsCashModalOpen(true);
    setCashInstructionShown(true);
  };

  return (
    <div className="checkout-page container">
      <h1 className="checkout-title">Halaman Pembayaran</h1>

      <div className="checkout-layout">
        <section className="checkout-card">
          <h2>Pilih Metode Pembayaran</h2>
          <div className="payment-methods">
            <button
              type="button"
              className={`payment-method-btn ${selectedMethod === "online" ? "active" : ""}`}
              onClick={() => setSelectedMethod("online")}
            >
              Online (QRIS)
            </button>
            <button
              type="button"
              className={`payment-method-btn ${selectedMethod === "cash" ? "active" : ""}`}
              onClick={() => setSelectedMethod("cash")}
            >
              Bayar di Tempat
            </button>
          </div>

          {selectedMethod === "online" && (
            <div className="payment-box payment-box-online">
              <p>Scan barcode QRIS di bawah ini, lalu klik konfirmasi pembayaran.</p>
              <img
                className="qris-image"
                src="https://api.qrserver.com/v1/create-qr-code/?size=260x260&data=PAYMENT-SUNDAY-COFFEE-SHOP"
                alt="QRIS Sunday Coffee Shop"
              />
              <button
                type="button"
                className="payment-action-btn"
                onClick={completePayment}
                disabled={cartItems.length === 0}
              >
                Saya Sudah Bayar (QRIS)
              </button>

              <div className="payment-app-panel">
                <div className="payment-app-header">
                  <span className="payment-app-title">QRIS</span>
                  <span className="payment-app-badge">Rekomendasi</span>
                </div>

                <div className="payment-app-logos">
                  <div className="payment-app-logo-image-wrap">
                    <img src={linkajaLogo} alt="Logo LinkAja" className="payment-app-logo-image" />
                  </div>
                  <div className="payment-app-logo-image-wrap">
                    <img src={danaLogo} alt="Logo DANA" className="payment-app-logo-image" />
                  </div>
                  <div className="payment-app-logo-image-wrap">
                    <img src={gopayLogo} alt="Logo GoPay" className="payment-app-logo-image" />
                  </div>
                  <div className="payment-app-logo-image-wrap">
                    <img src={shopeepayLogo} alt="Logo ShopeePay" className="payment-app-logo-image" />
                  </div>
                  <div className="payment-app-logo-image-wrap">
                    <img src={ovoLogo} alt="Logo OVO" className="payment-app-logo-image" />
                  </div>
                </div>
              </div>
            </div>
          )}

          {selectedMethod === "cash" && (
            <div className="payment-box payment-box-cash">
              <p>Silakan lakukan pembayaran langsung di kasir.</p>
              <button
                type="button"
                className="payment-action-btn secondary"
                onClick={handleCashInstruction}
                disabled={cartItems.length === 0}
              >
                Bayar di Kasir
              </button>
              {cashInstructionShown && (
                <button
                  type="button"
                  className="payment-action-btn"
                  onClick={completePayment}
                  disabled={cartItems.length === 0}
                >
                  Saya Sudah Bayar di Kasir
                </button>
              )}
            </div>
          )}
        </section>

        <section className="checkout-card">
          <h2>Ringkasan Pesanan</h2>
          {cartItems.length === 0 && !queueNumber ? (
            <p className="checkout-empty">Keranjang kosong. Tambahkan menu dulu sebelum membayar.</p>
          ) : (
            <ul className="checkout-list">
              {cartItems.map((item) => (
                <li key={item.id} className="checkout-list-item">
                  <span>{item.name} x{item.quantity}</span>
                  <strong>{item.price}</strong>
                </li>
              ))}
            </ul>
          )}
          <div className="checkout-total">
            <span>Total</span>
            <strong>{formatCurrency(orderTotal)}</strong>
          </div>
        </section>
      </div>

      {queueNumber && (
        <section className="queue-card">
          <h2>Nomor Antrian Anda: {queueNumber}</h2>
          <p>Nomor Meja: <strong>{tableNumber}</strong></p>
          <p>Pesanan akan diantarkan ke meja sekitar 15 menit sesuai nomor antrian.</p>
          <div className="queue-timer">{formatTimer(remainingSeconds)}</div>
        </section>
      )}

      {isCashModalOpen && (
        <div className="modal-overlay" onClick={() => setIsCashModalOpen(false)}>
          <div className="modal" onClick={(event) => event.stopPropagation()}>
            <h3>Konfirmasi Pembayaran Kasir</h3>
            <p>Silakan bayar di kasir terlebih dahulu.</p>
            <div className="modal-actions">
              <button className="btn-cancel" onClick={() => setIsCashModalOpen(false)}>Tutup</button>
              <button onClick={() => setIsCashModalOpen(false)}>OK</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CheckoutPage;

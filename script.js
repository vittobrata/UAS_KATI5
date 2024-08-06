function submitForm() {
  // Ambil data dari form
  const nama = document.getElementById("nama").value;
  const email = document.getElementById("email").value;
  // Tampilkan pesan konfirmasi
  alert("Terima kasih, pesanan Anda telah terkirim!");
}

// JavaScript (script.js)
const quantityInput = document.getElementById("quantity");
const totalHargaElement = document.getElementById("total-harga");
const hargaSatuan = 100000; // Ganti dengan harga produk sebenarnya

quantityInput.addEventListener("input", () => {
  const quantity = quantityInput.value;
  const totalHarga = quantity * hargaSatuan;
  totalHargaElement.textContent = "Rp" + totalHarga;
});

const buyButtons = document.querySelectorAll(".product button");
const cart = []; // Array untuk menyimpan produk yang dipilih

buyButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const productId = button.dataset.productId;
    // Simulasikan data produk dari server
    const product = {
      id: productId,
      name: "Produk 1",
      price: 100000,
    };
    cart.push(product);
    // Simpan data keranjang ke localStorage atau kirim ke server
    localStorage.setItem("cart", JSON.stringify(cart));
    // Redirect ke halaman transaksi
    window.location.href = "transaksi.html";
  });
});

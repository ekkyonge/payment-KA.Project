function tampilkanInstruksi() {
  const metode = document.getElementById("metode").value;
  const hasil = document.getElementById("hasil");

  if (metode === "Shopee") {
    hasil.innerHTML =
      "Silahkan kirim ke <b>Shopeepay 0813-9600-9202</b> <hr> An: Fe** ka***** ";
  } else {
    hasil.innerHTML = "Pilih metode pembayaran untuk melihat instruksi.";
  }
}

function previewImage(event) {
  const preview = document.getElementById("preview");
  preview.src = URL.createObjectURL(event.target.files[0]);
  preview.style.display = "block";
}

function kirimWhatsApp() {
  const nama = document.getElementById("nama").value;
  const jumlah = document.getElementById("jumlah").value;
  const metode = document.getElementById("metode").value;

  if (!nama || !jumlah || !metode) {
    alert("Harap isi semua data!");
    return;
  }

  // Nomor admin (format internasional tanpa +, misal Indonesia = 62)
  const admin = "6281396009202";
  const pesan = `Halo Admin, saya ingin konfirmasi pembayaran:\n\nNama: ${nama}\nJumlah: Rp${jumlah}\nMetode: ${metode}\n\nTerima kasih.`;

  const url = `https://wa.me/${admin}?text=${encodeURIComponent(pesan)}`;
  window.open(url, "_blank");
}

document.getElementById('loginForm').addEventListener('submit', function (event) {
  event.preventDefault();
  alert('Login berhasil!');
});

document.getElementById('registerForm').addEventListener('submit', function (event) {
  event.preventDefault();
  alert('Registrasi berhasil!');
});


document.addEventListener('DOMContentLoaded', function () {
  const links = document.querySelectorAll('.navbar-nav .nav-link');
  links.forEach(link => {
    if (link.href === window.location.href) {
      link.classList.add('active');
    }
  });
});

document.getElementById('loginForm').addEventListener('submit', function (event) {
  event.preventDefault();

  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  if (username && password) {
    window.location.href = 'index.html';
  } else {
    alert('Username dan Password harus diisi!');
  }
});

document.getElementById("formPeminjaman").addEventListener("submit", function (event) {
  event.preventDefault();

  const namaPeminjam = document.getElementById("namaPeminjam").value;
  const buku = document.getElementById("buku").value;
  const tanggalPinjam = document.getElementById("tanggalPinjam").value;

  if (!namaPeminjam || !buku || !tanggalPinjam) {
    alert("Semua data harus diisi!");
    return;
  }

  const hasilPeminjaman = `
          <strong>Nama Peminjam:</strong> ${namaPeminjam}<br>
          <strong>Buku yang dipinjam:</strong> ${buku}<br>
          <strong>Tanggal Peminjaman:</strong> ${tanggalPinjam}
      `;

  document.getElementById("dataPeminjaman").innerHTML = hasilPeminjaman;
  document.getElementById("hasilPeminjaman").style.display = "block";

  document.getElementById("formPeminjaman").reset();
});

document.addEventListener('DOMContentLoaded', function () {
  const returnForm = document.getElementById('returnForm');
  const notification = document.getElementById('notification');
  const returnHistoryTable = document.getElementById('returnHistoryTable').getElementsByTagName('tbody')[0];

  function addReturnHistory(bookTitle, borrowerName, returnDate) {
    const row = returnHistoryTable.insertRow();
    row.innerHTML = `
            <td>${returnHistoryTable.rows.length}</td>
            <td>${bookTitle}</td>
            <td>${borrowerName}</td>
            <td>${returnDate}</td>
        `;
  }

  returnForm.addEventListener('submit', function (event) {
    event.preventDefault();

    const bookTitle = document.getElementById('bookTitle').value;
    const returnDate = document.getElementById('returnDate').value;
    const borrowerName = document.getElementById('borrowerName').value;

    if (!bookTitle || !returnDate || !borrowerName) {
      notification.classList.add('alert-danger');
      notification.textContent = 'Semua kolom harus diisi!';
      notification.style.display = 'block';
    } else {
      addReturnHistory(bookTitle, borrowerName, returnDate);

      notification.classList.remove('alert-danger');
      notification.classList.add('alert-success');
      notification.textContent = `Buku "${bookTitle}" berhasil dikembalikan oleh ${borrowerName} pada ${returnDate}.`;
      notification.style.display = 'block';

      returnForm.reset();
    }

    setTimeout(function () {
      notification.style.display = 'none';
    }, 5000);
  });
});

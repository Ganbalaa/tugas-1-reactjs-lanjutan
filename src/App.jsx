function App() {

  return (
    <>
      <div className="container sticky-top bg-white">
      <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
          <div className="col-md-3 mb-2 mb-md-0">
            <a href="/" className="d-inline-flex align-items-center link-body-emphasis text-decoration-none">
              <i className="fa-solid fa-book-open fs-4 text-primary me-2"></i>
              <span className="fs-4 fw-bold text-primary">Ganbook</span>
            </a>
          </div>

          <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
            <li><a href="#home" className="nav-link px-2 text-dark">Home</a></li>
            <li><a href="#book" className="nav-link px-2 text-dark">Book</a></li>
            <li><a href="#team" className="nav-link px-2 text-dark">Team</a></li>
            <li><a href="#contact" className="nav-link px-2 text-dark">Contact</a></li>
          </ul>

          <div className="col-md-3 text-end">
            <button type="button" className="btn btn-outline-primary me-2">Login</button>
            <button type="button" className="btn btn-primary">Register</button>
          </div>
        </header>

      {/* --- BAGIAN HOME --- */}
      <div id="home" className="container my-5">
        <div className="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg bg-light">
          <div className="col-lg-7 p-3 p-lg-5 pt-lg-3">
            <h1 className="display-4 fw-bold lh-1 text-body-emphasis mb-3">Temukan Buku Inspiratif Pilihanmu</h1>
            <p className="lead">
              Selamat datang di Bookstore. Dikembangkan oleh Noval Maulani, platform ini hadir untuk menyediakan berbagai koleksi buku terbaik, mulai dari pemrograman, teknologi, hingga fiksi untuk menemani waktu luangmu.
            </p>
            <div className="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3 mt-4">
              <a href="#book" className="btn btn-primary btn-lg px-4 me-md-2 fw-bold">Jelajahi Buku</a>
              <a href="#contact" className="btn btn-outline-secondary btn-lg px-4">Hubungi Kami</a>
            </div>
          </div>
          <div className="col-lg-4 offset-lg-1 p-0 overflow-hidden shadow-lg rounded-3">
              {/* Gambar ilustrasi toko buku/membaca */}
              <img src="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=600&q=80" alt="Ilustrasi Buku" className="img-fluid" />
          </div>
        </div>
      </div>

      {/* --- BAGIAN BOOK (ALBUM) --- */}
      <div id="book" className="album py-5 bg-body-tertiary">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="display-6 fw-bold">Best Selling Book</h2>
            <p className="text-muted">Koleksi buku pemrograman dan teknologi paling dicari bulan ini.</p>
          </div>

          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4">
            {/* Buku 1 */}
            <div className="col">
              <div className="card shadow-sm h-100 border-0">
                
                {/* Link gambar sudah diganti dengan gambar logo React */}
                <img src="https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&q=80" className="card-img-top" alt="Buku 1" style={{ height: '250px', objectFit: 'cover' }} />
                
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title fw-bold">Mastering React & Vite</h5>
                  <p className="card-text text-muted small">Panduan lengkap membangun antarmuka web modern dan interaktif dari nol menggunakan React.</p>
                  <div className="mt-auto d-flex justify-content-between align-items-center">
                    <button type="button" className="btn btn-sm btn-primary">Beli Sekarang</button>
                    <small className="text-success fw-bold">Rp 120.000</small>
                  </div>
                </div>
              </div>
            </div>

            {/* Buku 2 */}
            <div className="col">
              <div className="card shadow-sm h-100 border-0">
                <img src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400&q=80" className="card-img-top" alt="Buku 2" style={{ height: '250px', objectFit: 'cover' }} />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title fw-bold">Algoritma & Logika</h5>
                  <p className="card-text text-muted small">Fundamental yang wajib dikuasai oleh setiap mahasiswa IT untuk problem solving.</p>
                  <div className="mt-auto d-flex justify-content-between align-items-center">
                    <button type="button" className="btn btn-sm btn-primary">Beli Sekarang</button>
                    <small className="text-success fw-bold">Rp 95.000</small>
                  </div>
                </div>
              </div>
            </div>

            {/* Buku 3 */}
            <div className="col">
              <div className="card shadow-sm h-100 border-0">
                <img src="https://images.unsplash.com/photo-1614680376593-902f74cf0d41?w=400&q=80" className="card-img-top" alt="Buku 3" style={{ height: '250px', objectFit: 'cover' }} />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title fw-bold">Membangun Komunitas Digital</h5>
                  <p className="card-text text-muted small">Strategi mengelola server komunitas besar di Discord dan interaksi audiens.</p>
                  <div className="mt-auto d-flex justify-content-between align-items-center">
                    <button type="button" className="btn btn-sm btn-primary">Beli Sekarang</button>
                    <small className="text-success fw-bold">Rp 85.000</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* --- BAGIAN TEAM --- */}
      <div id="team" className="container my-5 py-5 border-top">
        <div className="text-center mb-5">
          <h2 className="display-6 fw-bold">Pengelola Bookstore</h2>
          <p className="text-muted">Tim di balik koleksi buku berkualitas ini.</p>
        </div>
        <div className="row text-center justify-content-center">
          
          {/* Anggota 1 */}
          <div className="col-lg-4 col-md-6 mb-4">
            <div className="card shadow-sm border-0 py-4 h-100">
              <div className="card-body">
                <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Noval" alt="Noval Maulani" className="rounded-circle mb-3 border border-3 border-primary" width="120" />
                <h4 className="card-title fw-bold">Noval Maulani</h4>
                <p className="card-text text-primary">Founder & Lead Developer</p>
                <p className="text-muted small">Mahasiswa STT NF yang membangun platform ini untuk mempermudah akses literasi teknologi.</p>
              </div>
            </div>
          </div>

          {/* Anggota 2 (Contoh partner toko) */}
          <div className="col-lg-4 col-md-6 mb-4">
            <div className="card shadow-sm border-0 py-4 h-100">
              <div className="card-body">
                <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=AdminBuku" alt="Admin" className="rounded-circle mb-3 border border-3 border-secondary" width="120" />
                <h4 className="card-title fw-bold">Sarah Kurator</h4>
                <p className="card-text text-secondary">Book Curator</p>
                <p className="text-muted small">Bertanggung jawab menyeleksi dan memastikan kualitas buku-buku yang dijual di Bookstore.</p>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* --- BAGIAN CONTACT --- */}
      <div id="contact" className="container my-5 py-5 border-top">
        <div className="row justify-content-center">
          <div className="col-md-8 col-lg-6">
            <div className="card shadow-lg border-0 p-4 rounded-4 bg-body-tertiary">
              <h2 className="text-center fw-bold mb-4">Pesan atau Tanya Stok</h2>
              <form>
                <div className="mb-3">
                  <label className="form-label fw-semibold">Nama Lengkap</label>
                  <input type="text" className="form-control form-control-lg" placeholder="Masukkan nama Anda" />
                </div>
                <div className="mb-3">
                  <label className="form-label fw-semibold">Alamat Email</label>
                  <input type="email" className="form-control form-control-lg" placeholder="nama@email.com" />
                </div>
                <div className="mb-4">
                  <label className="form-label fw-semibold">Pesan / Judul Buku yang Dicari</label>
                  <textarea className="form-control form-control-lg" rows="4" placeholder="Halo admin, apakah buku Mastering React masih tersedia?"></textarea>
                </div>
                <button type="button" className="btn btn-primary btn-lg w-100 fw-bold rounded-pill">Kirim Pesan</button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="container">
        <footer className="py-3 my-4">
          <ul className="nav justify-content-center border-bottom pb-3 mb-3">
            <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary">Home</a></li>
            <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary">Features</a></li>
            <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary">Pricing</a></li>
            <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary">FAQs</a></li>
            <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary">About</a></li>
          </ul>
          <p className="text-center text-body-secondary">© 2026 NF Academy</p>
        </footer>
      </div>
      </div>
    </>
  )
}

export default App

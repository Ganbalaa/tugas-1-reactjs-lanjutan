export default function Book() {
  return (
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
  );
}
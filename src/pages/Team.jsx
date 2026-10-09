export default function Team() {
  return (
    <div className="container my-5 py-5">
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

        {/* Anggota 2 */}
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
  );
}
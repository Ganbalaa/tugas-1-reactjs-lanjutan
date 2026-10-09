export default function Contact() {
  return (
    <div className="container my-5 py-5">
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
  );
}
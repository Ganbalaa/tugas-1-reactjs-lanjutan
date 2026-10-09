import React, { useState } from 'react';
// 1. Import data buku dari Utils
import booksData from '../Utils/book'; 

export default function Home() {
  // 2. State untuk menyimpan daftar buku
  const [bookList, setBookList] = useState(booksData);

  // 3. State untuk menampung input form buku baru
  const [newBook, setNewBook] = useState({
    title: '',
    author: '',
    year: '',
    description: '',
    image: ''
  });

  // Fungsi saat form diketik
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewBook({
      ...newBook,
      [name]: value
    });
  };

  // Fungsi saat tombol "Simpan Buku" ditekan
  const handleAddBook = (e) => {
    e.preventDefault();
    if (!newBook.title || !newBook.author) {
      alert('Judul dan Penulis wajib diisi!');
      return;
    }

    // Bikin ID baru
    const newId = bookList.length > 0 ? bookList[bookList.length - 1].id + 1 : 1;
    const bookToAdd = { id: newId, ...newBook };

    // Masukkan buku baru ke state bookList
    setBookList([...bookList, bookToAdd]);
    
    // Kosongkan form kembali
    setNewBook({ title: '', author: '', year: '', description: '', image: '' });
  };

  return (
    <>
      {/* --- BAGIAN HERO --- */}
      <div className="container my-5">
        <div className="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg bg-light">
          <div className="col-lg-7 p-3 p-lg-5 pt-lg-3">
            <h1 className="display-4 fw-bold lh-1 text-body-emphasis mb-3">Temukan Buku Inspiratif Pilihanmu</h1>
            <p className="lead">
              Selamat datang di Bookstore. Dikembangkan oleh Noval Maulani, platform ini hadir untuk menyediakan berbagai koleksi buku terbaik, mulai dari pemrograman, teknologi, hingga fiksi untuk menemani waktu luangmu.
            </p>
            <div className="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3 mt-4">
              <a href="#book" className="btn btn-primary btn-lg px-4 me-md-2 fw-bold">Jelajahi Buku</a>
            </div>
          </div>
          <div className="col-lg-4 offset-lg-1 p-0 overflow-hidden shadow-lg rounded-3">
              <img src="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=600&q=80" alt="Ilustrasi Buku" className="img-fluid" />
          </div>
        </div>
      </div>

      {/* --- FORM TAMBAH BUKU --- */}
      <div className="container mb-5">
        <div className="card shadow-sm border-0 bg-light p-4 rounded-3">
          <h4 className="fw-bold mb-3">➕ Tambah Buku Baru</h4>
          <form onSubmit={handleAddBook}>
            <div className="row g-3">
              <div className="col-md-6">
                <input type="text" className="form-control" name="title" placeholder="Judul Buku" value={newBook.title} onChange={handleInputChange} />
              </div>
              <div className="col-md-6">
                <input type="text" className="form-control" name="author" placeholder="Penulis" value={newBook.author} onChange={handleInputChange} />
              </div>
              <div className="col-md-6">
                <input type="number" className="form-control" name="year" placeholder="Tahun Terbit (Contoh: 2024)" value={newBook.year} onChange={handleInputChange} />
              </div>
              <div className="col-md-6">
                <input type="text" className="form-control" name="image" placeholder="URL Gambar (Opsional)" value={newBook.image} onChange={handleInputChange} />
              </div>
              <div className="col-12">
                <textarea className="form-control" name="description" placeholder="Deskripsi Buku" rows="2" value={newBook.description} onChange={handleInputChange}></textarea>
              </div>
              <div className="col-12">
                <button type="submit" className="btn btn-success fw-bold">Simpan Buku</button>
              </div>
            </div>
          </form>
        </div>
      </div>

      {/* --- BAGIAN BOOK (Menampilkan data menggunakan map) --- */}
      <div id="book" className="album py-5 bg-body-tertiary">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="display-6 fw-bold">Best Selling Book</h2>
            <p className="text-muted">Koleksi buku pemrograman dan teknologi paling dicari bulan ini.</p>
          </div>

          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4">
            {/* Proses Looping dengan .map() */}
            {bookList.map((book) => (
              <div className="col" key={book.id}>
                <div className="card shadow-sm h-100 border-0">
                  <img 
                    src={book.image || "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400&q=80"} 
                    className="card-img-top" 
                    alt={book.title} 
                    style={{ height: '250px', objectFit: 'cover' }} 
                  />
                  <div className="card-body d-flex flex-column">
                    <h5 className="card-title fw-bold">{book.title}</h5>
                    <p className="card-text text-primary small fw-bold mb-1">
                      {book.author} • {book.year}
                    </p>
                    <p className="card-text text-muted small">{book.description}</p>
                    <div className="mt-auto d-flex justify-content-between align-items-center">
                      <button type="button" className="btn btn-sm btn-primary">Beli Sekarang</button>
                      <small className="text-success fw-bold">Rp 85.000</small>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
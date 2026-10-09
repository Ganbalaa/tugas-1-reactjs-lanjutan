import React from 'react';
import booksData from '../Utils/book';

export default function Book() {
  return (
    <div id="book" className="album py-5 bg-body-tertiary">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="display-6 fw-bold">Katalog Semua Buku</h2>
          <p className="text-muted">Jelajahi koleksi lengkap buku-buku pemrograman dan teknologi kami.</p>
        </div>

        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4">
          {booksData.map((book) => (
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
  );
}
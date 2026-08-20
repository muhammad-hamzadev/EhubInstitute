import React from 'react';

const booksData = [
  {
    id: 'book-1',
    title: 'English for Beginners',
    author: 'By Maroof Mehmood',
    frontCover: '/assets/books/book1_beginners_front.svg',
    backCover: '/assets/books/book1_beginners_back.svg'
  },
  {
    id: 'book-2',
    title: 'English for Intermediate',
    author: 'By Maroof Mehmood',
    frontCover: '/assets/books/book2_intermediate_front.svg',
    backCover: '/assets/books/book2_intermediate_back.svg'
  },
  {
    id: 'book-3',
    title: 'English for Communication Skill',
    author: 'By Maroof Mehmood',
    frontCover: '/assets/books/book3_communication_front.svg',
    backCover: '/assets/books/book3_communication_back.svg'
  },
  {
    id: 'book-4',
    title: 'IELTS for 45 Days',
    author: 'By Maroof Mehmood',
    frontCover: '/assets/books/book4_ielts_front.svg',
    backCover: '/assets/books/book4_ielts_back.svg'
  }
];

const Books = () => {
  return (
    <section className="books-section" id="books">
      <div className="container">
        {/* Section Header */}
        <div className="section-header text-center">
          <h2 className="section-title">
            E-Hub <span className="text-accent">Books Series</span>
          </h2>
          <p className="section-desc center-desc">
            Official book series authored by <strong>CEO Maroof Mehmood</strong>. Hover over any book to view the back cover.
          </p>
        </div>

        {/* Pure 3D Flip Cards Grid */}
        <div className="books-pure-flip-grid">
          {booksData.map((book) => (
            <div key={book.id} className="book-card-item">
              <div className="flip-card">
                <div className="flip-card-inner">
                  {/* Front Cover */}
                  <div className="flip-card-front">
                    <img 
                      src={book.frontCover} 
                      alt={`${book.title} Front Cover`} 
                      className="flip-img" 
                      loading="lazy"
                      decoding="async"
                    />
                  </div>

                  {/* Back Cover */}
                  <div className="flip-card-back">
                    <img 
                      src={book.backCover} 
                      alt={`${book.title} Back Cover`} 
                      className="flip-img" 
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                </div>
              </div>

              {/* Book Title & Author */}
              <div className="book-item-meta">
                <h3 className="book-item-title">{book.title}</h3>
                <span className="book-item-author">{book.author}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Books;

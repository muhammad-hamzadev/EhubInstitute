import React from 'react';

const booksData = [
  {
    id: 'book-1',
    title: 'English for Beginners',
    author: 'By Maroof Mehmood',
    frontCover: '/EhubInstitute/assets/books/book1_beginners_front.jpg',
    backCover: '/EhubInstitute/assets/books/book1_beginners_back.jpg'
  },
  {
    id: 'book-2',
    title: 'English for Intermediate',
    author: 'By Maroof Mehmood',
    frontCover: '/EhubInstitute/assets/books/book2_intermediate_front.jpg',
    backCover: '/EhubInstitute/assets/books/book2_intermediate_back.jpg'
  },
  {
    id: 'book-3',
    title: 'English for Communication Skill',
    author: 'By Maroof Mehmood',
    frontCover: '/EhubInstitute/assets/books/book3_communication_front.jpg',
    backCover: '/EhubInstitute/assets/books/book3_communication_back.jpg'
  },
  {
    id: 'book-4',
    title: 'IELTS for 45 Days',
    author: 'By Maroof Mehmood',
    frontCover: '/EhubInstitute/assets/books/book4_ielts_front.jpg',
    backCover: '/EhubInstitute/assets/books/book4_ielts_back.jpg'
  }
];

const Books = () => {
  return (
    <section className="books-section" id="books">
      <div className="container">
        {/* Section Header */}
        <div className="section-header text-center">
          <span className="section-tag">Publications</span>
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
                    />
                  </div>

                  {/* Back Cover */}
                  <div className="flip-card-back">
                    <img 
                      src={book.backCover} 
                      alt={`${book.title} Back Cover`} 
                      className="flip-img" 
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

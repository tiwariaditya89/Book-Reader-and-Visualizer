import React from 'react';
import ReactDOM from 'react-dom/client';
import Book from '../Book/Book';
import '../../styles/Search.css';
import Footer from '../Footer/Footer';

function Search() {
    return (
        <div className='search'>
            <div className="search-container">
                <div className="search-title">
                    <h1>04 Books Matched With Your Keyword</h1>
                </div>
                <div className="related-books">
                    <h1>Related books</h1>
                    <Book color='search' bookMargin='search-book'/>
                    <Book color='search' bookMargin='search-book'/>
                    <Book color='search' bookMargin='search-book'/>
                    <Book color='search' bookMargin='search-book'/>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Search;
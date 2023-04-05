import React from 'react';
import ReactDOM from 'react-dom/client';
import Book from '../Book/Book';
import '../../styles/Special.css';

function Special() {
    return (
        <div className="special">
            <h2 className='special-heading'><span className='choices'>Choices</span> for you</h2>
            <p className='special-para'>matches with your interest</p>
            <div className="book-section">
            <Book  />
            </div>
            
        </div>
    )
}

export default Special;

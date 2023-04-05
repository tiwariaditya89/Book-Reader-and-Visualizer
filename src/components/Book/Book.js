import React from 'react';
import ReactDOM from 'react-dom/client';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import '../../styles/Book.css';

function Book(props) {
    return (
        <div className={`book-container ${props.bookMargin}`}>
            <div className='book-image'></div>
            <div className={`book-details ${props.color}`}>
                <h2>Book Title</h2>
                <p className='book-subtitle'>subtitle of the book</p>
                <p>category | 230 pages</p>
                <p className="book-rating">4 <StarOutlineIcon sx={{fontSize: "16px"}}/></p>
            </div>
        </div>
    )
}

export default Book;
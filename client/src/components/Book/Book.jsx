import React from "react";
import ReactDOM from "react-dom/client";
import StarOutlineIcon from "@mui/icons-material/StarOutline";
import "./Book.css";


function Book(props) {
  return (
 
      <div className={`book-container ${props.bookMargin}`}>
        <div className='book-image'>
          <img src='https://images.pexels.com/photos/1557843/pexels-photo-1557843.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' />
        </div>
        
        <div className={`book-details ${props.color}`}>
          <h2>Book Title</h2>
          <p className='book-subtitle'>subtitle of the book</p>
          <p className="desc">category | 230 pages</p>
          <p className={`book-rating ${props.rating}`}>
            4 <StarOutlineIcon sx={{ fontSize: "16px" }} />
          </p>
        </div>
      </div>
  
  );
}

export default Book;

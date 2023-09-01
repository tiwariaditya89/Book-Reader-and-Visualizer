import React from "react";
import ReactDOM from "react-dom/client";
import StarOutlineIcon from "@mui/icons-material/StarOutline";
import "./Book.css";


function Book(props) {
  return (
 
      <div className={`book-container ${props.bookMargin}`}>
        <div className='book-image'>
          <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJNX6Zn8ZihPEzlKgQP31jx3n93OcV8Zsexg&usqp=CAU' />
        </div>
        
        <div className={`book-details ${props.color}`}>
          <h2>Shri Bhagawat gita</h2>
          <p className='book-subtitle'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit perspiciatis</p>
          <p className="desc">Methology | 230 pages</p>
          <p className={`book-rating ${props.rating}`}>
            4 <StarOutlineIcon sx={{ fontSize: "16px" }} />
          </p>
        </div>
      </div>
  
  );
}

export default Book;

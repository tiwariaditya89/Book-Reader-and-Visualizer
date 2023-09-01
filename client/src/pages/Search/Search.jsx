import React, { useState } from 'react';
import Book from '../../components/Book/Book';
import './Search.css';
import Footer from '../../components/Footer/Footer';
import TuneIcon from '@mui/icons-material/Tune';
import StarBorderIcon from '@mui/icons-material/StarBorder';

import { Modal, Box, Button, Checkbox} from '@mui/material';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    bgcolor: 'background.paper',
    boxShadow: 10,
    width: 700,
    pt: 2,
    px: 4,
    pb: 3,
};

function Search() {

    const [open, setOpen] = useState(false);
    
    const handleOpen = () => {
        setOpen(true);
    }

    const handleClose = () => {
        setOpen(false);
    }

    return (
        <div className='search'>
            <div className="search-container">
                <div className="search-title">
                    <h1>04 Books Matched With Your Keyword</h1>
                </div>
                <div className="related-books">
                    <h1>Related books</h1>
                    <a onClick={handleOpen} className='filter'><TuneIcon /> Filter</a>
                    <Modal open={open} onClose={handleClose} aria-labelledby="parent-modal-title" aria-describedby="parent-modal-description">
                        <Box sx={{...style}}>
                            <h2 className='filter-title'>Filter</h2>
                            <div className='filter-content'>
                                <div className="filter-category">
                                    <h2>Filter by category</h2>
                                    <div>
                                        <Checkbox />
                                        Adventure (32)
                                    </div>
                                    <div>
                                        <Checkbox />
                                        Adventure (32)
                                    </div>
                                    <div>
                                        <Checkbox />
                                        Adventure (32)
                                    </div>
                                    <div>
                                        <Checkbox />
                                        Adventure (32)
                                    </div>
                                </div>
                                <div className="filter-rating">
                                    <h2>Filter by rating</h2>
                                    <div className='filter-rating-content'>
                                        <Checkbox />
                                        <span>Above 4 <StarBorderIcon /></span>
                                    </div>
                                    <div className='filter-rating-content'>
                                        <Checkbox />
                                        <span>Above 3 <StarBorderIcon /></span>
                                    </div>
                                    <div className='filter-rating-content'>
                                        <Checkbox />
                                        <span>Above 2 <StarBorderIcon /></span>
                                    </div>
                                    <div className='filter-rating-content'>
                                        <Checkbox />
                                        <span>Above 1 <StarBorderIcon /></span>
                                    </div>
                                </div>
                            </div>
                            <div className="filter-footer">
                                <Button variant="contained" sx={{marginTop: '16px'}} onClick={handleClose}>Apply Filter</Button>
                            </div>
                        </Box>
                    </Modal>
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
import React, { useState } from 'react';
import {books as bookData} from "../constants/mockData";

import BookCard from './BookCard';
import SideCard from './SideCard';
import SearchBox from './SearchBox';

import styles from "./Books.module.css";

const Books = () => {
    const [books , setBooks] = useState(bookData);
    const [liked , setLiked] = useState([]);
    const [search , setSearch] = useState("");
    const hadleLikedList = (book , status) => {
        if (status) {
            const newLikedList = liked.filter(i => i.id !== book.id)
            setLiked(newLikedList);
        } else {
            setLiked(like => [...like , book])
        }
        console.log({book , status})
    }
    const searchHandler = () => {
        if(search) {
            const newBooks = bookData.filter(book => book.title.toLowerCase().includes(search));
            setBooks(newBooks);
        } else {
            setBooks(bookData);
        }
    }
    return (
        <>
            <SearchBox search={search} setSearch={setSearch} searchHandler={searchHandler}/>
            <div className={styles.container}>
                <div className={styles.card}>
                    {books.map(book => (
                        <BookCard key={book.id} data={book} hadleLikedList={hadleLikedList}/>
                        ))}    
                </div>   
                {!!liked.length && <div className={styles.favorite}>
                    <h4>Favorite</h4>
                    {liked.map(book => <SideCard key={book.id} data={book}/>)}
                    </div>}
            </div>
        </>
    );
};

export default Books;
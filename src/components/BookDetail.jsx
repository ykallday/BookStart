import { useParams } from 'react-router-dom'
import React, { useState, useEffect, useContext } from 'react'
import { SearchContext } from '../SearchContext'
import { Link } from 'react-router-dom'
import { image_URL } from '../global'

//any time a book is clicked it should go to a detail page for that book
//more info in it
//will need to use navigate and iD to create slugs within search results

export default function BookDetail(props){
    const { wishlist, setWishlist, list, setList } = useContext(SearchContext)
    const [book, setBook] = useState([])
    let { index } = useParams();
    console.log (index)
    console.log(list)
   


    const setFavorite=(book,e)=>{
        e.target.style.backgroundColor= "var(--md-sys-color-primary)"
        e.target.style.color= "var(--md-sys-color-on-primary)"
        e.target.innerText="Added";
        let alreadyFaved=false;
        for (let i = 0; i < wishlist.length ; i++){
            if (wishlist[i].key === book.key){
               alreadyFaved= true;   
            }
        }
        if (!alreadyFaved){
            let newWishlist = wishlist;
            newWishlist.unshift(book);
            setWishlist(newWishlist)}  
        }

    useEffect(()=>{
        let selectedBook = list[index];
        setBook(selectedBook)
    },  [])
    console.log(book)
    return(
        <div>
            <div className="backTo">
                <Link to="/SearchResultsV2" element="/SearchResultsV2">Back to Results</Link>
            </div>
            <div className="big-card">
                <h1 className="card-title">{book.title}</h1>
                <h3 className="author">{book.author_name}</h3>
                <h4 className="year">{book.first_publish_year}</h4>
                {book.cover_i  ?  (<img className="bookCover" src={`${image_URL}${book.cover_i}-M.jpg`} alt="No image available" />) : (<img className="bookCover" src={`${image_URL}${book.cover_id}-M.jpg`} alt="No image available" />)}
                <button id="learnMore"><a href={`https://www.openlibrary.org${book.key}`} target="_blank">Learn More</a></button>
                <button id="favorite" onClick={(event)=>{setFavorite(book,event)}}>Add to Wishlist</button>
             </div>
                
         </div>   
    )
}
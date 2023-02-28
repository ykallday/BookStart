import React, { useState, useEffect, useContext } from 'react'
import { SearchContext } from '../SearchContext'
import { Link, useParams } from 'react-router-dom'
import { image_URL } from '../global'
import SearchByGenre from './SearchByGenre'
import axios from 'axios'

//any time a book is clicked it should go to a detail page for that book
//more info in it
//will need to use navigate and iD to create slugs within search results

export default function GenreBookDetail(props){
    const { wishlist, setWishlist, list, setList } = useContext(SearchContext)
    let { index } = useParams();
    let {genre} = useParams();
    let navBack = `/Browse/`+ genre;
    const [details, setDetails] = useState([]);
    const [author, setAuthor] = useState([])
    let book = list[index]; //assigning book to selected book from previous page
    let authorKey = book.authors[0].key;
 
   
    

useEffect(()=>{
    const getDetails = async () => {
        const response = await axios.get(`https://openlibrary.org${book.key}.json`);
        setDetails(response.data); //accessing BOOKS api here, assigning to details
        //accessing BOOKS api here, assigning to details
        }
        getDetails();         
}, [])  

useEffect(()=>{
    const getAuthor = async () => {
        const response = await axios.get(`https://openlibrary.org${authorKey}.json`);
        setAuthor(response.data);
        //accessing authors api here, assigning to author
   
        }
        getAuthor();         
}, [])  

 
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

        
    return(
        
        <div>
            <div className="backTo">
                <Link to={navBack} element={SearchByGenre}>Back to Results</Link>
            </div>
            <div className="big-card">
                <h1 className="card-title">{book.title}</h1>
                <h2 className="authors">By: {author.name}</h2>
                 <h6 className="authorBio"> About: {author.bio} </h6>
                <h4 className="year">Published: {book.first_publish_year}</h4>
                <img className="bookCover" src={`${image_URL}${book.cover_id}-M.jpg`} alt="No image available" />
                <h5 className ="bookdetail">Summary: {details.description} </h5>
                <button id="learnMore"><a href={`https://www.openlibrary.org${book.key}`} target="_blank">Learn More</a></button>
                <button id="favorite" onClick={(event)=>{setFavorite(book,event)}}>Add to Wishlist</button>
            </div>
                
         </div>   
    )
}
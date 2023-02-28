import { useParams } from 'react-router-dom'
import React, { useState, useEffect, useContext } from 'react'
import { SearchContext } from '../SearchContext'
import { Link } from 'react-router-dom'
import { image_URL } from '../global'
import axios from 'axios'

//any time a book is clicked it should go to a detail page for that book
//more info in it
//will need to use navigate and iD to create slugs within search results

export default function BookDetail(props){
    const { wishlist, setWishlist, list, setList } = useContext(SearchContext)
    const [book, setBook] = useState([])
    const [details, setDetails] = useState([]);
    const [author, setAuthor] = useState([]);
    
  
    let { index } = useParams();
    console.log (index)
    console.log(list)
   

    useEffect(()=>{
        let selectedBook = list[index];
        setBook(selectedBook)

     },  [])

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
        const getDetails = async () => {
            const response = await axios.get(`https://openlibrary.org${book.key}.json`);
            setDetails(response.data); //accessing BOOKS api here, assigning to details
            //accessing BOOKS api here, assigning to details
            }
            getDetails();         
    }, [])  

    useEffect(()=>{
        const getAuthor = async () => {
            const response = await axios.get(`https://openlibrary.org/authors/${book.author_key}.json`);
            setAuthor(response.data);
            console.log(book.author_key)
            //accessing authors api here, assigning to author
       
            }
            getAuthor();         
    }, [])  

    console.log(book)


    return(
        <div>
            <div className="backTo">
                <Link to="/SearchResultsV2" element="/SearchResultsV2">Back to Results</Link>
            </div>
            <div className="big-card">
                <h1 className="card-title">{book.title}</h1>
                <h3 className="author">By: {book.author_name}</h3>
                <h6 className="authorBio"> About the Author: {author.bio} </h6>
                <h4 className="year">Published: {book.first_publish_year}</h4>
                {book.cover_i  ?  (<img className="bookCover" src={`${image_URL}${book.cover_i}-M.jpg`} alt="No image available" />) : (<img className="bookCover" src={`${image_URL}${book.cover_id}-M.jpg`} alt="No image available" />)}
                <h5 className ="bookdetail">Summary: {details.description} </h5>
                <button id="learnMore"><a href={`https://www.openlibrary.org${book.key}`} target="_blank">Learn More</a></button>
                <button id="favorite" onClick={(event)=>{setFavorite(book,event)}}>Add to Wishlist</button>
             </div>
                
         </div>   
    )
}
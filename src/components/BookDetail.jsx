import { useParams, useNavigate } from 'react-router-dom'
import React, { useState, useEffect, useContext } from 'react'
import { SearchContext } from '../SearchContext'
import { Link } from 'react-router-dom'
import { image_URL } from '../global'
import axios from 'axios'

//any time a book is clicked it should go to a detail page for that book
//more info in it
//will need to use navigate and iD to create slugs within search results

export default function BookDetail(props){
    const { wishlist, setWishlist, list, setList, search, setSearch } = useContext(SearchContext)
    // const [book, setBook] = useState([])
    const [details, setDetails] = useState([]);
    const [author, setAuthor] = useState([]);
    // const [rating, setRating] = useState("");
      
    let { index } = useParams();
    let book = list[index]; //assigning book to selected book from previous page
    let bookKey = book.key
    let authorKey = book.author_key[0];
    let authorList=book.author_name;
    let navigate = useNavigate();


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
            const response = await axios.get(`https://openlibrary.org${bookKey}.json`);
            setDetails(response.data); //accessing BOOKS api here, assigning to details
            //accessing BOOKS api here, assigning to details
            }
            getDetails();         
    }, [])  

    useEffect(()=>{
        const getAuthor = async () => {
            const response = await axios.get(`https://openlibrary.org/authors/${authorKey}.json`);
            setAuthor(response.data);
            //accessing authors api here, assigning to author
       
            }
            getAuthor(); 
        
    }, [])  

    // useEffect(()=>{
    //     const getRating = async () => {
    //         const response = await axios.get(`https://openlibrary.org${bookKey}/ratings.json`);
    //         setRating(response.results.data); //accessing BOOKS api here, assigning to details
    //         //accessing BOOKS api here, assigning to details
    //         }
    //         getRating() ;         console.log(rating)
    // }, [])  


    if (typeof(book.authors)!="string" ){
        if (book.author_name.length > 1){
            for (let i = 0; i <book.author_name.length; i++){
                authorList += `${book.author_name[i]}, `
            }    }
    }else {
        authorList = book.author_name;
    }
   
    function moreFromAuthor(e){
        search.query = 'q=' + e.target.value;
        navigate('/SearchResultsV2');
    }
    

    return(
        <div>
            <div className="backTo">
                <Link to="/SearchResultsV2" element="/SearchResultsV2">Back to Results</Link>
            </div>
            <div className="big-card">
                <div className="leftside">
                    <h1 className="card-title">{book.title}</h1>
                    <h3 className="author">By: {authorList}</h3>
                    {book.cover_i  ?  (<img className="bookCover" src={`${image_URL}${book.cover_i}-M.jpg`} alt="No image available" />) : (<img className="bookCover" src={`${image_URL}${book.cover_id}-M.jpg`} alt="No image available" />)}
                    <h4> About the Author:</h4>
                    <div className="authorBio">
                        <h5> {author.bio && typeof(author.bio)=="string" ? author.bio : "No author bio available."} </h5>
                        </div>
                        <button className="backTo" id="toAuthor" value={authorKey} onClick={moreFromAuthor}>More books by this author</button>
                    
                    </div>
             
                <div className = "rightside">
                    <h3>About the Book:</h3>
                    <h4 className="year">Published: {book.first_publish_year}</h4>
                    <h4>Summary: </h4>
                    <h5 className="bookdetail"> {typeof(details.description)=="string" ? details.description : "No summary available."} </h5>
                    {/* <h4>Average Reader Rating:</h4>
                    <h5> {rating && typeof(rating)=="Number" ? rating.toFixed(2) : "No rating available."} </h5> */}
                    <button id="learnMore"><a href={`https://www.openlibrary.org${bookKey}`} target="_blank">Learn More</a></button>
                    <button id="favorite" onClick={(event)=>{setFavorite(book,event)}}>Add to Wishlist</button>
                </div>
                
               
               
              
             </div>
                
         </div>   
    )
}
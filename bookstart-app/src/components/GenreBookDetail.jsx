import React, { useState, useEffect, useContext } from 'react'
import { SearchContext } from '../SearchContext'
import { Link, useParams, useNavigate } from 'react-router-dom'
import { image_URL } from '../global'
import axios from 'axios'


//any time a book is clicked it should go to a detail page for that book
//more info in it
//will need to use navigate and iD to create slugs within search results

export default function GenreBookDetail(props) {
    const { search, setSearch, wishlist, setWishlist, list, setList } = useContext(SearchContext)
    let { index } = useParams();
    let { genre } = useParams();
    let navBack = `/Browse/` + genre;
    let navigate = useNavigate();
    const [details, setDetails] = useState([]);
    const [author, setAuthor] = useState([])
    let book = list[index]; //assigning book to selected book from previous page
    let authorKey = book.authors[0].key;
    if (!authorKey){
        authorKey = "No author information."
    }
    let authorList = ""

    useEffect(() => {
        const getDetails = async () => {
            const response = await axios.get(`https://openlibrary.org${book.key}.json`);
            setDetails(response.data);
            //accessing BOOKS endpoint here, assigning to details
        }
        getDetails();
    }, [])

    useEffect(() => {
        const getAuthor = async () => {
            const response = await axios.get(`https://openlibrary.org${authorKey}.json`);
            setAuthor(response.data);
            //accessing authors endpoint here, assigning to author

        }
        getAuthor();  //pulls info about the first author  
    }, [])

    if (!book.authors){
        authorList = "No authors available"

    }else if (typeof (book.authors) != "string") { //multiple authors
        if (book.authors.length > 1) {
            for (let i = 0; i < book.authors.length; i++) {
                authorList += `${book.authors[i].name}, `
            }
        } else {
            authorList = book.authors[0].name;
        }
    } else {
        authorList = book.authors;
    }


    const setFavorite = (book, e) => {
        e.target.style.backgroundColor = "var(--md-sys-color-primary)"
        e.target.style.color = "var(--md-sys-color-on-primary)"
        e.target.innerText = "Added";
        let alreadyFaved = false;
        for (let i = 0; i < wishlist.length; i++) {
            if (wishlist[i].key === book.key) {
                alreadyFaved = true;
            }
        }
        if (!alreadyFaved) {
            let newWishlist = wishlist;
            newWishlist.unshift(book);
            setWishlist(newWishlist)
        }
    }
    function moreFromAuthor(e) {
        search.query = 'q=' + e.target.value;
        navigate('/SearchResultsV2');
    }


    return (
        <div>
            <div className="backTo">
                <Link to={navBack}>Back to Results</Link>
            </div>
            <div className="big-card">
                <div className="leftside">
                    <h1 className="card-title">{book.title}</h1>
                    <h2 className="authors">By: {authorList}</h2>
                    {book.cover_i ? (<img className="bookCover" src={`${image_URL}${book.cover_i}-M.jpg`} alt="No image available" />) : (<img className="bookCover" src={`${image_URL}${book.cover_id}-M.jpg`} alt="No image available" />)}
                    <h4> About the Author:</h4>
                    <div className="authorBio">
                        <h5> {author.bio && typeof(author.bio)=="string" ? author.bio : "No author bio available."} </h5>
                    </div>
                    <button className="backTo" id="toAuthor" value={authorKey} onClick={moreFromAuthor}>More books by this author</button>
                </div>
                <div className="rightside">
                    <h4 className="year">Published: {book.first_publish_year}</h4>
                    <h4>Summary:</h4>
                    <h5 className="bookdetail"> {typeof(details.description)=="string" ? details.description : "No summary available."} </h5>
                    <button id="learnMore"><a href={`https://www.openlibrary.org${book.key}`} target="_blank">Learn More</a></button>
                    <button id="favorite" onClick={(event) => { setFavorite(book, event) }}>Add to Wishlist</button>
                </div>
            </div>

        </div>
    )
}
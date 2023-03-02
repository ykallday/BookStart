//make state to set data in
//set up use effect to control component lifecyle
//organize API links/url
//set our data in state and log it
//render our data
//set up guard operator

import { useState, useEffect } from 'react'
import { BASE_URL, image_URL } from '../global'
import axios from 'axios'
import { SearchContext } from '../SearchContext'
import React, { useContext } from 'react'
import { Link, useNavigate, Route, Routes } from 'react-router-dom'
import LoadingGif from './images/Animated book.gif'






export default function SearchResultsV2() {

    const { search, setSearch, wishlist, setWishlist, list, setList } = useContext(SearchContext)
    const navigate = useNavigate();
    // let authorList = ""
    let input = search.query;

    
    const showBook = (index)=>{
      navigate(`${index}`)
    }

    useEffect(() => {
        const getList = async () => {
            setList(null)
            const response = await axios.get(`${BASE_URL}${input}&limit=21`);
            setList(Array.from(response.data.docs));
                
        }
        getList();
        console.log(list)
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
   
        
      




    //check through favorites array - if clicked item's assigned
    

    //then I want to map through these results, adding certain information to cards.

    if (!list){
        return(
            <div>
                <h1 className="loadingText">loading</h1>
                <img src={LoadingGif}/>
            </div>
        )
    }
    else if(list.length===0){
        return (
    
            <div>
                <h1> We don't seem to have any results for your request of "{search.query}." Please try again! </h1>
                <div className="backTo"><Link to="/SearchBar" element="/SearchBar" >Back to Search</Link></div>
    
            </div>
        
        )}
    else {
          return (
            <div className = "grid-container">
                <div className="backTo">
                    <Link to="/SearchBar" element="/SearchBar">Back to Search</Link>
                    <br></br><h3 className="resultsTextForSearch">Your search for "{search.query}" returned:</h3>
                </div>

                <div className="grid">
                    
                    {list.map((book,index) => (
                        <div>
                            <div key={book.key} className="card">
                              <h3 className="card-title" onClick={() => showBook(index)}>{book.title}</h3>
                              {/* {typeof(book.author_name) != "string" && book.author_name.length > 1 ? (book.author_name.forEach(author=>authorList += `${book.author_name},  `)) : (authorList = book.author_name)}
                              <h4 className="author">By: {authorList} </h4> */}
                              <img className="bookCover" src={`${image_URL}${book.cover_i}-M.jpg`} alt="No image available" onClick={() => showBook(index)} />
                              <button id="favorite" onClick={(event)=>{setFavorite(book,event)}}>Add to Wishlist</button>
                            </div>
                       
                        </div>
                    ))}
                </div>   
            </div>

        )} }
  

    

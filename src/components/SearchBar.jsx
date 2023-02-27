//need to create a form for search bar
//search bar content should be available everywhere, I think.
//bring in the context, set the variables to them. Update them


import { SearchContext } from '../SearchContext'
import React, { useContext } from 'react'
import { useNavigate } from "react-router-dom";


export default function SearchBar(){
    const {search, setSearch} = useContext(SearchContext)
    const navigate = useNavigate();
     
    const handleChange = (event) =>{
        event.preventDefault();
        setSearch({...search, [event.target.id]:event.target.value, formContent:event.target.value}) 
        }

    const handleSubmit = (event)=>{
        event.preventDefault();
        setSearch({...search, formContent:""})
        navigate("/SearchResultsV2/");
    }
    return(
        <div className="formDiv">
            <h2>Search now.</h2>
             <form className="form" onSubmit={handleSubmit}>
                <label htmlFor = "SearchField"></label>
                <input type="text" placeholder = "" id= "query" value = {search.formContent} onChange={handleChange}></input>
            <input type = "submit" id="submit" value="Search"></input>
        </form>
        </div>
    )
}

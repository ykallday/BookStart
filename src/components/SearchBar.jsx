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
        setSearch({...search, [event.target.id]:event.target.value, formContent:search.query.value}) 
        }

    const handleSubmit = (event)=>{
        event.preventDefault();
        setSearch({...search, formContent:""})
        if (search.topic==="genre"){
            navigate(`/Browse/${search.query}`);
            console.log(search.topic)
        }else{
            navigate("/SearchResultsV2/");
            console.log("else" + search.topic)
        }
        
    }
    return(
        <div className="formDiv">
            <h2>Search now.</h2>
             <form className="form" onSubmit={handleSubmit}>
                <label htmlFor = "SearchField"></label>
                <input type="text" placeholder="🔍" id= "query" value = {search.formContent} onChange={handleChange}></input>
                <label htmlFor="topic"></label>
                <select id="topic" name="topics" onChange={handleChange} required>
                    <option id="topic" value="">Search by:</option>
                    <option id="topic" value="basic">Title/Author</option>
                    <option id="topic" value="genre">Subject/Genre</option>
                </select>

            <input type = "submit" id="submit" value="Search"></input>
        </form>
        </div>
    )
}

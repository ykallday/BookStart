import { useContext } from 'react'
import { SearchContext } from '../SearchContext'
import { useNavigate } from 'react-router-dom'
import SearchBar from './SearchBar'


export default function Browse(){
    //make state to set data in
    //set up use effect to control component lifecyle
    //organize API links/url
    //make the darned API call
    //set our data in state and log it
    //render our data


    //create a search by Genre, search by Topic
    //only give a few options - each will be a clickable div that triggers a search in the subjects or genre api
    //each will also include favorite button so will need to import that wishlist context
   const navigate = useNavigate()
   const {search, setSearch} = useContext(SearchContext)
   
   const navToGenre =(e) => {
      navigate(`/Browse/${e.target.id}`)  
   }
   
   return(
     <div>
        <div id="smallSearch">
         <SearchBar/>
        </div>
        <div className="Browse-Genre-Container">
           <div><button className= "Browse-Genres" id="fiction" onClick={navToGenre}>Fiction</button></div>
           <div><button className= "Browse-Genres" id="classics" onClick={navToGenre}>Classics</button></div>
           <div><button className= "Browse-Genres" id="love" onClick={navToGenre}>Love</button></div>
           <div><button className= "Browse-Genres" id="romance" onClick={navToGenre}>Romance</button></div>
           <div><button className= "Browse-Genres" id="science_fantasy" onClick={navToGenre}>Science Fiction</button></div>
           <div><button className= "Browse-Genres" id="mystery" onClick={navToGenre}>Mystery</button></div>
           <div><button className= "Browse-Genres" id="horror" onClick={navToGenre}>Horror</button></div>
           <div><button className= "Browse-Genres" id="thriller" onClick={navToGenre}>Thriller</button></div>
           <div><button className= "Browse-Genres" id="memoir" onClick={navToGenre}>Memoir</button></div>
           <div><button className= "Browse-Genres" id="non_fiction" onClick={navToGenre}>Non-Fiction</button></div>
           <div><button className= "Browse-Genres" id="historical_fiction" onClick={navToGenre}>Historical Fiction</button></div>
           <div><button className= "Browse-Genres" id="childrens_literature" onClick={navToGenre}>Children's Lit</button></div>
         </div>
     </div>
   )
}
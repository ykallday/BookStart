import {Link} from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

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
   
   const navToGenre =(e) => {
      navigate(`/Browse/${e.target.id}`)
   }
   
   return(
     <div>
        <div className="Browse-Genre-Container">
           <div><button className= "Browse-Genres" id="fiction" onClick={navToGenre}>Fiction</button></div>
           <div><button className= "Browse-Genres" id="love" onClick={navToGenre}>Love</button></div>
           <div><button className= "Browse-Genres" id="mystery" onClick={navToGenre}>Mystery</button></div>
           <div><button className= "Browse-Genres" id="horror" onClick={navToGenre}>Horror</button></div>
           <div><button className= "Browse-Genres" id="thriller" onClick={navToGenre}>Thriller</button></div>
           <div><button className= "Browse-Genres" id="autobiography" onClick={navToGenre}>Autobiography</button></div>
           <div><button className= "Browse-Genres" id="history" onClick={navToGenre}>History</button></div>
           <div><button className= "Browse-Genres" id="childrens_literature" onClick={navToGenre}>Children's Lit</button></div>
         </div>
     </div>
   )
}
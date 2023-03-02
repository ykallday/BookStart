import './App.css'
import Header from './components/Header'
import Main from './components/Main'
import { useState } from 'react'
import { SearchContext } from './SearchContext'

//create search context to capture search content

function App() {

  const [search, setSearch] = useState ({
    topic:'', query:'', formContent:''
  })
  
  const [wishlist, setWishlist] = useState ([])
  const [list, setList] = useState([]);
  
 
  return (
    <div className="App">
      <SearchContext.Provider value = {{search, setSearch, wishlist, setWishlist, list, setList}}> 
        <div className ="Header-Container">
          <Header/>
        </div>
        <div className ="Main-Container"> 
          <Main/>
        </div>
      </SearchContext.Provider>
   
    </div>
    
    )}
   

export default App;



// Create a book finder app utilizng the open library  API
// Each page needs a navigation bar at the top - each item on the navigation bar should have a Link that 
//routes to  that specific page within the app using slugs (links,routes)
//MVP:
//Home, search, wishlist
//the home page should have a search bar 
//Search should display cards that feature a selection of books that meet the criteria, with the key
//information about that book, in a grid format
//option to click a favorite button to add to favorites list --> this will need to update favorite
//boolean variable, as well as styling, and those need to be pulled into wish list either as a compiled
//array or as context???
//when clicked on, a book will open a detail page (using use effect and states like in the star wars lab) - 
//WishList shoudl appear as a grid of favorited items

//stretch goals:
//include a search for 'books like' which pulls in the details for a specific book
//include methods of export for wishlist
//create a reference page for free, educational online tools to get or check out books
//create a book club function which allows you to place books in a calendar month/export in readable pdf format


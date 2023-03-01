import {Route, Routes} from 'react-router-dom'
import Home from './Home'
import SearchBar from './SearchBar'  
import Wishlist from './Wishlist'
import SearchResultsV2 from './SearchResultsV2'
import Browse from  './Browse'
import SearchByGenre from './SearchByGenre'
import BookDetail from './BookDetail'
import GenreBookDetail from './GenreBookDetail'




export default function Main(){

    return(
        <div className="main">
            <Routes>
                <Route path ="/" element = {<Home/>}/>
                <Route path = "/SearchBar" element = {<SearchBar/>}/>
                <Route path = "/Browse" element = {<Browse/>}/>
                <Route path = "/WishList" element= {<Wishlist/>}/>
                <Route path= "/SearchResultsV2/" element={<SearchResultsV2/>}/>
                <Route path= "/SearchResultsV2/:index" element={<BookDetail/>}/>
                <Route path = "/Browse/:genre" element={<SearchByGenre/>}/>
                <Route path = "/Browse/:genre/:index" element={<GenreBookDetail/>}/>
                
               

            </Routes> 
    
        </div>
    )
}
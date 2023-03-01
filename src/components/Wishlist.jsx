import { SearchContext } from '../SearchContext'
import React, { useContext } from 'react'
import { image_URL } from '../global'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

//pull items from the 'wishlist' into here, in grid format

export default function Wishlist(){
    let navigate= useNavigate();
    const { wishlist, setWishlist, list, setList } = useContext(SearchContext);
    // setList(wishlist)

    const showBook = (index)=>{
        navigate(`/SearchResultsV2/${index}`)
      }
    //if the key for the wishlist item (assigned in the map below and includes )
    const unFavorite =(book,e)=>{
        let updatedList=[]
        for (let i = 0; i < wishlist.length ; i++){
            if (wishlist[i].key === book.key){
                let removedItem = wishlist.splice(i,1);
                let removedItemIndex = wishlist.indexOf(removedItem)
                for (let i = 0; i < wishlist.length; i++){
                    if (i != removedItemIndex){
                        updatedList.push(wishlist[i])
                    }

                    }
                }}
                
                setWishlist(updatedList);
                
            }
        
    


    return(
        <div>
            <h1>Your Wishlist:</h1>
            <div><h5 class="backTo"><Link to ="/SearchBar" element="/SearchBar">Search</Link> or <Link to ="/Browse" element="/Browse">Browse</Link> for more!</h5></div>
            {wishlist.length==0 ? <h2>You don't have anything in your wishlist</h2> : null}
            <div className="grid">
            {wishlist.map((book,index) => (
                    
                    <div key={book.title} className="card wishCard">
                              <h3 className="card-title" onClick={() => showBook(index)}>{book.title}</h3>
                              {book.cover_i  ?  (<img className="bookCover" src={`${image_URL}${book.cover_i}-M.jpg`} alt="No image available" onClick={() => showBook(index)}/>) : (<img className="bookCover" src={`${image_URL}${book.cover_id}-M.jpg`} alt="No image available" onClick={() => showBook(index)} />)}
                              <div><button id="favorite" onClick={(e)=>{unFavorite(book,e)}}>Remove from Wishlist</button></div>
                            </div>

                        
            ))}
                </div> 
        </div>

    )
}
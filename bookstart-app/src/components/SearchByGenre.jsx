
import axios from 'axios'
import { useParams, Link, useNavigate } from 'react-router-dom'
import React, { useEffect, useContext } from 'react'
import { SearchContext } from '../SearchContext'
import { image_URL } from '../global'
import LoadingGif from './images/Animated book.gif'






//must have a list of books for the genre, with favorite buttons.


export default function SearchByGenre(props) {
    const navigate = useNavigate();
    const { wishlist, setWishlist, list, setList, search, setSearch } = useContext(SearchContext);
    let { genre } = useParams();
    console.log(list)


    useEffect(() => {
        const getList = async () => {
            setList(null);
            const response = await axios.get(`https://openlibrary.org/subjects/${genre}.json?&limit=21`);
            console.log(response.data.works)
            setList(response.data.works);
        }
        getList();
    }, [])


    const showBook = (index) => {
        navigate(`${index}`)
    }

    //add the set favorite function - changes button when clicked, assigns value to true so no duplicates
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

    if (!list) {
        return (
            <div>
                <h1 className="loadingText">loading</h1>
                <img src={LoadingGif} />
            </div>
        )
    } else if (list.length === 0) {
        return (
            <div>
                <h1> We don't seem to have any results for your request of "{genre}." Please try again! </h1>
                <div className="backTo"><Link to="/Browse" element="/Browse" >Back to Browse</Link></div>
            </div>
        )
    } else {
        return (
            <div>
                <div className="backTo">
                    <Link to="/Browse" element="/Browse">Back to Browse</Link>
                </div>
                <div className="grid">
                    {list.map((book, index) => (
                        <div>
                            <div key={index} className="card" >
                                <h3 className="card-title">{book.title}</h3>
                                <img className="bookCover" src={`${image_URL}${book.cover_id}-M.jpg`} alt="No image available" onClick={() => showBook(index)} />
                                <button id="favorite" onClick={(event) => { setFavorite(book, event) }}>Add to Wishlist</button>
                            </div>
                        </div>
                    ))}

                </div>
            </div>

        )
    }

}
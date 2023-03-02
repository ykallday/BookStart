import {Link} from 'react-router-dom'

export default function Nav(){
    return(
        <div className = "Main-Nav">
            <Link id="Home" to ="/">Home</Link>
            <Link id="Search" to ="/SearchBar">Search</Link>
            <Link id="Browse" to ="/Browse">Browse</Link>
            <Link id="Wish" to ="/Wishlist">Wishlist</Link>
        </div>
    )
}

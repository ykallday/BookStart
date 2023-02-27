import {Link} from 'react-router-dom'

export default function Nav(){
    return(
        <div className = "Main-Nav">
            <Link to ="/">Home</Link>
            <Link to ="/SearchBar">Search</Link>
            <Link to ="/Browse">Browse</Link>
            <Link to ="/Wishlist">Wishlist</Link>
        </div>
    )
}

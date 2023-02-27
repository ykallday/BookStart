import SearchBar from './SearchBar'



export default function Home(){
    return(
        <div>
            <div className="container-title">
                <h1>Find the next book you won't want to put down.</h1>
            </div>
            <div id="searchHome">
                <SearchBar/>
            </div>
        </div>
    )
}
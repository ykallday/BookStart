
import { image_URL } from '../global'
export default function BigCard(props){

    return(
        
        <div>
            <div className="big-card">
                <h1 className="card-title">{props.book.title}</h1>
                <h2 className="authors">Authors: {props.author.name}</h2>
                 <h6 className="authorBio"> About: {props.author.bio} </h6>
                <h4 className="year">Published: {props.book.first_publish_year}</h4>
                <img className="bookCover" src={`${image_URL}${props.book.cover_id}-M.jpg`} alt="No image available" />
                <h5 className ="bookdetail">Summary: {props.details.description} </h5>
                <button id="learnMore"><a href={`https://www.openlibrary.org${props.book.key}`} target="_blank">Learn More</a></button>
            </div>
                
         </div>   
    )
}

import Nav from "./Nav";



export default function Header(){
    return(
        <div>
            <div className = "header-title">
               <h1>BookStart</h1>
            </div>
            <div className = "NavContainer">
                <Nav/>
            </div>
        </div>
    )
}
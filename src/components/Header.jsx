import Nav from "./Nav";
import logo from '../logo.png'


export default function Header(){
    return(
        <div>
            <div className = "header-title">
               <img src={logo} width="50%"/>
            </div>
            <div className = "NavContainer">
                <Nav/>
            </div>
        </div>
    )
}
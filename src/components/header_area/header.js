import React ,{Component} from "react";
import  {
    Link
} from 'react-router-dom';
class Headeryo extends Component{
    render(){
        let headerstyles={backgroundColor:'Coral'}
        return (
           <header style={headerstyles} >
           <div>LOGO</div>
           <ul>
           <li><Link to='/home'>HOME</Link>
           </li>
           <li><Link to='/about'>About</Link></li>
           <li><Link to='/dummy'>dummy</Link></li>
           </ul>
           </header>
        )
    }
    
}
export default Headeryo

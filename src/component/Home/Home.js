import React,{Component} from 'react'
import Carousel from './Carousel'
import Bebold from './Bebold'
import Popup from './Popup'

class Home extends Component{
    constructor(props) {
        super(props);
}
render() {
    return ( 
        
        <div>
        <Carousel/>
           <Bebold/>
           <Popup/>
        </div>
        
   )
}
      }
export default Home
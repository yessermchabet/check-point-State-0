import React from 'react';
import './App.css';
import Person from './Component/Person';
import { Button } from 'react-bootstrap';

class App extends React.Component{
  constructor(){
    super() 
    this.state= {
      show : false
    }
  }

render(){
  return(
    <div style={{display:'flex' , justifyContent:'center', flexDirection : 'column', alignItems :'center', rowGap :"30px"}}>  
      <Button variant="success" onClick={()=> this.setState({show : !this.state.show})}>show</Button>
      
      {
        this.state.show && <Person/> 
      }
    </div>
  )
}
}
export default App;

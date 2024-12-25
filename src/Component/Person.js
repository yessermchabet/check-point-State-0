import React from "react"
import { Card } from "react-bootstrap";

class Person extends React.Component{
    constructor(){
        super()
        this.state = {
            Person : {
                FullName : "Cristiano Ronaldo",
                Age : 39,
                imgSrc : "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Cristiano_Ronaldo_playing_for_Al_Nassr_FC_against_Persepolis%2C_September_2023_%28cropped%29.jpg/800px-Cristiano_Ronaldo_playing_for_Al_Nassr_FC_against_Persepolis%2C_September_2023_%28cropped%29.jpg",
                profession : "professional footballer"

            },
            count : 0
        }
    }
    componentDidMount(){
        setInterval(() => {
          this.state.count <10 &&  this.setState({count : this.state.count +1})
        }, 1000);
    }

    render(){
        return(

          <div>
              <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={this.state.Person.imgSrc} />
            <Card.Body>
                <Card.Title>{this.state.Person.FullName}</Card.Title>
                <Card.Text>
                {this.state.Person.profession}
                <br/>
                {this.state.Person.Age}
                </Card.Text>
            </Card.Body>
            </Card>
          </div>
        )
    }
}

export default Person
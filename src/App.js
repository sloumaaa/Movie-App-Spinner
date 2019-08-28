import React, { Component } from 'react';
import "./App.css"
import Cardfilm from './Cardfilm.js';
import HOC from "./HOC.js";


class App extends Component {
  constructor(props) {
    super(props)
    this.state = ({
      movielist: [{rate:3 , name: "ANGEL HAS FALLEN", img: "https://resizing.flixster.com/bwkGy3wVXML6meWZaP_sjANLrNY=/fit-in/200x296.2962962962963/v1.bTsxMzEzOTAzNjtqOzE4MTk3OzEyMDA7MTk0NDsyODgw", date: 4},
      {rate:5 ,name: "GOOD BOYS", img: "https://resizing.flixster.com/A1XHwB5YHFbAbiezgxIWH8h2BHI=/fit-in/200x296.2962962962963/v1.bTsxMzE2MTUxMjtqOzE4MTk3OzEyMDA7MTAwMDsxNDY0", date: 5},
      {rate:4 ,name: "FAST & FURIOUS", img: "https://resizing.flixster.com/f4-2RrJKKcJWSQJI5oseb8H76fk=/fit-in/200x296.2962962962963/v1.bTsxMzExNTg5NTtqOzE4MTk2OzEyMDA7MzE1ODs1MDAw", date: 3}
      ],
      name: "",
      img: "",
      date: "",
      rate:"",
      inputname:"",
      starSearch:5
    })
    this.ajout = this.ajout.bind(this);
    this.changerate = this.changerate.bind(this);
    this.changename = this.changename.bind(this);
    this.changeimg = this.changeimg.bind(this);
    this.changedate = this.changedate.bind(this);
    this.changeinput = this.changeinput.bind(this);
  }

  ajout() {
    let x = {rate:this.state.rate, name: this.state.name, img: this.state.img, date: this.state.date}
    this.setState({
     movielist: [...this.state.movielist, x]
    })
  }

  changerate(event) {
    this.setState({
      rate: event.target.value
    })
  }

  changename(event) {
    this.setState({
      name: event.target.value
    })
  }

  changeimg(event) {
    this.setState({
      img: event.target.value
    })
  }

  changedate(event) {
    this.setState({
      date: event.target.value
    })
  }

  changeinput(event){
    this.setState({
      inputname: event.target.value
    })
  }

  star=(e)=>{
    this.setState({starSearch:e})
      }

  render() {
    return (
      <div>
        <div style={{display:'flex',justifyContent:'space-around',alignItems:'center',border:'solid'}}>
          <div>
            <input type='text' placeholder='Type movie name to search' onChange={this.changeinput.bind(this)}/>
          </div>
          <div style={{display: 'flex',alignItems: 'center'}}>
            <p style={{marginRight: '5px'}}>Minimum Rating</p>
          <span onClick={()=>this.star(1)}>☆</span>
          <span onClick={()=>this.star(2)}>☆</span>
          <span onClick={()=>this.star(3)}>☆</span>
          <span onClick={()=>this.star(4)}>☆</span>
          <span onClick={()=>this.star(5)}>☆</span>
          </div>
        </div>
        <div style={{marginTop:'10px',display:'flex',justifyContent:'center'}}>
          <input type="text" placeholder="rate" onChange={this.changerate.bind(this)} />
          <input type="text" placeholder="name" onChange={this.changename.bind(this)} />
          <input type="text" placeholder="img" onChange={this.changeimg.bind(this)} />
          <input type="text" placeholder="date" onChange={this.changedate.bind(this)} />
        </div>
        <Cardfilm movies={this.state.movielist} inputvalue={this.state.inputname} rating={this.state.starSearch}/>
        <button onClick={this.ajout} style={{ border: 'solid', width: '323px', height: '260px', marginTop: '10px', fontSize: '90px', marginLeft: '45px',backgroundColor:'white' }}>+</button>
      </div>
    )
  }
}

export default HOC(App);



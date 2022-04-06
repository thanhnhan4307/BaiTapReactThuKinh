/* eslint-disable no-undef */
/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from "react";
import dataGlasses from  '../Data/dataGlasses.json'

export default class ThuKinh extends Component {

  renderGlassess = () =>{
    return dataGlasses.map((Kinh,index)=>{
      return <img src={Kinh.url} key={index} style={{width:'120px'}} className="p-2" onClick={()=>{
        this.changeState(Kinh);
      }}/>
    })
  }
  state = {
       Glassess:{ 
        "id": 2,
        "price": 50,
        "name": "GUCCI G8759H",
        "url": "./Img/v2.png",
        "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
       }
  }
  changeState = (newItem) =>{
      this.setState({
        Glassess:newItem 
      })
  }
  render() {
    const  cssGlasses = {
        width:'130px',
        top:'76px',
        right:'352px',
        opacity:'0.7',
    }
    const cssDetails = {    
        width:'250px',
        height: '111px',
        top:'194px',
        left:'1px',
        backgroundColor:'rgba(255,127,0,.5)',
        textAlign:'left',
    }
    return (
      <div>
          
        <div className="text-center bg-secondary text-white p-5">
          <h3>TRY GLASSES APP ONLINE</h3>
        </div>
       <div className="container">
       <div className="row mt-5 ">
          <div className="col-6">
            <div className="position-relative">
                <img src="./Img/model.jpg" width={250}   className="position-absolute"></img>
                <img src={this.state.Glassess.url}  className="position-absolute" style={cssGlasses}></img>
                <div className="position-absolute" style={cssDetails}>
                    <p>{this.state.Glassess.name}</p>
                    <p>{this.state.Glassess.desc}</p>
                </div>
            </div>
          </div>
          <div className="col-6">
            <img src="./Img/model.jpg" width={250}></img>
          </div>
        </div>
       </div>
        <div className="container bg-light d-flex mt-5 p-5 mb-5 ">
          {this.renderGlassess()}
        </div>
      </div>
    );
  }
}
import React, { Component } from 'react';
import gdata from '../../data/data.json';

class GameGallery extends Component {
  constructor() {
    super();

    this.state = {
      search: null
    };
  }

  searchSpace=(event)=>{
    let keyword = event.target.value;
    this.setState({search:keyword})
  }

  render() {
    const items = gdata.gameData.filter((data) => {
      if(this.state.search == null) 
        return data
      
      else if(data.name.toLowerCase().includes(this.state.search.toLowerCase()) )
        return data     
      
    }).map((image, i) => {
      return (
          <div key={i}>
            <img src={`${image.imagepath}`} alt={image.name} key={i}  />
          </div>      
      )      
    })

    return (
      <div>
         <div className="logo">SLOTS</div>  
        <div className="navigation">
          <ul>        
            <li className="all"><a href="#"> <span className="icon-all"></span>ALL</a></li>
            <li><a href="#"><span className="icon-new"></span>NEW</a></li>
            <li><a href="#"><span className="icon-top"></span>TOP</a></li>
          </ul> 
          <div className="search">
            <span className="icon-search"></span>
            <input type="text" className="search-input" onChange={(e)=>this.searchSpace(e)} placeholder="Search..."
              onFocus={(e) => e.target.placeholder = ''} 
              onBlur={(e) => e.target.placeholder = 'Search...'} />
          </div>
        </div>
       
        <div className="wrapper">   
        {items}
        </div>
      </div>
    )  
  } 
}

export default GameGallery;
import React, {Component} from 'react';

 class Location extends Component {
  getInitialState(){
   return {
    locations = ['New York City', 'Seattle', 'Los Angeles', 'San Francisco']
    };
  }
  handleReverse(){
    this.setState({ locations: this.state.locations.reverse()});
  }

  render(){

  }


};


export default Location;




import React, {Component} from 'react';

 class Location extends Component {
  locations = ['New York City', 'Seattle', 'Los Angeles', 'San Francisco'];

  render() {
    return (<div className ="location-component">

          <Cities locations={ this.locations } />
          </div>
          );

  }

};

class Cities extends Component {
  render(){
    return (<div className="cities-list">
            {this.props.locations.map((city, index)=>{
              return <p key={ `city-${ index }`}>{ city }</p>
            })}
            </div>
            );
  }
}


export default Location;




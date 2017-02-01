import React, {Component} from 'react';


Location = React.createClass({
  locations: ['NYC', 'Seattle', 'LA'],

   getInitialState() {
    return {
      locations: [ 'NYC', 'Seattle', 'LA' ]
    }
  },

  handleReverse() {
    this.setState( { locations: this.state.locations.reverse() } );
  },


  render(){
    return(
           <div className="parent-component">
             <h3 onClick={this.handleReverse}>List of Cities: (Click me)</h3>
             <Cities locations= { this.state.locations} />
           </div>
           );
  }
});


class Cities extends Component {
  render(){
    return(
    <div className="child-component">{ this.props.locations.map((city, index)=>{
      return <p key={ `city-${index}` }>{ city }</p>
    })
  }
    </div>
    );
  }
}


export default Location;




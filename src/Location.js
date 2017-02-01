import React, {Component} from 'react';


Location = React.createClass({
  locations: ['NYC', 'Seattle'],

  render(){
    return(
           <div className="parent-component">
             <h3>List of Cities:</h3>
             <Cities locations= { this.locations} />
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




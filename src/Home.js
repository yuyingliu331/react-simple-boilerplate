import React, {Component} from 'react';
import Location from './Location';
import Nav from './Nav';

class Home extends Component {
  render() {
      const styles = require('../styles/home.scss');

    return (
        <div className ="styles.home">
            <Nav location={location} />
            <span>
                 <h1 className="greeting">Welcome to Lunch Duo!</h1>
            </span>
        <div>
            <Location />
        </div>
      </div>

    );
  }
}
export default Home;

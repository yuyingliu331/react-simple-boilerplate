import React, {Component} from 'react';
import Location from './Location';

class Home extends Component {
  render() {
      const styles = require('../styles/home.scss');

    return (

          <div className ={styles.home}>

            <h1 className="greeting">Welcome to Lunch Duo!</h1>
            <div>

                <Location />

            </div>

        </div>

    );
  }
}
export default Home;

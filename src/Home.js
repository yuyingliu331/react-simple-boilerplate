import React, {Component} from 'react';


class Home extends Component {
  render() {
      const styles = require('../styles/home.scss');

    return (
        <div className ={styles.home}>
            <h1 className="greeting">Lunch Duo!</h1>
            <p>
                Locations available:
            </p>
        </div>
    );
  }
}
export default Home;

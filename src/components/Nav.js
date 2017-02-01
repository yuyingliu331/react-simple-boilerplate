import React from 'react';
import { IndexLink, Link } from 'react-router';

export default class Nav extends React.Component {
   constructor(){
       super()
       this.state={
           collapsed: true,
       };
   }

   toggleCollapse(){
       const collapsed = !this.state.collapsed;
       this.setState({collapsed});
   }

    render(){
        const styles = require('../../styles/navbar.scss');
        return (

            <div className="styles.navbar">
                <ul className="ui inverted menu navbar">
                    <li className="active item">
                        <Link to="/" onClick={this.toggleCollapse.bind(this)}>
                              Home</Link>
                    </li>
                    <li className="active item">
                        <Link to="signup" onClick={this.toggleCollapse.bind(this)}>
                            Log In or Sign Up </Link>

                    </li>
                    <li className="active item">
                        Find a lunch partner!
                </li>
                </ul>
            </div>
        );

    }

}

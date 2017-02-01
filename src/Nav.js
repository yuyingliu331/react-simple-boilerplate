import React from 'react';
import { IndexLink, Link } from 'react-router';

export default class Nav extends React.Component {
    constructor(){
        super()
        this.state = {
            collapsed: true,
        }
    }

    toggleCollapse(){
        const collapsed = !this.state.collapsed;
        this.setState({collapsed});
    }

    render(){
        const { location } = this.props;
        const { collapsed } = this.state;
        const navClass = collapsed ? "collapse" : "";
        const styles = require('../styles/nav.scss');
       return (
           <div className="styles.nav">
               <ul>
               <li><a href="">Home</a></li>
            <li><a href="">Sign Up / Sign In</a></li>
            <li><a href="">Find a lunch partner</a></li>
               </ul>
           </div>
       )
    }

}
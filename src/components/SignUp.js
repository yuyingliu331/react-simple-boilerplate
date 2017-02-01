import React, {Component} from 'react';
import Nav from './Nav'

class SignUp extends React.Component{
    render(){
        return(
            <div>
                <Nav />
            <div className="ui middle aligned center aligned grid">

                <div className="column">
                    <h2 className="ui image header">
                        <div className="content">
                            Log-in to your account
                        </div>
                    </h2>
                    <form action="" method="get" className="ui large form">
                        <div className="ui stacked secondary segment">
                            <div className="field">
                                <div className="ui left icon input">
                                    <i className="user icon"></i>
                                    <input type="text" name="email" placeholder="E-mail address">
                                    </input>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            </div>
        )
    }
}

export default SignUp;
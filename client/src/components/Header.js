import React, { Component } from 'react';


class Header extends Component {
    render(){
        return(
                <nav>
                    <div className="nav-wrapper">
                        <a href="#" classNames="left brand-logo">WD5</a>
                        <ul class="right">
                            <li><a>Login With Google</a></li>
                        </ul>
                    </div>
                </nav>
        );
    }
}

export default Header; 
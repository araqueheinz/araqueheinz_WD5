import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Payments  from './Payments';


class Header extends Component {

    renderContent(){
        switch(this.props.auth){
            case null:
                return (
                    <div className="preloader-wrapper big active">
                        <div className="spinner-layer spinner-blue-only">
                        <div className="circle-clipper left">
                            <div className="circle"></div>
                        </div><div className="gap-patch">
                            <div className="circle"></div>
                        </div><div className="circle-clipper right">
                            <div className="circle"></div>
                        </div>
                        </div>
                    </div>
                )

            case false:
                return (
                    <li>
                        <a href="/auth/google">Login With Google</a>
                    </li>
                )

            default:
             return [
                <li key="1"><Payments/></li>,
                <li key="2" style={{margin: '0px 10px'}}> 
                    Credits: {this.props.auth.credits}
                </li>,
                <li key="3"> <a href="/api/logout">Logout</a></li>
             ];
        }
    }

    render(){
        return(
                <nav>
                    <div className="nav-wrapper">

                        <Link 
                            to={this.props.auth ? '/surveys' : '/'}
                            className="left brand-logo"
                        >
                            WD5 Survey
                        </Link>

                        <ul className="right">
                        
                           {
                               this.renderContent()
                           }

                        </ul>
                    </div>
                </nav>
        );
    }
}

/*
    function mapStateToProps(state){
        return{
            auth: state.auth
        }
    }
*/

//REFACTOR

function mapStateToProps({ auth }){
    return{ auth }
}


export default connect(mapStateToProps)(Header); 
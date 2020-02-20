import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../redux/actions/authActions";

//import HomePage from '../../pages/home/home-page.component';

import './dashboard.styles.scss';

class Dashboard extends Component {

    state = {
        welcome: 'Welcome to the Dashboard'
    }

    onLogoutClick = e => {
        e.preventDefault();
        this.props.logoutUser();
    };

    render() {
    const { user } = this.props.auth;
    return (
        <div className="container">
            <div className="row">
                <div className="col s12 center-align">
                    <h2 className="welcome"> {this.state.welcome} </h2>
                    <h4>
                        <b>Hey {user.name.split(" ")[0]} </b> 
                        <p className="flow-text grey-text text-darken-1">
                        You are logged into a full-stack{" "}
                        <span style={{ fontFamily: "monospace" }}>MERN</span> app 👏
                        </p>
                    </h4>
                    <button
                        style={{
                        width: "150px",
                        borderRadius: "3px",
                        letterSpacing: "1.5px",
                        marginTop: "1rem"
                        }}
                        onClick={this.onLogoutClick}
                        className="btn btn-large waves-effect waves-light hoverable blue accent-3"
                    >
                        Logout
                    </button>
                </div>
            </div>
        </div>
    );
  }
}

Dashboard.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logoutUser }
)(Dashboard);
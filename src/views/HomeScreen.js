import React, { Component } from "react";

export default class HomeScreen extends Component {
    render() {
        return (
            <div>
                <h3>Home</h3>
                <p className="forgot-password text-right">
                    Do you want to <a href="sign-in">Go Back?</a>
                </p>
            </div>
        );
    }
}
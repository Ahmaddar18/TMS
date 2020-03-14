import React, { Component } from "react";

export default class HomeScreen extends Component {
    render() {
       let user = JSON.parse(localStorage.getItem('user'));
       console.log(user)
        return (
            <div>
                <h1>Welcome {user.first_name}</h1>
                <h3>Home</h3>
                <p className="forgot-password text-right">
                    Do you want to <a href="sign-in">Logout?</a>
                </p>
            </div>
        );
    }
}
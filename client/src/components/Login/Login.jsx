import React, { Component } from "react";
import LoginModal from "react-login-modal";
import './Login.css';

export default function Login() {
    const handleSignup = (username, email, password) => {};
    const handleLogin = (username, password) => {};

    return (
        <div class="m">
            <LoginModal
                handleSignup={handleSignup}
                handleLogin={handleLogin}
            />
        </div>
    );
}
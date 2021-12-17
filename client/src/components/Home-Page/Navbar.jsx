import './Navbar.css';
import React, { useState } from 'react'
import Login from '../Login/Login';
import {Modal, Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { signIn } from "../data"



export default function Navbar() {


    const [isLogin, setLogin] = useState(false);

    const handleLogin = () => {
        signIn();
        // history.push("/dashboard");
    }

    return (
        <>
            <nav class={"navbar navbar-expand-lg navbar-dark bg-navbar"}>
            <a class="nav-link" href="/"><span class="navbar-brand mb-0 h1" style={{fontSize: "25px"}}>FOOD HELPER</span></a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarText">
                    <ul class="navbar-nav ml-auto" style={{fontSize: '20px'}}>
                        <li class="nav-item">
                        <a class="nav-link" href="/foods">Foods <span class="sr-only">(current)</span></a>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link" href="/search">Search</a>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link" href="/dashboard">Dashboard</a>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link" onClick={() => handleLogin()} href="/dashboard">Sign in</a>
                        </li>
                    </ul>
                </div>
            </nav>

            {/* <Modal show={isLogin} onHide={() => setLogin(false)}>
                <Modal.Body>
                    <Login />
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setLogin(false)}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal> */}
        </>
    )
}
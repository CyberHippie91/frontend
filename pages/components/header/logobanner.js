import React, { Component } from "react"
import Navbar from 'react-bootstrap/Navbar'


export default class LogoBanner extends Component {
    render() {
        return (
            <Navbar>
                <div class="container-fluid justify-content-center p-3">
                    <h1 class="display-1">BRIGHTSITES</h1>
                </div>
            </Navbar>
        );
    }
}
import React, { Component } from "react"
import Head from 'next/head'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import LogoBanner from './components/header/logobanner'
import Button from 'react-bootstrap/Button'

export default class SignUp extends Component {
    render() {
        return (
            <Container>
                <Head>
                    <title>BRIGHTSITES</title>
                    <link rel="icon" href="/favicon.ico" />
                </Head>
                <Row>
                    <LogoBanner>

                    </LogoBanner>
                </Row>
                <Form>
                    <h3>Sign Up</h3>

                    <div className="form-group">
                        <label>First name</label>
                        <input type="text" className="form-control" placeholder="First name" />
                    </div>

                    <div className="form-group">
                        <label>Last name</label>
                        <input type="text" className="form-control" placeholder="Last name" />
                    </div>

                    <div className="form-group">
                        <label>Email address</label>
                        <input type="email" className="form-control" placeholder="Enter email" />
                    </div>

                    <div className="form-group">
                        <label>Password</label>
                        <input type="password" className="form-control" placeholder="Enter password" />
                    </div>
                    <Row>
                   
                        <Button href="/login" variant="bright" type="submit" size="lg" block >
                                Register
                        </Button>
                        
                    </Row>
                    <p className="forgot-password text-right">
                        Already registered <a href="/login">sign in?</a>
                    </p>
                </Form>
            </Container>
        );
    }
}
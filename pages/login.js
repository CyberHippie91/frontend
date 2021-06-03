import React, { Component } from "react"
import Head from 'next/head'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import LogoBanner from './components/header/logobanner'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router'

export default class Login extends Component {
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
                <Row>
                <Form>
                    <h3 class="mb-3">Sign In</h3>

                    <div className="m-3 form-group">
                        <label>Email address</label>
                        <input type="email" className="form-control" placeholder="Enter email" />
                    </div>

                    <div className="m-3 form-group">
                        <label>Password</label>
                        <input type="password" className="form-control" placeholder="Enter password" />
                    </div>

                    
                    
                    <Container>
                        <Row >
                            <Button  variant="bright" type="submit" size="lg" block>
                            Sign In
                            </Button>
                        </Row> 
                        <Row>
                       
                            <Button href="/signup" variant="bright" type="submit" size="lg" block>
                            Register Now
                            </Button>
                            
                        </Row>   
                    </Container>    
                        <p className="forgot-password text-right">
                           Forgot <a href="#">password?</a>
                          </p>
                    
                    </Form>
                </Row>
            </Container>
        );
    }
}
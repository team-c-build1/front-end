import React, { useReducer } from 'react';
import axios from 'axios';

class Login extends React.Component {
    state = {
        username: "",
        password: "",
        loggedIn: false,
        error: false
    }

    changeHandler = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    submitHandler = event => {
        event.preventDefault();
        axios
            .post('https://', {
                username: this.state.username,
                password: this.state.password
            })
            .then(res => {
                window.localStorage.setItem('token', res.data.token);
                const username = jwt_decode(localStorage.getItem('token')).username;
                window.localStorage.setItem('username', username);
                this.setState({
                    loggedIn: true
                })
            })
            .catch(err => this.setState({
                error: true
            }))
    }

    render() {
        if(this.state.loggedIn === true) {
            return <Redirect to='/dashboard'/>
        } else {
            return(
                <div className="login">
                    <NavBar/>
                    <h1>Log In to your account</h1>
                    <Form className="form login-form" onSubmit={this.submitHandler}>
                        <FormGroup>
                            <Label>username</Label>
                            <Input type="string" name="username" value={this.state.username} onChange={this.changeHandler}/>
                        </FormGroup>
                        <FormGroup>
                            <Label>Password</Label>
                            <Input type="password" name="password" value={this.state.password} onChange={this.changeHandler}/>
                        </FormGroup>
                        <Button>Login</Button>
                    </Form>
                    <p>{this.state.error === true ? "Invalid Credentials" : ""}</p>
                </div>
            )
        }
    }
}

export default Login;
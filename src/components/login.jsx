import React from 'react';
import Input from '../common/input';
import Joi from 'joi-browser';
import Form from '../common/form';

class Login extends Form {
    state = {
        data: { username: "", password: "" },
        errors: {}
    };
    schema = {
        username: Joi.string().required().label("Username"),
        password: Joi.string().required().label("Password")
    }

    render() {
        const { data, errors } = this.state;
        return (
            <div>
                <h1>Login</h1>
                <form onSubmit={this.handleSubmit}>
                    <Input name="username" value={data.username} label="Username" error={errors.username} type="text" onChange={this.handleChange} />
                    <Input name="password" value={data.password} label="Password" error={errors.password} type="password" onChange={this.handleChange} />
                    {this.renderBtn("Login")}
                </form>
            </div>
        );
    }
}

export default Login;
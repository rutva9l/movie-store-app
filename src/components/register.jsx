import React from 'react';
import Input from '../common/input';
import Form from '../common/form';
import Joi from 'joi-browser';

class Register extends Form {
    state = { 
        data:{username:"",password:"",name:""},
        errors:{}
    }
    schema={
        username:Joi.string().email({minDomainSegments:2}).required().label("Username"),
        password:Joi.string().required().label("Password"),
        name:Joi.string().required().label("Name")
    }
    render() { 
        const {data,errors}=this.state;
        return ( 
            <div>
                <h1>Register</h1>
                <form onSubmit={this.handleSubmit}>
                    <Input name="username" label="Username" value={data.username} error={errors.username} type="email" onChange={this.handleChange} />
                    <Input name="password" label="Password" value={data.password} error={errors.password} type="password" onChange={this.handleChange} />
                    <Input name="name" label="Name" value={data.name} error={errors.name} type="text" onChange={this.handleChange} />
                    {this.renderBtn("Register")}
                </form>
            </div>
        );
    }
}
 
export default Register;
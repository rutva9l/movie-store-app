import React, { Component } from 'react';
import Joi from 'joi-browser';

class Form extends Component {
    state = {
        data:{},
        errors:{}
    };
    validate = () => {
        const { error } = Joi.validate(this.state.data, this.schema, { abortEarly: false }); //takes in the object to be validated and the schema
        const errors = {};
        if (!error) return null;
        for (let item of error.details) {
            errors[item.path[0]] = item.message;
        }
        return errors;

        // const errors={}
        // const {username,password}=this.state.data;
        // if(username.trim()==='') errors.username="Username is required";
        // if(password.trim()==='') errors.password="Password is required";
        // return Object.keys(errors).length===0?null:errors;
    }
    validateProp = ({ name, value }) => {
        const obj = { [name]: value };
        const schema = { [name]: this.schema[name] };
        const { error } = Joi.validate(obj, schema, { abortEarly: false });
        return error ? error.details[0].message : null;

        // if(name==='username') if(value.trim()==='') return "Username is required";
        // if(name==='password') if(value.trim()==='') return "Password is required";
    }
    handleSubmit = e => {
        e.preventDefault();
        const errors = this.validate();
        this.setState({ errors: errors || {} });
        errors === null ? console.log('submitted') : console.log(errors);
    }
    handleChange = ({ currentTarget }) => {
        const errors={...this.state.errors}
        const message = this.validateProp(currentTarget);
        if (message) errors[currentTarget.name]=message;
        else delete errors[currentTarget.name];
        const data = { ...this.state.data };
        data[currentTarget.name] = currentTarget.value;
        this.setState({ data,errors });
    }
    renderBtn=label=>{
        return <button disabled={this.validate()} style={{ marginTop: 20 }} className="btn btn-primary">{label}</button>
    }
}
 
export default Form;
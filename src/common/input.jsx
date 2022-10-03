import React from 'react';

const Input = ({name,label,value,onChange,error,type}) => {
    return (
        <div className="form-group" style={{marginTop:20}}>
            <label htmlFor={name}>{label}</label>
            <input value={value} onChange={onChange} name={name} type={type} className="form-control" />
            {error && <div className="alert alert-danger">{error}</div>}
        </div>
    );
}

export default Input;
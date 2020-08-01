import React, { Fragment, useState } from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setAlert } from '../../actions/alerts';
import { register } from '../../actions/auth';
import axios from 'axios';

const Register = (props) => {
    const [formData, setFormData] = useState({
        name:'',
        email: '',
        password: '',
        password2: ''
    });

    const { name, email, password, password2 } = formData;

    const onChange = (e) => setFormData({...formData, [e.target.name]: e.target.value});

    const onSubmit = async e => {

        e.preventDefault();

        if(password !== password2) {
            props.setAlert('Passwords do not match');
        } else{
            register({ name, email, password });
        }

        return false;

    };

    return (
        <Fragment>
           <h1 className="large text-primary">Sign Up</h1>
            <p className="lead"><i className="fas fa-user"></i> Create Your Account</p>
            <form className="form" onSubmit={ onSubmit }>
                <div className="form-group">
                <input type="text" placeholder="Name" name="name" value={ name } required onChange={ onChange } />
                </div>
                <div className="form-group">
                <input type="email" placeholder="Email Address" name="email" value= { email } onChange={ onChange }/>
                <small className="form-text"
                    >This site uses Gravatar so if you want a profile image, use a
                    Gravatar email</small
                >
                </div>
                <div className="form-group">
                <input
                    type="password"
                    placeholder="Password"
                    name="password"
                    minLength="6"
                    value={ password }
                    onChange={ onChange }
                />
                </div>
                <div className="form-group">
                <input
                    type="password"
                    placeholder="Confirm Password"
                    name="password2"
                    minLength="6"
                    value={ password2 }
                    onChange={ onChange }
                />
                </div>
                <input type="submit" className="btn btn-primary" value="Register" />
            </form>
            <p className="my-1">
                Already have an account? <a href="login.html">Sign In</a>
            </p>
        </Fragment>
    )
};

Register.propTypes = {
    setAlert: PropTypes.func.isRequired,
    register: PropTypes.func.isRequired
};

export default connect(null, {setAlert, register})(Register);

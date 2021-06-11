import React, { useState } from 'react';
import styles from './Form.module.css';

const UserForm = props =>{
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmpassword, setConfirmpassword] = useState("");
    const [hasBeenSubmitted, setHasBeenSubmitted] = useState(false);
    const [firstnameError, setfirstnameError] = useState("");
    const [lastnameError, setlastnameError] = useState("");
    const [emailError, setemailError] = useState("");
    const [passwordError, setpasswordError] = useState("");
    const [confirmpasswordError, setconfirmpasswordError] = useState("");

    const createUser=(e)=>{
        e.preventDefault();
        const newUser = {firstname, lastname, email, password, confirmpassword};
        console.log("Welcome", newUser);
        setHasBeenSubmitted(true);
        setFirstname("");
        setLastname("");
        setEmail("");
        setPassword("");
        setConfirmpassword("");
    }

    const formMessage = () => {
        if (hasBeenSubmitted) {
            return "Thank you for submitting the form!";
        }
        else {
            return "Welcome, please submit the form";
        }
    }
    
    const firstNameCheck = (e) => {
        setFirstname(e.target.value);
        if(e.target.value.length <2) {
            setfirstnameError("First name must be 2 characters or longer!")
        }
        else {
            setfirstnameError("");
        }
    }

    const lastNameCheck = (e) => {
        setLastname(e.target.value);
        if(e.target.value.length <2) {
            setlastnameError("Last name must be 2 characters or longer!")
        }
        else {
            setlastnameError("");
        }
    }
    const emailCheck = (e) => {
        setEmail(e.target.value);
        if(e.target.value.length <5) {
            setemailError("Email must be 5 characters or longer!")
        }
        else {
            setemailError("");
        }
    }
    const passwordCheck = (e) => {
        setPassword(e.target.value);
        if(e.target.value.length <8) {
            setpasswordError("Password must be at least 8 characters!")
        }
        else {
            setpasswordError("");
        }
    }

    const passwordMatch =(e) => {
        setConfirmpassword(e.target.value);
        if(e.target.value !== password) {
            setconfirmpasswordError("Passwords must match!")
        }
        else {
            setconfirmpasswordError("");
        }

    }

    return(
        <div className= {styles.container}>
            <div className= {styles.row}>
                <form className = {styles.form} onSubmit = {createUser}>
                    {
                        hasBeenSubmitted ?
                        <h3>Thank you for submitting the form</h3> :
                        <h3>Welcome, please submit the form</h3>
                    }
                    <div className="input-group mb-3">
                        <label className = "input-group-text">First Name:</label>
                        <input className = "form-control" type="text" onChange={ firstNameCheck } value= {firstname}/>
                    </div>
                    {
                        setfirstnameError ?
                        <p style={{ color: 'red'}}> { firstnameError }</p>:
                        <p></p>   
                    }
                    <div className="input-group mb-3">
                        <label className = "input-group-text">Last Name:</label>
                        <input className = "form-control" type="text" onChange={ lastNameCheck} value = {lastname}/>
                    </div>
                    {
                        setlastnameError ?
                        <p style={{ color: 'red'}}> { lastnameError }</p>:
                        <p></p>   
                    }
                    <div className="input-group mb-3">
                        <label className = "input-group-text">Email :</label>
                        <input className = "form-control" type="text" onChange={ emailCheck } value= {email}/>
                    </div>
                    {
                        setemailError ?
                        <p style={{ color: 'red'}}> { emailError }</p>:
                        <p></p>   
                    }
                    <div className="input-group mb-3"> 
                        <label className = "input-group-text">Password:</label>
                        <input className = "form-control" type="password" onChange={ passwordCheck } value={password}/>
                    </div>
                    {
                        setpasswordError ?
                        <p style={{ color: 'red'}}> { passwordError }</p>:
                        <p></p>   
                    }
                    <div className="input-group mb-3">
                        <label className = "input-group-text">Confirm Password:</label>
                        <input className = "form-control" type="password" onChange={ passwordMatch } value={confirmpassword}/>
                    </div>
                    {
                        setconfirmpasswordError ?
                        <p style={{ color: 'red'}}> { confirmpasswordError }</p>:
                        <p></p>   
                    }
                    <input type="submit" value="Create User"/>
                </form>
            </div>
            <div className = {styles.row}>
                <div className = {styles.form}>
                    <h3>Your Form Data</h3>
                    <p>First Name: {firstname}</p>
                    <p>Last Name: {lastname}</p>
                    <p>Email: {email}</p>
                    <p>Password: {password}</p>
                    <p>Confirm Password: {confirmpassword}</p>
                </div>
            </div>
        </div>
    )
}

export default UserForm;
import React from 'react';
import './create-marketter-account.scss'
import { firebaseDB, firebaseAuth } from '../../backend/firebase';


class CreateMarketerAccount extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            email:'',
            password:'',
            name:''
        }
    }

     handleClick = async (event) => {
        event.preventDefault();

        
        
        try{ 
        await firebaseAuth.signOut();
        const TOKEN = await firebaseAuth.createUserWithEmailAndPassword(this.state.email, this.state.password);
        const user = TOKEN.user;

        await user.updateProfile({
            displayName:this.state.name,
        })

        await firebaseDB.ref('CREDENTIALS').child(user.uid).set({
            EmailId:user.email,
            Password:this.state.password,
            Name:this.state.name,
            UID: user.uid
        });
        
        }catch(err) {
            console.log(err)
        }

        alert("DONE!");
    }

    handleChange = event => {
        const {name, value} = event.target;
        this.setState({
            [name]:value
        })
    }

    render() {
        return(
            <div className='main'>
                <form className='account-form' onSubmit={this.handleClick}>
                    <input className='form-input' type='email' name='email' placeholder='Email Id' onChange={this.handleChange} required/>
                    <input className='form-input' type='text' name = 'password' placeholder='Password' onChange={this.handleChange} required/>
                    <input className='form-input' type='text' name = 'name' placeholder='Name' onChange={this.handleChange} required />
                    <input className='form-input' type='submit' value='Create account'/>
                </form>
            </div>
        )
    }

}

export default CreateMarketerAccount;
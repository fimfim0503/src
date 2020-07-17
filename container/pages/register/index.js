import React,{Component} from 'react';
import './register.scss';
import firebase from '../../../config/firebase';
import Button from '../../../component/atoms/button'


class Register extends Component{
    state={
        email:'',
        password:'',
        isLoading:false
    }

    handleChangeText=(e)=>{
        this.setState({
            [e.target.id]:e.target.value,
        })
    }

    handleRegisterSubmit=()=>{
      
        const {email,password}=this.state
        console.log('data sebelum', email,password)
        this.setState({
            isLoading:true
        })
        setTimeout(()=>{
            this.setState({
                isLoading:false
            })
        },5000)
        // firebase.auth().createUserWithEmailAndPassword(email, password).then(res=>{
        //     console.log('reshasil',res);
        // }).catch(function(error) {
        //     // Handle Errors here.
        //     var errorCode = error.code;
        //     var errorMessage = error.message;
        //     console.log(errorCode, errorMessage);
        //   });

    }

    render(){
        return(
                <div className="auth-container">
                    <div className="auth-card">
                        <p className="auth-title">Register Page</p>
                        <input className="input" id="email" placeholder="email" type="text" onChange={this.handleChangeText} />
                        <input className="input" id="password" placeholder="password" type="password" onChange={this.handleChangeText} />
                        {/* <button className="btn" onClick={this.handleRegisterSubmit}>Register</button> */}
                        <Button onClick={this.handleRegisterSubmit} title="register" loading={this.state.isLoading}/>
                    </div>
                    
                   {/*<button>go to dashboard</button>*/}
                </div>

        )
    }
}

export default Register;
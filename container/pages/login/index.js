import React,{Component, useImperativeHandle} from 'react';
import { connect } from 'react-redux';
import { actionusername } from '../../../config/redux/action';

class Login extends Component{
    changeUser = () => {
       this.props.changeusername()
    }

    render(){
        return(
                <div>
                    <p>Login Page {this.props.userName}</p>
                    <button onClick={this.changeUser} >ganti nama</button>
                    <button>go to dashboard</button>
                </div>

        )
    }
}



const reduxState=(state)=>({
    popupProps:state.popup,
    userName:state.user
})

const reduxDispatch=(dispatch)=>({
    changeusername:()=>dispatch(actionusername())
})

export default connect(reduxState, reduxDispatch) (Login);
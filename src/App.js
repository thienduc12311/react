import React from "react"
import LoginForm from "./components/loginForm";
import Header from "./Header";
import MemeGenerator from "./MemeGenerator";
import "./App.css";



const Haido = () =>{
    console.log("hihi");
}
class App extends React.Component {
    state = {
        isAuth: false
    }

    handleLoginSuccess = () => {
        this.setState({isAuth: true});
    }
    handleLoginFailed = () => {
        this.setState({isAuth: false});
    }
    render() {
        const {isAuth} =this.state;
        return(
            <div>
                
                {isAuth ? <MemeGenerator/> : <LoginForm handleLoginSuccess={this.handleLoginSuccess} 
                    handleLoginFailed={this.handleLoginFailed}/>}
            </div>
        )
    }

}

export default App;
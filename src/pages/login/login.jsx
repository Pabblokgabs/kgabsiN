import { Link } from "react-router-dom";
import "./login.scss";
import { FaGoogle, FaFacebook } from 'react-icons/fa';

function Login({CloseLogin}) {
    return (
        <div className="login">
            <div className="login-left">
                <h1>Welcome Back</h1>
                <div className="log-left-middle">
                    <div className="logo">
                        <img src="logo.png" alt="Logo"/><h4>kgabs <span>iN</span></h4>
                    </div>
                    <h6>One Step In Finding Your Home, Right by Campus!</h6>
                </div>
            </div>
            <div className="login-right">
                <form action="">
                    <div className="log-right-top">
                        <span>Login</span>
                        <button onClick={() => {CloseLogin()}}>X</button>
                    </div>
                    <div className="log-right-container">
                        <input type="email" placeholder="Enter Your Email"/>
                        <input type="password" placeholder="Enter Your Password"/>
                        <div className="button">
                            <button>Login</button>
                        </div>
                        <div className="by-social-account">
                            <button><FaGoogle /></button>
                            <button><FaFacebook /></button>
                        </div>
                    </div>
                    <p>Don't have an account? <Link className="link" to="/signup" onClick={() => {CloseLogin()}}>Sign up</Link></p>
                </form>
            </div>
        </div>
    )
}

export default Login;
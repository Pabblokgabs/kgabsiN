import { Link } from "react-router-dom";
import "./login.scss";
import { FaGoogle} from 'react-icons/fa';

function Login({handleLogin}) {
    return (
        <div className="login-form">
            <div className="lf-bg-color"></div>
            <div className="login-wrapper">
                <div className="lw-left">
                    <h1>Welcome Back</h1>
                    <h4>to</h4>
                    <div className="cont">
                        <div className="logo-logo">
                            <img src="/logo.png" alt="Logo Photo" />
                            <h3>kgabs <span>iN</span></h3>
                        </div>
                        <p>One Step In Finding Your Home, Right by Campus!</p>
                    </div>
                </div>
                <div className="lw-right">
                    <div className="button"><button onClick={handleLogin}>X</button></div>
                    <form>
                        <div className="optional-login">
                            <button><span><FaGoogle/> Google</span></button>
                        </div>
                        <input type="text" placeholder="Enter your email"/>
                        <input type="password" placeholder="Enter your password"/>
                        <p>Forgot Password?<Link className="link"> Reset Here</Link></p>
                        <button>Login</button>
                        <span>Have an account? <Link to="/signup" className="link" onClick={handleLogin}>Sign up</Link></span>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login;
import "./register.scss";
import RegisterForm from "./registerForm/registerform";

function Register() {
    return (
        <div className="register">
            <div className="register-wrapper">
                <div className="register-wrapper-left">
                    <h1>Welcome</h1>
                    <h4>To</h4>
                    <div className="logo">
                        <img src="logo.png" alt="Logo"/>
                        <p>kgabs <span>iN</span></p>
                    </div>
                    <h6>One Step In Finding Your Home, Right by Campus!</h6>
                </div>
                <div className="register-wrapper-right">
                    <RegisterForm />
                </div>
            </div>
        </div>
    )
}

export default Register;
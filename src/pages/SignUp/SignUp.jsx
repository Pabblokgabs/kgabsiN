import SignUpForm from '../../components/signup-form/signupForm';
import './SignUp.scss';

function SignUp() {
    return (
        <section className="sign-up">
            <div className="sign-up-container">
                <div className="suc-left">
                    <h1>Welcome</h1>
                    <div className="suc-left-container">
                        <h4>To</h4>
                        <div className="logo">
                            <img src="logo.png" alt="Logo"/>
                            <p>kgabs <span>iN</span></p>
                        </div>
                        <h6>One Step In Finding Your Home, Right by Campus!</h6>
                    </div>
                </div>
                <div className="suc-right"><SignUpForm /></div>
            </div>
        </section>
    )
}

export default SignUp;
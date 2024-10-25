import SignUpForm from '../../components/signup-form/signupForm';
import './SignUp.scss';

function SignUp() {
    return (
        <section className="sign-up">
            <div className="sign-up-container">
                <div className="suc-left">
                    <h1>Welcome</h1>
                    <div className="suc-left-container">
                        <img src="/pagePhotos/key3.jpg" alt="" />
                        <div className="dim-color"></div>
                        <div className="container"></div>
                    </div>
                </div>
                <div className="suc-right"><SignUpForm /></div>
            </div>
        </section>
    )
}

export default SignUp;
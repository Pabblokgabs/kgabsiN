import { Link } from "react-router-dom";
import "./signupForm.scss";
import { useState } from "react";
import OptionalData from "./optionalData/OptionalData";

function SignUpForm() {
    const [isCheckedShow, setIsCheckedShow] = useState(false);
    const [isChecked, setIsChecked] = useState(false);
    const [formValues, setFormValues] = useState({ fullname: "", lastname: "", email: "", number: "", password: "", confirmPassword: "", });
    const [optionalData, setOptionalData] = useState({ varsity: "", course: "", courseLevel: "", });
    const [errors, setErrors] = useState({});

    const toggleIsCheckedShow = () => {
        setIsCheckedShow(!isCheckedShow);
    };

    const handleCheckboxChange = () => {
        setIsChecked(prevChecked => !prevChecked);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormValues({
            ...formValues,
            [name]: value,
        });
    };

    const validateForm = () => {
        const newErrors = {};
        Object.keys(formValues).forEach(key => {
            if (!formValues[key]) {
                newErrors[key] = `${key.charAt(0).toUpperCase() + key.slice(1)} is required`;
            }
        });
        if (formValues.password !== formValues.confirmPassword) {
            newErrors.confirmPassword = "Passwords do not match";
        }
        return newErrors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const formErrors = validateForm();
        if (Object.keys(formErrors).length > 0) {
            setErrors(formErrors);
        } else {
            setErrors({});
            /* console.log("Form submitted successfully:", { ...formValues, ...optionalData }); */
        }
    };

    return (
        <div className="signup-form">
            <form onSubmit={handleSubmit}>
                <h1>Signup Form</h1>
                <div className="signup-form-top">
                    <div className="container">
                        <label htmlFor="fullname">Full Name</label>
                        <input type="text" name="fullname" value={formValues.fullname} onChange={handleInputChange} placeholder="Enter Here" />
                        {errors.fullname && <span className="error">{errors.fullname}</span>}
                    </div>
                    <div className="container">
                        <label htmlFor="lastname">Last Name</label>
                        <input type="text" name="lastname" value={formValues.lastname} onChange={handleInputChange} placeholder="Enter Here" />
                        {errors.lastname && <span className="error">{errors.lastname}</span>}
                    </div>
                    <div className="container">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email" name="email" value={formValues.email} onChange={handleInputChange}  placeholder="Enter Here" />
                        {errors.email && <span className="error">{errors.email}</span>}
                    </div>
                    <div className="container">
                        <label htmlFor="number">Number</label>
                        <input  type="number"  name="number" value={formValues.number} onChange={handleInputChange} placeholder="Enter Here" />
                        {errors.number && <span className="error">{errors.number}</span>}
                    </div>
                    <div className="container">
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" value={formValues.password} onChange={handleInputChange} placeholder="Enter Here" />
                        {errors.password && <span className="error">{errors.password}</span>}
                    </div>
                    <div className="container">
                        <label htmlFor="confirmPassword">Confirm Password</label>
                        <input type="password" name="confirmPassword" value={formValues.confirmPassword} onChange={handleInputChange} placeholder="Enter Here" />
                        {errors.confirmPassword && <span className="error">{errors.confirmPassword}</span>}
                    </div>
                </div>
                <div className="signup-form-middle">
                    <div className="checkbox-optional">
                        <label htmlFor="optional-check-box">Do you want to receive updates for Jobs, Events or anything important.</label>
                        <input type="checkbox" onClick={toggleIsCheckedShow} />
                    </div>
                    {isCheckedShow && <OptionalData optionalData={optionalData} setOptionalData={setOptionalData} />}
                </div>
                <div className="signup-form-bottom">
                    <div className="terms-cond">
                        <input type="checkbox" name="terms" checked={isChecked} onClick={handleCheckboxChange} />
                        <label htmlFor="terms">
                            By signing up, you agree to <Link className="link">terms and conditions.</Link>
                        </label>
                    </div>
                    <button type="submit" disabled={!isChecked}>Sign Up</button>
                </div>
            </form>
        </div>
    );
}

export default SignUpForm;

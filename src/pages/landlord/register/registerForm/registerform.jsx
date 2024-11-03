import { useState } from "react";
import "./registerform.scss";
import { Link } from "react-router-dom";

function RegisterForm() {
    const [isChecked, setIsChecked] = useState(false);
    const [formValues, setFormValues] = useState({ firstName: "", lastName: "", email: "", id: "", password: "", confirmPassword: "", role: "Landlord" });
    const [errors, setErrors] = useState({});

    const HandleIsChecked = () => { setIsChecked(!isChecked); };

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
        if (formValues.id.length !== 13) {
            newErrors.id = "ID must be exactly 13 digits";
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
        }
    };

    return (
        <form className="register-form" onSubmit={handleSubmit}>
            <h1>Registration Form</h1>
            <div className="register-form-top">
                <div className="container">
                    <label htmlFor="firstName">First Name</label>
                    <input type="text" id="firstName" name="firstName" placeholder="Enter Here" value={formValues.firstName} onChange={handleInputChange} />
                    {errors.firstName && <span className="error">{errors.firstName}</span>}
                </div>
                <div className="container">
                    <label htmlFor="lastName">Last Name</label>
                    <input type="text" id="lastName" name="lastName" placeholder="Enter Here" value={formValues.lastName} onChange={handleInputChange} />
                    {errors.lastName && <span className="error">{errors.lastName}</span>}
                </div>
                <div className="container">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" placeholder="Enter Here" value={formValues.email} onChange={handleInputChange} />
                    {errors.email && <span className="error">{errors.email}</span>}
                </div>
                <div className="container">
                    <label htmlFor="id">ID Number</label>
                    <input type="number" id="id" name="id" placeholder="Enter Here" value={formValues.id} onChange={handleInputChange} />
                    {errors.id && <span className="error">{errors.id}</span>}
                </div>
                <div className="container">
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" name="password" placeholder="Enter Here" value={formValues.password} onChange={handleInputChange} />
                    {errors.password && <span className="error">{errors.password}</span>}
                </div>
                <div className="container">
                    <label htmlFor="confirmPassword">Confirm Password</label>
                    <input type="password" id="confirmPassword" name="confirmPassword" placeholder="Enter Here" value={formValues.confirmPassword} onChange={handleInputChange} />
                    {errors.confirmPassword && <span className="error">{errors.confirmPassword}</span>}
                </div>
            </div>
            <div className="register-form-bottom">
                <div className="terms">
                    <input type="checkbox" checked={isChecked} onChange={HandleIsChecked} />
                    <label htmlFor="terms">
                        By signing up, you agree to <Link className="link">terms and conditions.</Link>
                    </label>
                </div>
                <button disabled={!isChecked} type="submit">Submit</button>
            </div>
        </form>
    );
}

export default RegisterForm;

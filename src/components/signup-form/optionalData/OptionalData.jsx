import "./OptionalData.scss";

function OptionalData({ optionalData, setOptionalData }) {
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setOptionalData(prevData => ({
            ...prevData,
            [name]: value,
        }));
    };

    return (
        <div className="fillData-optional">
            <div className="container">
                <label htmlFor="varsity-enrolled">Varsity</label>
                <select name="varsity" id="varsity-enrolled" value={optionalData.varsity} onChange={handleInputChange}>
                    <option value="">Select here</option>
                    <option value="1">hey</option>
                </select>
            </div>
            <div className="container">
                <label htmlFor="course">Enter Course</label>
                <input type="text" name="course" placeholder="Enter Here" value={optionalData.course} onChange={handleInputChange}/>
            </div>
            <div className="container">
                <label htmlFor="course-level">Level</label>
                <select name="courseLevel" id="course-level" value={optionalData.courseLevel} onChange={handleInputChange}>
                    <option value="">Select here</option>
                    <option value="first-level">First Level</option>
                </select>
            </div>
        </div>
    );
}

export default OptionalData;

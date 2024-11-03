import './transport.scss';
import {Provinces, VarsityData} from "../../listdata/selectOptionData";
import transportData from '../../listdata/transportData';
import { useState } from 'react';
import {FaGreaterThan, FaLessThan} from 'react-icons/fa'

function Transport() {
    const Data = transportData;

    const combinedOptions = [
        ...VarsityData[0].University.map((uni) => ({ name: uni })),
        ...VarsityData[1].Colleges.map((college) => ({ name: college }))
    ];

    /* to handle filter (Filtering input to the desire of the user) */
    const [searchTerm, setSearchTerm] = useState('');
    const handleSearchChange = (event) => {setSearchTerm(event.target.value);};
    const filteredData = Data.filter(item => 
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    /* to handle view more */
    const [selectedId, setSelectedId] = useState(null);
    const handleClick = (id) => {setSelectedId(id);};
    const selectedItem = Data.find(item => item.id === selectedId);

    /* for images slide */
    const [currentIndex, setCurrentIndex] = useState(0);
    const handlePrev = () => {setCurrentIndex((prevIndex) =>  prevIndex === 0 ? selectedItem.images.length - 1 : prevIndex - 1 );};
    const handleNext = () => { setCurrentIndex((prevIndex) =>  prevIndex === selectedItem.images.length - 1 ? 0 : prevIndex + 1);};

    /* to handle the apply for transport display */
    const [trigger, setTrigger] = useState(false)
    const [isConfirmationVisible, setIsConfirmationVisible] = useState(true);
    const handleTrigger = () => {setTrigger(!trigger), setIsConfirmationVisible(true)};
    const handleConfirmationVisible = () => {setIsConfirmationVisible(false)}

    /* transport form validation and submittion */
    const [transportFormValues , setTransportFormValue] = useState({
        name: '',
        driverName: '',
        province: '',
        transportType: '',
        closestCampus: '',
        contact: '',
        whatsApp: '',
        idDocument: '',
        driverLisence: '',
        images: [],
    })
    const [errors, setErrors] = useState({});
    const handleInputChanges = (e) => {
        const {name, value} = e.target;
        setTransportFormValue({
            ...transportFormValues,
            [name]: value,
        });
    };
    const validateForm = () => {
        const newErrors = {};
        Object.keys(transportFormValues).forEach(key => {
            if (!transportFormValues[key] && key !== 'whatsApp') {
                newErrors[key] = `${key.charAt(0).toUpperCase() + key.slice(1)} is required`
            }
        })
        if (transportFormValues.contact.length !== 10) {
            newErrors.contact = 'Contact number must be 10 digits long';
        }
        if (transportFormValues.whatsApp && transportFormValues.whatsApp.length !== 10) {
            newErrors.whatsApp = 'WhatsApp number must be 10 digits long';
        }
        if (transportFormValues.images.length <= 1) {
            newErrors.images = 'Images must be at least 2 or more.'
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
        <section className="transport">
            <div className="transport-left">
                <form className="transport-left-top">
                    {!isConfirmationVisible && (
                        <div className="hint-messages">
                            <h4>Be sure to submit valid and up to date details. Failure to do so will results in your application being declined</h4>
                        </div>
                    )}
                    <h1>Looking for transport?</h1>
                    <input type="text" placeholder='Search name' value={searchTerm} onChange={handleSearchChange} />
                    <h4>Filter by:</h4>
                    <select name="varsity" id="varsity">
                        <option value="">Varsity</option>
                        <option value="">All</option>
                        {combinedOptions.map((option, index) => (
                            <option key={index} value={option.name}>
                                {option.name}
                            </option>
                        ))}
                    </select>
                    <select name="transport" id="transport" >
                        <option value="">Type</option>
                        <option value="">Any</option>
                        <option value="Long distance">Long Distance</option>
                        <option value="short distance">Short Distance</option>
                    </select>
                </form>
                <p className='transport-left-bottom'>
                    <b>Important Notice:</b> If you notice any suspicious activity or encounter a potential scam, please report it to us immediately. Your safety is our priority, and prompt reporting helps us protect our community.
                </p>
            </div>
            <div className="transport-right">
                {isConfirmationVisible && (
                        <div className={trigger ? "confirming-wrapper trigger hey" : "confirming-wrapper"}>
                            <div className="confirming-wrapper-container">
                                <div className="confirming-back-blur"></div>
                                <div className="confirm-wrapper">
                                    <h4>VALID DRIVER'S LICENSE AND ID COPY DOCUMENTS WILL BE NEEDED FOR THIS REGISTRATION.</h4>
                                    <div className="con-can-buttons">
                                        <button onClick={handleTrigger}>Cancel</button>
                                        <button onClick={handleConfirmationVisible}>Continue</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}


                <div className={trigger ? "transport-register-container trigger" : "transport-register-container"}>
                    <div className="trc-top">
                        <h1>Registration</h1>
                        <button onClick={handleTrigger}>X</button>
                    </div>
                    <form onSubmit={handleSubmit} className="trc-bottom-form">
                        <div className="trc-bottom-form-top">
                            <div className="container">
                                <label htmlFor="name">Name</label>
                                <input type="text" name='name' id='name' placeholder='Enter here' value={transportFormValues.name} onChange={handleInputChanges}/>
                                {errors.name && <span className="error">{errors.name}</span>}
                            </div>
                            <div className="container">
                                <label htmlFor="driverName">Driver's name</label>
                                <input type="text" name='driverName' id='driverName' placeholder='Enter here' value={transportFormValues.driverName} onChange={handleInputChanges}/>
                                {errors.driverName && <span className="error">{errors.driverName}</span>}
                            </div>
                            <div className="container">
                                <label htmlFor="province">Province</label>
                                <select name="province" id="province" value={transportFormValues.province} onChange={handleInputChanges}>
                                    <option value="">Any</option>
                                    {Provinces.map((item, index) => (
                                        <option key={index} value={item}>{item}</option>
                                    ))}
                                </select>
                                {errors.province && <span className="error">{errors.province}</span>}
                            </div>
                            <div className="container">
                                <label htmlFor="transportType">Type</label>
                                <select name="transportType" id="transportType" value={transportFormValues.transportType} onChange={handleInputChanges}>
                                    <option value="">select one</option>
                                    <option value="longDistance">Long distance</option>
                                    <option value="shortDistance">Short distance</option>
                                    <option value="bothLongAndShot">Both Long and Short</option>
                                </select>
                                {errors.transportType && <span className="error">{errors.transportType}</span>}
                            </div>
                            <div className="container">
                                <label htmlFor="closestCampus">Closest Campus</label>
                                <select name="closestCampus" id="closestCampus" value={transportFormValues.closestCampus} onChange={handleInputChanges}>
                                    <option value="">Choose one</option>
                                    {combinedOptions.map((option, index) => (
                                        <option key={index} value={option.name}>
                                            {option.name}
                                        </option>
                                    ))}
                                </select>
                                {errors.closestCampus && <span className="error">{errors.closestCampus}</span>}
                            </div>
                            <div className="container">
                                <label htmlFor="contact">Contact</label>
                                <input type="number" name='contact' id='contact' placeholder='Enter here' value={transportFormValues.contact} onChange={handleInputChanges}/>
                                {errors.contact && <span className="error">{errors.contact}</span>}
                            </div>
                            <div className="container">
                                <label htmlFor="whatsapp">WhatsApp <span>(optional)</span></label>
                                <input type="number" name='whatsapp' id='whatsapp' placeholder='Enter here' value={transportFormValues.whatsApp} onChange={handleInputChanges}/>
                                {errors.whatsApp && <span className="error">{errors.whatsApp}</span>}
                            </div>
                            <div className="container">
                                <label htmlFor="idDocument">ID Document</label>
                                <input type="file" name='idDocument' accept='.pdf' id='idDocument' value={transportFormValues.idDocument} onChange={handleInputChanges}/>
                                {errors.idDocument && <span className="error">{errors.idDocument}</span>}
                            </div>
                            <div className="container">
                                <label htmlFor="driverLisence">Driver's Lisence</label>
                                <input type="file" name='driverLisence' accept='.pdf' id='driverLisence' value={transportFormValues.driverLisence} onChange={handleInputChanges}/>
                                {errors.driverLisence && <span className="error">{errors.driverLisence}</span>}
                            </div>
                            
                        </div>
                        <div className="trc-bottom-form-middle">
                            <label htmlFor="imageInput">Please upload at least 2 images. The images should be flyers or car images that potential users looking for transport can see.</label>
                            <input type="file" name='images' id="images" accept="image/*" multiple value={transportFormValues.images} onChange={handleInputChanges}/>
                            {errors.images && <span className="error">{errors.images}</span>}
                        </div>
                        <div className="trc-bottom-form-bottom">
                            <p>By applying you agree to <a href="#" target="_blank" rel="noopener noreferrer">Terms & Conditions.</a></p>
                            <button type='submit'>Submit</button>
                        </div>
                    </form>
                </div>


                <div className="transport-right-all">
                    {filteredData.map(item => (
                        <div className="transport-right-all-container" key={item.id}>
                            <div className="img-images">
                                <img src={item.images[0]} alt="Transport photo" />
                            </div>
                            <div className="transport-right-all-container-information">
                                <h2>{item.name}</h2>
                                <p><strong>Driver:</strong> {item.driver}</p>
                                <p><strong>Province:</strong> {item.province}</p>
                                <p style={{ flex: "1" }}><strong>Type:</strong> {item.type}</p>
                                <div className="more-button" onClick={() => handleClick(item.id)}>
                                    <button>View Details</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="transport-right-view">
                    {selectedItem ? (
                        <>
                            <h1>{selectedItem.name}</h1>
                            <div className="img-wrapper">
                                <button className='less' onClick={handlePrev}><FaLessThan /></button>
                                <img src={selectedItem.images[currentIndex]} alt={`transport photo ${currentIndex}`} className="slide-image"/>
                                <button className='greater' onClick={handleNext}><FaGreaterThan /></button>
                            </div>
                            <div className="p-for-information">
                                <p><strong>Driver:</strong> {selectedItem.driver}</p>
                                <p><strong>Province:</strong> {selectedItem.province}</p>
                                <p><strong>Type:</strong> {selectedItem.type}</p>
                                <p><strong>Contacts:</strong> {selectedItem.call}</p>
                                <p><strong>WhatsApp:</strong> {selectedItem.whatsapp}</p>
                            </div>
                        </>
                    ) : (
                        <div className='register-transport'>
                            <h1>Do you have a truck suitable for transport?</h1>
                            <button onClick={handleTrigger}>Apply</button>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}

export default Transport;

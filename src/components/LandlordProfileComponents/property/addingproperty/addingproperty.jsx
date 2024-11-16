import "./addingproperty.scss";
import {DragDropContext, Draggable, Droppable} from 'react-beautiful-dnd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAdd, faSubtract } from '@fortawesome/free-solid-svg-icons';
import { FaWifi, FaBolt } from 'react-icons/fa';
import { GiCctvCamera, GiKitchenTap } from 'react-icons/gi';
import { Provinces, VarsityData } from "../../../../listdata/selectOptionData";
import { AdditionalOffer, RoomType } from "../../../../libraries/AddPropertyData";
import { useState } from "react";
import { IoImage, IoTrash } from "react-icons/io5";


function AddingProperty() {
    const combinedOptions = [
        ...VarsityData[0].University.map((uni) => ({ name: uni})),
        ...VarsityData[1].Colleges.map((college) => ({ name: college}))
    ];
    const [isDeposity, setIsDeposit] = useState(false)
    const handleDeposit = () => {setIsDeposit(!isDeposity)}

    /* UPLOAD, DRAG AND DELETE PHOTOS */
    const [photos, setPhotos] = useState([]);
    const handleUploadPhotos = (e) => {
        const newPhotos = e.target.files;
        setPhotos((prevPhotos) => [...prevPhotos, ...newPhotos])
    }
    const handleDragPhotos = (result) => {
        if (!result.destination) return
        const items = Array.from(photos)
        const [reorderIterm] = items.splice(result.source.index, 1)
        items.splice(result.destination.index, 0, reorderIterm)

        setPhotos(items)
    }
    const handleRemovePhotos = (indexRemove) => {
        setPhotos((prevPhotos) => prevPhotos.filter((_, index) => index !== indexRemove))
    }
    return (
        <form className="adding-property">
            <h1>Publish Your Property.</h1>
            <div className="adding-property-wrapper">
                <div className="adding-property-left">
                    <div className="step1">
                        <h3>Step 1: Tell us about your property</h3>
                        <div className="res_name">
                            <h4>Residence Name.</h4>
                            <input type="text" placeholder="e.g Name Residence" />
                        </div>
                        <h4>Which of these room type best describe your property.</h4>
                        <div className="room-type-bottom">
                            {RoomType.map(item => (
                                <div className="RT_container" key={item.id}>
                                    <div className="Io">{item.icon}</div> <p>{item.label}</p>
                                </div>
                            ))}
                        </div>
                        <h4>Where is the property Located.</h4>
                        <div className="address_location">
                            <div className="top">
                                <label htmlFor="address">Address</label>
                                <input type="text" placeholder="Street address" />
                            </div>
                            <div className="bottom">
                                <div className="bottom_container">
                                    <label htmlFor="province">Province</label>
                                    <select name="province" id="province">
                                        <option value="">Select one:</option>
                                        {Provinces.map((item, index) => (
                                            <option key={index} value={item}>{item}</option>
                                        ))}
                                    </select>
                                </div>
                                <div className="bottom_container">
                                    <label htmlFor="closest campus">Closest Campus</label>
                                    <select className="long" id="closest campus" name="campus">
                                        <option value="">Choose One:</option>
                                        {combinedOptions.map((option, index) => (
                                            <option key={index} value={option.name}>
                                                {option.name}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                                <div className="bottom_container">
                                    <label htmlFor="distance">Distance to Campus</label>
                                    <div className="time-management">
                                        <input type="number" placeholder="Distance"/>
                                        <select name="distance" id="distance">
                                            <option value="minutes">Minutes</option>
                                            <option value="hours">Hour(s)</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <h4>Basics about the property.</h4>
                        <div className="basics">
                            <div className="basic">
                                <span className="total">Total Rooms:</span>
                                <span className="add"><FontAwesomeIcon icon={faSubtract} /></span>
                                <p>0</p>
                                <span className="add"><FontAwesomeIcon icon={faAdd} /></span>
                            </div>
                            <div className="basic">
                                <span className="total">Available Rooms:</span>
                                <span className="add"><FontAwesomeIcon icon={faSubtract} /></span>
                                <p>0</p>
                                <span className="add"><FontAwesomeIcon icon={faAdd} /></span>
                            </div>
                        </div>
                        <h3>Step 2: What does the place offers</h3>
                        <h4>Basics offers.</h4>
                        <div className="basics_offers">
                            <div className="basic-offers-container">
                                <span><FaWifi/>Wifi:</span>
                                <select name="wifi" id="wifi">
                                    <option value="available">Availble</option>
                                    <option value="notAvailble">Not Availble</option>
                                </select>
                            </div>
                            <div className="basic-offers-container">
                                <span><FaBolt/>Electricity:</span>
                                <select name="electrity" id="electrity">
                                    <option value="available">Included</option>
                                    <option value="notIncluded">Not Included</option>
                                </select>
                            </div>
                            <div className="basic-offers-container">
                                <span><GiCctvCamera/>Security:</span>
                                <select name="security" id="security">
                                    <option value="24/7 security">24/7 Security</option>
                                    <option value="Part-time security">Part-time Security</option>
                                    <option value="notSecurity">No Security</option>
                                </select>
                            </div>
                            <div className="basic-offers-container">
                                <span><GiKitchenTap/>Kitchen:</span>
                                <select name="kitchen" id="kitchen">
                                    <option value="each room">Each Room</option>
                                    <option value="shared">Shared kitchen</option>
                                    <option value="notAvailble">No kitchen</option>
                                </select>
                            </div>
                            <div className="basic-offers-container">
                                <span><GiKitchenTap/>Shower:</span>
                                <select name="shower" id="shower">
                                    <option value="each room">Each Room</option>
                                    <option value="shared">Shared Showers</option>
                                    <option value="NotAvailable">No Showers</option>
                                </select>
                            </div>
                        </div>
                        <h4>Additional offers</h4>
                        <div className="additional_offer">
                            {AdditionalOffer.map((item, index) => (
                                <div className="addional_offer_container" key={index}>
                                    <div className="icons-add">{item.icon}</div> <p>{item.label}</p>
                                </div>
                            ))}
                        </div>
                        <h3>Finally: Price and Description</h3>
                        <h4>Description</h4>
                        <textarea name="description" id="description" placeholder="Write any special features that make your property stand out and Unique!"></textarea>
                        <h4>Price</h4>
                        <div className="deposit">
                            <span>Do you require <strong>Deposit?</strong> <input type="checkbox" onChange={handleDeposit}/></span>
                            <div style={isDeposity ? {display: 'flex'} : {display: 'none'}} className="deposit_price">
                                <p>Deposit Price:</p>
                                <span className="inside">R <input type="Number" /></span>
                            </div>
                        </div>
                        <div className="real_price">
                            <span>R</span>
                            <input type="number" />
                        </div>
                    </div>
                </div>
                <div className="adding-property-right">
                    <h2>Property Photos:</h2>
                    <p>Please provide minimum of five(5) photos.</p>
                    <DragDropContext onDragEnd={handleDragPhotos}>
                        <Droppable droppableId="photos">
                            {(provided) => (
                                <div className="photos" {...provided.droppableProps} ref={provided.innerRef}>
                                    {photos.length < 1 && (
                                        <>
                                            <input type="file" id='image' style={{display: 'none'}} accept="image/*" multiple onChange={handleUploadPhotos}/>
                                            <label htmlFor="image" className="alone">
                                                <div className="image-icon"><IoImage/></div>
                                                <p>Upload from your device</p>
                                            </label>
                                        </>
                                    )}
                                    {photos.length >= 1 && (
                                        <>
                                            {photos.map((item, index) => (
                                                <Draggable key={index} draggableId={index.toString()} index={index}>
                                                    {(provided) => (
                                                        <div className="photo" {...provided.draggableProps} {...provided.dragHandleProps}>
                                                            <img src={URL.createObjectURL(item)} alt="Photos" />
                                                            <button type="button" onClick={() => handleRemovePhotos(index)}><IoTrash /></button>
                                                        </div>
                                                    )}
                                                </Draggable>
                                            ))}
                                            <input type="file" id='image' style={{display: 'none'}} accept="image/*" multiple onChange={handleUploadPhotos}/>
                                            <label htmlFor="image" className="many">
                                                <div className="image-icon"><IoImage/></div>
                                                <p>Add more photos</p>
                                            </label>
                                        </>
                                    )}
                                </div>
                            )}
                        </Droppable>
                    </DragDropContext>
                </div>
            </div>
            <div className="sub_button">
                <span>By submitting you agree to our terms and condition:</span>
                <button>Submit</button>
            </div>
        </form>
    )
}

export default AddingProperty;
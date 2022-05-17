import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Contact() {
    
    
    let navigate = useNavigate();

    const [name, setName] = useState('');
    const [mail, setMail] = useState('');
    const [phone, setPhone] = useState('');
    const [mess, setMess] = useState('');


    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log(name);
        console.log(mail);
        console.log(phone);
        console.log(mess);
        navigate("/")
    }
    return (
        <div>
            <section className="page-section cta">
                <div className="container px-4 px-lg-5">
                    <div className="row gx-4 gx-lg-5 justify-content-center">
                        <div className="col-lg-8 col-xl-6 text-center">
                            <h2 className="mt-0">Contact to Us</h2>
                            <hr className="divider" />
                        </div>
                    </div>
                    <div className="row gx-4 gx-lg-5 justify-content-center mb-5">
                        <div className="col-lg-6">
                            {/* to get an API token!*/}
                            <form id="contactForm" data-sb-form-api-token="API_TOKEN" >
                                {/* Name input*/}
                                <div className="form-floating mb-3">
                                    <input value={name} onChange={(e) => setName(e.target.value)} className="form-control" name="fName" id="name" type="text" placeholder="Enter your name..." data-sb-validations="required" data-sb-can-submit="no" />
                                    <label htmlFor="name">Full name</label>
                                    <div className="invalid-feedback" data-sb-feedback="name:required">A name is required.</div>
                                </div>
                                {/* Email address input*/}
                                <div className="form-floating mb-3">
                                    <input value={mail} onChange={(e) => setMail(e.target.value)} className="form-control" name="fEmail" id="email" type="email" placeholder="name@example.com" data-sb-validations="required,email" data-sb-can-submit="no" />
                                    <label htmlFor="email">Email address</label>
                                    <div className="invalid-feedback" data-sb-feedback="email:required">An email is required.</div>
                                    <div className="invalid-feedback" data-sb-feedback="email:email">Email is not valid.</div>
                                </div>
                                {/* Phone number input*/}
                                <div className="form-floating mb-3">
                                    <input value={phone} onChange={(e) => setPhone(e.target.value)} className="form-control" name="fPhone" id="phone" type="tel" placeholder="(123) 456-7890" data-sb-validations="required" data-sb-can-submit="no" />
                                    <label htmlFor="phone">Phone number</label>
                                    <div className="invalid-feedback" data-sb-feedback="phone:required">A phone number is required.</div>
                                </div>
                                {/* Message input*/}
                                <div className="form-floating mb-3">
                                    <textarea value={mess} onChange={(e) => setMess(e.target.value)} className="form-control" name="fMess" id="message" type="text" placeholder="Enter your message here..." style={{ height: '10rem' }} data-sb-validations="required" data-sb-can-submit="no" />
                                    <label htmlFor="message">Message</label>
                                    <div className="invalid-feedback" data-sb-feedback="message:required">A message is required.</div>
                                </div>
                                {/* Submit success message*/}
                                {/**/}
                                {/* This is what your users will see when the form*/}
                                {/* has successfully submitted*/}
                                <div className="d-none" id="submitSuccessMessage">
                                    <div className="text-center mb-3">
                                        <div className="fw-bolder">Form submission successful!</div>
                                        To activate this form, sign up at
                                        <br />
                                        <a href="https://startbootstrap.com/solution/contact-forms">https://startbootstrap.com/solution/contact-forms</a>
                                    </div>
                                </div>
                                {/* Submit error message*/}
                                {/**/}
                                {/* This is what your users will see when there is*/}
                                {/* an error submitting the form*/}
                                <div className="d-none" id="submitErrorMessage"><div className="text-center text-danger mb-3">Error sending message!</div></div>
                                {/* Submit Button*/}
                                <div className="d-grid"><button onClick={(e) => handleSubmit(e)} className="btn btn-primary btn-xl btnContact" id="submitButton" type="submit">Submit</button></div>
                            </form>
                        </div>
                    </div>
                    <div className="row gx-4 gx-lg-5 justify-content-center">
                        <div className="col-lg-4 text-center mb-5 mb-lg-0">
                            <i className="bi-phone fs-2 mb-3 text-muted" />
                            <div>+1 (555) 123-4567</div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}


export default Contact;
import React from "react";
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import FormB from 'react-bootstrap/Form';
import { useState } from "react";
import { contactSuccess } from "./Alerts/Alert";


const Form = () => {

    const minLength = 5;

    const initialState = {
        name: "",
        email: ""
    }

    // const [submitted, setSubmitted] = useState(null);
    const [formData, setFormData] = useState(initialState);

    const handleName = (e) => {
        setFormData(prevState => ({...prevState, name: e.target.value}))
    }

    const handleEmail = (e) => {
        setFormData(prevState => ({...prevState, email: e.target.value}))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(formData)
        contactSuccess(formData.name)
        setFormData(initialState)
        // setSubmitted(<p className="text-center mt-2">Thanks for submitting! We'll contact you soon.</p>)
    }


    return (
        <Container>
            <FormB onSubmit={(e) => handleSubmit(e)}>
                <FormB.Group className="mb-3" controlId="formBasicName">
                    <FormB.Label>Name</FormB.Label>
                    <FormB.Control value={formData.name} autoComplete="off" onChange={e => handleName(e)} minLength={minLength} required type="text" placeholder="Nick Wilde" />
                </FormB.Group>
                <FormB.Group className="mb-3" controlId="formBasicEmail">
                    <FormB.Label>Email address</FormB.Label>
                    <FormB.Control value={formData.email} autoComplete="off" onChange={e => handleEmail(e)} required type="email" placeholder="nick@example.com" />
                </FormB.Group>

                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </FormB>
            {/* { submitted } */}
        </Container>
    );
};

export default Form;

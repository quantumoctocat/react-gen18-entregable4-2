import React, { useState, useEffect } from 'react'
import { Form, Button } from 'semantic-ui-react'
import axios from 'axios'
import { useHistory } from 'react-router'

export default function Update() {
    let history = useHistory()
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [dob, setDob] = useState('')
    const [ID, setID] = useState(null)
    
    const sendDataToAPI = () => {
        axios.put(`https://63408007d1fcddf69cb9d256.mockapi.io/CRUD/${ID}`, {
            firstName,
            lastName,
            email,
            dob
        }).then(() => {
            history.push('/read')
        })
    }

    useEffect(() => {
        setFirstName(localStorage.getItem('firstName'))
        setLastName(localStorage.getItem('lastName'))
        setEmail(localStorage.getItem('email'))
        setDob(localStorage.getItem('dob'))
        setID(localStorage.getItem('ID'))
    }, [])

    return (
        <div>
            <Form>
                <Form.Field>
                    <label>First Name</label>
                    <input name="fName"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        placeholder='First Name' />
                </Form.Field>
                <Form.Field>
                    <label>Last Name</label>
                    <input name="lName"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        placeholder='Last Name'
                    />
                </Form.Field>
                <Form.Field>
                    <label>Email</label>
                    <input name="email" 
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder='Email' 
                    />
                </Form.Field>
                <Form.Field>
                    <label>Date of Birth</label>
                    <input name="dob" 
                    onChange={(e) => setDob(e.target.value)}
                    placeholder='yyyy-mm-dd' 
                    />
                </Form.Field>
                <Button type='submit' onClick={sendDataToAPI}>Update</Button>
            </Form>
        </div>
    )
}

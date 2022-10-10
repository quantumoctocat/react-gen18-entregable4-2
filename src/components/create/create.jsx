import React, { useState } from 'react'
import { Form, Button } from 'semantic-ui-react'
import axios from 'axios'
import { useHistory } from 'react-router'

export default function Create() {
  let history = useHistory()
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [dob, setDob] = useState('')

  const sendDataToAPI = () => {
    axios.post(`https://63408007d1fcddf69cb9d256.mockapi.io/CRUD`, {
      firstName,
      lastName,
      email,
      dob
    }).then(() => {
      history.push('/read')
    })
    window.location.reload()
  }
  return (
    <div>
      <Form>
        <Form.Field>
          <label>First Name</label>
          <input name="fName" 
          onChange={(e) => setFirstName(e.target.value)} 
          placeholder='First Name' />
        </Form.Field>
        <Form.Field>
          <label>Last Name</label>
          <input name="lName" 
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
        <Button type='submit' onClick={sendDataToAPI}>Submit</Button>
      </Form>
    </div>
  )
}

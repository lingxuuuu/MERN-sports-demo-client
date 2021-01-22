import { navigate } from '@reach/router';
import axios from 'axios';
import React from 'react'
import Form from '../components/Form'

function Create() {
    const onSubmitHandler = (e, data) => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/athletes/create', data) //go to create route, pass in the data
             .then(res => navigate('/'))
             .catch(err => console.log(err))
    }

    return (
        <div>
            <h1>Create</h1>
            <Form onSubmitHandler={onSubmitHandler} />
        </div>
    )
}

export default Create

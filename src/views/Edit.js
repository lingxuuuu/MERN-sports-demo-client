import { navigate } from '@reach/router';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import DeleteButton from '../components/DeleteButton'
import Form from '../components/Form'

function Edit({id}) {

    const [athlete, setAthlete] = useState({});
    const [loaded, setLoaded] = useState(false);

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/athletes/${id}`)
             .then(res=> {
                setAthlete(res.data)
                setLoaded(true)
             })
             .catch(err => console.log(err))
    })

    const onSubmitHandler = (e, data) => {
        e.preventDefault();
        axios.put(`http://localhost:8000/api/athletes/update/${id}`, data) //go to create route, pass in the data
             .then(res => navigate('/'))
             .catch(err => console.log(err))
    }

    return (
        <div>
            <h1>Edit {athlete.firstName} {athlete.lastName}</h1>
            {loaded && <Form 
                          onSubmitHandler= {onSubmitHandler}
                          initialFirstName={athlete.firstName}
                          initialLastName={athlete.lastName}
                          initialTeam={athlete.team}
                          initialSport={athlete.sport}
                          />} {/*form will pop out when the loaded is true*/}
            <DeleteButton />
        </div>
    )
}

export default Edit

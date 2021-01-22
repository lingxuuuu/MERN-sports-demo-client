import React, { useEffect, useState } from 'react';
import DeleteButton from '../components/DeleteButton';
import axios from 'axios';


function Detail({id}) {

    const [athlete, setAthlete] = useState ({});

    useEffect ( () => {
        axios.get(`http://localhost:8000/api/athletes/${id}`) 
             .then( res => {
                console.log(res.data)
                setAthlete(res.data)
             })
             .catch( err => console.log(err))
    }, []);

    return (
        <div>
            <h1>Detail</h1>
            <p>Name: {athlete.firstName}{athlete.lastName}</p>
            <p>Sport: {athlete.sport}</p>
            <p>Team: {athlete.team}</p>
            <DeleteButton id={athlete._id} />
        </div>
    )
}

export default Detail

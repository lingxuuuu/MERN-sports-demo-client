import { Link } from '@reach/router';
import React, { useEffect, useState } from 'react';
import DeleteButton from '../components/DeleteButton';
import axios from 'axios';


function Index() {

    const [athletes, setAthletes] = useState([]);

    useEffect ( () => {
        axios.get("http://localhost:8000/api/athletes") //get all the athletes 
             .then( res => {
                console.log(res.data)
                setAthletes(res.data)
             })
             .catch( err => console.log(err))
    }, []);
    
    console.log(athletes)
    
    return (
        <div>
            <h1>Index</h1>
            <Link to ={'/create'}>Add an athlete</Link>
            <ul>
                {athletes.map( (athlete, idx) => 
                     <li key={idx} > 
                        <Link to = {'/' + athlete._id}> {athlete.firstName} {athlete.lastName} </Link> | 
                        <Link to = {'/edit/' + athlete._id}> Edit </Link> | 
                        <DeleteButton id={athlete._id} />   
                     </li>
                )}
            </ul>
        </div>
    )
}

export default Index;

import { navigate } from '@reach/router'
import axios from 'axios'
import React from 'react'

function DeleteButton({id}) {
    
    const onClickHandler = (e) => {
        e.preventDefault();
        axios.delete(`http://localhost:8000/api/athletes/delete/${id}`)
             .then(res => navigate('/'))
             .catch(err => console.log(err))
    }

    return (
        <button onClick={onClickHandler}>Delete</button>
    )
}

export default DeleteButton

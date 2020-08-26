import React, {useState} from 'react';
// import { axiosWithAuth } from '../utils/axiosWithAuth';

const AddEvent = () => {
    const [event, setEvent] = useState({
        location: '',
        time: '',
        date: '',
        occassion: ''
    })

    const handleChanges = (e) => {
        setEvent({...event, [e.target.name]: e.target.value})
    }

    const handleSubmit = (e) => {
        axiosWithAuth()
            .post('', event)
            .then(res => {
                console.log(res.data)
            })
            .catch(err => console.log(err))
    }

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor='occassion'>Occassion</label>
                <input
                    type='text'
                    name='occassion'
                    placeholder='Occassion'
                    value={event.occassion}
                    onChange={handleChanges}
                ></input>
                <label htmlFor='location'>Location</label>
                <input
                    type='text'
                    name='location'
                    placeholder='Location'
                    value={event.location}
                    onChange={handleChanges}
                ></input>
                <label htmlFor='date'>Date</label>
                <input
                    type='text'
                    name='date'
                    placeholder='Date'
                    value={event.date}
                    onChange={handleChanges}
                ></input>
                <label htmlFor='time'>Time</label>
                <input
                    type='text'
                    name='time'
                    placeholder='Time'
                    value={event.time}
                    onChange={handleChanges}
                ></input>

                <button>Create Event</button>
            </form>
        </div>
    )


}

export default AddEvent;


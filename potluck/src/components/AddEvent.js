import React, {useState} from 'react';
// import { axiosWithAuth } from '../utils/axiosWithAuth';

const AddEvent = () => {
    const [event, setEvent] = useState({
        location: '',
        time: '',
        date: '',
        occassion: '',
        username: '',
        food: '',
        rsvp: false
    })

    const handleChanges = (e) => {
        setEvent({...event, [e.target.name]: e.target.value})
    }

    // const handleSubmit = (e) => {
    //     axiosWithAuth()
    //         .post('', event)
    //         .then(res => {
    //             console.log(res.data)
    //         })
    //         .catch(err => console.log(err))
    // }

    return(
        <div className='addform'>
            <form className='form'>
                <label className='label' htmlFor='username'>User Name</label>
                <input
                    className='input'
                    type='text'
                    name='username'
                    placeholder='User Name here'
                    value={event.username}
                    onChange={handleChanges} />
                <label className='label' htmlFor='occassion'>Occassion</label>
                <input
                    className='input'
                    type='text'
                    name='occassion'
                    placeholder='Occassion'
                    value={event.occassion}
                    onChange={handleChanges} />
                <label className='label' htmlFor='location'>Location</label>
                <input
                    className='input'
                    type='text'
                    name='location'
                    placeholder='Location'
                    value={event.location}
                    onChange={handleChanges} />
                <label className='label' htmlFor='date'>Date</label>
                <input
                    className='input'
                    type='text'
                    name='date'
                    placeholder='Date'
                    value={event.date}
                    onChange={handleChanges} />
                <label className='label' htmlFor='time'>Time</label>
                <input
                    className='input'
                    type='text'
                    name='time'
                    placeholder='Time'
                    value={event.time}
                    onChange={handleChanges} />
                <label className='label' htmlFor='food'>Guests Will Bring</label>
                <textarea className='Txtarea'
                    type='text'
                    name='food'
                    placeholder='Food to Bring'
                    value={event.food}
                    onChange={handleChanges} />
                    

                <button className='btn'>Create Event</button>
            </form>
        </div>
    )


}

export default AddEvent;


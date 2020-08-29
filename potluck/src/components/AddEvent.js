import React, {useState} from 'react';
// import { axiosWithAuth } from '../utils/axiosWithAuth';

const AddEvent = () => {
    const [event, setEvent] = useState({
        location: '',
        time: '',
        date: '',
        occassion: '',
        name: '',
        email:'',
        food: false,
        beverages: false,
        dessert:false,
        rsvp: false
    })

    const handleChanges = (e) => {
        setEvent({...event, [e.target.name]: e.target.value})
    }

    const handleCheckBoxes = (e) => {
        setEvent({ ...event, [e.target.name]: e.target.checked})
    }

    const handleCreate = e => {
        e.preventDefault();
    }

    const handleEdit =e => {
        e.preventDefault();
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
                <label className='label' htmlFor='name'> Name</label>
                <input
                    className='input'
                    type='text'
                    name='name'
                    placeholder=' Name here'
                    value={event.name}
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
                <label className='label' htmlFor='bring'>Guests Will Bring</label>
                <label  for="bev">Beverages
  <input type="checkbox" id="bev" name="bev" value= {event.beverages} onChange={handleCheckBoxes} />
                </label>
                <label  for="food">Food(main course & sides)
  <input type="checkbox" id="food" name="food" value={event.food} onChange={handleCheckBoxes}/>
                </label>
                <label  for="des">Desserts
  <input type="checkbox" id="des" name="des" value={event.dessert} onChange={handleCheckBoxes}/>
                </label>
                <label className='label'  for="rsvp">Would you like your guests to RSVP?
  <input type="checkbox" id="rsvp" name="rsvp" value="rsvp" onChange={handleCheckBoxes}/>
                </label>
                { (event.rsvp === true) ?
                 (<label className='label' htmlFor='email'>Email
                 <input
                    className='input'
                    type='text'
                    name='email'
                    placeholder='Email for RSVP contact'
                    value={event.email}
                    onChange={handleChanges} />
                    </label>) : (null) }
                <button className='btn' onClick={handleCreate}>Create Event</button>
                <button className='btn' onClick={handleEdit}>Edit Event</button>
            </form>
        </div>
    )


}

export default AddEvent;


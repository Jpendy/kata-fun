/* eslint-disable keyword-spacing */
/* eslint-disable max-len */
/* eslint-disable react/prop-types */
/* eslint-disable indent */
import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

export default function Appointments({ match }) {
    //used to push user to confirmation page on submit
    const history = useHistory();

    //appointments state
    const [appointments, setAppointments] = useState([]);

    //form state
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [modelYear, setModelYear] = useState('');
    const [make, setMake] = useState('');
    const [model, setModel] = useState('');


    useEffect(() => {

        fetch(`http://localhost:2000/appointments/${match.params.id}`)
            .then(res => res.json())
            .then(appointments => setAppointments(appointments));

    }, []);

    const handleClick = (id) => {

        const confirmation = confirm('Are you sure you want to book?');

        if (confirmation) {

            if (!email || !name || !model || !modelYear || !make) {
                console.log('fill out all fields');
                return;
            }

            fetch(`http://localhost:2000/appointments/${id}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ model, email, make, modelYear, name })
            })
                .then(res => res.json())
                .then(res => {

                    localStorage.setItem('BOOKING', JSON.stringify(res));
                    history.push('/confirmation');
                });
        }
    };

    const handleChange = ({ target }) => {
        if (target.name === 'name') setName(target.value);
        if (target.name === 'make') setMake(target.value);
        if (target.name === 'modelYear') setModelYear(target.value);
        if (target.name === 'email') setEmail(target.value);
        if (target.name === 'model') setModel(target.value);
    };

    const appointmentsList = appointments.map((appointment, i) => {

        const parsedDate = Date.parse(appointment.apptStartTime);
        const date = new Date(parsedDate);
        const stringDate = date.toDateString();

        return (
            <li key={i} >
                <h3>{appointment.serviceName}</h3>
                <h2> Start Time: {stringDate}</h2>

                <button onClick={() => handleClick(appointment.id)} >Book Appointment</button>
            </li>
        );
    });

    return (
        <>
            <input type="text" placeholder="email" name="email" onChange={handleChange} />
            <input type="text" placeholder="name" name="name" onChange={handleChange} />
            <input type="text" placeholder="model" name="model" onChange={handleChange} />
            <input type="text" placeholder="modelYear" name="modelYear" onChange={handleChange} />
            <input type="text" placeholder="make" name="make" onChange={handleChange} />

            <ul>
                {appointmentsList}
            </ul>
        </>
    );
}

// apptStartTime: "2021-03-10T18:27:21.024Z"
// id: "53130f91-e93e-4718-ad30-059dc05d691e"
// serviceId: 2
// serviceName: "Oil Chang

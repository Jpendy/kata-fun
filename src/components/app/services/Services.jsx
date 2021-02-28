/* eslint-disable indent */
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Services() {

    const [services, setServices] = useState([]);

    useEffect(() => {

        fetch('http://localhost:2000/services')
            .then(res => res.json())
            .then(services => setServices(services));

    }, []);


    const servicesList = services.map((service, i) => (
        <li key={i}>
            <Link to={`/appointments/${service.id}`} >
                <h2>{service.serviceName}</h2>
            </Link>
            <h2>Service Duration: {service.serviceDuration} seconds</h2>
        </li>
    ));

    return (
        <ul>
            {servicesList}
        </ul>
    );
}

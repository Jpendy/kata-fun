/* eslint-disable max-len */
/* eslint-disable indent */
import React, { useState } from 'react';

export default function Confirmation() {

    const [booking, setBooking] = useState(JSON.parse(localStorage.getItem('BOOKING') || {}));


    console.log(booking);

    return (
        <div>
            <h2>Your booking is confirmed!!</h2>
            <h3>{booking.serviceName}</h3>
            <h3>Start Time: {booking.apptStartTime}</h3>
            <h3>Email: {booking.email}</h3>
        </div>
    );
}

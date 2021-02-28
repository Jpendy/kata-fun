/* eslint-disable indent */
import React from 'react';
import { useHistory } from 'react-router-dom';

export default function LangingPage() {

    const history = useHistory();

    const handleClick = () => {
        history.push('/services');
    };

    return (
        <div>
            <h3>Hello welcome to your automotive services portal!!</h3>
            <button onClick={handleClick} >Get Started</button>
        </div>
    );
}

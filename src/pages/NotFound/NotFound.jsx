import './NotFound.css'

import React from 'react';
import {useNavigate} from "react-router-dom";



const NotFound = () => {

    const navigate=useNavigate();
    return (
        <div className="not-found-container">
            <div className="not-found-content">
                    <h1 className="not-found-title">404</h1>
                    <h2 className="not-found-subtitle">
                        Oops! Page Not Found
                    </h2>
                    <p className="not-found-message">
                        The Page you're looking for does not exist or has been moved
                    </p>
                    <button className="not-found-button"
                    onClick={()=>navigate('/')}
                    >
                        Go to Homepage</button>
                </div>

        </div>
    );
};

export default NotFound;
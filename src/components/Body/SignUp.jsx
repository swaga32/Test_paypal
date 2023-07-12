import React, {useEffect, useState} from 'react';
import {SignUpTicker} from './SignUpTicker';

export function SignUp () {
    const [count, setCount] = useState(400000000);

    useEffect(() => {
        const timeout = setTimeout(() => setCount(count + 1), 1000);
        return () => {
            clearTimeout(timeout);
        };
    }, [count]);

    return (
        <div id="SignUp" className="section">
            <h1>
                Join the millions of users worldwide trusting PayPal every day
            </h1>
            <div id="SignUpLink">
                <a href="https://www.paypal.com/us/webapps/mpp/account-selection">
                    Sign Up for Free
                </a>
            </div>
            <SignUpTicker count={count} />
        </div>
    );
}
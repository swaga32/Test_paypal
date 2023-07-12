import {BlueArrow} from './BlueArrow';
import TouchFreeImg from '../../images/TouchFreeImg.jpg';

export function TouchFreePayments () {
    return (
        <div id="TouchFreePayments" className="section">
            <img src={TouchFreeImg} alt="A person scans a PayPal QR code with their phone"></img>
            <h2 className="header">
                Touch-free payments
            </h2>
            <p>
                Leave the cash and cards at home. When it comes to paying with the app, the only thing you'll need to reach for is your phone.
            </p>
            <a className="link" href="https://www.paypal.com/us/digital-wallet/ways-to-pay/pay-with-qr-code">
                Learn more about PayPal QR codes
                <span>
                    <BlueArrow />
                </span>
            </a>
        </div>
    )
}
import CryptoImg from '../../images/CryptoImg.jpg';
import {BlueArrow} from './BlueArrow';

export function Crypto () {
    return (
        <div className="section" id="Crypto">
            <img src={CryptoImg} alt="A woman buys an item by spending cryptocurrency on her phone"></img>
            <h2 className="header">
                Check out with crypto
            </h2>
            <p>
                Access a new way to pay. Sign up for an account and spend crypto at millions of online stores with PayPal.
            </p>
            <p className="secondaryParagraph">
                Checking out with crypto is a taxable transaction. Fees and exchange rates will apply. Buying and selling cryptocurrency is subject to a number of risks and PayPal does not make any recommendations. Consult your tax advisor. Merchants are paid in fiat currency.
            </p>
            <a className="link" href="https://www.paypal.com/signin?returnUri=https%3A%2F%2Fwww.paypal.com%2Fmyaccount%2Fcrypto&state=%2F">
                Sign up
                <BlueArrow />
            </a>
        </div>
    );
}
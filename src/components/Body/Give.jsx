import {BlueArrow} from './BlueArrow';
import GiveImg from '../../images/GiveImg.jpg';

export function Give () {
    return (
        <div className="section" id="Give">
            <img src={GiveImg} alt="Two people on opposites sides of a globe smile at each other. A heart hovers above the globe and both people touch the heart."></img>
            <h2 className="header">
                Give with PayPal
            </h2>
            <p>
                Make a difference by supporting causes and crowdfunding campaigns close to home and heart.
            </p>
            <a className="link" href="https://www.paypal.com/us/digital-wallet/send-receive-money/giving">
                Give through the app
                <span>
                    <BlueArrow />
                </span>
            </a>
        </div>
    )
}
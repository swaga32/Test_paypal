import PayIn4Img from '../../images/PayIn4Img.webp';
import {BlueArrow} from './BlueArrow';

export function PayIn4 () {
    return (
        <div id="PayIn4" className="section">
            <img src={PayIn4Img} alt="Screenshot of PayIn4 App"></img>
            <h2 className="header">
                Buy now, pay later with Pay in 4
            </h2>
            <p>
                Want something now but the sale ends before payday? Choose Pay in 4 at checkout with millions of online stores and split the cost into 4 interest-free payments.
            </p>
            <a className="link" href="https://www.paypal.com/us/digital-wallet/ways-to-pay/buy-now-pay-later">
                Learn how to Pay in 4
                <BlueArrow />
            </a>
        </div>
    )
}
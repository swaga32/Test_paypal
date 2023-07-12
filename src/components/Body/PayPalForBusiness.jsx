import {CallToActionLink} from './BlueArrow';

//why can't i just make the src the file path? Why do I have to import it?
export function PayPalForBusiness () {
    return(
        <div id="PayPalForBusiness" className="section">
            <div>
                <h2>
                    Looking for PayPal for Business?
                </h2>
                <CallToActionLink href="https://www.paypal.com/us/business" className="some-cool-selector">
                    PayPal for Business
                </CallToActionLink>
            </div>
        </div>
    )
}
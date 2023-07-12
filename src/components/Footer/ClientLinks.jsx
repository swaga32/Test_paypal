import USFlagLogo from '../../images/USFlagLogo.png';

export function ClientLinks () {
    return (
        <div id="ClientLinks">
        <img src={USFlagLogo} alt="country flag"></img>
        <nav>
            <a href="https://www.paypal.com/us/smarthelp/home">Help</a>
            <a href="https://www.paypal.com/us/smarthelp/contact-us">Contact</a>
            <a href="https://www.paypal.com/us/webapps/mpp/paypal-fees">Fees</a>
            <a href="https://www.paypal.com/us/webapps/mpp/paypal-safety-and-security">Security</a>
            <a href="https://www.paypal.com/us/webapps/mpp/mobile-apps">Apps</a>
            <a href="https://www.paypal.com/us/webapps/mpp/shopping-selection">Shop</a>
            <a href="https://www.paypal.com/us/webapps/mpp/enterprise">Enterprise</a>
            <a href="https://www.paypal.com/us/business/platforms-and-marketplaces">Partners</a>
            {/* Add popup */}
            <div>Feedback</div>
        </nav>
        </div>
        );
}
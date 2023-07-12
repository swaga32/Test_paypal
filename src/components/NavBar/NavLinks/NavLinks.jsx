import hamburgerLogo from '../../../images/pp-hamburger-logo.svg';
import PPLogo from '../../../images/paypal-nav-logo.svg';

import './NavLinks.css';

/*I got stuck because the images would disappear if I did
not add text to the node inside the anchor tags. I added a display: block to CSS and it worked.
This has to do with in-line styling. Why?
*/

export function NavLinks () {
    return (
        <div id="NavLinks">
            <a href="/">
                <img src={hamburgerLogo} alt="More Options"></img>
            </a>
            <a href="/" aria-label="homepage">
                <img src={PPLogo} alt="Homepage"></img>
            </a>
        </div>
    );
}
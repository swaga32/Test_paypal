import { ClientLinks } from './ClientLinks';
import {CorporateLinks} from './CorporateLinks';
import { LegalLinks } from './LegalLinks';

export function Footer () {
    return (
        <div id="Footer" className="section">
            <ClientLinks />
            <hr></hr>
            <CorporateLinks />
            <hr></hr>
            <LegalLinks />
        </div>
    );
}
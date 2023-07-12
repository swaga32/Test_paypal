import {NavLinks} from './NavLinks/NavLinks';
import { LoginSignup } from './LoginSignup';

import styles from './NavBar.module.css';

export function NavBar () {
    return (
        <div className={styles.josh}>
            <nav>
                <NavLinks />
                <LoginSignup />
            </nav>
            <hr />
        </div>
    );
}
// import {NewApp} from './NewApp';
import { RewardSignUp } from './RewardSignUp';
import {PayPalForBusiness} from './PayPalForBusiness';
import {PayIn4} from './PayIn4';
import {Crypto} from './Crypto';
import {TouchFreePayments} from './TouchFreePayments';
import {SendMoney} from './SendMoney';
import {Give} from './Give';
import {Brands} from './Brands';
import {SignUp} from './SignUp';
import {Footnote} from './Footnote';

export function Body () {
    return (
        <div>
            {/* <NewApp /> */}
            <RewardSignUp />
            <PayPalForBusiness />
            <PayIn4 />
            <Crypto />
            <TouchFreePayments />
            <SendMoney />
            <Give />
            <Brands />
            <SignUp />
            <Footnote />
        </div>
    );
}
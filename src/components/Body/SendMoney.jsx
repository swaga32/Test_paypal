import {BlueArrow} from './BlueArrow';
import SendMoneyImg from '../../images/SendMoneyImg.jpg';

export function SendMoney () {
    return (
        <div id="SendMoney" className="section">
            <img src={SendMoneyImg} alt="screenshot of the app when a user sends money to another user"></img>
            <h2 className="header">
                Express yourself when you send money
            </h2>
            <p>
                Explore creative ways to split the bill or send money with a friendly message, colorful theme, GIFs, and more.<sup>1</sup>
            </p>
            <a className="link" href="https://www.paypal.com/us/digital-wallet/send-receive-money/send-money">
                Send money now
                <span>
                    <BlueArrow />
                </span>
            </a>
        </div>
    )
}
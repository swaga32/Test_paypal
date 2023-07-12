import RewardSignUpImg from '../../images/RewardSignUpImg.webp';

export function RewardSignUp () {
    return (
        <div id="RewardSignUp">
            <h1>You could earn a $5 reward</h1>
            <p>Sign up for an account, adding a payment method at the same time. Then, when you spend $10 or more, a $5 reward will be applied at checkout.</p>
            <a href="https://www.paypal.com/us/webapps/mpp/campaigns/nna/signup-offer10">Get my $5 reward</a>
            <p>Offer may be cancelled or modified at any time.</p>
            <p>Reward expires 30 days from sign up. Terms apply</p>
            <img src={RewardSignUpImg} alt="Man Receives 5 Dollars"></img>
        </div>
    );
}
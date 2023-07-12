import blueArrow from '../../images/blue-arrow.svg';

export function BlueArrow () {
    return <img id="blueArrow" src={blueArrow} alt="blue arrow" />;
}

export function CallToActionLink (props) {
    return (
        <a href={props.href} className={props.className}>
            {props.children}
            <img id="blueArrow" src={blueArrow} alt="blue arrow" />
        </a>
    )
}
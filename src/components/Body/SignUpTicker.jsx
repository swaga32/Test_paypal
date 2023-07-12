export function SignUpTicker (props) {
    const count = props.count + ''; 
    const tickerNumbers = [];
    let key = 0;
    for (let i = 0; i < count.length; i = i + 1) {
        tickerNumbers.push(count[i]);
    }

    return (
        <div id="SignUpTicker">
            {tickerNumbers.map((number) => {
                key = key + 1;
                return (
                    <div key={key}>{number}</div>
                );
            })}
        </div>
    );
}
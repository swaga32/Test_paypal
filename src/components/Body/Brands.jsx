import huluLogo from '../../images/hulu-logo.webp';
import grubHubLogo from '../../images/grubhub-logo.webp';
import potteryBarnLogo from '../../images/potterybarn-logo.webp';
import spotifyLogo from '../../images/spotify-logo.webp';
import ultaBeautyLogo from '../../images/ultra-logo.webp';
import grouponLogo from '../../images/groupon-logo.webp';

export function Brands () {
    return (
        <div id="Brands" className="section">
            <h1>
                Check out with millions of brands you love
            </h1>
            <div id="grid">
                <img src={huluLogo} alt="Hulu"></img>
                <img src={grubHubLogo} alt="GrubHub"></img>
                <img src={potteryBarnLogo} alt="Pottery Barn"></img>
                <img src={spotifyLogo} alt="Spotify"></img>
                <img src={ultaBeautyLogo} alt="Ulta Beauty"></img>
                <img src={grouponLogo} alt="Groupon"></img>
            </div>
        </div>
    );
}
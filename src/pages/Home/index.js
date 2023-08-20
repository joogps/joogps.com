import { Link } from 'react-router-dom';
import hero from '../../images/Hero.jpg';

function Home() {
    return (
        <section class="content">
            <section class="hero">
                <div class="item">
                    <div class="text">
                        <h1 class="hi"> hi!! </h1>
                        <p> welcome! i'm joao and i build stuff sometimes.
                            <br/>
                            <a href="https://twitter.com/joogps">tell me more</a>
                        </p>
                    </div>
                    <div class="image">
                        <img src={hero}/>
                    </div>
                </div>
            </section>
            
            <section class="subviews">
                <Link to="http://magic.localhost:3000" class="item subview-1">
                <div>
                    <p> A great drawing app for the Mac.</p>
                    <div>
                    {/* <a href="https://apps.apple.com/us/app/magic-drawing-and-ai/id1581223559?mt=12&amp;itsct=apps_box_badge&amp;itscg=30200" style="display: inline-block; overflow: hidden; border-top-left-radius: 13px; border-top-right-radius: 13px; border-bottom-right-radius: 13px; border-bottom-left-radius: 13px; width: 250px; height: 83px;">
                        <img src="https://tools.applemediaservices.com/api/badges/download-on-the-mac-app-store/black/en-us?size=250x83&amp;releaseDate=1628985600&h=7880b0b495ada896eb4c0331158b6189" alt="Download on the Mac App Store" style="border-top-left-radius: 13px; border-top-right-radius: 13px; border-bottom-right-radius: 13px; border-bottom-left-radius: 13px; width: 250px; height: 83px;"/>
                        
                    </a> */}
                </div>
                </div>
                </Link>
                <div class="item subview-2">
                    <h2>  WWDC <br/> Swift Student Challenge </h2>
                    <p> i was part of this very cool thing in 2020 and 2021.
                        <br/>
                    </p>
                </div>
            </section>
        </section>
    );
}

export default Home;
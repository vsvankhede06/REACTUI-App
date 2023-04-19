import React from 'react'
import vg from "../assets/2.webp"
import { AiFillGoogleCircle, AiFillAmazonCircle, AiFillYoutube, AiFillInstagram } from "react-icons/ai"



const Home = () => {
    return (
        <>
            <div className='home' id = 'home'>
                <main>
                    <h1>
                    lobster
                    </h1>
                    <p>
                        Solution to all your problems
                    </p>
                </main>
            </div>
            <div className='home2' id = "">
                <img src={vg} alt='Graphics' />
                <div>
                    <p>
                        we pride ourselves on being the ultimate solution for all your tech-related troubles.
                        With our expertise and cutting-edge technology, we are confident in our ability to resolve any issues you may encounter.
                        Our team of skilled professionals is dedicated to providing top-notch service and ensuring your complete satisfaction with every interaction.
                        Say goodbye to frustrating tech problems and hello to seamless, hassle-free experiences with our exceptional support.
                    </p>
                </div>
            </div>

            <div className='home3' id = "about">
                <div>
                    <h1>
                        Who we are?
                    </h1>
                    <p>
                        In the world of technology, there's nothing quite as frustrating as encountering a tech problem that leaves you scratching your head in confusion.
                        Whether it's a glitchy computer, a finicky software program, or a stubborn device that just won't cooperate, it can be tempting to throw in the towel and give up.
                        But fear not, for we are here to save the day! Our team of tech experts is armed with the latest knowledge and cutting-edge technology to tackle any problem that comes our way. From the smallest bug to the most complex system failure,
                        we are confident in our ability to provide the ultimate solution for all your tech-related troubles.
                        So, if you're tired of dealing with frustrating tech problems, trust us to be your one and only solution. We promise to provide exceptional support and a few laughs along the way. Say goodbye to tech troubles and hello to a brighter, smoother tech future!
                    </p>
                </div>
            </div>

            <div className='home4' id = "brands">
                <div>
                    <h1>
                        Brands
                    </h1>
                    <article>

                        <div style={{
                            animationDelay: "0.3s"
                        }}>
                            <AiFillGoogleCircle />
                            <p>Google</p>
                        </div>

                        <div style={{
                            animationDelay: "0.5s"
                        }}>
                            <AiFillAmazonCircle />
                            <p>Amazon</p>
                        </div>

                        <div style={{
                            animationDelay: "0.7s"
                        }}>
                            <AiFillYoutube />
                            <p>Youtube</p>
                        </div>

                        <div style={{
                            animationDelay: "0.7s"
                        }}>
                            <AiFillInstagram />
                            <p>Instagram</p>
                        </div>

                    </article>
                </div>
            </div>
        </>
    )
}

export default Home

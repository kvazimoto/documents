import './DefaultHeroSection.css'
import img from '../../app/images/start-with1.png'

export default function DefaultHeroSection(props) {
    return(
        <>
            <section className="default-hero-section default-sections-properties default-hero-section-media">

                {props.variation2 
                    ?
                        <>
                            <div className="default-hero-section-top-content-v2">

                                <div className="default-hero-section-top-content-left-v2">
                                    <h1>{props.title1}</h1>
                                    <h2>{props.title2}</h2>
                                </div>

                                <div className="default-hero-section-top-content-right-v2">
                                    <img src={img} alt="" />
                                </div>

                            </div>
                        </>
                    :
                        <>
                            <div className="default-hero-section-top-content">

                                <div className="default-hero-section-top-content-left">
                                    <h1>{props.title1}</h1>
                                </div>

                                <div className="default-hero-section-top-content-right">
                                    <h2>{props.title2}</h2>
                                </div>

                            </div>
                        </>
                }

                

            </section>
        </>
    )
}
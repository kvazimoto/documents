import './MiniAboutTextBlock.css'
import img from '../../../app/images/svg/star.svg'

export default function MiniAboutTextBlock(props) {
    const pr = props.parag

    return(
        <>
            <div className="mini-about-text-block">
                <div className="mini-about-text-block-title">
                    <h1>{props.title}</h1>
                </div>

                <div className="mini-about-text-block-content">
                    {pr.map((p, i) =>(
                        <div key={i} className="mini-about-text-block-content-punct">                     
                                {/*<img src={img} alt="" /> */}
                                <p>{p}</p>                       
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}
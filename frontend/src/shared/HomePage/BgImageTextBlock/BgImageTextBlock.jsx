import './BgImageTextBlock.css'
import img from '../../../app/images/svg/light.svg'

export default function BgImageTextBlock(props) {
    const punct = props.punct

    return(
        <>
            {
            !props.without_img ? 

                <div className={`background-image-or-color-text-block ${props.image_class}`}>
                    <div className="background-image-or-color-text-block-text-container">
                        <h1>{props.title}</h1>
                        <p>{props.text}</p>

                        {props.url ? <a href="#">Смотреть примеры</a> : <></>}
                    </div>
                </div> : 
                
                <div className={`stats-background-color-text-block ${!props.white ? 'stats-background-color-text-block-blue' : ''}`}>
                    <div className="stats-background-color-text-block-big-title">
                        {props.white ?
                            <h1>{props.title}</h1>
                        :
                            <h2>{props.mini_title}</h2>
                        }
                        
                    </div>

                    <div className="stats-background-color-text-block-text-con">

                        {props.white ? 
                            <p className='stats-background-color-text-block-text-con-white'>{props.text}</p>
                        : 
                            (
                                punct?.map((p, i) => (
                                    <div key={i} className="stats-background-color-text-block-text-con-punct">
                                        <img src={img} alt="" />
                                        <p>{p}</p>
                                    </div>
                                ))
                            )
                        }
                    </div>
                </div>
            
             }
        </>
    )
}
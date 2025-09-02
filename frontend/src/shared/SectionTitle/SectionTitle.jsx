import './SectionTitle.css'

export default function SectionTitle(props) {
    return(
        <>
            <div className="default-section-title-block">
                <h1>{props.title1} <br /> {props.title2}</h1>
                <p>{props.mini_title1}<br />{props.mini_title2} {props.mini_title3 ? <><br />{props.mini_title3}</> : <></>}</p>
            </div>
        </>
    )
}
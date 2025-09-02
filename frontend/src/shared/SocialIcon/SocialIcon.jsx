import './SocialIcon.css'

export default function SocialIcon(props) {
    return(
        <>
            <a href={props.url} className="default-social-icon">
                <img src={props.img} alt="" />
            </a>
        </>
    )
}
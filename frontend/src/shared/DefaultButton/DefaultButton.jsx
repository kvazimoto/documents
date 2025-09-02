import './DefaultButton.css'
import { Link } from 'react-router-dom'

export default function DefaultButton(props) {
    return(
        <>
            <Link className={`default-button ${props.cls}`} to={props.url}>{ props.text }</Link>
        </>
    )
}
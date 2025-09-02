import './HelpForWorkTextBox.css'

export default function HelpForWorkTextBox(props) {
    return(
        <>
            <div className="help-for-work-text-box">
                <img src={props.img} alt="" />
                <div className="help-for-work-text-box-text">
                    <p>{props.text1}</p>
                    <p>{props.text2}</p>
                </div>
            </div>
        </>
    )
}
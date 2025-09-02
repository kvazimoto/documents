import './Footer.css'
import logo from '../../app/images/svg/logo.svg'
import tg_logo from '../../app/images/svg/telegram-icon.svg'
import SocialIcon from '../../shared/SocialIcon/SocialIcon'

export default function Footer() {
    return(
        <>
            <footer id='footer' className="main-footer">
                <div className="main-footer-logo">
                    <img src={logo} alt="" />
                </div>

                <div className="main-footer-contacts">
                    <div></div>
                    <div className='main-footer-contacts-container'>
                        <ul>
                            <li><a href="https://t.me/statum_support">@statum_support</a></li>
                            <li><a href="mailto:statum.sup@gmail.com">statum.sup@gmail.com</a></li>
                        </ul>

                        <div className="main-footer-contacts-social">
                            <SocialIcon img={tg_logo} url='https://t.me/statum_support' />
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}
import './HelpForWork.css'
import SectionTitle from '../../../shared/SectionTitle/SectionTitle'
import HelpForWorkTextBox from '../../../shared/HomePage/HelpForWorkTextBox/HelpForWorkTextBox'
import DefaultButton from '../../../shared/DefaultButton/DefaultButton'
import svg1 from '../../../app/images/svg/n_1.svg'
import svg2 from '../../../app/images/svg/n_2.svg'
import svg3 from '../../../app/images/svg/n_3.svg'

export default function HelpForWork() {
    return(
        <>
            <section className="help-for-work-home-page">
                <SectionTitle 
                    title1='Улучшайте качество жизни'
                    title2='вместе с STATUM'
                    mini_title1='Помогаем найти работу в ЕС, ОАЭ,'
                    mini_title2='Америке и ещё 10+ странами, с нами вы под защитой'
                />

                <div className="help-for-work-home-page-content">
                    <HelpForWorkTextBox text1='Живите спокойно, а не в страхе быть' text2='пойманным или погибшим на фронте, STATUM поможет вам с этим.' img={svg1} />
                    <HelpForWorkTextBox text1='Получите высокооплачиваемую работу за границей,' text2='без знания языка и профессиональных навыков.' img={svg2} />
                    <HelpForWorkTextBox text1='Если вы приняли решение остаться в стране, то мы поможем вам получить официальную отсрочку или бронь,' text2='что бы ваша жизнь была комфортнее и спокойнее.' img={svg3} />
                </div>

                <DefaultButton text='Узнать подробнее' url='https://t.me/statum_support' />
            </section>
        </>
    )
}
import './HeroSection.css'
import DefaultButton from '../../../shared/DefaultButton/DefaultButton'
import logo_img from '../../../app/images/svg/planet.svg'
import '../../../i18n'
import { useTranslation } from 'react-i18next';

export default function HeroSection() {
    const { t, i18n } = useTranslation();

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };
    
    return(
        <>
            <section className="home-page-hero-section">

                <div className="home-page-hero-section-black"></div>

                <div className="home-page-hero-section-text-container">

                    <div className="home-page-hero-section-text-item home-page-hero-section-text-item-left">
                        <h1>Решаем вопросы связанные с отсрочкой, иммиграцией или полным освобождением от службы в рядах Украинской армии.</h1>

                        <p>Огромное количество людей не разделяющих военное решение конфликта обратившись к нам, давно живут в странах Европы или остаются с белым билетом на территории Украины - в недосигаемости ТЦК.</p>

                        <DefaultButton text='Выбрать программу' url='/our-programs'/>
                    </div>

                    <div className="home-page-hero-section-text-item home-page-hero-section-text-item-right">
                        <img src={logo_img} alt="" />
                        <div className="home-page-hero-section-text-item-text-block">
                            <h1>
                                <img src={logo_img} alt="" />
                                98% одобрений
                            </h1>
                            <p>Остальные 2% получили одобрение через план Б</p>
                        </div>
                    </div>

                </div>

            </section>
        </>
    )
}
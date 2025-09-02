import './ServicesList.css'
import React, { useEffect, useRef } from "react";

import img from '../../../app/images/svg/cntrs.svg'
import briefcase from '../../../app/images/svg/briefcase.svg'
import wallet from '../../../app/images/svg/wallet.svg'
import code from '../../../app/images/svg/code.svg'
import cam from '../../../app/images/svg/cam.svg'

import TextBlock from '../../../shared/HomePage/TextBlock/TextBlock'
import DefaultButton from '../../../shared/DefaultButton/DefaultButton'

const text1 = [
    "То, что ТЦК ловят больных и инвалидов, которых затем украинские медкомиссии признают годными к военной службе и отправляют на убой в окопы, — это уже ежедневная рутина для Украины.",
    "Но иногда людоловам этого мало, и они буквально пытаются сделать инвалидами тех, на кого охотятся."
]

const text2 = [
    "Считается, что люди для сотрудников ТЦК — это галочки в отчёте. Все новости связанные с ТЦК, властью и командованием армии Украины говорят о том, что украинцы для них скорее мусор, который можно выбросить.",
    "В апреле 2025 года сотрудники ТЦК мобилизовали мужчину, а когда у него начался эпилептический припадок, просто выкинули на улицу.",
    "P.S. Выжить ему удалось лишь благодаря прохожим и прибывшей бригаде скорой помощи."
]

const text3 = [
    "В мае в сеть попали фотографии мужчины, которого в военкомате Киева приковали специальными стяжками к батарее прямо в туалете.",
    "В киевском ТЦК в итоге признали достоверность снимков. Примечательно, что на некоторых кадрах видна собака — авторы фото утверждают, что другого мужчину мобилизовали вместе с домашним питомцем.",
    "Стоит отметить, что приковывание к батарее отловленных в рамках мобилизации — далеко не новая практика на Украине.",
    "Но место, где оказался схваченный сотрудниками ТЦК, добавляет остроты ситуации."
]

const text4 = [
    "Абсолютно каждый человек имеет право свободно жить, и никто не может быть намеренно лишен жизни!",
    "Никто не должен содержаться в рабстве или подневольном состоянии, а также не должен быть принужден к принудительному или обязательному труду, тем более если речь идет о воинской службе.",
    "Воевать должны мотивированные профессионалы, а не бусифицированные граждане не желающие разменивать свою жизнь на преступные законы связанные с насильным удержанием граждан в стране."
]

export default function ServicesList() {

    return (
        <>
            <section className="home-page-services-list">

                <div className="home-page-services-list-title">
                    <div className="home-page-services-list-title-left">
                        <h1 className='scroll-trigger-effect' >Как Украинские власти набирают военный контингент</h1>
                    </div>
                    <div className="home-page-services-list-title-right">
                        <h2>Мирный народ не должен страдать.</h2>
                        <div className="home-page-services-list-title-right-text-conteiner">
                            {/* <img src={img} alt="" /> */}

                            <p>❝ — Представь себе, если бы цари бились сами. Вот было бы зрелище! ❞</p>
                        </div>
                    </div>
                </div>

                <div className="home-page-services-list-content">
                    <div className="home-page-services-list-content-grid">
                        <TextBlock img={briefcase} text={text1} title='Живой? Здоровый? Главное — пойманный!' white={true} />
                        <TextBlock img={wallet} text={text2} title='Девиз ТЦК: «Не человек, а мусор»' white={false} />
                        <TextBlock img={code} text={text3} title='Не согласных приковывают к батареям...' white={false} />
                        <TextBlock img={cam} text={text4} title='Свобода' white={true} />
                    </div>

                    <DefaultButton text='Выбрать программу' url='/our-programs' />
                </div>
            </section>
        </>
    )
}
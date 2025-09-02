import './StatisticBlock.css'
import BgImageTextBlock from '../../../shared/HomePage/BgImageTextBlock/BgImageTextBlock'
import SectionTitle from '../../../shared/SectionTitle/SectionTitle'

const text1 = 'Если, выполняя наши рекомендации, у вас не получилось покинуть страну или вы были призваны на военную службу, мы гарантируем выплату в размере 250тыс грн.'
const text2 = 'Нашими клиентами стало больше 8тыс человек, и в нашей базе знаний столько же юридических и врачебных ситуаций. Для нас нет сложных случаев, потому что за годы с начала войны мы разработали и проверили решения для любых сценариев, включая:  знания наших инструкторов удобных и быстрых маршрутов по пересечению сухопутной границы.'
const text3 = 'Если вам нужна услуга связанная с отсрочкой либо же признанием вас не годного для воинского учета на конкретный или не определенный срок (с последующим прибыванием на территории Украины), то мы постараемся достичь минимального вашего вовлечения в процесс, не отвлекая вас от работы, учебы и самого главного - жизни.'
const text4 = "это больше чем просто помощь несогласным с действующим  режимом и властью в Украине. Мы мыслим стратегически и помогаем своим клиентам даже за пределами Украины."

const punct1 = [
    'Мы можем помочь вам быстро и в кратчайшие сроки покинуть страну, получить отсрочку или бронь и не важно где вы находитесь, у себя дома или уже в части.'
]

const punct2 = [
    'Предоставляем точные маршруты для перехода границы, 24/7 мы на связи с клиентом, отвечаем даже на самые очевидные вопросы, обеспечиваем и гарантируем полную анонимность ваших данных и личности в целом.'
]

const punct3 = [
    'Помогаем после предоставления отсрочки, брони или безопасной иммиграции всегда быть на связи с родными и близкими, а в случае переезда в другую страну, можем оказать помощь в получении гражданства или ВНЖ вашей семье в той стране куда вы переедете.'
]

export default function StatisticBlock() {
    return(
        <>
            <section className="statistic-home-page">
                <SectionTitle 
                    title1='Гарантия денежной компенсации' 
                    title2=''
                    mini_title1='Получить гарантийную выплату'
                    mini_title2='могут ваши ближайшие родственники или вы.'
                />

                <div className="statistic-home-page-main-container">

                    <div className="statistic-home-page-main-container-photo-blocks">

                        <BgImageTextBlock title='Страховая выплата' text={text1}  image_class='statisctic-background-image1' />
                        <BgImageTextBlock title='Экспертная команда' text={text2} image_class='statisctic-background-image2' />
                        <BgImageTextBlock title='Гарантия минимального вовлечения' text={text3} image_class='statisctic-background-image3' />

                    </div>

                    <div className="statistic-home-page-main-container-mini-blocks">
                        <BgImageTextBlock without_img={true} white={true} title='STATUM -' text={text4}/>
                        <BgImageTextBlock without_img={true} white={false} mini_title='Помогаем даже когда уже кажется что выхода нет:' punct={punct1} />
                        <BgImageTextBlock without_img={true} white={false} mini_title='Переживаем за каждого клиента:' punct={punct2} />
                        <BgImageTextBlock without_img={true} white={false} mini_title='STATUM не разделяет семьи:' punct={punct3} />
                    </div>
                    
                </div>
            </section>
        </>
    )
}
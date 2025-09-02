import './MiniAbout.css'
import SectionTitle from '../../../shared/SectionTitle/SectionTitle'
import MiniAboutTextBlock from '../../../shared/HomePage/MiniAboutTextBlock/MiniAboutTextBlock'
import img from '../../../app/images/svg/logo.svg'

const parag1 = [
    'Старший сын Виталия Кличко — 23-летний Егор-Даниэль — обучается в Лондоне в школе экономики, а Максим Кличко в прошлом году поступил в частную школу в США.',
    'В это же время их отец вместе с другими политиками агитируют обычных граждан жертвовать «все для фронта, все для победы» и вступать в ряды ВСУ.',
    'Сам Виталий Кличко отмечал, что война не касается его детей — у них уже есть гражданство Германии.',
]

const parag2 = [
    ' Двое детей Дмитрия Гордона подпадают под призыв ВСУ, но украинский журналист сказал, что один тяжело болеет, а два других живут в США.',
    ' Сын спикера Верховной Рады Руслана Стефанчука, который выехал с территории Украины, несмотря на запрет для мужчин 18-60 лет. Почему им можно а вам нет?',
]

const parag3 = [
    'Выделяется и мэр Львова Андрей Садовый, сын которого закончил бизнес-школу в Великобритании и начал работать там же маркетологом.',
    'Сам политик в 2022 году призывал сделать систему, как в Израиле, где в армии служат не только мужчины, но и женщины.'
]

export default function MiniAbout(props) {
    return(
        <>
            <section className="mini-about-home-page">

                <SectionTitle 
                    title1='Калосальное неравенство ' 
                    title2='и потребительское отношение к народу!'
                    mini_title1='Военное положение в стране - не для всех !'
                    mini_title2=''
                />
                
                <div className="mini-about-home-page-content">

                    <div className="mini-about-home-page-content-block-content">

                        <MiniAboutTextBlock title=''  parag={parag1}/>
                        <MiniAboutTextBlock title='' parag={parag2}/>
                        <MiniAboutTextBlock title='' parag={parag3}/>

                    </div>

                    <div className="mini-about-home-page-content-footer-block">

                        <h1>Вся информация взята с открытых источников, <br /> мы не навязываем свою точку зрения, <br /> правда не всегда приятная.</h1>

                        <p>
                            <span>Решите свою проблему вместе с</span>
                            <img src={img} alt="" />
                        </p>

                    </div>

                </div>
            </section>
        </>
    )
}
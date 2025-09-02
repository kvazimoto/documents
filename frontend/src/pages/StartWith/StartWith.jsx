import './StartWith.css'
import DefaultSkeepSize from '../../shared/DefaultSkeepSize/DefaultSkeepSize'
import DefaultHeroSection from '../../shared/DefaultHeroSection/DefaultHeroSection'
import QuestionsForm from '../../shared/QuestionsForm/QuestionsForm'

export default function StartWith() {
    return(
        <>
            <title>С чего начать?</title>
            <DefaultSkeepSize />
            <DefaultHeroSection 
                title1='Небольшое тестирование которое позволит поближе рассмотреть вашу ситуацию'
                title2='Наши специалисты получат ваши ответы по тестированию и свяжутся с вами в ближайшее время.'
            />
            <section className="start-with-form-section">
                <QuestionsForm />
            </section>
        </>
    )
}
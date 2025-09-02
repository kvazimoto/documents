import './OurProgramm.css'
import DefaultSkeepSize from '../../shared/DefaultSkeepSize/DefaultSkeepSize'
import DefaultHeroSection from '../../shared/DefaultHeroSection/DefaultHeroSection'
import ProgramsList from '../../shared/OurProgram/ProgramsList/ProgramsList'

const OurProgramm = () => {
    return(
        <>
            <title>Наши программы</title>
            <DefaultSkeepSize />
            <DefaultHeroSection 
                title1='Иммиграционные решения для переезда, бизнеса или статуса ВНЖ в Европе'
                title2='Найдите идеальную программу за 2 минуты и забронируйте подробную консультацию с иммиграционным специалистом'
                variation2={true}
            />
            <ProgramsList />
            
        </>
    )
}

export default OurProgramm
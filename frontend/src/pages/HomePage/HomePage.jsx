import './HomePage.css'
import HeroSection from "../../widgets/HomePageWigets/HeroSection/HeroSection"
import ServicesList from "../../widgets/HomePageWigets/ServicesList/ServicesList"
import StatisticBlock from '../../widgets/HomePageWigets/StatisticBlock/StatisticBlock'
import MiniAbout from '../../widgets/HomePageWigets/MiniAbout/MiniAbout'
import HelpForWork from '../../widgets/HomePageWigets/HelpForWork/HelpForWork'

export default function HomePage() {
    return(
        <>
            <title>Statum</title>
            <section className="pages-container">
                <HeroSection />
                <ServicesList />
                <StatisticBlock />
                <MiniAbout />
                <HelpForWork />
            </section>
        </>
    )
}
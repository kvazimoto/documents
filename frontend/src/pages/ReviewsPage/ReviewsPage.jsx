import './ReviewsPage.css'
import DefaultSkeepSize from '../../shared/DefaultSkeepSize/DefaultSkeepSize'
import DefaultHeroSection from '../../shared/DefaultHeroSection/DefaultHeroSection'
import ReviewsPageSlider from '../../widgets/ReviewsPageWidgets/ReviewsPageSlider/ReviewsPageSlider'

const ReviewsPage = () => {
    return(
        <>
            <title>Отзывы</title>
            <DefaultSkeepSize />
            <DefaultHeroSection 
                title1='Истории наших клиентов: причина доверия №1' 
                title2='Более 4тыс человек благополучно пересекли границу и проживают на территориях стран ЕС с постоянным или временным гражданством, еще около 3тыс человек находятся в Украине с официальной отсрочкой от мобилизации'
            />
            <ReviewsPageSlider />
            
        </>
    )
}

export default ReviewsPage
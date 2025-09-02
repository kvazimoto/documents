import './ReviewsPageSlider.css'
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import instance from "../../../api/axios";
import ReviewsPageSliderItem from "../../../shared/ReviewsPageSliderItem/ReviewsPageSliderItem";
import DefaultButton from '../../../shared/DefaultButton/DefaultButton';

const ReviewsPageSlider = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        instance.get("/reviews/")
            .then(res => setReviews(res.data))
            .catch(err => console.error(err));
    }, []);

    return (
        <section className="reviews-page-slider default-sections-properties">
            <Swiper
                slidesPerView={4.1}
                spaceBetween={20}
                grabCursor={true}
                modules={[Navigation, Pagination]}
                className='reviews-page-slider-swiper'
                breakpoints={{
                    320: {  // мобильные
                        slidesPerView: 1.1,
                        spaceBetween: 10,
                    },
                    768: {  // планшеты
                        slidesPerView: 2.5,
                        spaceBetween: 15,
                    },
                    1024: { // десктоп
                        slidesPerView: 3.5,
                        spaceBetween: 20,
                    },
                    1440: { // большие экраны
                        slidesPerView: 4.1,
                        spaceBetween: 20,
                    },
                }}
            >
                {reviews.map((review) => (
                    <SwiperSlide key={review.id}>
                        <ReviewsPageSliderItem review={review} />
                    </SwiperSlide>
                ))}
            </Swiper>

            <DefaultButton cls='margit-top-for-btn' text='Оставить отзыв' url='https://t.me/statum_support' />

        </section>
    );
};

export default ReviewsPageSlider;

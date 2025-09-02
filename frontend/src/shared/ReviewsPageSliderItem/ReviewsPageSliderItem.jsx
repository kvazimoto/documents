import { useRef, useState } from "react";
import "./ReviewsPageSliderItem.css";

const ReviewsPageSliderItem = ({ review }) => {
    const videoRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);

    const togglePlay = () => {
        if (!videoRef.current) return;

        if (isPlaying) {
            videoRef.current.pause();
            setIsPlaying(false);
        } else {
            videoRef.current.play();
            setIsPlaying(true);
        }
    };

    return (
        <div className="reviews-page-review-card">
            {review.video_url ? (
                <div className="reviews-page-video-wrapper" onClick={togglePlay}>
                    <video
                        ref={videoRef}
                        src={review.video_url}
                        className="reviews-page-review-video"
                        playsInline
                        loop
                    />
                    {!isPlaying && (
                        <div className="reviews-page-custom-play-btn">
                            ▶
                        </div>
                    )}
                </div>
            ) : (
                <div className="reviews-page-review-text">
                    <p>{review.text}</p>
                    <span className="reviews-page-review-author">— {review.author}</span>
                </div>
            )}
        </div>
    );
};

export default ReviewsPageSliderItem;

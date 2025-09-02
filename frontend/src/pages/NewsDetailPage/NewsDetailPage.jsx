import './NewsDetailPage.css'
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getNewsDetail } from "../../api/news";
import DefaultSkeepSize from "../../shared/DefaultSkeepSize/DefaultSkeepSize";

const NewsDetailPage = () => {
    const { id } = useParams();
    const [news, setNews] = useState(null);

    useEffect(() => {
        getNewsDetail(id).then(res => setNews(res.data));
    }, [id]);

    if (!news) return <><DefaultSkeepSize /><p>Загрузка...</p></>;

    return (
        <>
            <title>{news.title}</title>
            <DefaultSkeepSize />
            <section className="detail-news-section default-sections-properties detail-news-section-media">
                <div className="detail-news-section-news-detail">

                    <div className="detail-news-section-news-detail-title">
                        <h1>{news.title}</h1>
                        <div className="detail-news-section-news-detail-title-tag-date">
                            <p>{new Date(news.created_at).toLocaleDateString()}</p>
                            <p>
                                {news.tags.map(tag => (
                                    <span key={tag.id}>{tag.name}</span>
                                ))}
                            </p>
                        </div>
                    </div>
                    
                    <img src={news.img} alt={news.title} />
                    <p>{news.mini_description}</p>

                    {news.paragraphs.map(par => (
                        <div key={par.id} className="news-paragraph">
                            <h2>{par.title}</h2>
                            {par.point.map(pt => (
                                <p key={pt.id}>{pt.text}</p>
                            ))}
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
};

export default NewsDetailPage;

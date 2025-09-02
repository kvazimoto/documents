import './BlogPageNewsList.css'
import { useEffect, useState } from "react";
import { getNews, getTags } from "../../../api/news";
import BlogPageNewsItem from '../BlogPageNewsItem/BlogPageNewsItem'

const BlogPageNewsList = () => {
    const [tags, setTags] = useState([]);
    const [activeTag, setActiveTag] = useState("all");
    const [news, setNews] = useState([]);

    useEffect(() => {
        getTags().then(res => setTags(res.data));
    }, []);

    useEffect(() => {
        getNews(activeTag).then(res => setNews(res.data));
    }, [activeTag]);

    return (
        <section className="blog-page-section-news-container">
            <div className="blog-page-section-news-container-tags-list">
                <p 
                    className={activeTag === "all" ? "p-active" : ""} 
                    onClick={() => setActiveTag("all")}
                >
                    Все
                </p>
                {tags.map(tag => (
                    <p 
                        key={tag.id} 
                        className={activeTag === tag.slug ? "p-active" : ""} 
                        onClick={() => setActiveTag(tag.slug)}
                    >
                        {tag.name}
                    </p>
                ))}
            </div>

            <div className="blog-page-section-news-container-list">
                {news.map(item => (
                    <BlogPageNewsItem key={item.id} item={item} />
                ))}
            </div>
        </section>
    );
};

export default BlogPageNewsList;
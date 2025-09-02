import './BlogPageNewsItem.css'
import { Link } from "react-router-dom";


const BlogPageNewsItem = ({ item }) => {
    return (
        <div className="blog-page-section-news-container-item">
            <Link className="blog-page-section-news-container-item-img-con" to={`/news/${item.id}`}>
                <img src={item.img} alt={item.title} />
            </Link>

            <div className="blog-page-section-news-container-item-tags">
                {item.tags.map(tag => (
                    <span key={tag.id}>{tag.name}</span>
                ))}
            </div>

            <h1 className="blog-page-section-news-container-item-title">
                <Link to={`/news/${item.id}`}>
                    {item.title}
                </Link>
            </h1>

            <p className="blog-page-section-news-container-item-mini-description">
                {item.mini_description}
            </p>

            <p className="blog-page-section-news-container-item-date">
                {new Date(item.created_at).toLocaleDateString()}
            </p>
        </div>
    );
};

export default BlogPageNewsItem;
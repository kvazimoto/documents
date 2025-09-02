import './BlogPage.css'
import DefaultSkeepSize from '../../shared/DefaultSkeepSize/DefaultSkeepSize'
import BlogPageNewsList from '../../widgets/BlogPageWigets/BlogPageNewsList/BlogPageNewsList'
import DefaultHeroSection from '../../shared/DefaultHeroSection/DefaultHeroSection'

const BlogPage = () => {
    return(
        <>
            <title>Блог</title>
            <DefaultSkeepSize />
            <DefaultHeroSection 
                title1='Блог про иммиграцию' 
                title2='Тут вы найдёте свежие истории о жизни заграницей, гайды, обновления законодательства стран, новости и кейсы.'
            />
            <section className="blog-page-section default-sections-properties blog-page-section-media">             
                <BlogPageNewsList />
            </section>
        </>
    )
}

export default BlogPage
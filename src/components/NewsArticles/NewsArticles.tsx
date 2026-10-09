import ArticleGrid from './ArticleGrid'
import SectionHeading from './SectionHeading'

function NewsArticles() {
  return (
    <section
      aria-labelledby="news-heading"
      className="mx-auto w-[calc(100%-1.5rem)] max-w-[1600px] px-5 py-16 sm:w-[calc(100%-2rem)] sm:px-8 sm:py-20 lg:px-12 lg:py-24"
      id="news"
    >
      <SectionHeading />
      <ArticleGrid />
    </section>
  )
}

export default NewsArticles

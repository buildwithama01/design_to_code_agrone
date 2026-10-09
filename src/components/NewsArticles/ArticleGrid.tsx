import news1Image from '../../assets/images/news1.jpg'
import news2Image from '../../assets/images/news2.jpg'
import news3Image from '../../assets/images/news3.jpg'
import ArticleCard from './ArticleCard'

const articles = [
  {
    title: 'How to Remove Prop Guards & Change Propellers',
    category: 'Guideline',
    image: news1Image,
    imageAlt: 'Agricultural drone flying above crop rows',
    arrowBackgroundColor: '#8bc652',
  },
  {
    title: 'The Drone Racing League Lineup of Pilots for the 2025',
    category: 'Events',
    image: news2Image,
    imageAlt: 'Farmers operating a drone in a field',
    arrowBackgroundColor: '#f5ebe2',
  },
  {
    title: 'Lexar Silver Plus 256GB Micro SD Card Review',
    category: 'Technical',
    image: news3Image,
    imageAlt: 'Agricultural drone spraying crops',
    arrowBackgroundColor: '#f5ebe2',
  },
]

function ArticleGrid() {
  return (
    <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 lg:gap-8">
      {articles.map((article) => (
        <ArticleCard key={article.title} {...article} />
      ))}
    </div>
  )
}

export default ArticleGrid

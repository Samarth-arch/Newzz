import React, { useEffect,useState } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner'
import InfiniteScroll from 'react-infinite-scroll-component';

const News = (props) => {
    const [loading, setloading] = useState(true)
    const [articles, setarticles] = useState([])
    const [page, setpage] = useState(1)
    const [totalResults, settotalResults] = useState(0)

const UpdateNews = async () => {
    props.setProgress(10);
    setloading(true)
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=71c9b65128fe476dbd4ce457021ac9f6&page=${page}&pagesize=${props.pagesize}`
    let data = await fetch(url)
    props.setProgress(40);
    let parseddata = await data.json();
    props.setProgress(70);
    setloading(false)
    setpage(page + 1)
    setarticles(parseddata.articles)
    props.setProgress(100);
}
useEffect(() => {
    UpdateNews()
    document.title = `NewsExpresso-${props.category}`

}, [])

// const handleNext = async () => {
//     if (!(page + 1 > Math.ceil(totalResults / props.pagesize))) {
//         setpage(page + 1)
//         UpdateNews();
//     }

// }
// const handlePrevious = async () => {
//     setpage(page - 1)
//     UpdateNews();
// }
const fetchMoreData = async () => {
    setpage(page + 1)
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=71c9b65128fe476dbd4ce457021ac9f6&page=${page+1}&pagesize=${props.pagesize}`
    let data = await fetch(url)
    let parseddata = await data.json();
    setarticles(articles.concat(parseddata.articles))
    setloading(false)
    settotalResults(parseddata.totalResults)
}

return (
    <div className="container">
        <h1 className="text-center" style={{marginTop:'90px'}}>Top {props.category} HeadLines</h1>
        {loading && <Spinner />}
        <InfiniteScroll
            dataLength={articles.length}
            next={fetchMoreData}
            hasMore={articles.length !== totalResults}
            loader={<Spinner />} >
            <div className="row my-5">
                {articles.map((element) => {
                    return <div className="col md-4" key={element.url}>
                        <       NewsItem title={element.title} description={element.description} ImageUrl={element.urlToImage} newsUrl={element.url} author={element.author} publishedAt={element.publishedAt} source={element.source.name} />
                    </div>
                })
                }
            </div>
        </InfiniteScroll>
        {/* {!loading && <div className="container d-flex justify-content-between">
                    <button type="button" disabled={page <= 1} className="btn btn-dark" onClick={handlePrevious}>&larr; Previous</button>
                    <button type="button" disabled={page + 1 > Math.ceil(totalResults / props.pagesize)} className="btn btn-dark" onClick={handleNext}>Next &rarr;</button>
                </div>} */}
    </div>
)

            }

export default News
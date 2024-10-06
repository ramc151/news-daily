import React, { useState } from 'react'
import NewsItem from './NewsItem';
import PropTypes from 'prop-types'
import Spinner from './Spinner';
import InfiniteScroll from 'react-infinite-scroll-component';
import { useEffect } from 'react';

const News = (props) => {
    const [articles, setArticles] = useState([])
    const [loading, setLoading] = useState(false)
    const [page, setPage] = useState(1)
    const [totalResults, settotalResults] = useState(0)

    const capitalizeFirst = str => {
        return str.charAt(0).toUpperCase() + str.slice(1);
    };

    // let url = 'https://newsapi.org/v2/top-headlines?country=in&apiKey=9f6fbab7d34a4d42a88117128c2bf0fa'

    // 928f443456644fda8588720659361c72

    const updateNews = async () => {
        props.setProgress(10)
        let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${props.apikey}&category=${props.category}&page=${page}&pageSize=${props.pageSize}`;
        setLoading(true)
        let data = await fetch(url)
        props.setProgress(30)
        let parsedata = await data.json();
        props.setProgress(70)
        setArticles(parsedata.articles)
        settotalResults(parsedata.totalResults)
        setLoading(false)
        props.setProgress(100)
    }

    useEffect(() => {
        document.title = `NewsTree - ${capitalizeFirst(props.category)}`
        updateNews();
        // eslint-disable-next-line
    }, [])

    const fetchMoredata = async () => {
        let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${props.apikey}&category=${props.category}&page=${page + 1}&pageSize=${props.pageSize}`;
        setPage(page + 1)
        let data = await fetch(url)
        let parsedata = await data.json();
        setArticles(articles.concat(parsedata.articles))
        settotalResults(parsedata.totalResults)
    }

    return (
        <div className="container">
            <h2 className='text-center' style={{ margin: '20px 0', marginTop: '80px' }}>NewsTree - Top {capitalizeFirst(props.category)} Headlines</h2>
            {loading && <Spinner />}
            <InfiniteScroll
                dataLength={articles.length}
                next={fetchMoredata}
                hasMore={articles.length !== totalResults}
                loader={<Spinner />}>
                <div className="container">
                    <div className="row">
                        {articles.map((element) => {
                            return <div className="col-md-4" key={element.url}>
                                <NewsItem title={element.title} description={element.description} image={element.urlToImage} newurl={element.url} author={element.author} date={element.publishedAt} />
                            </div>
                        })}
                    </div>
                </div>
            </InfiniteScroll>
        </div>
    )

}

News.defaultProps = {
    pageSize: 5,
    country: 'us'
}
News.propTypes = {
    pageSize: PropTypes.number,
    country: PropTypes.string,
}

export default News
import React from 'react'

const NewsItem = (props) => {

    let { title, description, image, newurl, author, date } = props
    return (
        <div className="container">
            <div className="card my-3">
                <img className="card-img-top" src={image ? image : "https://images.indianexpress.com/2022/09/dengue1.jpg"} alt="Card  cap" />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}</p>
                    <p className="card-text"><small className="text-muted">By {author ? author : "Unknown"} on {new Date(date).toGMTString()}</small></p>
                    <a href={newurl} rel="noreferrer" target="_blank" className="btn btn-sm btn-dark">Read More</a>
                </div>
            </div>
        </div>
    )

}

export default NewsItem
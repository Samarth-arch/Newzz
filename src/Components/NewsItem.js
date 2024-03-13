import React from 'react'

const NewsItem=(props)=> {
    
        let {title,description,ImageUrl,newsUrl,author,publishedAt,source}=props
        return (
            <div>
                <div className="card" style={{width: "18rem"}}>
                <span className="position-absolute top-0  translate-middle badge rounded-pill bg-danger" style={{left:'90%',zIndex:'1'}}>{source}</span>
                    <img src={!ImageUrl?"https://img.currency.com/imgs/articles/834xx/shutterstock_1016256871.jpg":ImageUrl} className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">{title}...</h5>
                            <p className="card-text">{description}</p>
                            <p className="card-text"><small className='text-muted'>By {author?author:"Unknown"} on {publishedAt}</small></p>
                            <a href={newsUrl}  target="_blank" rel="noreferrer" className="btn btn-dark" >Detialed News</a>
                         </div>
                </div>
            </div>
        )
   
}

export default NewsItem

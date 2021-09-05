import React from 'react'

const  NewsItem = (props)=>  {
        let {title,description,imageUrl,newsUrl,author,date,source} = props;
        return (
            <div>
                <div className="card">
                <div style={{
                            display:"flex",
                            justifyContent:"flex-end",
                            position:"absolute",
                            right:"0"
                        }}>
                    <span className="badge rounded-pill bg-danger">{source}</span>
                        </div>
                    <img src={!imageUrl?"https://t4.ftcdn.net/jpg/01/95/73/03/360_F_195730369_Fi6XI2ORrPgnxtZ000SqW5lY6wlNXW5d.jpg":imageUrl} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}... </h5>
                        <p className="card-text">{description}</p>
                        <p className="card-text"><small className="text-muted">By {!author?"Unknown":author} on {new Date(date).toGMTString()}</small></p>
                        <a href={newsUrl} target="_blank" className="btn btn-sm btn-primary">Read More</a>
                    </div>
                </div>
            </div>
        )
    
}

export default NewsItem

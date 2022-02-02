import React, { Component } from 'react';

export class Newsitem extends Component {
    render() {
        let { title, description, urlToImage, newsUrl, date, author, source } = this.props;
        return (
            <div className='my-3'>
                <div className="card">
                <span class="position-absolute top-0  translate-middle badge rounded-pill bg-danger"style={{left:'90%',zindex:'1'}}>
                            {source}</span>
                    <img src={!urlToImage?"https://www.howtogeek.com/wp-content/uploads/2022/01/android-close-tabs.png?height=200p&trim=2,2,2,2" : urlToImage} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}...</h5>
                        <p className="card-text">{description}...</p>
                        <p className="card-text"><small className="text-muted">By {!author ? "Unknown" : author} on {new Date(date).toGMTString()}</small></p>
                        <a rel="noreferror" href={newsUrl} className="btn btn-sm btn-success">Read More</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default (Newsitem);

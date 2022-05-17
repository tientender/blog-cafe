import React from 'react';
import { useParams } from 'react-router-dom';
import BlogData from './BlogData.json';
import BlogRelated from './BlogRelated';
function BlogDetails() {
    const param = useParams();
    var count = 1;
    return (
        <div>
            <div>
                <section className="page-section">
                    {
                        BlogData.map((value, key) => {
                            if (value.id === parseInt(param.id)) {
                                return (
                                    <div className="jumbotron jumbotron-fluid" key={key}>
                                        <div className="container" >
                                            <h1 className="display-4 mb-5">{value.blogTitle}</h1>
                                            <img className="mb-5" src={value.blogPicture} alt="" style={{ display: 'block', marginLeft: 'auto', marginRight: 'auto' }} />
                                            <b style={{ fontSize: '40px' }}>{value.blogQuote}</b>
                                            <p className="lead">{value.blogContent}</p>
                                            <em>{value.blogAuthor}</em>
                                        </div>
                                    </div>
                                )
                            }
                            return true;
                        })
                    }
                </section>
                <section className="page-section cta">
                    <div className="container">
                        <div className="card-body text-center">
                            <h5 className="card-title">Related blogs</h5>
                        </div>
                        <div className="row">
                            <div className="col-12">
                                <div className="card-deck">
                                    {
                                        BlogData.map((value, key) => {
                                            if (value.id !== parseInt(param.id)) {
                                                if (count <= 4) {
                                                    count++
                                                    return (
                                                        <BlogRelated
                                                            key={key}
                                                            blogId={value.id}
                                                            blogPicture={value.blogPicture}
                                                            blogTitle={value.blogTitle}
                                                            blogQuote={value.blogQuote}
                                                            blogAuthor={value.blogAuthor}
                                                        />
                                                    )
                                                }
                                            }
                                            return true;
                                        })
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

        </div>
    );
}


export default BlogDetails;
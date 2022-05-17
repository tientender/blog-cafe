import React, { Component } from 'react';
import BlogItem from './BlogItem';
import BlogData from './BlogData.json';

class Blog extends Component {
    render() {
        return (
            <div>
                <section className="page-section cta">
                    {
                        BlogData.map((value, key) => {
                            return (
                                <BlogItem
                                    key={key}
                                    blogId={value.id}
                                    blogPicture={value.blogPicture}
                                    blogTitle={value.blogTitle}
                                    blogQuote={value.blogQuote}
                                    blogAuthor={value.blogAuthor}
                                />
                            )
                        })
                    }
                    
                </section>

            </div>
        );
    }
}

export default Blog;
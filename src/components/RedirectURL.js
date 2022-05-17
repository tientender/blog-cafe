import React, { Component } from 'react';
import { Route, Routes, Navigate} from 'react-router-dom';
import Products from './Products';
import Store from './Store';
import Home from './Home';
import About from './About';
import Blog from './Blog';
import BlogDetails from './BlogDetails';
import Contact from './Contact';

class RedirectURL extends Component {
    render() {

        return (
            <div>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/blog' element={<Blog />} />
                    <Route path='/detailsblog/:slug.:id' element={<BlogDetails />} />
                    <Route path='/about' element={<About />} />
                    <Route path='/products' element={<Products />} />
                    <Route path='/store' element={<Store />} />
                    <Route path='/contact' element={<Contact />} />
                    <Route path='*' element={<Navigate replace to="/" />} />
                </Routes>
            </div>
        );
    }
}

export default RedirectURL;
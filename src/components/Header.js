import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <div>
                <header>
                    <h1 className="site-heading text-center text-faded d-none d-lg-block">
                        <span className="site-heading-upper text-primary mb-3">CaFé Time</span>
                        <span className="site-heading-lower">Let's make your day special!</span>
                    </h1>
                </header>

            </div>
        );
    }
}

export default Header;
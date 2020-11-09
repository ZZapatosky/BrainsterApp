import React, { Component } from 'react';
import Header from './Header';
import Card from './Card';
import Footer from './Footer';



class LandingPage extends Component {
    render() {
        return (
            <div >
                <Header />
                <Card />
                <Footer />
            </div>
        );
    }
}
export default LandingPage;

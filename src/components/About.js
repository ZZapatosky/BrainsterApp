import React, { Component } from 'react';
import aboutImg from './aboutImg.png';
import Footer from "./Footer"
import { useMediaQuery } from 'react-responsive'


const Mobile = ({ children }) => {
    const isMobile = useMediaQuery({ maxWidth: 767 })
    return isMobile ? children : null
}
const Desktop = ({ children }) => {
    const isDesktop = useMediaQuery({ minWidth: 992 })
    return isDesktop ? children : null
}



class About extends Component {
    render() {
        return (
            <div>
                <Mobile>
                    <header className=" aboutImg justify-content-center" style={{ marginTop: "-252px" }} >
                        <img src={aboutImg} alt="" style={{ width: "100%", height: "100%" }}></img>
                    </header>
                    <h1 className=" text-center">За нас</h1>
                    <div className="container text-center">
                        <h3>Brainster организира курсеви за Програмирање, Маркетинг, Бизнис и Дизајн.</h3>
                        <p>Brainster е иновативна платформа за едукација каде можеш да научиш практични вештини за трансформација на кариерата. Нашата специјалност е организирање на курсеви, академии, кариерна трансформација и поврзување на талентите со иновативните компании.
                        Во изминатите 2 години Brainster реализираше повеќе од 250 курсеви преку кои 2500 учесници се стекнаа со нови вештини и стигнаа чекор поблиску до кариерата која ја посакуваат.
                        Brainster ти овозможува активно да учествуваш во градењето на локалната 2.0 заедница, да се вмрежиш со луѓе со слични интереси, да креираш, да го споделуваш твоето знаење и да учиш од другите.
                    </p>
                    </div>
                    <Footer />
                </Mobile>

                <Desktop>
                    <header className=" aboutImg justify-content-center" style={{ marginTop: "-252px" }} >
                        <img src={aboutImg} alt="" style={{ width: "100%", height: "100%" }}></img>
                    </header>
                    <h1 className=" text-center">За нас</h1>
                    <div className="container text-center">
                        <h3>Brainster организира курсеви за Програмирање, Маркетинг, Бизнис и Дизајн.</h3>
                        <p>Brainster е иновативна платформа за едукација каде можеш да научиш практични вештини за трансформација на кариерата. Нашата специјалност е организирање на курсеви, академии, кариерна трансформација и поврзување на талентите со иновативните компании.
                        Во изминатите 2 години Brainster реализираше повеќе од 250 курсеви преку кои 2500 учесници се стекнаа со нови вештини и стигнаа чекор поблиску до кариерата која ја посакуваат.
                        Brainster ти овозможува активно да учествуваш во градењето на локалната 2.0 заедница, да се вмрежиш со луѓе со слични интереси, да креираш, да го споделуваш твоето знаење и да учиш од другите.
                    </p>
                    </div>
                    <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
                    <Footer />
                </Desktop>

            </div>
        );
    }
}
export default About;
import React, { Component } from 'react';
import { connect } from 'react-redux';
import './HomePage.scss'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import HomeHeader from './HomeHeader/HomeHeader';
import Specialty from './Section/Specialty/Specialty';
import MedicalFacility from './Section/MedicalFacility/MedicalFacility';
import OutStandingDoctor from './Section/OutStandingDoctor/OutStandingDoctor';
import Handbook from './Section/Handbook/Handbook';

class HomePage extends Component {

    render() {
        let settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 3,
          };
        return (
            <div>
                <HomeHeader/>
                <Specialty settings={settings}/>
                <MedicalFacility settings={settings}/>
                <OutStandingDoctor settings={settings}/>
                <Handbook settings={settings}/>
            </div>
        );
    }

}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);

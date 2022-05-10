import React, { Component } from "react";
import "./About.scss";
import { connect } from "react-redux";
import { FormattedMessage } from "react-intl";

import { changeLanguageApp } from "../../../../store/actions";

class About extends Component {
  render() {
    return (
      <div className="section-share section-about">
        <div className="section-about-header">
          Truyền thông nói về Bookingcare
        </div>
        <div className="section-about-content">
          <div className="content-left">
            <iframe
              width="100%"
              height="400px"
              src="https://www.youtube.com/embed/147SkAVXEqM?list=PLncHg6Kn2JT6E38Z3kit9Hnif1xC_9VqI"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <div className="content-right">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
            sapien tortor, tristique at pretium at, condimentum eget magna. Ut
            ut mauris non elit bibendum tempus rhoncus eu metus. Vivamus gravida
            at turpis vel auctor. Maecenas consequat nibh id lorem mattis
            mollis. Quisque at scelerisque lorem. Nam nec neque luctus,
            tincidunt orci non, tincidunt ligula. Proin viverra ac justo in
            egestas. Quisque vitae turpis sed urna euismod hendrerit. Praesent
            vel semper lorem. Aenean eu urna sed est porta feugiat condimentum
            sit amet sapien. Donec auctor sit amet ante id fermentum. Duis eget
            pulvinar dolor, nec ornare enim. Suspendisse potenti. Maecenas porta
            quam at tortor tempus dignissim. Mauris ut massa eget ligula egestas
            dignissim. In ullamcorper volutpat justo. Etiam lacinia rhoncus
            nisl, sit amet consequat tortor ultricies nec. Proin at nulla non
            magna porttitor accumsan congue ut tellus. Aliquam erat volutpat.
            Duis eu ante fringilla, ullamcorper velit quis, gravida dolor. Proin
            eget risus lorem. Duis in augue at nisi convallis efficitur eget ac
            dui. Nunc posuere lacus sit amet tellus sodales consectetur. Vivamus
            facilisis turpis id risus consequat eleifend. Duis ullamcorper
            imperdiet lorem, eu gravida tellus viverra ut. Suspendisse placerat,
            sapien quis elementum sagittis, tortor lacus consectetur metus, vel
            tempor mauris elit vel dolor. Suspendisse lorem nibh, condimentum at
            mauris ornare, congue aliquam mauris. Pellentesque venenatis nunc
            vitae commodo semper. Curabitur suscipit lacus lectus, vitae viverra
            enim aliquet quis. Fusce ornare turpis ut ullamcorper posuere.
            Aenean tincidunt maximus lectus, at sollicitudin turpis malesuada
            ut. 
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.user.isLoggedIn,
    language: state.app.language,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    changeLanguageAppRedux: (language) => dispatch(changeLanguageApp(language)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(About);

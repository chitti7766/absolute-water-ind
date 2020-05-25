import React from 'react';
// nodejs library that concatenates classes
import classNames from 'classnames';
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';

// @material-ui/icons

// core components
import Header from 'components/Header/Header.js';
import Footer from 'components/Footer/Footer.js';
import GridContainer from 'components/Grid/GridContainer.js';
import GridItem from 'components/Grid/GridItem.js';
import Button from 'components/CustomButtons/Button.js';
import HeaderLinks from 'components/Header/HeaderLinks.js';
import Parallax from 'components/Parallax/Parallax.js';

import styles from 'assets/jss/nextjs-material-kit/pages/landingPage.js';

// Sections for this page
import ProductSection from 'pages-sections/LandingPage-Sections/ProductSection.js';
import TeamSection from 'pages-sections/LandingPage-Sections/TeamSection.js';
import WorkSection from 'pages-sections/LandingPage-Sections/WorkSection.js';

import Logo from '../assets/img/logo.svg';

const dashboardRoutes = [];

const useStyles = makeStyles(styles);

const companyHeading = {
  fontSize: '3rem',
  fontWeight: 'bold',
  backgroundImage: "url('../assets/img/logo.png')",
};
const companyTag = {
  fontFamily: 'cursive',
};

export default function ContactUs(props) {
  const classes = useStyles();
  const { ...rest } = props;
  return (
    <div>
      <Header
        color="transparent"
        routes={dashboardRoutes}
        brand={
          <div>
            <div style={companyHeading}>
              Absolute&trade;
              <img src={Logo} width={40} height={40} />
            </div>
            <div style={companyTag}>Premium Water</div>
          </div>
        }
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 400,
          color: 'white',
        }}
        {...rest}
      />
      <Parallax
        filter
        responsive
        image={require('assets/img/purification.jpg')}
      >
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
              <h1 className={classes.title}>Purification Process</h1>
              <h4>
                Every landing page needs a small description after the big bold
                title, that{"'"}s why we added this text here. Add here all the
                information that can make you or your product create the first
                impression.
              </h4>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
          <TeamSection />
        </div>
      </div>
      <Footer />
    </div>
  );
}

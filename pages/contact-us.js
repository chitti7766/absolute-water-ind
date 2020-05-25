import React from 'react';
// nodejs library that concatenates classes
import classNames from 'classnames';
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';
// @material-ui/icons
import Camera from '@material-ui/icons/Camera';
import Palette from '@material-ui/icons/Palette';
import Favorite from '@material-ui/icons/Favorite';
// core components
import Header from 'components/Header/Header.js';
import Footer from 'components/Footer/Footer.js';
import Button from 'components/CustomButtons/Button.js';
import GridContainer from 'components/Grid/GridContainer.js';
import GridItem from 'components/Grid/GridItem.js';
import HeaderLinks from 'components/Header/HeaderLinks.js';
import NavPills from 'components/NavPills/NavPills.js';
import Parallax from 'components/Parallax/Parallax.js';

import profile from 'assets/img/faces/christian.jpg';

import studio1 from 'assets/img/examples/studio-1.jpg';
import studio2 from 'assets/img/examples/studio-2.jpg';
import studio3 from 'assets/img/examples/studio-3.jpg';
import studio4 from 'assets/img/examples/studio-4.jpg';
import studio5 from 'assets/img/examples/studio-5.jpg';
import work1 from 'assets/img/examples/olu-eletu.jpg';
import work2 from 'assets/img/examples/clem-onojeghuo.jpg';
import work3 from 'assets/img/examples/cynthia-del-rio.jpg';
import work4 from 'assets/img/examples/mariya-georgieva.jpg';
import work5 from 'assets/img/examples/clem-onojegaw.jpg';

import styles from 'assets/jss/nextjs-material-kit/pages/profilePage.js';

import Logo from '../assets/img/logo.svg';

const useStyles = makeStyles(styles);

const companyHeading = {
  fontSize: '3rem',
  fontWeight: 'bold',
  backgroundImage: "url('../assets/img/logo.png')",
};
const companyTag = {
  fontFamily: 'cursive',
};

const contactUsStyles = {
  height: '30rem',
  padding: '3rem',
  textAlign: 'left',
};

export default function ContactUs(props) {
  const classes = useStyles();
  const { ...rest } = props;
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid,
  );
  const navImageClasses = classNames(classes.imgRounded, classes.imgGallery);
  return (
    <div>
      <Header
        color="transparent"
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
          height: 200,
          color: 'white',
        }}
        {...rest}
      />
      <Parallax small filter image={require('assets/img/profile-bg.jpg')} />
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div style={contactUsStyles}>
          <div className={classes.container}>
            <div className={classes.description}>
              <h3>Contact us</h3>
              <div>Absolute premium water industries</div>
              <div>R.S No 94, Kondaguntur village</div>
              <div>Rajamahendravaram - 533124</div>
              <div>East Godavari District</div>
              <div>Email: absolutepremiumwaterindustries@gmail.com</div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

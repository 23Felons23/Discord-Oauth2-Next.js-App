import React from 'react';
import PropTypes from 'prop-types'
import template from "../public/template";

const Home = props => (
  <div>
      Hello this is the home page !
      {
          !props.children.isLoggedIn && (
              <p><b>You're not logged in yet !</b></p>
          )
      }
      <p>Welcome !</p>
  </div>
);

Home.propTypes = {
    isLoggedIn: PropTypes.bool
};

export default template(Home);

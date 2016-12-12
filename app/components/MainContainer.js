const React = require('react');
const styles = require('../styles');

function MainContainer() {
  <div className="jumbotron col-sm-12 text-center" style={styles.transparentBG}>
    {props.children}
  </div>
}

module.exports = MainContainer

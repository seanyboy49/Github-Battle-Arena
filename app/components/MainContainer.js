const React = require('react');
const styles = require('../styles');

const MainContainer = props => {
  return (
    <div className="jumbotron col-sm-12 text-center" style={styles.transparentBG}>
      {props.children}
    </div>
  )
}

module.exports = MainContainer

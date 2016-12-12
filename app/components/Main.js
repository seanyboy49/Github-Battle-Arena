const React = require('react');
const ReactCSSTransitionGroup = require('react-addons-css-transition-group')
require('../main.css');

class Main extends React.Component{
  render() {
    return (
      <div className='main-container'>
        {this.props.children}
      </div>
    )
  }
}



module.exports = Main;
